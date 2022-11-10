import React from 'react';
import { fireEvent } from '@testing-library/react';
import { render, screen } from '@testing-library/react';
import { Theme } from '@twilio-paste/core/theme';

import { Demo } from './Demo';

it('should render heading', () => {
  render(
    <Theme.Provider theme="default">
      <Demo />
    </Theme.Provider>
  );
  expect(screen.getByTestId('demo-heading')).toHaveTextContent('Demo');
});

it('should render combobox', () => {
  render(
    <Theme.Provider theme="default">
      <Demo />
    </Theme.Provider>
  );
  expect(screen.getByTestId('demo-combobox')).toBeInTheDocument();
});

it('should render open combobox', () => {
  render(
    <Theme.Provider theme="default">
      <Demo />
    </Theme.Provider>
  );
  fireEvent.click(screen.getByRole('textbox'));
  expect(screen.getByRole('combobox').getAttribute('aria-expanded')).toBe(
    'true'
  );
});
