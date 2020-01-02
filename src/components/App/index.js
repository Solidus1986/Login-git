// == Import : npm
import React from 'react';
import { Button, Form, Input } from 'semantic-ui-react';

// == Import : local
import './app.scss';

// == Composant
const App = () => (
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
        <input placeholder='Password' />
      </Form.Field>
      <Button type='submit'>Submit</Button>
    </Form>
  </div>
);

// == Export
export default App;
