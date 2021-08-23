import { useRef, useState, useContext } from 'react';
import { callApi } from './utils';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { UserContext } from './UserContext';

import { useHistory } from 'react-router';

export default function Login() {
  console.log('Login Renders');
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const [errorMsg, setErrorMsg] = useState(null);

  const { user, setUser } = useContext(UserContext);

  const history = useHistory();

  const handleSubmit = async event => {
    event.preventDefault();
    setErrorMsg(null);

    try {
      const response = await callApi('/auth/local', 'POST', {
        identifier: emailInputRef.current.value,
        password: passwordInputRef.current.value,
      });

      if (!response.user) {
        throw new Error('Cannot login. Please try again.');
      }
      setUser(response.user);
      history.push('/');
    } catch (error) {
      setErrorMsg(error);
    }
  };

  return (
    <Grid container direction='column'>
      <Grid item>
        <Typography variant='h2'>Sign In</Typography>
      </Grid>
      <Grid item>{errorMsg && <Box p={1}>{errorMsg.message}</Box>}</Grid>
      <form autoComplete='off' onSubmit={handleSubmit}>
        <Grid item>
          <Box p={1}>
            <TextField inputRef={emailInputRef} label='Email' id='email' />
          </Box>
        </Grid>
        <Grid item>
          <Box p={1}>
            <TextField
              inputRef={passwordInputRef}
              label='Password'
              id='password'
              type='password'
            />
          </Box>
        </Grid>
        <Grid item>
          <Box p={1}>
            <Button type='submit' variant='contained' color='primary'>
              Sign In
            </Button>
          </Box>
        </Grid>
      </form>
    </Grid>
  );
}
