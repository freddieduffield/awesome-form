import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class RegisterForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <Field name="name" commponent="input" type="text" />
        </div>
        <div>
          <label>Preferred Formating</label>
          <Field name="preference" component="select">
            <option />
            <option value="tabs">Tabs</option>
            <option value="spaces">Spaces</option>
          </Field>
        </div>
        <div>
          <label>Sign up for newsletter?</label>
          <Field name="newsletter" component="input" type="checkbox" />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

RegisterForm = reduxForm({
  form: 'register'
})(RegisterForm);

export default RegisterForm;
