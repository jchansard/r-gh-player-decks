import React from 'react';
import styled from 'styled-components';
import Card from './card';

const Container = styled.div`
  min-height: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-gap: 4px 8px;
  justify-items: center;
`;

const CardContainer = styled.div``;


export default class CardGrid extends React.Component {

  render() {
    const clickHandler = this.props.clickHandler || ((e, id) => null);
    return (
      <Container>
        {this.props.cards.map((cardId, index) => {
          const isSelected = (Array.from(this.props.selected || []).indexOf(cardId) > -1);
          return (
            <CardContainer key={index} onClick={(e) => clickHandler(e, cardId)}>
              <Card key={index} id={cardId} selected={isSelected}/>
            </CardContainer>
          )
        })}
      </Container>
    )
  }
}
