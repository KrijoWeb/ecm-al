import { createMemo, For, type Component } from "solid-js";
import productFilters from "../constants/linde-filters";
import { FilterCategory } from "./FilterCategory";
import { ProductCard } from "./ProductCard";
import { lFState, setLFState } from "../state/linde-filters";
import { produce } from "solid-js/store";
import type { ProductT } from "../types/product";

interface Props {
  products: ProductT[];
}

export const ProductGrid: Component<Props> = (props) => {
  const deProxyfiedProducts = createMemo(
    () =>
      structuredClone(JSON.parse(JSON.stringify(props.products))) as ProductT[],
  );
  const productsToDisplay = createMemo(() => {
    let products = deProxyfiedProducts();

    if (lFState.driveType.length > 0)
      products = products.filter((p) =>
        lFState.driveType.includes(p.movement_system),
      );

    if (lFState.productType.length > 0)
      products = products.filter((p) =>
        lFState.productType.includes(p.product_type),
      );

    if (lFState.loadCapacityMin)
      products = products.filter(
        (p) => p.lifting_capacity_kg >= lFState.loadCapacityMin,
      );

    if (lFState.liftHeightMin)
      products = products.filter(
        (p) => p.lifting_height_mm >= lFState.liftHeightMin,
      );

    if (lFState.explosionProtection)
      products = products.filter((p) => p.ex_protection);

    return products;
  });
  return (
    <div class="flex min-h-screen w-3/4 flex-col lg:flex-row">
      <div class="flex basis-1/4 flex-col gap-4 bg-neutral p-4">
        <input
          type="text"
          placeholder="Model Search"
          class="input rounded-none border-2 border-neutral-300 transition hover:border-neutral-400"
        />
        <FilterCategory
          title={productFilters[1].label}
          type={productFilters[1].type}
          options={productFilters[1].options}
          value={lFState.driveType}
          setValue={(driveType) => {
            setLFState(
              produce((state) => {
                state.driveType = driveType as string[];
              }),
            );
          }}
        />

        <FilterCategory
          title={productFilters[2].label}
          type={productFilters[2].type}
          options={productFilters[2].options}
          value={lFState.productType}
          setValue={(productType) => {
            setLFState(
              produce((state) => {
                state.productType = productType as string[];
              }),
            );
          }}
        />

        <FilterCategory
          title={productFilters[3].label}
          type={productFilters[3].type}
          value={lFState.loadCapacityMin}
          setValue={(minLoad) => {
            setLFState(
              produce((state) => {
                state.loadCapacityMin = minLoad as number;
              }),
            );
          }}
        />

        <FilterCategory
          title={productFilters[4].label}
          type={productFilters[4].type}
          value={lFState.liftHeightMin}
          setValue={(minLift) => {
            setLFState(
              produce((state) => {
                state.liftHeightMin = minLift as number;
              }),
            );
          }}
        />

        <FilterCategory
          title={productFilters[5].label}
          type={productFilters[5].type}
          value={lFState.explosionProtection}
          setValue={(checked) =>
            setLFState(
              produce((state) => {
                state.explosionProtection = checked as boolean;
              }),
            )
          }
        />
      </div>
      <div class="basis-3/4 bg-neutral-100 p-10 py-4">
        <div class="grid h-fit grid-cols-1 gap-8 lg:grid-cols-2">
          <For each={productsToDisplay()}>
            {(p) => (
              <ProductCard
                id={`${p.id}`}
                title={p.description}
                imgSrc={`/img/linde/${p.photo}.avif`}
                category={p.product_type}
                weight={`0 - ${p.lifting_capacity_kg}`}
                height={`0 - ${p.lifting_height_mm}`}
                price={p.price}
                available={p.available}
              />
            )}
          </For>
        </div>
      </div>
    </div>
  );
};
