

module.exports = function() {
  this.Given('I visit "$url"', function(url, next) {
    this.browser.open(url);
    if (this.browser.status() == 200) {
      next();
    }
    else {
      next.fail(new Error('Expected to have a 200 server status code. Instead returned ' + this.browser.status()));
    }
  });

  this.Then('the title should match "$title"', function(title, next) {
    if (this.browser.title() == title) {
      next();
    }
    else {
      next.fail(new Error('Expected the title to match "' + title + '".'));
    }
  });
}
