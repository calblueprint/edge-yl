class FormDropdown extends Component { 

	static get propTypes() {
		return {
			options: React.PropTypes.array.isRequired,
			title: React.PropTypes.string.isRequired,

		};
	}

	static get defaultState() {
		return { value: this.props.options[0].content }
	}

	static get defaultState() { 
		return { dropdown: false };
	}
	
	handleClick(event) {
		this.setState({ dropdown: !this.state.dropdown });
	}

	renderDropdown() {
		console.log('options' + this.props.options);
		if (this.state.dropdown) {
			console.log('hi');

			console.log(this.styles.dropdown);
			return (
				<Dropdown
					styles={this.dropdownStyles}
					options={this.props.options} />
			);
		}
		else { 
			return (
				<span style = {this.styles.selected}> {this.state.value} </span>
			);
		}
	}

	get dropdownWidth() { 
		var options = this.props.options
		var longestLength = 0;
		for (var i = 0; i<options.length; i++) {

			if (options[i].content.length > longestLength) {
				longestLength = options[i].content.length
			}
		}
		console.log(longestLength);
		return longestLength; 
	}

  get dropdownStyles() {
    return {
      child: {
        default: {
          flex: '1',
          padding: '12px',
        },
        hover: {
          backgroundColor: StyleConstants.colors.turquoise,
        },
      },
      container: Object.assign(
        {},
        StyleConstants.cards.default,
        {
          display: 'flex',
          flexFlow: 'column',      
          width: '128px',
        }
      ),
    };
  }

	get styles() {
		return {
			container: {
				display: 'flex', 
				flexFlow: 'row',
			},
			selected: {
				width: '128px',
			}
		};
	}

	render() {
		return (
			<div style = {this.styles.container}>
				<label style={this.styles.label}>{this.props.title}</label>
					{this.renderDropdown()}
					<Clickable
						icon={'fa fa-envelope fa-x'}
						func={this.handleClick.bind(this)}
						type={'i'}
					/>
			</div>	
		);
	}
}