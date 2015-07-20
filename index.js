'use strict';
/**
 * Welcome to the vimeo-regex!
 */

module.exports = function vimeoRegex () {
  var regex = /^(http|https)?:\/\/(www\.)?vimeo\.com\/(clip\:)?(\d+).*$/;
  var regex2 = /https?:\/\/(?:www\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|)(\d+)(?:$|\/|\?)/;

  return regex;
};
