import { createEffect, createSignal, type Component } from "solid-js";
import ServiceCard from "./ServiceCard";
import ArrowButton from "../ArrowButton";


const [active, setActive] = createSignal<0 | 1 | 2>(0);
export const ServiceCarouselControls: Component = () => {

  createEffect(() => console.log(active()))
  return (
    <div class="flex w-full translate-y-1/2 justify-around">
      {/* @ts-ignore */}
      <ArrowButton type="left" onclick={() => setActive((prev) => prev === 0 ? 2 : prev - 1)} />
      <ArrowButton
        type="right"
        text="NEXT"
        /* @ts-ignore */
        onclick={() => setActive((prev) => prev === 2 ? 0 : prev + 1)}
      />
    </div>
  )
}

export const ServiceCarousel: Component = () => {
  return (
    <div class="flex gap-12">
      <ServiceCard active={active() === 0} title="Servisi i pirunjeve elektrik" />
      <ServiceCard active={active() === 1} title="Servisi i pirunjeve elektrik" />
      <ServiceCard active={active() === 2} title="Servisi i pirunjeve elektrik" />
    </div>
  )
}
