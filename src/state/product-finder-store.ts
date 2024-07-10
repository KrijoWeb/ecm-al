import { createStore } from "solid-js/store";

type StoreFilterT = {
  productCategory: "new" | "rental";
};

export default createStore<StoreFilterT>({
  productCategory: "new",
});
