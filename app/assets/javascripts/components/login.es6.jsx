class Login extends React.Component {

    get styles() {
        return {
            container: {
            },
        };
    }

    render () {
        return (<div style={this.styles.container}>
              <span>Login</span>
                <input placeholder='email'></input>
                <input placeholder='password'></input>
              </div>);
    }
}
