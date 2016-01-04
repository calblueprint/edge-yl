(() => {
  class Helpers {

    capitalize(string) {
      if (string) {
        return string.toUpperCase();
      }
    }

    humanize(string) {
      if (string) {
        string = string.replace(/_/g, ' ');
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
    }
  }
  this.Helpers = new Helpers();
})();
