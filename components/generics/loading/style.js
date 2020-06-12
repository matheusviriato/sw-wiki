import { css, keyframes } from '@emotion/core';

export const spinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const loadingWrapper = css`
  @media (min-width: 768px) {
    width: calc(100% - 180px);
    top: 0px;
    height: 100%;
  }
  top: 60px;
  position: fixed;
  width: 100%;
  height: calc(100% - 60px);
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

export const loadingImg = css`
  @media (min-width: 768px) {
    width: 150px;
    height: 150px;
    border-radius: 80px;
  }
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background-color: #fff;
  animation: ${spinAnimation} 2s linear infinite;
`;
