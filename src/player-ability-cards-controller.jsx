import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import styled from 'styled-components';
import CardPile from './card-pile';
import AbilityDeckBuilder from './ability-deck-builder';
import cardPileData from './data/card-piles';
import swCards from './data/cards';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: white;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
`;

export default class PlayerAbilityCardsController extends React.Component {

  constructor(props) {
    super(props);

    this.height = this.props.height || "100%";
    this.width = this.props.width || "100%;"
  }

  state = {
    ...cardPileData,
    deckBuilt: false
  }

  onDragEnd = (result) => {
    const { draggableId, source, destination } = result;

    if (!destination) return;
    if ((source.droppableId === destination.droppableId)
        && (source.index === destination.index)) return;

    const fromPile = this.state.cardPiles[source.droppableId];
    const toPile = this.state.cardPiles[destination.droppableId];
    this._moveCard(draggableId, fromPile.cards, source.index, toPile.cards, destination.index);

    this.setState({
      cardPiles: {
        ...this.state.cardPiles,
        [fromPile.id]: fromPile,
        [toPile.id]: toPile
        }
    });
    return;
  }

  deckBuilt = (e, selectedCards) => {
    this.setState({
      deckBuilt: true,
      cardPiles: {
        ...this.state.cardPiles,
        hand: {
          ...this.state.cardPiles.hand,
          cards: selectedCards
        }

      }
    });
  }

  _moveCard(draggableId, fromPile, fromIndex, toPile, toIndex) {
    fromPile.splice(fromIndex, 1);
    toPile.splice(toIndex, 0, draggableId);
  }

  render() {
    if (!this.state.deckBuilt) {
      return (
        <AbilityDeckBuilder cards={swCards} deckBuiltHandler={this.deckBuilt}></AbilityDeckBuilder>
      )
    }
    else {
      return (
        <DragDropContext onDragEnd={this.onDragEnd}>
          <Container height={this.height} width={this.width}>
            {this.state.order.map((pileId, index) => (
              <CardPile width={`${100 / this.state.order.length}%`} key={pileId} cardPile={this.state.cardPiles[pileId]}></CardPile>
            ))}
          </Container>
        </DragDropContext>
      )
    }
  }
}
