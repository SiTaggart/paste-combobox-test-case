import React from 'react';
import { render, screen } from '@testing-library/react';
import { fireEvent } from '@testing-library/react';
import { Theme } from '@twilio-paste/core/theme';
import { Button } from '@twilio-paste/core/button';

it('should render button', () => {
  render(
    <Theme.Provider theme="default">
      <Button variant="primary">button</Button>
    </Theme.Provider>
  );
  expect(screen.getByRole('button')).toHaveTextContent('button');
});

it('should click button', () => {
  const mockHandler = jest.fn();
  render(
    <Theme.Provider theme="default">
      <Button variant="primary" onClick={mockHandler}>
        button
      </Button>
    </Theme.Provider>
  );
  fireEvent.click(screen.getByRole('button'));
  expect(mockHandler).toHaveBeenCalled();
});
