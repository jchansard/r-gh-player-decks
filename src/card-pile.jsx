import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import DraggableCardList from './draggable-card-list';

const Container = styled.div`
  position: relative;
  width: ${props => props.width};
  min-width: 15em;
  /*max-width: 18em;*/
  border: 1px solid black;
  background-color: inherit;
  overflow: hidden;
`;

const Button = styled.button`
  position: absolute;
  bottom: 0px;
`;

export default class CardPile extends React.Component {
  state = {
    selectedIndex: -1,
  }

  selectRandomCard() {
    const newIndex =  Math.floor(Math.random() * this.props.cardPile.cards.length);
    if (newIndex === this.state.selectedIndex) { this.setState({selectedIndex: -1}); }
    this.setState({selectedIndex: newIndex});
  }

  unselectCard = () => {
    this.setState({selectedIndex: -1});
  }

  render() {
    const cardPile = this.props.cardPile;
    let PickRandomButton = (cardPile.hasPickRandomButton) ? <Button onClick={() => this.selectRandomCard()}>Pick Random</Button> : null;
    return (
      <Container pileId={cardPile.id} width={this.props.width}>
        <Droppable droppableId={cardPile.id} direction={cardPile.direction}>
          {(provided) => (
              <DraggableCardList
                title={cardPile.name}
                cards={cardPile.cards}
                gridMode={false}
                selected={this.state.selectedIndex}
                selectionEndCallback={this.unselectCard}
                domRef={provided.innerRef}
                provided={provided}
                direction={cardPile.direction}
              >
              {PickRandomButton}
              </DraggableCardList>
          )}
        </Droppable>
      </Container>
    )
  }
}
