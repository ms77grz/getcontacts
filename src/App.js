import { Fragment, useState, useMemo, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';

import Layout from './components/Layout/Layout';
import Home from './components/Layout/Home';
import Contacts from './Contacts';
import Login from './Login';
import { UserContext } from './UserContext';
import { callApi } from './utils';

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const user = await callApi('/users/me', 'GET');
      if (user.id) {
        setUser(user);
      }
    };
    getUser();
  }, []);

  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <Fragment>
      <CssBaseline />
      <Router>
        <UserContext.Provider value={value}>
          <Layout>
            <Switch>
              <Route path='/' exact render={() => <Home />} />
              <Route path='/contacts' render={() => <Contacts />} />
              <Route path='/login' render={() => <Login />} />
            </Switch>
          </Layout>
        </UserContext.Provider>
      </Router>
    </Fragment>
  );
}
