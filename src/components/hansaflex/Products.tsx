import { createEffect, createSignal, type Component } from "solid-js";
import { CategoryCard } from "./CategoryCard";
import { animate, stagger } from "motion";

let categories = Array.from({ length: 10 }, (v, k) => ({
  name: `Category ${k + 1}`,
  description:
    "Ut enim dolore tortor a suscipit est vulputate tristique adipiscing.",
  image: "/img/produkt_shop.jpeg",
}));

export const HansaflexProducts: Component = () => {
  const [selectedCategory, setSelectedCategory] = createSignal(0);
  createEffect(() => {
    console.log("sadf");
    if (selectedCategory() !== null) {
      animate(
        ".animate-appear",
        { opacity: ["0", "1"] },
        { duration: 1, delay: stagger(0.15) },
      );
    }
  });
  return (
    <div class="flex h-[75vh] items-center rounded-3xl border-2 border-primary">
      <div class="my-auto flex h-2/3 basis-7/12 flex-col items-center justify-center gap-4">
        <figure class="animate-appear h-3/4">
          <img src={categories[selectedCategory()]?.image} class="h-full" />
        </figure>
        <h2 class="animate-appear text-2xl font-semibold">
          {categories[selectedCategory()]?.name}
        </h2>
        <p class="animate-appear text-sm font-thin">
          {categories[selectedCategory()]?.description}
        </p>
      </div>
      <div class="flex h-full basis-5/12 flex-col rounded-3xl bg-primary">
        {categories.map((e, i) => (
          <CategoryCard title={e.name} onHover={() => setSelectedCategory(i)} />
        ))}
      </div>
    </div>
  );
};
