import React from 'react';
import ReactDOM from 'react-dom';
import { Deck, FlexBox, Box, FullScreen, Markdown, Progress } from 'spectacle';
import mdContent from './slides.md';

// SPECTACLE_CLI_THEME_START
const theme = {};
// SPECTACLE_CLI_THEME_END

// SPECTACLE_CLI_TEMPLATE_START
const template = () => (
  <FlexBox
    justifyContent='space-between'
    position='absolute'
    bottom={0}
    width={1}
  >
    <Box padding='0 1em'>
      <FullScreen />
    </Box>
    <Box padding='1em'>
      <Progress />
    </Box>
  </FlexBox>
);
// SPECTACLE_CLI_TEMPLATE_END

const Presentation = () => {
  return (
    <Deck loop theme={theme} template={template}>
      <Markdown containsSlides>{mdContent}</Markdown>
    </Deck>
  );
};

ReactDOM.render(<Presentation />, document.getElementById('root'));
