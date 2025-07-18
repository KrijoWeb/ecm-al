import { createEffect, createSignal, type Component } from "solid-js";
import { CategoryCard } from "./CategoryCard";
import { animate, stagger } from "motion";
import { hansaflexCategories } from "../../constants/hansaflex-categories";
import { hoppeckeCategories } from "../../constants/hoppecke-categories";
interface Props {
  company: "hansaflex" | "hoppecke";
}
export const ProductCategories: Component<Props> = (props) => {
  const categories = props.company === "hoppecke" ? hoppeckeCategories : hansaflexCategories;
  const [selectedCategory, setSelectedCategory] = createSignal(0);
  createEffect(() => {
    if (selectedCategory() !== null) {
      animate(
        ".animate-appear",
        { opacity: ["0", "1"] },
        { duration: 1, delay: stagger(0.15) },
      );
    }
  });
  return (
    <div
      class="flex flex-col lg:flex-row h-auto lg:h-[75vh] items-center border-2 bg-[#ECF1F4] lg:justify-between"
      classList={{
        "border-primary": props.company === "hansaflex",
        " border-secondary": props.company === "hoppecke",
      }}
    >
      <div class="my-auto flex h-64 lg:h-2/3 basis-full lg:basis-6/12 flex-col items-center justify-center gap-2 lg:gap-4 p-4 lg:p-0">
        <figure class="animate-appear h-full mx-auto">
          <img
            src={`/img/${props.company}/${categories[selectedCategory()]?.Foto}.webp`}
            class="h-full object-contain"
          />
        </figure>
        <h2 class="animate-appear text-lg lg:text-2xl font-semibold text-center">
          {categories[selectedCategory()]?.Kategoria}
        </h2>
        <button
          class="btn btn-sm lg:btn-md"
          classList={{
            "btn-primary": props.company === "hansaflex",
            "btn-secondary": props.company === "hoppecke",
          }}
          onClick={() => {
            window.open(categories[selectedCategory()]?.Link);
          }}
        >Me Shume</button>
      </div>
      <div
        class="flex h-full w-full basis-full lg:basis-5/12 flex-col"
        classList={{
          "bg-primary": props.company === "hansaflex",
          "bg-secondary": props.company === "hoppecke",
        }}
      >
        {categories.map((e, i) => (
          <CategoryCard
            title={e.Kategoria}
            company={props.company}
            onHover={() => setSelectedCategory(i)}
          />
        ))}
      </div>
    </div>
  );
};
