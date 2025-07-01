export default [
  {
    label: "Llojet e motorit",
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
    label: "Llojet e motorit",
    code: "driveType",
    type: "select",
    options: ["Manual", "Elektrik", "Nafte/Gaz"],
  },
  {
    label: "Llojet e produktit",
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
    label: "Kapaciteti ngrites",
    code: "loadCapacity",
    type: "numeric",
  },
  {
    label: "Lartesia ngritese",
    code: "liftHeight",
    type: "numeric",
  },
  {
    label: "Mbrojtje nga shperthime",
    code: "explosionProtection",
    type: "boolean",
  },
] as const;
