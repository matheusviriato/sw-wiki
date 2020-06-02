import React from 'react';
import PropTypes from 'prop-types';
import { layoutWrapper } from './style';

const Layout = ({ children }) => (
  <section css={layoutWrapper}>
    <div>Menu</div>
    <div>{children}</div>
  </section>
);

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
