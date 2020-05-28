import React from 'react';
import PropTypes from 'prop-types';
import { btnBase, btnPrimary, btnOutline, btnDisabled } from './style';
import { css } from '@emotion/core';

const Button = ({ id, outline, customCss, text, disabled, type, onClick, ...restattributes }) => {
  return (
    <button
      id={id}
      css={css`
        ${btnBase}
        ${btnPrimary}
        ${outline && btnOutline}
        ${disabled && btnDisabled}
        ${customCss}
      `}
      disabled={disabled}
      type={type}
      {...restattributes}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  id: PropTypes.string,
  outline: PropTypes.bool,
  customCss: PropTypes.object,
  text: PropTypes.string,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  onClick: PropTypes.func,
  restattributes: PropTypes.any,
};

Button.defaultProps = {
  id: '',
  outline: false,
  customCss: {},
  text: '',
  disabled: false,
  type: undefined,
  onClick: () => {},
  restattributes: {},
};

export default Button;
