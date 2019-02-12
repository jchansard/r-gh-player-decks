import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';
import Card from './card';

const DropArea = styled.div`
  height: 100%;
  min-height: 50px;
`;

const CardFlexBox = styled.div`
  display: flex;
  flex-direction: ${props => (props.direction === "horizontal") ? "row" : "column" }
`;

const CardContainer = styled.div`
  /*height: 50px;
  width: inherit;*/
`;

const Title = styled.h1`
  text-align: center;
  margin-top: .25em;
  margin-bottom: .2em;
`;

const onCardSelectedAnimation = keyframes`
  0% { transform: rotateZ(0deg); }
  30% { transform: rotateZ(-5deg); }
  70% { transform: rotateZ(5deg); }
  100% { transform: rotateZ(0deg); }
  `;
const onCardSelected = () => css`
  animation: ${onCardSelectedAnimation} .25s ease 2;
`;

export default class DraggableCardList extends React.Component {

  render() {
    const { provided, domRef } = this.props;
    return (
      <DropArea ref={domRef} {...provided.droppableProps}>
        <Title>{this.props.title}</Title>
        <CardFlexBox direction={this.props.direction}>
        {this.props.cards.map((cardId, index) => {
          return (
              <Draggable key={index} draggableId={cardId} index={index}>
                {(provided) => (
                  <CardContainer key={index} index={index} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                    <Card
                      key={index}
                      id={cardId}
                      selected={(this.props.selected === index)}
                      selectionCallback={onCardSelected}
                      selectionEndCallback={this.props.selectionEndCallback}
                    />
                  </CardContainer>
                )}
              </Draggable>
          )
        })}
        {provided.placeholder}
        </CardFlexBox>
        {this.props.children}
      </DropArea>
    )
  }
}
