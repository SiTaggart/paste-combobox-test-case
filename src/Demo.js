import React from 'react';
import { Box } from '@twilio-paste/core/box';
import { Combobox } from '@twilio-paste/core/combobox';
import { Heading } from '@twilio-paste/core';

const authors = [
  'James Baldwin',
  'Adrienne Maree Brown',
  'Octavia Butler',
  'Ta-Nehisi Coates',
  'Audre Lorde',
  'Nnedi Okorafor',
];

export const Demo = () => {
  return (
    <Box margin="space40">
      <Heading as="h3" variant="heading10" data-testid="demo-heading">
        Demo
      </Heading>

      <Combobox
        items={authors}
        labelText="Select an author"
        helpText="Please select an author"
        required
        data-testid="demo-combobox"
      />
    </Box>
  );
};
