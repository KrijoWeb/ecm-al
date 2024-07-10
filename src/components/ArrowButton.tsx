import { type Component } from "solid-js";
import ArrowLeft from "../svg/arrow-left.svg?raw";
import ArrowRight from "../svg/arrow-right.svg?raw";
import ArrowEllipse from "../svg/arrow-ellipse.svg?raw";

interface Props {
  type: "left" | "right" | "ellipsis";
  text?: string;
  onclick?: () => void
}

const ArrowButton: Component<Props> = (props) => {
  const arrow = props.type === "left" ? ArrowLeft : props.type === "right" ? ArrowRight : ArrowEllipse;
  return (<button class="group flex items-center gap-2 transition" onclick={() => props.onclick}>
    {props.text ? <p class=" transition group-hover:-translate-x-6" >{props.text}</p> : null}
    <div class="transition " classList={{ "group-hover:translate-x-6": props.type === "right" || props.type === "ellipsis", "group-hover:-translate-x-6": props.type === "left" }}>
      <div innerHTML={arrow}></div>
    </div>
  </button>
  )
}
export default ArrowButton;
