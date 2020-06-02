import { css } from '@emotion/core';

export const menuWrapper = css`
  display: grid;
  grid-template-columns: repeat(3, 33.33%);
  height: 100%;
  background-color: #151515;
  color: #fff;
  div {
    justify-self: center;
    align-self: center;
    cursor: pointer;
  }
  @media (min-width: 768px) {
    grid-template-columns: auto;
    grid-template-rows: repeat(3, 80px);
  }
`;
