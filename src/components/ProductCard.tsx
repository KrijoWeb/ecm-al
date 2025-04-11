import Weight from "../svg/weight.svg?raw";
import Height from "../svg/height.svg?raw";
import type { Component } from "solid-js";
interface Props {
  id: string;
  title: string;
  category: string;
  weight: string;
  height: string;
  imgSrc: string;
}

export const ProductCard: Component<Props> = (props) => {
  return (
    <a
      href={`/products/${props.id}`}
      class="flex cursor-pointer shadow-sm shadow-gray-500 transition hover:scale-105 "
    >
      <div class="basis-1/4 bg-neutral">
        <img class="h-full w-full" src={props.imgSrc} />
      </div>
      <div class="flex basis-3/4 flex-col gap-2 bg-white p-2">
        <h3 class="font-xl font-bold text-primary">{props.title}</h3>
        <div class="badge badge-neutral">{props.category}</div>
        <div class="flex gap-2">
          <div class="h-6 w-6">
            <div innerHTML={Weight} />
          </div>
          <p>{props.weight} kg</p>
        </div>
        <div class="flex gap-2">
          <div class="h-6 w-6">
            <div innerHTML={Height} />
          </div>
          <p>{props.height} mm</p>
        </div>
      </div>
    </a>
  );
};
