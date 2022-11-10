import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Theme } from '@twilio-paste/core/theme';
import { Badge } from '@twilio-paste/core/badge';

it('should render button', () => {
  const mockHandler = jest.fn();
  render(
    <Theme.Provider theme="default">
      <Badge as="button" variant="decorative10" onClick={mockHandler}>
        badge
      </Badge>
    </Theme.Provider>
  );
  expect(screen.getByRole('button')).toHaveTextContent('badge');
});

it('should click button', () => {
  const mockHandler = jest.fn();
  render(
    <Theme.Provider theme="default">
      <Badge as="button" variant="decorative10" onClick={mockHandler}>
        badge
      </Badge>
    </Theme.Provider>
  );
  fireEvent.click(screen.getByRole('button'));
  expect(mockHandler).toHaveBeenCalled();
});
