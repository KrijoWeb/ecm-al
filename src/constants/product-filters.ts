export default {
  Applications: {
    type: "select",
    options: [
      "Double Deck",
      "Narrow Aisle",
      "Loading/Unloading Dock",
      "Loading/Unloading over the side",
      "Order Picking",
      "Moving",
      "Stacking",
      "Towing",
    ],
  },
  "Drive Types": {
    type: "select",
    options: ["Manual", "Elektrik", "Nafte/Gaz"],
  },
  "Product Type": {
    type: "select",
    options: [
      "Transpalete",
      "Terheqes ngarkesash",
      "Stivues per hapsira te ngushta",
      "Transpalet stivuese",
      "Komisionues Transpalet",
      "Pirun elektrik",
      "Pirun me nafte/gaz",
      "Tren terheqes per magazine",
      "Mjete automatike",
    ],
  },
  "Load Capacity": {
    type: "numeric",
  },
  "Lift Height": {
    type: "numeric",
  },
  "Explosion Protection": {
    type: "boolean",
  },
} as const;
