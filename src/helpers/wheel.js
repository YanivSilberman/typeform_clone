import $ from 'jquery'
import pages from '../helpers/pages'
import handleElementFocus from './focus'

export default function wheel(page, callback){
  if (page == pages.length) return;

  const elId = pages[page];
  const parent = $("#"+elId).parent();
  const wrapper = $("#wrapper")
  const offset = wrapper.scrollTop() + (parent.position().top);
  wrapper.animate({
      scrollTop: offset
  }, {
    duration: 300,
    complete: () => handleElementFocus(callback)
  });
}
