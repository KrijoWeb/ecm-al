import { type Component } from "solid-js";

interface Props {
  title: string;
  onHover: () => void;
}

export const CategoryCard: Component<Props> = (props) => {
  return (
    <button
      class="group flex flex-1 items-center justify-center rounded-3xl hover:bg-primary-content"
      onmouseover={props.onHover}
    >
      <p class="text-center text-lg font-semibold text-primary-content group-hover:text-primary">
        {props.title}
      </p>
    </button>
  );
};
