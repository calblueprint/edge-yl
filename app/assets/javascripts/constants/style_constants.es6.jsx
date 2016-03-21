(() => {
  class StyleConstants {

    get colors() {
      return {
        ash: '#565a5c',
        blue: '#68b1de',
        fog: 'rgba(245, 250, 255, 0.95)',
        gray: '#d6d6d6',
        green: '#1abc9c',
        indigo: '#2980b9',
        opaque: 'rgba(255, 255, 255, 0.85)',
        red: '#c0392b',
        wash: '#c1d6d8',
        white: '#ffffff',
      };
    }

    get cards() {
      return {
        container: (media) => Object.assign(
          {},
          this.containers.card,
          { marginTop: '12px' },
          media === 'big' && { width: '49%' },
          media === 'small' && { width: '100%' },
        ),
        content: {
          display: 'flex',
          flexFlow: 'column',
          padding: '16px',
        },
      };
    }

    get containers() {
      return {
        card: Object.assign(
          {},
          {
            display: 'flex',
            flexFlow: 'column',
            boxSizing: 'border-box',
          },
          this.templates.card,
        ),
        empty: {
          display: 'flex',
          flexFlow: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          padding: '24px 0px',
        },
        header: (left) => Object.assign(
          {},
          {
            display: 'flex',
            alignItems: 'center',
            alignSelf: 'stretch',
            width: this.widths.sidebar,
            boxSizing: 'border-box',
          },
          left && { paddingLeft: '6px' },
          !left && { paddingRight: '6px', justifyContent: 'flex-end' },
        ),
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

    get forms() {
      return {
        questions: {
          container: {
            display: 'flex',
            marginBottom: '18px',
          },
          errors: {
            color: this.colors.red,
          },
          prompt: {
            display: 'flex',
            alignItems: 'center',
            width: '172px',
            marginRight: '24px',
          },
          required: {
            paddingLeft: '4px',
            color: this.colors.red,
          },
          response: {
            display: 'flex',
            flexFlow: 'column',
            flex: '1',
          },
        },
      };
    }

    get grids() {
      return {
        column: {
          display: 'flex',
          flexFlow: 'column',
          width: '100%',
        },
        wrap: {
          display: 'flex',
          flexFlow: 'wrap',
          justifyContent: 'space-between',
          alignContent: 'flex-start',
          width: '100%',
        },
      };
    }

    get heights() {
      return {
        header: '48px',
      };
    }

    get pages() {
      return {
        container: {
          display: 'flex',
          flex: '1',
          paddingTop: this.heights.header,
          paddingLeft: this.widths.sidebar,
        },
        content: {
          display: 'flex',
          flexFlow: 'column',
          flex: '1',
          padding: '0px 184px 72px 12px',
          overflow: 'scroll',
        },
        wrapper: {
          display: 'flex',
          minHeight: '100vh',
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

    get templates() {
      return {
        card: {
          backgroundColor: this.colors.white,
          border: '1px solid',
          borderColor: '#e5e6e9 #dfe0e4 #d0d1d5',
          borderRadius: '1px',
        },
      };
    }

    get widths() {
      return {
        sidebar: '172px',
      };
    }
  }
  this.StyleConstants = new StyleConstants();
})();
