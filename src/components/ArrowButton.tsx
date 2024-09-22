import { type Component } from "solid-js";
import ArrowLeft from "../svg/arrow-left.svg?raw";
import ArrowRight from "../svg/arrow-right.svg?raw";
import ArrowEllipse from "../svg/arrow-ellipse.svg?raw";

interface Props {
  type: "left" | "right" | "ellipsis";
  text?: string;
  link?: string;
  onclick?: () => void;
}

const ArrowButtonI: Component<Props> = (props) => {
  const arrow =
    props.type === "left"
      ? ArrowLeft
      : props.type === "right"
        ? ArrowRight
        : ArrowEllipse;
  return (
    <>
      {
        props.text ? (
          <p class="transition group-hover:-translate-x-6">{props.text}</p>
        ) : null
      }
      < div
        class="transition"
        classList={{
          "group-hover:translate-x-6":
            props.type === "right" || props.type === "ellipsis",
          "group-hover:-translate-x-6": props.type === "left",
        }
        }
      >
        <div innerHTML={arrow}></div>
      </div >
    </>
  )
}

const ArrowButton: Component<Props> = (props) => {
  return (props.onclick ?
    <button
      class="flex items-center gap-2 transition group"
      onclick={props.onclick}
    >
      <ArrowButtonI type={props.type} text={props.text} />
    </button>
    :
    <a
      class="flex items-center gap-2 transition group"
      href={props.link}>
      <ArrowButtonI type={props.type} text={props.text} />
    </a>
  );
};
export default ArrowButton;
