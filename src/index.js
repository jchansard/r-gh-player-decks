import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import PlayerAbilityCardsController from './player-ability-cards-controller';
import CardPile from './card-pile'

class App extends React.Component {

  onDragEnd(result) {}
  render() {
    return (
        <PlayerAbilityCardsController></PlayerAbilityCardsController>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
