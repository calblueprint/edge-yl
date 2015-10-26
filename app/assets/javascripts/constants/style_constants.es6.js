'use strict';

class StylesSingleton {

  get colors() {
    return {
      ash: '#565a5c',
      blue: '#68b1de',
      gray: '#878B8d',
      highlight: '#c1d6d8',
      navy: '#28719e',
      sky: '#78c1ee',
      tint: '#eaf0f2',
      white: '#ffffff',
    };
  }

  get cards() {
    return {
      default: {
        backgroundColor: this.colors.white,
        border: '1px solid',
        borderColor: '#e5e6e9 #dfe0e4 #d0d1d5',
        borderRadius: '3px',
      },
    };
  }

  get fonts() { 
    return { 
      sizes: {
        largest: '36px',
        larger: '30px',
        large: '24px',
        medium: '18px',
        small: '16px',
        smaller: '14px',
        smallest: '12px', 
      }
    }
  }
  
  get pages() {
    return {
      default: {
        display: 'flex',
        flexFlow: 'column',
        height: '100vh',
      },
    };
  }
}

var StyleConstants = new StylesSingleton();
