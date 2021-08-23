import { useContext } from 'react';
import { UserContext } from '../../UserContext';
import { callApi } from '../../utils';
import { useHistory } from 'react-router';

export default function Home() {
  console.log('Home Renders');
  const { user, setUser } = useContext(UserContext);
  const history = useHistory();

  const handleLogout = async () => {
    await callApi('/logout', 'POST');
    setUser(null);
    history.push('/login');
  };

  return (
    <div>
      <h1>Home Page</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      {user ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <button
          onClick={async () => {
            // const user = await login();
            // setUser(user);
          }}
        >
          Login
        </button>
      )}
    </div>
  );
}
