import React from 'react';
import styled from 'styled-components';

import Header from './Header';
import Box from './Box';

const Title = styled.h1`
  font-size: 1.5em;
  color: palevioletred;
`;

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.theme.secondary || 'palevioletred'};
  background: ${props => props.theme.tertiary || 'papayawhip'};
  border: 1px solid ${props => props.theme.secondary || 'palevioletred'};
  border-radius: 3px;
`;

const Thing = styled.button`
  color: blue;
  ::before {
    content: '🚀';
  }
  :hover {
    color: red;
  }
`;

const Link = styled.a`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  background: papayawhip;
  color: palevioletred;
`;

const Icon = styled.svg`
  flex: none;
  transition: fill 0.25s;
  width: 48px;
  height: 48px;

  ${Link}:hover & {
    fill: rebeccapurple;
  }
`;

const Label = styled.span`
  display: flex;
  align-items: center;
  line-height: 1.2;

  &::before {
    content: '◀';
    margin: 0 10px;
  }
`;

export const Content = _props => {
  return (
    <div>
      <Header>Some app header</Header>
      <Title>Hey, that's the title</Title>
      <Box>Box 1</Box>
      <Box button="pouet">Box 2</Box>
      <Box>Box 3</Box>
      <hr />
      <Input defaultValue="@probablyup" type="text" />
      <Input defaultValue="@geelen" type="text" inputColor="rebeccapurple" />
      <Thing>Hello world!</Thing>
      <Link href="#">
        <Icon viewBox="0 0 20 20">
          <path d="M10 15h8c1 0 2-1 2-2V3c0-1-1-2-2-2H2C1 1 0 2 0 3v10c0 1 1 2 2 2h4v4l4-4zM5 7h2v2H5V7zm4 0h2v2H9V7zm4 0h2v2h-2V7z" />
        </Icon>
        <Label>Hovering my parent changes my style!</Label>
      </Link>
    </div>
  );
};

export default Content;
