'use strict';

class StylesSingleton {

  get colors() {
    return {
      ash: '#565a5c',
      blue: '#68b1de',
      gray: '#878B8d',
      tint: '#eaf0f2',
    };
  }

  get cards() {
    return {
      default: {
        backgroundColor: 'white',
        border: '1px solid',
        borderColor: '#e5e6e9 #dfe0e4 #d0d1d5',
        borderRadius: '3px',
      },
    };
  }
}

var StyleConstants = new StylesSingleton();
