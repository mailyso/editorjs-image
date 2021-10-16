import buttonIcon from './svg/button-icon.svg';

/**
 * Class for working with UI:
 *  - rendering base structure
 *  - show/hide preview
 *  - apply tune view
 */
export default class Ui {
  /**
   * @param {object} ui - image tool Ui module
   * @param {object} ui.api - Editor.js API
   * @param {ImageConfig} ui.config - user config
   * @param {Function} ui.onSelectFile - callback for clicks on Select file button
   * @param {boolean} ui.readOnly - read-only mode flag
   * @param {string} ui.loadedLink
   * @param {Function} ui.getOutOfLink
   */
  constructor({ api, config, onSelectFile, readOnly, loadedLink, getOutOfLink }) {
    this.createInputArea = this.createInputArea.bind(this);

    this.api = api;
    this.config = config;
    this.onSelectFile = onSelectFile;
    this.readOnly = readOnly;

    this.getOutofLink = getOutOfLink;

    this.linkState = {
      open: false,
      focused: false,
      data: loadedLink || '',
      stored: loadedLink || '',
      linkError: false,
    };

    this.toggleAddLink = this.toggleAddLink.bind(this);


    this.nodes = {
      wrapper: make('div', [this.CSS.baseClass, this.CSS.wrapper]),
      imageContainer: make('div', [ this.CSS.imageContainer ]),
      fileButton: this.createFileButton(),
      imageEl: undefined,
      imagePreloader: make('div', this.CSS.imagePreloader),
      caption: make('div', [this.CSS.input, this.CSS.caption], {
        contentEditable: !this.readOnly,
      }),
      addLinkArea: this.createInputArea(),
    };



    /**
     * Create base structure
     *  <wrapper>
     *    <image-container>
     *      <image-preloader />
     *    </image-container>
     *    <caption />
     *    <select-file-button />
     *  </wrapper>
     */
    this.nodes.caption.dataset.placeholder = this.config.captionPlaceholder;
    this.nodes.imageContainer.appendChild(this.nodes.imagePreloader);
    this.nodes.wrapper.appendChild(this.nodes.imageContainer);
    this.nodes.wrapper.appendChild(this.nodes.caption);
    this.nodes.wrapper.appendChild(this.nodes.fileButton);

    if (loadedLink !== '' && loadedLink !== undefined) {
      this.toggleAddLink();
    }
  }

  /**
   * Link state
   *
   * @returns {{data: string, focused: boolean, open: boolean}}
   * @class
   */
  get LinkState() {
    return this.linkState;
  }

  /**
   * set link validity
   * @param bool {boolean}
   * @constructor
   */
  set LinkError(bool) {
    this.linkState.linkError = bool;

    if (this.nodes.addLinkArea !== undefined) {
      if (bool) {
        this.nodes.addLinkArea.classList.add(this.CSS.linkError);
      } else {
        this.nodes.addLinkArea.classList.remove(this.CSS.linkError);
      }
    }
  }

  /**
   * CSS classes
   *
   * @returns {object}
   */
  get CSS() {
    return {
      baseClass: this.api.styles.block,
      loading: this.api.styles.loader,
      input: this.api.styles.input,
      button: this.api.styles.button,

      /**
       * Tool's classes
       */
      wrapper: 'image-tool',
      imageContainer: 'image-tool__image',
      imagePreloader: 'image-tool__image-preloader',
      imageEl: 'image-tool__image-picture',
      caption: 'image-tool__caption',
      addLinkArea: 'image-tool__link-area',
      linkError: 'image-tool__link-error',
    };
  };

  /**
   * Ui statuses:
   * - empty
   * - uploading
   * - filled
   *
   * @returns {{EMPTY: string, UPLOADING: string, FILLED: string}}
   */
  static get status() {
    return {
      EMPTY: 'empty',
      UPLOADING: 'loading',
      FILLED: 'filled',
    };
  }

