import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

const Container = styled.div`
  ${props => (props.gridMode) ?
    `height: 100%;`
    :
    `max-height: 100px;`
  }

  & img {
    width: 100%;
    border: ${props => (props.selected) ? "2px solid red" : "0px"};
    margin: ${props => (props.selected) ? "-2px" : "0px"};
  }
`;

export class Card extends React.PureComponent {
  clicked = (e) => {
    if (this.props.onClick) {
      this.props.onClick(e, this.props.id);
    }
  }

  render() {
    const CardContainer = (props) => {
      console.dir(this.props);
      const provided = props.provided || {};
      return (
        <Container ref={props.innerRef} selected={props.selected} onClick={this.clicked} gridMode={this.props.gridMode} {...provided.draggableProps} {...provided.dragHandleProps}>
          <img alt={this.props.id} src={require(`./assets/${this.props.id}.jpg`)}/>
        </Container>

    )};
    return (this.props.draggable) ? (
        <Draggable draggableId={this.props.id} index={this.props.index}>
          {(provided) => (
            <CardContainer innerRef={provided.innerRef} provided={provided} selected={this.props.selected}/>
          )}
        </Draggable>
    )
    : <CardContainer selected={this.props.selected}/>;
  }
}
