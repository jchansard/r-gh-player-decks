const cardPileData = {
  cardPiles: {


    hand: {
      id: "hand",
      name: "Hand",
      cards: [],
    },

    active: {
      id: "active",
      name: "Active",
      cards: [],
    },

    discard: {
      id: "discard",
      name: "Discarded",
      cards: [],
      hasPickRandomButton: true
    },

    lost: {
      id: "lost",
      name: "Lost",
      cards: [],
    },
  },

  order: ['hand', 'active', 'discard', 'lost']
}

export default cardPileData;
