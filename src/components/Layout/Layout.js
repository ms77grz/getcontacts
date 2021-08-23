import { Fragment } from 'react';
import Header from './Header';
import Footer from './Footer';
import AppBar from '@material-ui/core/AppBar';

export default function Layout({ children }) {
  return (
    <Fragment>
      <Header />
      <AppBar />
      {children}
      <Footer />
    </Fragment>
  );
}
