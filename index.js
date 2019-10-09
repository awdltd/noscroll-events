/**
 *  Monitors when an object has been scrolled into view
 * 
 *  @class
 *  @function WhenVisible
 *  @param {Element} element* - lement to monitor
 *  @param {Function} onEnter* - callback when visible
 *  @param {Function} onLeave - callback when visible
 *  @param {Number} visibility - proportion of visibility to show (0 - 1)
 *  @param {Bool} repeat - whether the function runs once, or repeats
 */
export default class WhenVisible {
  constructor(element, onEnter = null, onLeave = null, threshold = 0, repeat = true) {
    // Check element is valid node
    if (!(element instanceof Node)) throw new Error(`The argument (${element}) is not an element`);

    // Check onEnter callback exists, and is a function
    if (!onEnter || {}.toString.call(onEnter) !== '[object Function]') return;

    // Check onLeave callback is valid, and set to null if not
    if ({}.toString.call(onEnter) !== '[object Function]') onLeave = null;

    // Store args
    this.element = element;
    this.onEnter = onEnter;
    this.onLeave = onLeave;
    this.threshold = threshold;
    this.repeat = repeat;

    // Set flag for repeatable events
    this.flag = true;

    // Store intersectional observer space
    this.linkIntersectionalObserver();
  }

  linkIntersectionalObserver() {
    new IntersectionObserver(
      entries => {
        if (!this.flag) return;

        entries.forEach(entry => {
          if (entry.isIntersecting && entry.intersectionRatio >= this.threshold) {
            // If set to not repeat, trigger repeat flag
            if (!this.repeat) this.flag = false;

            return this.onEnter();
          }

          if (this.onLeave) this.onLeave();
        });
      },
      {
        root: null,
        threshold: this.threshold
      }
    ).observe(this.element);
  }
}
