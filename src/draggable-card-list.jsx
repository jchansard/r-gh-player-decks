import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';
import Card from './card';

const Container = styled.div`
  min-height: 100%;
  margin: 0 auto;
`;

const CardContainer = styled.div`
  height: 50px;
  :last-child {
    height: 100%;
  }
`;

export default class DraggableCardList extends React.Component {

  render() {
    const { provided, domRef } = this.props;
    return (
      <Container ref={domRef} {...provided.droppableProps}>
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
