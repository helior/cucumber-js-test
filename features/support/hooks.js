var Horseman = require('node-horseman');

module.exports = function() {
  this.Before(function(callback) {
    this.browser = new Horseman();
    callback();
  });

  this.After(function(callback) {
    this.browser.close();
    callback();
  });
}
