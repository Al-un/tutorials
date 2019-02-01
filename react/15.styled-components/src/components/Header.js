import React from 'react';
import styled from 'styled-components';
import { media } from './styles';

// ${media.desktop`background-color: '${props => props.theme.primary}';`}
// ${media.tablet`background-color: 'darkred';`}
// ${media.mobile`background-color: 'darkgreen';`}

const HeaderWrapper = styled.header`
  width: 100%;
  height: 40px;
  padding: 10px;
  color: #dadada;
  font-size: 30px;
  background: ${props => props.theme.primary || 'darkblue'};

  ${media.desktop`background: ${props => props.theme.primary || 'darkcyan'};`}
  ${media.tablet`background: darkred;`}
  ${media.mobile`background: orangered;`}
`;

export default class Header extends React.Component {
  render() {
    return <HeaderWrapper>{this.props.children}</HeaderWrapper>;
  }
}
