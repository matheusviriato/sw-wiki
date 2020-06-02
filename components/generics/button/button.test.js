import React from 'react';
import { render } from '@testing-library/react';
import Button from '.';

describe('Button tests', () => {
  describe('Render tests', () => {
    it('should match to snapshot', () => {
      const { baseElement } = render(<Button text="Some button" />);

      expect(baseElement).toMatchSnapshot();
    });
  });
});
