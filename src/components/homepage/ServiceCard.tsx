import { createEffect, type Component } from "solid-js";
import ArrowButton from "../ArrowButton";

interface Props {
  img?: string;
  title: string;
  text: string;
  link: string
}

const ServiceCard: Component<Props> = (props) => {
  console.log(props.link)
  return (
    <div
      class="center flex flex-col justify-center gap-4 transition-all duration-300"
    >
      <div class="h-[35vh] w-full">
        <img src={props.img} alt="" class="m-auto h-full object-cover" />
      </div>
      <h2
        class="text-center font-semibold"
      >
        {props.title}
      </h2>
      <p class="line-clamp-3 grow-0 text-justify">{props.text}</p>
      <div class="mt-auto self-center">
        <ArrowButton link={props.link} type="right" text="Lexo me shume" />
      </div>
    </div>
  );
};
export default ServiceCard;
