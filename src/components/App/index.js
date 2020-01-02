// == Import : npm
import React from 'react';
import { Button, Form, Input } from 'semantic-ui-react';

// == Import : local
import './app.scss';

import Login from 'src/components/Login';

// == Composant
const App = () => (
  <div id="app">
    <Login />
  </div>
);

// == Export
export default App;



/**
 * <Form>
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
        <input placeholder='Password' />
      </Form.Field>
      <Button type='submit'>Submit</Button>
    </Form>
 */