import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  width: 100%;
  border: ${props => (props.selected) ? "2px solid red" : "0px"};
  margin: ${props => (props.selected) ? "-2px" : "0px"};
`;

export default class Card extends React.PureComponent {
  render() {
    return <Image selected={this.props.selected} alt={this.props.id} src={require(`./assets/${this.props.id}.jpg`)}/>;
  }
}
