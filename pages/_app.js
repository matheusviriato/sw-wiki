import React from 'react';
import { Global } from '@emotion/core';
import { reset } from '../style/reset';
import { ApolloProvider } from '@apollo/react-hooks';
import Layout from '../components/generics/layout';
import withApollo from '../services/apollo-client';

const StarWarsWiki = ({ Component, pageProps, apollo }) => {
  return (
    <>
      <Global styles={reset} />
      <ApolloProvider client={apollo}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </>
  );
};

export default withApollo(StarWarsWiki);
