(() => {
  class StyleConstants {

    get colors() {
      return {
        ash: '#565a5c',
        azure: '#78c1ee',
        blue: '#68b1de',
        fog: 'rgba(255, 255, 255, 0.9)',
        gray: '#d6d6d6',
        indigo: '#28719e',
        opaque: 'rgba(255, 255, 255, 0.85)',
        red: '#ff0000',
        turquoise: '#c1d6d8',
        white: '#ffffff',
      };
    }

    get cards() {
      return {
        body: {
          display: 'flex',
          flexFlow: 'column',
          flex: '1',
          padding: '18px',
        },
        index: Object.assign(
          {},
          this.defaults.card,
          {
            width: '49%',
            padding: '18px',
            marginTop: '12px',
            boxSizing: 'border-box',
          }
        ),
        show: Object.assign(
          {},
          this.defaults.card,
          {
            marginTop: '12px',
            boxSizing: 'border-box',
          }
        ),
      };
    }

    get containers() {
      return {
        card: {
          display: 'flex',
          flexFlow: 'column',
          backgroundColor: this.colors.white,
          border: '1px solid',
          borderColor: '#e5e6e9 #dfe0e4 #d0d1d5',
          borderRadius: '1px',
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
        },
      };
    }

    get pages() {
      return {
        container: {
          display: 'flex',
          flex: '1',
          paddingTop: '48px',
          paddingLeft: '196px',
        },
        content: {
          display: 'flex',
          flexFlow: 'column',
          flex: '1',
          paddingLeft: '12px',
          paddingRight: '208px',
          overflow: 'scroll',
        },
        wrapper: {
          display: 'flex',
          flexFlow: 'column',
          height: '100vh',
        },
      };
    }

    get planes() {
      return {
        one: 100,
        two: 200,
        three: 300,
        four: 400,
        five: 500,
        six: 600,
        seven: 700,
        eight: 800,
        nine: 900,
      };
    }
  }
  this.StyleConstants = new StyleConstants();
})();
