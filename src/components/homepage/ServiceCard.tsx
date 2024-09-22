import { createEffect, type Component } from "solid-js";
import ArrowButton from "../ArrowButton";

interface Props {
  img?: string;
  active?: boolean;
  title: string;
}

const ServiceCard: Component<Props> = (props) => {
  return (
    <div
      class="center flex flex-col gap-4 transition-all duration-300 "
      classList={{ "flex-[2_1_0]": props.active, "flex-1": !props.active }}
    >
      <div class="h-[35vh] w-full">
        <img src="/img/service.jpeg" alt="" class="h-full object-cover" />
      </div>
      <h2
        class="text-center font-semibold"
        classList={{ "text-xl": !props.active, "text-2xl": props.active }}
      >
        {props.title}
      </h2>
      <p class="line-clamp-3 grow-0 text-justify">
        Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
        enim labore culpa sint ad nisi Lorem pariatur mollit ex esse
        exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit
        nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor
        minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure
        elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor
        Lorem duis laboris cupidatat officia voluptate. Culpa proident
        adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod.
        Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim.
        Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa
        et culpa duis.
      </p>
      <div class="self-center">
        <ArrowButton link="services" type="right" text="Lexo me shume" />
      </div>
    </div>
  );
};
export default ServiceCard;
