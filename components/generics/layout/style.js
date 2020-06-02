import { css } from '@emotion/core';

export const layoutWrapper = css`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 180px auto;
  @media (max-width: 768px) {
    grid-template-columns: auto;
  }
`;
