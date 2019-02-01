import React from 'react';
import styled, { css } from 'styled-components';
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

const onCardSelected = () => css`
    border: 2px red solid;
    margin: -2px;
`;

export default class CardGrid extends React.Component {

  constructor(props) {
    super(props);

    this.clickHandler = this.props.clickHandler || ((e, id) => null);
  }

  render() {
    return (
      <Container>
        {this.props.cards.map((cardId, index) => {
          const isSelected = (Array.from(this.props.selected || []).indexOf(cardId) > -1);
          return (
            <CardContainer key={index} onClick={(e) => this.clickHandler(e, cardId)}>
              <Card key={index} id={cardId} selected={isSelected} selectionCallback={onCardSelected}/>
            </CardContainer>
          )
        })}
      </Container>
    )
  }
}
