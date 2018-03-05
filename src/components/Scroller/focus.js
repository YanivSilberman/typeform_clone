import $ from "jquery";

function Utils() {

}

Utils.prototype = {
    constructor: Utils,
    isElementInView: function (element, fullyInView) {
        var pageTop = $(window).scrollTop();
        var pageBottom = pageTop + $(window).height();
        var elementTop = $(element).offset().top - 50;
        var elementBottom = elementTop + $(element).height() + 150;

        if (fullyInView === true) {
            return ((pageTop < elementTop) && (pageBottom > elementBottom));
        } else {
            return ((elementTop <= pageBottom) && (elementBottom >= pageTop));
        }
    }
};

var Utils = new Utils();

export function focusVisibleElements(tag){
  let is_viewed = Utils.isElementInView($("#"+tag), true);
  let el = document.getElementById(tag);
  if (is_viewed) {
    el.focus();
  } else {
    el.blur();
  }
}

export function focusVisibleContainer(tag){
  let is_viewed = Utils.isElementInView($("#"+tag), true);
  let el = document.getElementById(tag);
  if (is_viewed) {
    el.className += " focus ";
    return true;
  } else {
    el.classList.remove("focus");
    return false;
  }
}
