import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  background: ${props => (props.primary ? 'palevioletred' : 'white')};
  color: ${props => (props.primary ? 'white' : 'palevioletred')};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const NoButton = styled(Button)`
  color: white;
  background-color: darkcyan;
`;

const BoxDiv = styled.div`
    width: 300px;
    border: 2px solid ${props => props.theme.secondary || 'darkblue'}
    border-radius: 12px;
    padding: 1

    & > .content{
        padding: 1em;
    }
    & > .footer{
        text-align: center;
        padding: 1em;
    }
`;

export default class Box extends React.Component {
  render() {
    return (
      <BoxDiv>
        <div className="content">{this.props.children}</div>
        <div className="footer">
          {this.props.button ? (
            <Button primary>{this.props.button}</Button>
          ) : (
            <NoButton as="span">no button</NoButton>
          )}
        </div>
      </BoxDiv>
    );
  }
}

Box.propTypes = {
  button: propTypes.string
};
