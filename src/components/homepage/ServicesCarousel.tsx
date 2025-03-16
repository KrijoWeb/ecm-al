import { createEffect, createSignal, type Component } from "solid-js";
import ServiceCard from "./ServiceCard";
import ArrowButton from "../ArrowButton";

const [active, setActive] = createSignal<number>(0);
export const ServiceCarouselControls: Component = () => {
  createEffect(() => console.log(active()));
  return (
    <div class="flex w-full translate-y-1/2 justify-around">
      {/* @ts-ignore */}
      <ArrowButton
        type="left"
        onclick={() => setActive((prev) => (prev === 0 ? 2 : prev - 1))}
      />
      <ArrowButton
        type="right"
        text="NEXT"
        /* @ts-ignore */
        onclick={() => setActive((prev) => (prev === 2 ? 0 : prev + 1))}
      />
    </div>
  );
};

export const ServiceCarousel: Component = () => {
  return (
    <div class="flex gap-12">
      <ServiceCard
        active={active() === 0}
        img="/img/service.webp"
        title="Shërbime të mirëmbajtjes preventive të programuar"
        text="Këto shërbime janë të dizenjuara për të mbajtur mjetet tuaja në gjendje të mire teknike dhe optimale pune por edhe per ti paraprire dhe shmangur difektet e mundshme dhe kostot e tyre. Bazuar ne Standartet e mundësuar nga Linde, për çdo makineri apo pajisje të prodhuar, rekomandohet kryerja e shërbimeve të mirëmbajtjes sipas një programi të caktuar..."
      />
      <ServiceCard
        active={active() === 1}
        img="/img/foto_2.webp"
        title="Shërbime të mirëmbajtjes ‘sipas kërkesës’"
        text="Ky shërbim ofron mundësinë e ndërhyrjes për çdo problem që mund të lindë në mjetet tuaja, në çdo moment që kërkohet. Shërbimi i mirëmbajtjes ‘sipas kërkesës’ është fleksibël dhe mund të realizohet kurdo që të jetë e nevojshme, duke siguruar që mjetet tuaja të kthehen në funksionim sa më shpejt dhe me efikasitet maksimal"
      />
      <ServiceCard
        active={active() === 2}
        img="/img/foto_2.webp"
        title="Shërbime të mirëmbajtjes dhe riparimit të tipit ‘paketë e plotë’"
        text="Për ata që kërkojnë mbështetje të plotë, ky shërbim ofron një paketë të plotë mirëmbajtjeje dhe riparimi, që përfshin të gjitha aspektet e nevojshme për të mbajtur mjetet në kushte optimale. Nga kontrolli i sistemit hidraulik, elektrike, deri te kontrollet e mekanizmave të ngritjes dhe të drejtimit, ky shërbim i plotë siguron funksionimin e pandërprerë të mjeteve dhe parandalon çdo problem të mundshëm që mund të ndodhi në të ardhmen."
      />
    </div>
  );
};
