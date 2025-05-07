import { type Component } from "solid-js";
import ArrowLeft from "../svg/arrow-left.svg?raw";
import ArrowRight from "../svg/arrow-right.svg?raw";
import ArrowEllipse from "../svg/arrow-ellipse.svg?raw";

interface Props {
  id?: string;
  type: "left" | "right" | "ellipsis";
  text?: string;
  link?: string;
  onclick?: () => void;
}

const ArrowButtonI: Component = (props) => {
  const arrow =
    props.type === "left"
      ? ArrowLeft
      : props.type === "right"
        ? ArrowRight
        : ArrowEllipse;
  return (
    <>
      {props.text ? (
        <p class="transition group-hover:-translate-x-6">{props.text}</p>
      ) : null}
      <div
        class="transition"
        classList={{
          "group-hover:translate-x-6":
            props.type === "right" || props.type === "ellipsis",
          "group-hover:-translate-x-6": props.type === "left",
        }}
      >
        <div innerHTML={arrow}></div>
      </div>
    </>
  );
};

const ArrowButton: Component = (props) => {
  return props.onclick ? (
    <button
      id={props.id}
      class="group flex items-center gap-2 transition"
      onclick={props.onclick}
    >
      <ArrowButtonI type={props.type} text={props.text} />
    </button>
  ) : (
    <a
      id={props.id}
      class="group flex items-center gap-2 transition"
      href={props.link}
    >
      <ArrowButtonI type={props.type} text={props.text} />
    </a>
  );
};
export default ArrowButton;
