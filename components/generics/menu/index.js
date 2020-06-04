import React from 'react';
import Link from 'next/link';
import { menuWrapper } from './style';

const Menu = () => {
  return (
    <section css={menuWrapper}>
      <div>
        <Link href="/persons">
          <a>Persons</a>
        </Link>
      </div>
      <div>Movies</div>
      <div>Something else</div>
    </section>
  );
};

export default Menu;
