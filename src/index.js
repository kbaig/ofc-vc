import React from 'react';
import ReactDOM from 'react-dom';
import {
  Deck,
  FlexBox,
  Box,
  FullScreen,
  Markdown,
  Progress,
  Slide,
} from 'spectacle';
import content from './content';
import TitleSlide from './components/TitleSlide';

// SPECTACLE_CLI_THEME_START
const theme = {};
// SPECTACLE_CLI_THEME_END

// SPECTACLE_CLI_TEMPLATE_START
const template = ({ slideNumber, numberOfSlides }) => (
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
      {slideNumber + 1} / {numberOfSlides}
    </Box>
  </FlexBox>
);
// SPECTACLE_CLI_TEMPLATE_END

const Presentation = () => {
  return (
    <Deck loop theme={theme} template={template}>
      {content.map((c, i) => {
        const Component = c.component;

        console.log({ Component, content: c.content });

        return (
          <Slide>
            <Component key={i} {...c.content} />
          </Slide>
        );
      })}
    </Deck>
  );
};

{
}
ReactDOM.render(<Presentation />, document.getElementById('root'));
