// fSlider - v 0.1 - 2016-8-14
// Copyright (c) 2016 Fionna Chan

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

function $_(_target) {
  function popupBox(_target) {
    var _ = this;
    _.target = _target;
    _.popLink = "";
    _.scrollContent = false;
    _.openDelay = 0;
    _.closeDelay = 0;
  }

  popupBox.prototype.$ = function(_target) {
    return document.querySelector(_target);
  };

  popupBox.prototype.init = function(_config) {
    var _ = this;
    _.popLink = _config.linkName;
    _.openDelay = _config.openDelay;
    _.closeDelay = _config.closeDelay;
    _.scrollContent = _config.scrollContent;
    _.beforeOpen = _config.beforeOpen;
    _.afterOpen = _config.afterOpen;
    _.beforeClose = _config.beforeClose;
    _.afterClose = _config.afterClose;

    _.$(_.popLink).addEventListener("click", function() {
      _.$('body').appendChild(_.$(_.target));
      _.beforeOpen();
      setTimeout(function() {
        _.$('body').classList.add("popup-show");
        _.$(_.target).classList.add("show");
    
    if (_.scrollContent) {
      var popupHeight = document.body.clientHeight;
      var popHeadHeight = _.$(_.target + ' .popHead').offsetHeight;
      var popMarginTop = _.$(_.target + ' .popHead').offsetTop;
      _.$(_.target).classList.add('scroll');
      _.$(_.target + ' .popContent').style.height = document.documentElement.clientHeight - popHeadHeight - popMarginTop*2 + 'px';
    }
        _.afterOpen();
      }, _.openDelay);
    }, false);

    _.$(_.target + ' .popClose').addEventListener("click", function() {
      _.beforeClose();
      setTimeout(function() {
        _.$('body').classList.remove("popup-show");
        _.$(_.target).classList.remove("show"); 
        _.afterClose();
      }, _.closeDelay);
    });
  };

  return new popupBox(_target);
}
