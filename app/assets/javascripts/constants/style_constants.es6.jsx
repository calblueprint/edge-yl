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
        index: (media) => Object.assign(
          {},
          this.containers.card,
          { padding: '18px' },

          media === 'big' && { width: '49%' },
          media === 'small' && { width: '100%' }
        ),
        show: (media) => Object.assign(
          {},
          this.containers.card,
          media === 'big' && { width: '49%' },
          media === 'small' && { width: '100%' }
        ),
      };
    }

    get containers() {
      return {
        card: Object.assign(
          {},
          {
            display: 'flex',
            flexFlow: 'column',
            marginTop: '12px',
            boxSizing: 'border-box',
          },
          this.templates.card,
        ),
        grid: {
          display: 'flex',
          flexFlow: 'wrap',
          justifyContent: 'space-between',
          alignContent: 'flex-start',
          width: '100%',
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
          !left && { paddingRight: '6px', justifyContent: 'flex-end' }
        )
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
          padding: '0px 184px 24px 12px',
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
