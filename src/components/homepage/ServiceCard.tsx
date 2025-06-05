import { createEffect, type Component } from "solid-js";
import ArrowButton from "../ArrowButton";

interface Props {
  img?: string;
  active?: boolean;
  title: string;
  text: string;
}

const ServiceCard: Component<Props> = (props) => {
  return (
    <div
      class="center flex flex-col justify-center gap-4 transition-all duration-300"
      classList={{ "flex-[2_1_0]": props.active, "flex-1": !props.active }}
    >
      <div class="h-[35vh] w-full">
        <img src={props.img} alt="" class="m-auto h-full object-cover" />
      </div>
      <h2
        class="text-center font-semibold"
        classList={{ "text-xl": !props.active, "text-2xl": props.active }}
      >
        {props.title}
      </h2>
      <p class="line-clamp-3 grow-0 text-justify">{props.text}</p>
      <div class="mt-auto self-center">
        <ArrowButton link="services" type="right" text="Lexo me shume" />
      </div>
    </div>
  );
};
export default ServiceCard;
