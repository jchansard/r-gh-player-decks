import React from 'react';
import styled from 'styled-components';
import CardList from './card-list';

const Container = styled.div`
  margin: auto;
  width: 90%;
  border: 1px solid black;
  background-color: white;
`;
const Title = styled.h1`
  text-align: center;
`;

const CardListContainer = styled.div`

`;

export default class AbilityDeckBuilder extends React.Component {
  state = {
    selectedCards: []
  }

  clicked = (e,id) => {
    //todo: performance?
    let selectedCards = Array.from(this.state.selectedCards);
    const index = (this.state.selectedCards.indexOf(id));
    if (index > -1) {
      selectedCards.splice(index, 1);
    }
    else {
      selectedCards.push(id);
    }

    this.setState({
      selectedCards: selectedCards,
    })
  }

  deckBuilt = (e) => {
    if (this.props.deckBuiltHandler) {
      this.props.deckBuiltHandler(e, this.state.selectedCards);
    }
  }

  render() {
    return (
      <Container>
        <Title>Select Cards</Title>
        <CardListContainer>
          <CardList gridMode={true} cards={this.props.cards} cardClickHandler={this.clicked} selected={this.state.selectedCards}/>
        </CardListContainer>
        <button onClick={this.deckBuilt}>Done</button>
      </Container>
    )
  }
}
