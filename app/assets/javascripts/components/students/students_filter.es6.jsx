class StudentsFilter extends Component {

  static get propTypes() {
    return {
      isExpanded: React.PropTypes.bool.isRequired,
      filterList: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
      selected: React.PropTypes.string,
    };
  }

  static get defaultProps() {
    return {
      isExpanded: false,
      filterList: [],
      selected: 'None',
    };
  }

  get styles() {
    return {
      container: {
        display: 'flex',
        flexFlow: 'column',
        flex: '1',
      },
      list: Object.assign(
        {},
        StyleConstants.cards.default,
        {
          flex: '1',
          position: 'absolute',
          top: '30px',
          left: '0px',
          zIndex: StyleConstants.planes.two,
          // TODO(Warren): Figure out a way to set width without hardcoded value.
          width: '200px',
        }
      ),
    };
  }

  get clickableStyles() {
    return {
      default: {
      },
    };
  }

  handleExpand() {
    this.setState({ isExpanded: !this.state.isExpanded });
  }

  generateSelectHandler(item) {
    return function() {
      this.setState({ selected: item });
    }.bind(this);
  }

  renderListItem(item, index) {
    return (
      <Clickable
        content={item}
        func={this.generateSelectHandler(item)}
        key={index}
        styles={this.clickableStyles} />
    );
  }

  renderListItems() {
    return this.props.filterList.map(this.renderListItem.bind(this));
  }

  renderList() {
    if (this.state.isExpanded) {
      return (
        <div style={this.styles.list}>
          {this.renderListItems()}
        </div>
      );
    }
  }

  render() {
    return (
      <div style={this.styles.container}>
        <Clickable
          func={this.handleExpand.bind(this)}
          icon={'fa fa-angle-down'}
          styles={this.clickableStyles}
          type={'i'}>
          <span>{this.state.selected || this.props.selected}</span>
        </Clickable>
        {this.renderList()}
      </div>
    );
  }
}
