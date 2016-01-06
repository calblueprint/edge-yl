(() => {
  class Helpers {

    capitalize(string) {
      if (string && typeof(string) === 'string') {
        return string.toUpperCase();
      } else {
        return string;
      }
    }

    humanize(string) {
      if (string && typeof(string) === 'string') {
        string = string.replace(/_/g, ' ');
        return string.charAt(0).toUpperCase() + string.slice(1);
      } else {
        return string;
      }
    }
  }
  this.Helpers = new Helpers();
})();
