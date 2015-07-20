'use strict';
/**
 * Welcome to the vimeo-regex!
 * 
 * Vimeo videos can use one of three URL schemes:
 * https://vimeo.com/*
 * https://vimeo.com/channels/{any}/*
 * https://vimeo.com/groups/{any}/videos/*
 */

module.exports = function vimeoRegex () {
  var regex = /^(http|https)?:\/\/(www\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|)(\d+)(?:$|\/|\?)/;

  return regex;
};
