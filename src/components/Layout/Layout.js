import PropTypes from 'prop-types';
import React from 'react';

// Components
import Header from 'components/Header';
import Footer from 'components/Footer';
import Newsletter from 'components/Newsletter';

function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Newsletter />
      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node
};

export default Layout;
