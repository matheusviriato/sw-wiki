import React from 'react';
import { menuWrapper } from './style';

const Menu = () => {
  return (
    <section css={menuWrapper}>
      <div>Characters</div>
      <div>Movies</div>
      <div>Something else</div>
    </section>
  );
};

export default Menu;
