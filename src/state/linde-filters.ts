import { createStore } from "solid-js/store";
import lindeFiltersC from "../constants/linde-filters";

export const lindeFilters = createStore({
  driveType: [],
  productType: [],
  loadCapacity: [NaN, NaN],
  liftHeight: [NaN, NaN],
  explosionProtection: false,
});
