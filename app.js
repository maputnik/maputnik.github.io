var hasRaf = window.hasOwnProperty("requestAnimationFrame");

// TODO: Replace with lodash once we have need for js bundling.
// From: <https://davidwalsh.name/javascript-debounce-function>
function debounce(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

/**
 * Pseudo random number
 */
var seed = 0;
function random() {
  return Number('0.'+Math.sin(seed+=0.2).toString().substr(6))
}

if(hasRaf) {
  function _generateStars() {
    var containerEl = document.querySelector(".space__bg__hdl");

    containerEl.innerHTML = "";

    var fragment = document.createElement("div");

    var bbox = containerEl.getBoundingClientRect();
    var width  = bbox.width;
    var height = bbox.height;

    var number = (width * height) / 16000;

    for(var i=0; i<number; i++) {
      var el = document.createElement("div");
      el.className = "star";

      var size = Math.round(1+random()*4);

      el.style.width  = size+"px";
      el.style.minHeight = size+"px";
      el.style.left = Math.round(random() * width) +"px";
      el.style.top  = Math.round(random() * height) +"px";
      fragment.appendChild(el);
    }

    containerEl.appendChild(fragment);
  }

  function generateStars() {
    // PERF: This prevents blocking of initial page rendering. Also makes sure on resize 
    window.requestAnimationFrame(_generateStars);
  }

  document.addEventListener("DOMContentLoaded", generateStars);
  window.addEventListener("resize", debounce(generateStars, 100));
}
