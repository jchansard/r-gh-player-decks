import React from 'react';
import styled from 'styled-components';
import { Card, CardDraggable } from './card';

const Container = styled.div`
  min-height: 100%;
  margin: 0 auto;

  ${props => {
    if (props.gridMode) {
      return `
        display: grid;
        grid-template-columns: repeat(8, 1fr);
        grid-gap: 4px 8px;
        justify-items: center;
      `;
    }
  }}
`;


export default class CardList extends React.Component {

  render() {
    const { provided, domRef } = this.props;
    const droppableProps = {
      ...provided,
      ref: domRef
    }
    const draggable = (provided !== undefined);
    // todo: again perf..
    return (
      <Container gridMode={this.props.gridMode} {...droppableProps}>
        {this.props.cards.map((cardId, index) => {
          // todo: || []
          const isSelected = (Array.from(this.props.selected || []).indexOf(cardId) > -1);
          return (
            <Card key={cardId} id={cardId} index={index} gridMode={this.props.gridMode} draggable={draggable} onClick={this.props.cardClickHandler} selected={isSelected}/>
          )
        })}
        {(provided) ? provided.placeholder : null}
      </Container>
    )
  }
}
