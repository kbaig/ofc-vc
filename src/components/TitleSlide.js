import React from 'react';
import { Slide, Heading, FlexBox, Box } from 'spectacle';

export default ({ children, takeFullSpace, ...rest }) => (
  <FlexBox height='100%' flexDirection='column' alignItems='center'>
    {takeFullSpace ? (
      <Box width='100%' height='100%'>
        {children}
      </Box>
    ) : (
      <Heading color='secondary'>{children}</Heading>
    )}
  </FlexBox>
);
