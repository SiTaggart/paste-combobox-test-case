import React from 'react';
import { render, screen } from '@testing-library/react';
import { fireEvent } from '@testing-library/react';
import { Theme } from '@twilio-paste/core/theme';
import { Switch } from '@twilio-paste/core/switch';

it('should render switch', () => {
  render(
    <Theme.Provider theme="default">
      <Switch>test</Switch>
    </Theme.Provider>
  );
  expect(screen.getByRole('switch')).toBeInTheDocument();
});
