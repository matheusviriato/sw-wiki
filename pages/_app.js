import React from 'react';
import { Global } from '@emotion/core';
import { reset } from '../style/reset';

const StarWarsWiki = ({ Component, pageProps }) => {
  return (
    <>
      <Global styles={reset} />
      <Component {...pageProps} />
    </>
  );
};

export default StarWarsWiki;
