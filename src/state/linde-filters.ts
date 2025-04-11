import { createStore, produce } from "solid-js/store";
import lindeFiltersC from "../constants/linde-filters";

interface LFFiltersStore {
  driveType: string[];
  productType: string[];
  loadCapacityMin: number;
  liftHeightMin: number;
  explosionProtection: boolean;
}

export const [lFState, setLFState] = createStore<LFFiltersStore>({
  driveType: [],
  productType: [],
  loadCapacityMin: 0,
  liftHeightMin: 0,
  explosionProtection: false,
});
