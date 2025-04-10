import { createMemo, For } from "solid-js";
import { lindeProducts } from "../constants/linde-products";
import productFilters from "../constants/linde-filters";
import { FilterCategory } from "./FilterCategory";
import { ProductCard } from "./ProductCard";

export const ProductGrid = () => {
  const productsToDisplay = createMemo(() => lindeProducts);
  return (
    <div class="flex min-h-screen w-3/4 flex-col lg:flex-row">
      <div class="flex basis-1/4 flex-col gap-4 bg-neutral p-4">
        <input
          type="text"
          placeholder="Model Search"
          class="input rounded-none border-2 border-neutral-300 transition hover:border-neutral-400"
        />
        <For each={productFilters}>
          {(pf) => (
            <FilterCategory
              title={pf.label}
              type={pf.type}
              //@ts-ignore
              options={pf.options}
            />
          )}
        </For>
      </div>
      <div class="basis-3/4 bg-neutral-100 p-10 py-4">
        <div class="grid h-full grid-cols-1 gap-8 lg:grid-cols-2">
          <For each={productsToDisplay()}>
            {(p) => (
              <ProductCard
                id={`${p.id}`}
                title={p.description}
                imgSrc={`/img/linde/${p.photo}.avif`}
                category={p.product_type}
                weight={p.lifting_capacity_kg}
                height={p.lifting_height_mm}
              />
            )}
          </For>
        </div>
      </div>
    </div>
  );
};
