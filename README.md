# When Visible
A micro (1.13kb compressed) script to make it easier to add callbacks to elements when they enter the viewport. **Zero dependences**! This script utilises the [IntersectionalObserver API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) for minimum overhead and no need for scroll listeners. With this plugin, you can:

* Detect when an element is visible in the viewport, including by an arbitrary threshold
* Run an `onEnter` function when the object enters the viewport at said threshold
* Run an `onLeave` function, when the object exists the viewport at said threshold (optional)
* Set whether the `onEnter` function runs only once (for example, if you are manually lazyloading content) or repeats infinitely

### Simple callback example

```JavaScript
import WhenVisible from './index.js';

let element = document.getElementById('your-element');

new WhenVisible(element, function() {
  // ...
});
```

### Interface

```JavaScript
/**
 *  @class
 *  @func WhenVisible
 *
 *  @param {Element} element*
 *  @param {Function} onEnterCallback*
 *  @param {Function} onLeaveCallback
 *  @param {Number} threshold
 *  @param {Bool} repeat
 */
new WhenVisible(element, () => { ... }, () => { ... }, 0.3, true);
```
(Note that args marked with an asterisk (\*) are mandatory. When `repeat` is set to false, the `onLeaveCallback` will not run - the `onEnterCallback` will run once, when the element is visible, and then the element will be unobserved)

### To do
* Add scroll listener callback for browsers without `IntersectionObserver` support
* Add ability to run `onEnter` a set number of repeats (i.e. `repeat: true/false/integer`)
* Change `repeat` check from flag to simply `unobserve` the element
* Add automated tests
* Improve README docs
