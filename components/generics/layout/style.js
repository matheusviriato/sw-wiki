import { css } from '@emotion/core';

export const layoutWrapper = css`
  height: 100%;
  width: 100%;
  display: grid;
  position: absolute;
  grid-template-columns: auto;
  grid-template-rows: 60px auto;
  @media (min-width: 768px) {
    grid-template-columns: 180px auto;
    grid-template-rows: repeat(2, 100%);
  }
`;