  /**
   * Renders tool UI
   *
   * @param {ImageToolData} toolData - saved tool data
   * @returns {Element}
   */
  render(toolData) {

    if (!toolData.file || Object.keys(toolData.file).length === 0) {
      this.toggleStatus(Ui.status.EMPTY);
    } else {
      this.toggleStatus(Ui.status.UPLOADING);
    }

    return this.nodes.wrapper;
  }

  /**
   * Creates upload-file button
   *
   * @returns {Element}
   */
  createFileButton() {
    const button = make('div', [ this.CSS.button ]);

    button.innerHTML = this.config.buttonContent || `${buttonIcon} ${this.api.i18n.t('Select an Image')}`;

    button.addEventListener('click', () => {
      this.onSelectFile();
    });

    return button;
  }

  /**
   * Shows uploading preloader
   *
   * @param {string} src - preview source
   * @returns {void}
   */
  showPreloader(src) {
    this.nodes.imagePreloader.style.backgroundImage = `url(${src})`;

    this.toggleStatus(Ui.status.UPLOADING);
  }

  /**
   * Hide uploading preloader
   *
   * @returns {void}
   */
  hidePreloader() {
    this.nodes.imagePreloader.style.backgroundImage = '';
    this.toggleStatus(Ui.status.EMPTY);
  }

  /**
   * Shows an image
   *
   * @param {string} url - image source
   * @returns {void}
   */
  fillImage(url) {
    /**
     * Check for a source extension to compose element correctly: video tag for mp4, img — for others
     */
    const tag = /\.mp4$/.test(url) ? 'VIDEO' : 'IMG';

    const attributes = {
      src: url,
    };

    /**
     * We use eventName variable because IMG and VIDEO tags have different event to be called on source load
     * - IMG: load
     * - VIDEO: loadeddata
     *
     * @type {string}
     */
    let eventName = 'load';

    /**
     * Update attributes and eventName if source is a mp4 video
     */
    if (tag === 'VIDEO') {
      /**
       * Add attributes for playing muted mp4 as a gif
       *
       * @type {boolean}
       */
      attributes.autoplay = true;
      attributes.loop = true;
      attributes.muted = true;
      attributes.playsinline = true;

      /**
       * Change event to be listened
       *
       * @type {string}
       */
      eventName = 'loadeddata';
    }

    /**
     * Compose tag with defined attributes
     *
     * @type {Element}
     */
    this.nodes.imageEl = make(tag, this.CSS.imageEl, attributes);

    /**
     * Add load event listener
     */
    this.nodes.imageEl.addEventListener(eventName, () => {
      this.toggleStatus(Ui.status.FILLED);

      /**
       * Preloader does not exists on first rendering with presaved data
       */
      if (this.nodes.imagePreloader) {
        this.nodes.imagePreloader.style.backgroundImage = '';
      }
    });

    this.nodes.imageContainer.appendChild(this.nodes.imageEl);
  }

  /**
   * Shows caption input
   *
   * @param {string} text - caption text
   * @returns {void}
   */
  fillCaption(text) {
    if (this.nodes.caption) {
      this.nodes.caption.innerHTML = text;
    }
  }

  /**
   * Changes UI status
   *
   * @param {string} status - see {@link Ui.status} constants
   * @returns {void}
   */
  toggleStatus(status) {
    for (const statusType in Ui.status) {
      if (Object.prototype.hasOwnProperty.call(Ui.status, statusType)) {
        this.nodes.wrapper.classList.toggle(`${this.CSS.wrapper}--${Ui.status[statusType]}`, status === Ui.status[statusType]);
      }
    }
  }

