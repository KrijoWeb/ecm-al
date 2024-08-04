import { type Component } from "solid-js";

interface Props {
  title: string;
  onHover: () => void;
}

export const CategoryCard: Component<Props> = (props) => {
  return (
    <button class="rounded-3xl bg-primary flex-1 flex items-center justify-center hover:bg-primary/75" onmouseover={props.onHover}>
      <p class="text-center text-white">
        {props.title}
      </p>
    </button>
  )
}
