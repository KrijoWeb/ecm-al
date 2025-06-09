import { type Component } from "solid-js";

interface Props {
  title: string;
  company: "hansaflex" | "hoppecke";
  onHover: () => void;
}

export const CategoryCard: Component<Props> = (props) => {
  return (
    <button
      class="group flex flex-1 items-center justify-center  border-b-2"
      classList={{
        "hover:border-red-100 hover:bg-primary bg-primary-content":
          props.company === "hansaflex",
        "hover:border-emerald-100 hover:bg-secondary bg-secondary-content":
          props.company === "hoppecke",
      }}
      onmouseover={props.onHover}
    >
      <p
        class="text-center text-lg font-semibold"
        classList={{
          "group-hover:text-primary-content text-primary":
            props.company === "hansaflex",
          "group-hover:text-secondary-content text-secondary":
            props.company === "hoppecke",
        }}
      >
        {props.title}
      </p>
    </button>
  );
};
