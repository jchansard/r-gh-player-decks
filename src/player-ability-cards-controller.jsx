import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import styled from 'styled-components';
import CardPile from './card-pile.jsx';
import CardGrid from './card-grid.jsx';
import AbilityDeckBuilder from './ability-deck-builder';
import cardPileData from './data/card-piles';
import swCards from './data/cards';

const Sidebar = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: white;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
`;

const Topbar = styled.div`
  display: inline-block;
  float: right;
  display: flex;
  /*flex-wrap: wrap;*/
  background-color: white;
  height: 200px;
  width: 100%;
  border: 1px solid black;
`;

export default class PlayerAbilityCardsController extends React.Component {

  constructor(props) {
    super(props);

    this.sidebarHeight = this.props.sidebarHeight || "100%";
    this.sidebarWidth = this.props.sidebarWidth || "100%;"
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
          <Topbar>
            {this.state.cardPiles.topbar.map((pileId, index) => (
              <CardPile width={`${100 / this.state.cardPiles.topbar.length}%`} key={pileId} cardPile={this.state.cardPiles[pileId]}/>
            ))}
          </Topbar>
          <Sidebar height={this.sidebarHeight} width={this.sidebarWidth}>
            {this.state.cardPiles.sidebar.map((pileId, index) => (
              <CardPile width={`${100 / this.state.cardPiles.sidebar.length}%`} key={pileId} cardPile={this.state.cardPiles[pileId]}/>
            ))}
          </Sidebar>
        </DragDropContext>
      )
    }
  }
}
