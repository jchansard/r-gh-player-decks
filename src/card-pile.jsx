import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import DraggableCardList from './draggable-card-list';

const Container = styled.div`
  width: ${props => props.width};
  min-width: 15em;
  max-width: 18em;
  border: 1px solid black;
  background-color: inherit;
  overflow: hidden;
`;

export default class CardPile extends React.Component {

  render() {
    return (
      <Container pileId={this.props.cardPile.id} width={this.props.width}>
        <Droppable droppableId={this.props.cardPile.id} direction={this.props.cardPile.direction}>
          {(provided) => (
              <DraggableCardList title={this.props.cardPile.name} cards={this.props.cardPile.cards} gridMode={false} domRef={provided.innerRef} provided={provided} />
          )}
        </Droppable>
      </Container>
    )
  }
}
