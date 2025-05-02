import { type Component } from "solid-js";

interface Props {
  title: string;
  company: "hansaflex" | "hoppecke";
  onHover: () => void;
  onClick: () => void;
}

export const CategoryCard: Component<Props> = (props) => {
  return (
    <button
      class="group flex flex-1 items-center justify-center rounded-3xl border-b-2"
      classList={{
        "border-red-100 hover:bg-primary-content":
          props.company === "hansaflex",
        "border-emerald-100 hover:bg-secondary-content":
          props.company === "hoppecke",
      }}
      onmouseover={props.onHover}
      onclick={props.onClick}
    >
      <p
        class="text-center text-lg font-semibold"
        classList={{
          "text-primary-content group-hover:text-primary":
            props.company === "hansaflex",
          "text-secondary-content group-hover:text-secondary":
            props.company === "hoppecke",
        }}
      >
        {props.title}
      </p>
    </button>
  );
};