  /**
   * changes display link input status
   */
  toggleAddLink() {
    this.linkState.open = !this.linkState.open;
    const unloadLinkUI = () => {
      const children = this.nodes.wrapper.childNodes;

      for (let cnt = 0; cnt < children.length; cnt++) {
        if (children[cnt].classList.contains(this.CSS.addLinkArea)) {
          //  clear input, remove child
          children[cnt].value = '';
          this.nodes.wrapper.removeChild(children[cnt]);
        }
      }
    };

    if (this.linkState.open) {
      if (this.nodes.addLinkArea === undefined) {
        if (this.linkState.stored !== '') {
          this.LinkError = !linkCheck(this.linkState.stored);
        }
      }
      this.nodes.wrapper.prepend(this.nodes.addLinkArea);
      // f u focus
      // this.nodes.addLinkArea.focus();
    } else {
      unloadLinkUI();
      this.linkState.stored = '';
      this.LinkError = false;
    }
  }

  /**
   * creates inputArea
   * @returns {Element}
   */
  createInputArea() {
    const enterFunc = e => {
      const key = e.keyCode || e.which;

      if (key === 13) {
        this.linkState.open = false;
        this.linkState.stored = this.linkState.data;
        this.LinkError = !linkCheck(this.linkState.stored);
        this.getOutofLink(e);
      }
    };
    const inputArea = make('input', [this.CSS.addLinkArea, this.CSS.input], {
      placeholder: '링크를 입력하세요',
      defaultValue: this.linkState.data,
    });

    inputArea.addEventListener('focus', () => {
      this.linkState.focused = true;
      this.LinkError = false;
    });
    inputArea.addEventListener('blur', () => {
      this.linkState.focused = false;
      this.linkState.stored = this.linkState.data;
      if (this.linkState.stored !== '') {
        this.LinkError = !linkCheck(this.linkState.stored);
      }
    });
    inputArea.addEventListener('input', e => {
      this.linkState.data = e.target.value;
      if (e.target.value === '') {
        this.linkState.stored = '';
        this.LinkError = false;
      }
    });
    inputArea.addEventListener('keydown', enterFunc);

    return inputArea;
  }

  // /**
  //  * applies link to node
  //  *
  //  * @param {string} link - link to apply
  //  * @returns {void}
  //  */
  // applyLink(link) {
  //   const aTag = document.createElement('a');
  //
  //   aTag.href = link;
  //   aTag.innerHTML = this.nodes.wrapper.innerHTML;
  //   this.nodes.wrapper.parentNode.replaceChild(this.nodes.wrapper, aTag);
  // }

  // /**
  //  * a tag to div
  //  *
  //  * @returns {void}
  //  */
  // removeLink() {
  //   const divTag = document.createElement('div');
  //
  //   divTag.innerHTML = this.nodes.wrapper.innerHTML;
  //   this.nodes.wrapper.parentNode.replaceChild(this.nodes.wrapper, divTag);
  // }

  /**
   * Apply visual representation of activated tune
   *
   * @param {string} tuneName - one of available tunes {@link Tunes.tunes}
   * @param {any} status - true for enable, false for disable
   * @returns {void}
   */
  applyTune(tuneName, status) {
    // if (status === true || status === false)
    this.nodes.wrapper.classList.toggle(`${this.CSS.wrapper}--${tuneName}`, status);
    // else {
    //   //  for links
    //   if (tuneName === 'withLink') {
    //     const aTag = document.createElement('a');
    //
    //     aTag.innerHTML = this.nodes.wrapper.innerHTML;
    //     this.nodes.wrapper.parentNode.replaceChild(this.nodes.wrapper, aTag);
    //   }
    // }
  }
}

/**
 * Helper for making Elements with attributes
 *
 * @param  {string} tagName           - new Element tag name
 * @param  {Array|string} classNames  - list or name of CSS class
 * @param  {object} attributes        - any attributes
 * @returns {Element}
 */
export const make = function make(tagName, classNames = null, attributes = {}) {
  const el = document.createElement(tagName);

  if (Array.isArray(classNames)) {
    el.classList.add(...classNames);
  } else if (classNames) {
    el.classList.add(classNames);
  }

  for (const attrName in attributes) {
    el[attrName] = attributes[attrName];
  }

  return el;
};

// eslint-disable-next-line
const linkCheck = str => /(https:\/\/)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/.test(str);