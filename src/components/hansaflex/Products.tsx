import { createEffect, createSignal, type Component } from "solid-js";
import { CategoryCard } from "./CategoryCard";
import { animate, stagger } from "motion";
import { hansaflexCategories } from "../../constants/hansaflex-categories";
interface Props {
  company: "hansaflex" | "hoppecke";
}
export const ProductCategories: Component<Props> = (props) => {
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
    <div
      class="flex h-[75vh] items-center rounded-3xl border-2 bg-[#ECF1F4]"
      classList={{
        "border-primary": props.company === "hansaflex",
        " border-secondary": props.company === "hoppecke",
      }}
    >
      <div class="my-auto flex h-2/3 basis-7/12 flex-col items-center justify-center gap-4">
        <figure class="animate-appear h-full">
          <img
            src={`/img/hansaflex/${hansaflexCategories[selectedCategory()]?.Foto}.webp`}
            class="h-full"
          />
        </figure>
        <h2 class="animate-appear text-2xl font-semibold">
          {hansaflexCategories[selectedCategory()]?.Kategoria}
        </h2>
      </div>
      <div
        class="flex h-full basis-5/12 flex-col rounded-3xl"
        classList={{
          "bg-primary": props.company === "hansaflex",
          "bg-secondary": props.company === "hoppecke",
        }}
      >
        {hansaflexCategories.map((e, i) => (
          <CategoryCard
            title={e.Kategoria}
            company={props.company}
            onHover={() => setSelectedCategory(i)}
            onClick={() => {
              window.open(hansaflexCategories[selectedCategory()]?.Link);
            }}
          />
        ))}
      </div>
    </div>
  );
};
