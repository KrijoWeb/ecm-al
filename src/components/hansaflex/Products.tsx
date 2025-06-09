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
      class="flex h-[75vh] items-center  border-2 bg-[#ECF1F4]"
      classList={{
        "border-primary": props.company === "hansaflex",
        " border-secondary": props.company === "hoppecke",
      }}
    >
      <div class="my-auto flex h-2/3 basis-7/12 flex-col items-center justify-center gap-4">
        <figure class="animate-appear h-full">
          <img
            src={`/img/${props.company}/${categories[selectedCategory()]?.Foto
              }.webp`}
            class="h-full"
          />
        </figure>
        <h2 class="animate-appear text-2xl font-semibold">
          {categories[selectedCategory()]?.Kategoria}
        </h2>
        <button
          class="btn"
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
        class="flex h-full basis-5/12 flex-col"
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
