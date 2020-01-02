// == Import : npm
import React from 'react';
import { Button, Form, Input } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import Field from 'src/components/Field';

// == Import : local
import './login.scss';

// == Composant
const Login = () => (
  <div id="app">
    <Form>
      <Form.Field
        id='form-input-control-error-email'
        control={Input}
        label='Email'
        placeholder='email@gmail.com'
        error={{
          content: 'Please enter a valid email address',
          pointing: 'below',
        }}
      />
      <Form.Field>
        <label>Password</label>
        <Field
          value={passwordValue}
          name="password"
          placeholder="Password"
          type="password"
          onInputChange={onChangeInput}
        />
      </Form.Field>
      <Button type='submit'>Submit</Button>
    </Form>
  </div>
);

Login.propTypes = {
  onChangeView: PropTypes.func.isRequired,
  onChangeInput: PropTypes.func.isRequired,
  emailValue: PropTypes.string.isRequired,
  passwordValue: PropTypes.string.isRequired,
  submit: PropTypes.func.isRequired,
};

// == Export
export default Login;
