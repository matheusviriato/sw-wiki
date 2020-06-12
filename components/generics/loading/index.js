import React from 'react';
import { loadingWrapper, loadingImg } from './style';

const Loading = () => {
  return (
    <section css={loadingWrapper}>
      <img css={loadingImg} src="/img/republic_icon.png" />
    </section>
  );
};

export default Loading;
