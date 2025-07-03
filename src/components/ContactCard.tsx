import SilhouetteIcon from "../svg/silhoutte.svg?raw";
interface Props {
  name: string;
  title: string;
  tel: string;
  fax?: string;
  mobile: string;
  email: string;
}
export const ContactCard = (props: Props) => {
  const svg = (SilhouetteIcon)

  return (<div class="card items-start border-2 border-neutral-200 bg-base-100 shadow-xl">
    <figure class="size-36 p-2" innerHTML={SilhouetteIcon}></figure>
    <div class="card-body mt-auto justify-normal gap-2">
      <span class="w-full border-b-4 border-primary text-xl font-semibold">
        {props.name}</span
      >
      <span class="text-lg">{props.title}</span>
      <a class="font-thin" href={`tel:${props.tel.trim().replaceAll("-", "")}`}
      >Tel: {props.tel}</a
      >
      {props.fax ? <p class="font-thin">Fax: {props.fax}</p> : null}
      <a class="font-thin" href={`tel:${props.mobile.trim().replaceAll("-", "")}`}>
        Mob: {props.mobile}
      </a>
      <a class="font-thin" href={`mailto:${props.email}`}>Email: {props.email}</a>
    </div>
  </div>)
}
