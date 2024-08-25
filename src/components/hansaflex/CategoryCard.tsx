import { type Component } from "solid-js";

interface Props {
  title: string;
  onHover: () => void;
}

export const CategoryCard: Component<Props> = (props) => {
  return (
    <button class="group rounded-3xl flex-1 flex items-center justify-center hover:bg-primary-content" onmouseover={props.onHover}>
      <p class="text-center text-primary-content group-hover:text-primary font-semibold text-lg">
        {props.title}
      </p>
    </button>
  )
}
