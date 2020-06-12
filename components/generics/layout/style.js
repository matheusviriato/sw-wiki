import { css } from '@emotion/core';

export const layoutWrapper = css`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: grid;
  position: absolute;
  grid-template-columns: auto;
  grid-template-rows: 60px auto;
  @media (min-width: 768px) {
    grid-template-columns: 180px auto;
    grid-template-rows: auto;
  }
`;
