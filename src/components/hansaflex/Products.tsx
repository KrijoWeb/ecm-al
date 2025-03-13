import { createEffect, createSignal, type Component } from "solid-js";
import { CategoryCard } from "./CategoryCard";
import { animate, stagger } from "motion";

const categories = [
  {
    Kategoria: "Tuba hidraulik",
    Foto: "01_Tuba_Hidraulik",
    Link: "https://shop.hansa-flex.de/en_GB/hydraulic-hoses/c/webcat_HF_SCH_HY",
  },
  {
    Kategoria: "Tuba industrial",
    Foto: "02_Tuba_Industrial",
    Link: "https://shop.hansa-flex.de/en_GB/industrial-hoses/c/webcat_HF_SCH_IND",
  },
  {
    Kategoria: "Rakorderite e tubave hidraulik/industrial",
    Foto: "03_Rakorderi_Hidr",
    Link: "https://shop.hansa-flex.de/en_GB/hose-fittings/c/webcat_HF_SAR",
  },
  {
    Kategoria: "Xhunto hidraulike",
    Foto: "04_Xhunto",
    Link: "https://shop.hansa-flex.de/en_GB/couplings/c/webcat_HF_KUP",
  },
  {
    Kategoria: "Rakorderi e tubave metalik",
    Foto: "05_Rakorderi_metal",
    Link: "https://shop.hansa-flex.de/en_GB/tube-fittings-iso-8434-1/c/webcat_HF_ROV",
  },
  {
    Kategoria: "Tubat metalik",
    Foto: "06_Tubat_metalik",
    Link: "https://shop.hansa-flex.de/en_GB/tubes/c/webcat_HF_ROR",
  },
  {
    Kategoria: "Adaptor",
    Foto: "07_Adaptor",
    Link: "https://shop.hansa-flex.de/en_GB/adapters/c/webcat_HF_ADA",
  },
  {
    Kategoria: "Fllanxha",
    Foto: "08_Flanxh",
    Link: "https://shop.hansa-flex.de/en_GB/flanges/c/webcat_HF_FLA",
  },
  {
    Kategoria: "Rubineta",
    Foto: "09_Rubineta",
    Link: "https://shop.hansa-flex.de/en_GB/ball-valves/c/webcat_HF_KGH",
  },
  {
    Kategoria: "Teknoligjia e montimit",
    Foto: "10_Montim",
    Link: "https://shop.hansa-flex.de/en_GB/fastening-technology/c/webcat_HF_BEF",
  },
  {
    Kategoria: "Teknologji uji dhe pastrimi",
    Foto: "11_Uje",
    Link: "https://shop.hansa-flex.de/en_GB/water-and-cleaning-technology/c/webcat_HF_WTK",
  },
  {
    Kategoria: "Teknologjia e ajrit te komprimuar",
    Foto: "12_Ajer",
    Link: "https://shop.hansa-flex.de/en_GB/compressed-air-technology/c/webcat_HF_DLT",
  },
  {
    Kategoria: "Komponentet hidraulik",
    Foto: "13_Komp",
    Link: "https://shop.hansa-flex.de/en_GB/hydraulic-components/c/webcat_HF_HKO",
  },
  {
    Kategoria: "Filtrimi",
    Foto: "14_Filter",
    Link: "https://shop.hansa-flex.de/en_GB/filtration/c/webcat_HF_FIL",
  },
  {
    Kategoria: "Teknologjia e matjes",
    Foto: "15_Matje",
    Link: "https://shop.hansa-flex.de/en_GB/measuring-technology/c/webcat_HF_MES",
  },
  {
    Kategoria: "Guanicionet",
    Foto: "16_Guanicione",
    Link: "https://shop.hansa-flex.de/en_GB/sealing-equipment/c/webcat_HF_DIT",
  },
  {
    Kategoria: "Aksesore dhe vegla",
    Foto: "17_Aksesor",
    Link: "https://shop.hansa-flex.de/en_GB/accessories-and-tools/c/webcat_HF_ZUW",
  },
];

export const HansaflexProducts: Component = () => {
  const [selectedCategory, setSelectedCategory] = createSignal(0);
  createEffect(() => {
    console.log("sadf");
    if (selectedCategory() !== null) {
      animate(
        ".animate-appear",
        { opacity: ["0", "1"] },
        { duration: 1, delay: stagger(0.15) },
      );
    }
  });
  return (
    <div class="flex h-[75vh] items-center rounded-3xl border-2 border-primary bg-[#ECF1F4]">
      <div class="my-auto flex h-2/3 basis-7/12 flex-col items-center justify-center gap-4  ">
        <figure class="animate-appear h-full">
          <img src={`/img/hansaflex/${categories[selectedCategory()]?.Foto}.jpg`} class="h-full" />
        </figure>
        <h2 class="animate-appear text-2xl font-semibold">
          {categories[selectedCategory()]?.Kategoria}
        </h2>
      </div>
      <div class="flex h-full basis-5/12 flex-col rounded-3xl bg-primary">
        {categories.map((e, i) => (
          <CategoryCard title={e.Kategoria} onHover={() => setSelectedCategory(i)} onClick={() => { window.open(categories[selectedCategory()]?.Link) }} />
        ))}
      </div>
    </div>
  );
};
