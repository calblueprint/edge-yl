class StartPage extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      target: React.PropTypes.string.isRequired,
    };
  }

  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
      container: {
        display: 'flex',
        flexFlow: 'column',
        width: '712px',
      },
      header: Object.assign(
        {},
        StyleConstants.templates.card,
        {
          display: 'flex',
          flexFlow: 'column',
          alignItems: 'center',
          padding: '36px',
          marginTop: '24px',
        },
      ),
      steps: {
        display: 'flex',
        flexFlow: 'column',
      },
      wrapper: Object.assign(
        {},
        StyleConstants.pages.wrapper,
        {
          alignItems: 'center',
          flexDirection: 'column',
        },
      ),
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    return (
      <div style={this.styles.wrapper}>
        <div style={this.styles.container}>
          <div style={this.styles.header}>
            <h1>{'EDGE Registration - School'}</h1>
            <div>
              <p>Signing up for EDGE is a two-step process.  First, the school advisor or teacher will
              select a student and submit the school information and student contact information to us
              via this form.  Then, we will reach out to the student directly to confirm their registration
              and obtain needed emergency contact, medical, transportation, newspaper announcement, and waiver information.</p>
              <p>Below are instructions on how to fill out the selection form.  All selections must be made through the school
              or through one of our non-profit partners.  Please contact us if you are interested in signing up, but are unsure
              of who to contact at your school.</p>
            </div>
            <h4>To register your selected student:</h4>
            <div style={this.styles.steps}>
              <p><b>START:</b> Click the giant START HERE button</p>
              <p><b>Step 1:</b> Fill in your contact information on the next page and click NEXT.</p>
              <p><b>Step 2:</b> Fill in your student's contact information and click NEXT.</p>
              <p><b>Step 3:</b> If you have an alternate student, fill in his/her information, if not, click CONFIRM AND SUBMIT.</p>
              <p><b>Step 4a:</b> You will receive a confirmation email at the email address you provided.</p>
              <p><b>Step 4b:</b> Your student will receive a notification email at the email address (of the student)
              provided - please be sure it is an email that is valid and one they check frequently.  They will be
              receiving instructions on how to confirm their registration via that email.</p>
              <p><b>IMPORTANT!  Please do not use the same email address for you and your student.
              If your student does not have an email, please contact us.</b></p>
              <p><b>Step 5:</b> Your student will then receive further information about how to confirm his/her registration via
              email.  We may ask for your assistance in helping the student confirm their registration.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
