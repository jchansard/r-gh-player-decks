import React from 'react';
import styled from 'styled-components';


const Image = styled.img`
  width: 100%;

  ${props => {
      if (props.selected && props.selectionCallback) { return props.selectionCallback(); }
  }}
`;

export default class Card extends React.PureComponent {

  render() {
    const animationEndCallback = (this.props.selectionEndCallback) ? this.props.selectionEndCallback : (() => null);
    return <Image onAnimationEnd={animationEndCallback} selected={this.props.selected} selectionCallback={this.props.selectionCallback} alt={this.props.id} src={require(`./assets/${this.props.id}.jpg`)}/>;
  }
}
