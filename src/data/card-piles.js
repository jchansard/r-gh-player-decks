const cardPileData = {
  cardPiles: {
    hand: {
      id: "hand",
      name: "Hand",
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

    active: {
      id: "active",
      name: "Active",
      cards: [],
      direction: "horizontal",
    },

    selected: {
      id: "selected",
      name: "Selected",
      cards: [],
      direction: "horizontal",
    },

    sidebar: ["hand","discard","lost"],
    topbar: ["selected","active"],
  }
};

export default cardPileData;
