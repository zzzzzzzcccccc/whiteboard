import {
  DEFAULT_SCREEN_OPTIONS,
  DEFAULT_WHITEBOARD_OPTIONS,
  DEFAULT_DOT_OPTIONS,
  DEFAULT_SCROLLBAR_OPTIONS,
} from '../constant'

class Options {
  private _screen = DEFAULT_SCREEN_OPTIONS
  private _whiteboard = DEFAULT_WHITEBOARD_OPTIONS
  private _dot = DEFAULT_DOT_OPTIONS
  private _scrollbar = DEFAULT_SCROLLBAR_OPTIONS

  /**
   * @types {@link Options.screen}
   * @description screen options
   */
  get screen(): Omit<typeof DEFAULT_SCREEN_OPTIONS, 'resizeTo'> & {
    width: number
    height: number
    resizeTo: Window | HTMLElement
    widthByResolution: number
    heightByResolution: number
  } {
    const resizeTo = this._screen.resizeTo
    const resizeW =
      // @ts-ignore
      resizeTo.innerWidth || (resizeTo as HTMLElement).offsetWidth || (resizeTo as HTMLElement).clientWidth
    const resizeH =
      // @ts-ignore
      resizeTo.innerHeight || (resizeTo as HTMLElement).offsetHeight || (resizeTo as HTMLElement).clientHeight
    return {
      ...this._screen,
      width: resizeW,
      height: resizeH,
      widthByResolution: resizeW / this._screen.resolution,
      heightByResolution: resizeH / this._screen.resolution,
    }
  }

  set screen(payload: Partial<typeof DEFAULT_SCREEN_OPTIONS>) {
    this._screen = { ...payload, ...this._screen }
  }

  /**
   * @types {@link Options.whiteboard}
   * @description whiteboard options
   */
  get whiteboard(): typeof DEFAULT_WHITEBOARD_OPTIONS {
    return this._whiteboard
  }

  set whiteboard(payload: Partial<typeof DEFAULT_WHITEBOARD_OPTIONS>) {
    this._whiteboard = { ...payload, ...this._whiteboard }
  }

  /**
   * @types {@link Options.dot}
   * @description dot options
   */
  get dot(): typeof DEFAULT_DOT_OPTIONS {
    return this._dot
  }

  set dot(payload: Partial<typeof DEFAULT_DOT_OPTIONS>) {
    this._dot = { ...payload, ...this._dot }
  }

  /**
   * @types {@link Options.scrollbar}
   * @description scroll bar options
   */
  get scrollbar(): typeof DEFAULT_SCROLLBAR_OPTIONS {
    return this._scrollbar
  }

  set scrollbar(payload: Partial<typeof DEFAULT_SCROLLBAR_OPTIONS>) {
    this._scrollbar = { ...payload, ...this._scrollbar }
  }
}

export default Options
