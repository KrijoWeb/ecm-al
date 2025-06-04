import Weight from "../svg/weight.svg?raw";
import Height from "../svg/height.svg?raw";
import Euro from "../svg/euro.svg?raw";
import { Show, type Component } from "solid-js";
interface Props {
  id: string;
  title: string;
  category: string;
  cat: "linde" | "own";
  weight: string;
  height: string;
  imgSrc: string;
  price?: number;
  available?: boolean;
}

export const ProductCard: Component = (props) => {
  return (
    <a
      href={
        props.cat === "linde"
          ? `/products/linde/${props.id}`
          : `/products/${props.id}`
      }
      class="flex cursor-pointer rounded-none shadow-sm shadow-gray-500 transition hover:scale-105"
    >
      <div class="basis-1/4 bg-neutral">
        <img class="h-full w-full object-contain" src={props.imgSrc} />
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
        <Show when={props.price}>
          <div class="flex gap-2">
            <div class="h-6 w-6">
              <div innerHTML={Euro} />
            </div>
            <p>{props.price}</p>
          </div>
        </Show>
        <Show when={props.available !== undefined}>
          <Show when={props.available}>
            <div class="flex gap-2">
              <div class="h-6 w-6 rounded-full bg-success" />
              <p>Available</p>
            </div>
          </Show>
          <Show when={!props.available}>
            <div class="flex gap-2">
              <div class="h-6 w-6 rounded-full bg-error" />
              <p>Not Available</p>
            </div>
          </Show>
        </Show>
      </div>
    </a>
  );
};
