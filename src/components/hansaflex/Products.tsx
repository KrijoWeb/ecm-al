import { createEffect, createSignal, type Component } from "solid-js";
import { CategoryCard } from "./CategoryCard";
import { animate, stagger } from "motion";


let categories = Array.from({ length: 10 }, (v, k) => ({
  name: `Category ${k + 1}`,
  description: "Ut enim dolore tortor a suscipit est vulputate tristique adipiscing.",
  image: "/img/produkt_shop.jpeg"
}));

export const HansaflexProducts: Component = () => {
  const [selectedCategory, setSelectedCategory] = createSignal(0)
  createEffect(() => {
    console.log("sadf")
    if (selectedCategory() !== null) {
      animate(
        ".animate-appear",
        { opacity: ["0", "1"] },
        { duration: 0.75, delay: stagger(0.1) },
      );
    }
  });
  return (
    <div class="flex h-[75vh] rounded-3xl border-primary border-2 items-center">
      <div class="flex flex-col items-center justify-center gap-4 basis-7/12 h-2/3 my-auto">
        <figure class="animate-appear h-3/4">
          <img src={categories[selectedCategory()]?.image} class="h-full" />
        </figure>
        <h2 class="animate-appear">{categories[selectedCategory()]?.name}</h2>
        <p class="animate-appear">{categories[selectedCategory()]?.description}</p>
      </div>
      <div class="flex flex-col basis-5/12 h-full">
        {categories.map((e, i) => (
          <CategoryCard title={e.name} onHover={() => setSelectedCategory(i)} />
        ))}
      </div>
    </div>
  )
}
