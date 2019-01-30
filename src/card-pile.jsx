import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import CardList from './card-list';

const Container = styled.div`
  width: 200px;
  margin: 1em;
  border: 1px solid black;
  background-color: white;
`;
const Title = styled.h1``;
export default class CardPile extends React.Component {

  render() {
    return (
      <Container pileId={this.props.cardPile.id}>
        <Title>{this.props.cardPile.name}</Title>
        <Droppable droppableId={this.props.cardPile.id} direction={this.props.cardPile.direction}>
          {(provided) => (
            <CardList cards={this.props.cardPile.cards} gridMode={false} domRef={provided.innerRef} provided={provided}/>
          )}
        </Droppable>
      </Container>
    )
  }
}
