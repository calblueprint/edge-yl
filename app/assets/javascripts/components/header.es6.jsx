class Header extends React.Component {

	get styles() {
		return {
			container: {
				height: 48,
				backgroundColor: '#c3e2f4',
			},
			title: {
				color: '#ffffff',
			},
		};
	}

	render() {
		return (
			<div style={this.styles.container}>
				<span style={this.styles.title}>
					{'edge-yl'}
				</span>
			</div>
		);
	}
}

