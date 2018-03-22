import $ from "jquery";

// ULTIL FUNCTION RETURNING TRUE IF ELEMENT IN SCROLL VIEW

function Utils() {}

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



function focusOnElement(tag, focus_callback, unfocus_callback){
  let is_viewed = Utils.isElementInView($("#"+tag), true);
  let el = document.getElementById(tag);
  if (is_viewed) {
    focus_callback(el);
    return true;
  } else {
    unfocus_callback(el);
    return false;
  }
}

export default function handleElementFocus(callback){
  let i, is_focused;
  // handle inputs
  let input_list = [ "name_input", "describe_input" ];
  function focus(el) { el.focus() };
  function blur(el) { el.blur() };
  for (i in input_list) focusOnElement(input_list[i], focus, blur);

  // handle container styling
  let container_list = ["name_container", "how_container", "desc_container", "top_container"];
  function focus_cl(el) { el.className += " focus " };
  function blur_cl(el) { el.classList.remove("focus") };
  for (i in container_list) {
    is_focused = focusOnElement(container_list[i], focus_cl, blur_cl);
    if (is_focused) callback(i);
  };
}
