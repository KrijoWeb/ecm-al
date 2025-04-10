export default [
  {
    label: "Applications",
    code: "applications",
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
  {
    label: "Drive Types",
    code: "driveType",
    type: "select",
    options: ["Manual", "Elektrik", "Nafte/Gaz"],
  },
  {
    label: "Product Type",
    code: "productType",
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
  {
    label: "Load Capacity",
    code: "loadCapacity",
    type: "numeric",
  },
  {
    label: "Lift Height",
    code: "liftHeight",
    type: "numeric",
  },
  {
    label: "Explosion Protection",
    code: "explosionProtection",
    type: "boolean",
  },
] as const;
