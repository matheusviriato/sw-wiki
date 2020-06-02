import React from 'react';
import PropTypes from 'prop-types';
import Menu from '../menu';
import { layoutWrapper } from './style';

const Layout = ({ children }) => (
  <section css={layoutWrapper}>
    <Menu />
    <div>{children}</div>
  </section>
);

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
