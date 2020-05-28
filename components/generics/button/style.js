import { css } from '@emotion/core';

export const btnBase = css`
  max-height: 50px;
  font-size: 16px;
  padding: 12px;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
`;

export const btnPrimary = css`
  color: #d5c91c;
  background-color: #151515;

  &:hover {
    box-shadow: 0px 0px 5px 0px #d5c91c;
    background-color: #333333;
  }
`;

export const btnOutline = css`
  background-color: #fff;
  color: #000;
  border: 1px solid #151515;

  &:hover {
    color: #fff;
    background-color: #151515;
    box-shadow: none;
  }
`;

export const btnDisabled = css`
  background-color: #b9b9b9;
  cursor: not-allowed;
  color: #848383;

  &:hover {
    color: none;
    background-color: #b9b9b9;
    box-shadow: none;
  }
`;
