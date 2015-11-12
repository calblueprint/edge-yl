class FormDropdown extends Component { 

  static get propTypes() {
    return {
      options: React.PropTypes.array.isRequired,
      title: React.PropTypes.string.isRequired,
    };
  }

  static get defaultState() { 
    return { 
      dropdown: false,
      value: 'Select one', 
    };
  }
  
  handleClick(event) {
    this.setState({ dropdown: !this.state.dropdown });
  }


  itemSelected(content) {
    console.log('content'+ content);
    this.setState({value: content, dropdown: false}); 

  }

  get dropdownOptions() { 
    for (var i = 0; i<this.props.options.length; i++) {
      console.log(i);
      content = this.props.options[i].content
      console.log(content);

      this.props.options[i].func = () => {this.itemSelected(content)};
      console.log(this.props.options[i]);
    }

    return this.props.options;
  }

  renderDropdown() {
    if (this.state.dropdown) {
      return (
        <Dropdown
          styles={this.dropdownStyles}
          options={this.dropdownOptions} 
          />
      );
    }
  }

  get dropdownStyles() {
    return {
      child: {
        default: {
          flex: '1',
          padding: '4px',
        },
        hover: {
          backgroundColor: StyleConstants.colors.turquoise,
        },
      },
      container: Object.assign(
        {},
        {
          display: 'flex',
          flexFlow: 'column',      
          width: '128px',
        }
      ),
    };
  }

  get clickableStyles() { 
    return {
      default: {
        padding: '0px 2px',
      },
      hover: {
      },
    };
  }

  get styles() {
    return {
      container: {
        display: 'flex', 
        flexFlow: 'row',
      },
      label: {
        paddingRight: '24px',
        paddingTop: '4px',
        fontSize: StyleConstants.fonts.sizes.smaller,
      },
      selected: {
        width: '130px',
        color: StyleConstants.colors.gray,
      },
      dropdownContainer: {
        display: 'flex',
        flexFlow: 'row',
        padding: '4px',
        border: '1px solid' + StyleConstants.colors.gray,
      },
      icon: {
        padding: '0px 2px',
        color: StyleConstants.colors.gray,
      },
      dropdown: {
        display: 'flex',
        flexFlow: 'column',
      },
    };
  }

  render() {
    return (
      <div style = {this.styles.container}>
        <label style={this.styles.label}>{this.props.title}</label>
          <div style={this.styles.dropdownContainer}> 
            <div style = {this.styles.dropdown}> 
              <span style = {this.styles.selected}> {this.state.value} </span>
              {this.renderDropdown()}
            </div>
            <Clickable
              icon={'fa fa-angle-down'}
              func={this.handleClick.bind(this)}
              type={'i'}
              styles={this.clickableStyles}
            />
          </div>
      </div>  
    );
  }
}