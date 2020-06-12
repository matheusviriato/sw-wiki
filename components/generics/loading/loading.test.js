import React from 'react';
import { render } from '@testing-library/react';
import Loading from '.';

describe('Loading tests', () => {
  describe('Render tests', () => {
    it('should match to snapshot', () => {
      const { baseElement } = render(<Loading />);

      expect(baseElement).toMatchSnapshot();
    });
  });
});
