class FormDropdown extends Component { 

	static get propTypes() {
		return {
			options: React.PropTypes.array.isRequired,
			title: React.PropTypes.string.isRequired,
		};
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
			return (
				<Dropdown
					style={this.props.dropdown}
					options={this.props.options} />
			);
		}
		else { 
			return (
				<div style = {this.props.dropdown}> {this.props.options[0].content} </div>
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
		return longestLength; 
	}

	get styles() {
		return {
			container: {
				display: 'flex', 
				flexFlow: 'row',
			},
			dropdown: {
				flex: '1',
				width: (this.dropdownWidth * 8) + 'px',

			},
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