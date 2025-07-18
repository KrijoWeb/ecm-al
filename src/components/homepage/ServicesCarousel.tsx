import { type Component } from "solid-js";
import ServiceCard from "./ServiceCard";


export const ServiceCarousel: Component = () => {
  return (
    <div class="flex flex-col lg:flex-row items-stretch gap-6 lg:gap-12">
      <ServiceCard
        img="/img/service_2.avif"
        title="Shërbime të mirëmbajtjes preventive të programuar"
        text="Këto shërbime janë të dizenjuara për të mbajtur mjetet tuaja në gjendje të mire teknike dhe optimale pune por edhe per ti paraprire dhe shmangur difektet e mundshme dhe kostot e tyre. Bazuar ne Standartet e mundësuar nga Linde, për çdo makineri apo pajisje të prodhuar, rekomandohet kryerja e shërbimeve të mirëmbajtjes sipas një programi të caktuar..."
        link="services#service_1"
      />
      <ServiceCard
        img="/img/service_3.webp"
        title="Shërbime të mirëmbajtjes ‘sipas kërkesës’"
        text="Ky shërbim ofron mundësinë e ndërhyrjes për çdo problem që mund të lindë në mjetet tuaja, në çdo moment që kërkohet. Shërbimi i mirëmbajtjes ‘sipas kërkesës’ është fleksibël dhe mund të realizohet kurdo që të jetë e nevojshme, duke siguruar që mjetet tuaja të kthehen në funksionim sa më shpejt dhe me efikasitet maksimal"
        link="services#service_2"
      />
      <ServiceCard
        img="/img/service_4.webp"
        title="Shërbime të mirëmbajtjes dhe riparimit të tipit ‘paketë e plotë’"
        text="Për ata që kërkojnë mbështetje të plotë, ky shërbim ofron një paketë të plotë mirëmbajtjeje dhe riparimi, që përfshin të gjitha aspektet e nevojshme për të mbajtur mjetet në kushte optimale. Nga kontrolli i sistemit hidraulik, elektrike, deri te kontrollet e mekanizmave të ngritjes dhe të drejtimit, ky shërbim i plotë siguron funksionimin e pandërprerë të mjeteve dhe parandalon çdo problem të mundshëm që mund të ndodhi në të ardhmen."
        link="services#service_3"
      />
    </div>
  );
};
