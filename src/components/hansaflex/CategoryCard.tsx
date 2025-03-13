import { type Component } from "solid-js";

interface Props {
  title: string;
  onHover: () => void;
  onClick: () => void;
}

export const CategoryCard: Component<Props> = (props) => {
  return (
    <button
      class="group flex flex-1 items-center justify-center rounded-3xl hover:bg-primary-content"
      onmouseover={props.onHover}
      onclick={props.onClick}
    >
      <p class="text-center text-lg font-semibold text-primary-content group-hover:text-primary">
        {props.title}
      </p>
    </button>
  );
};
