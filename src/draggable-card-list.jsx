import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';
import Card from './card';

const Container = styled.div`
  height: 100%;
  min-height: 50px;
`;

const CardContainer = styled.div`
  height: 50px;
  width: inherit;
`;

const Title = styled.h1`
  text-align: center;
  margin-top: .25em;
  margin-bottom: .2em;
`;

export default class DraggableCardList extends React.Component {

  render() {
    const { provided, domRef } = this.props;
    return (
      <Container ref={domRef} {...provided.droppableProps}>
        <Title>{this.props.title}</Title>
        {this.props.cards.map((cardId, index) => {
          return (
            <Draggable key={index} draggableId={cardId} index={index}>
              {(provided) => (
                <CardContainer key={index} index={index} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                  <Card key={index} id={cardId}/>
                </CardContainer>
              )}
            </Draggable>
          )
        })}
        {provided.placeholder}
      </Container>
    )
  }
}
