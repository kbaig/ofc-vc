import React from 'react';
import TitleSlide from './TitleSlide';
import {
  Slide,
  Heading,
  Layout,
  Text,
  Image,
  UnorderedList,
  ListItem,
  FlexBox,
} from 'spectacle';

export default ({ title, bullets, takeFullSpace }) =>
  bullets ? (
    <FlexBox flexDirection='column' alignItems='center'>
      <Heading size={2} fit textColor='tertiary' margin='0 0 50px 0'>
        {title}
      </Heading>

      {
        <UnorderedList>
          {bullets.map((text, i) => (
            <ListItem key={i} margin='0 5px'>
              {text}
            </ListItem>
          ))}
        </UnorderedList>
      }
    </FlexBox>
  ) : (
    <TitleSlide takeFullSpace={takeFullSpace}>{title}</TitleSlide>
  );
