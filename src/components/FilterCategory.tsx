import { Match, Switch, type Component } from "solid-js";

interface Props {
  title: string;
  type: "select" | "numeric" | "boolean";
  options?: string[];
}

export const FilterCategory: Component<Props> = (props) => {
  return (
    <div class="dropdown dropdown-right">
      <div
        tabindex="0"
        role="button"
        class="flex cursor-pointer items-center gap-2 border-b-2 border-b-white p-2"
      >
        <div></div>
        <h2 class="text-lg font-bold">{props.title}</h2>
        <p class="ml-auto text-xl font-bold text-primary">+</p>
      </div>
      <div
        tabindex="0"
        class="dropdown-content z-[1] w-80 rounded-none bg-neutral-100 p-2 shadow"
      >
        <Switch>
          <Match when={props.type === "boolean"}>
            <div class="flex flex-row items-center gap-4">
              <input
                type="checkbox"
                class="checkbox-primary checkbox rounded-none"
              />
              <a>{props.title}</a>
            </div>
          </Match>
        </Switch>
        <div class="flex flex-col gap-2 p-4">
          <div class="flex flex-row items-center gap-4">
            <input
              type="checkbox"
              class="checkbox-primary checkbox rounded-none"
            />
            <a>Item 1</a>
          </div>
        </div>
      </div>
    </div>
  );
};
