import { For, Match, Switch, type Component } from "solid-js";
type TValue = string[] | number | boolean;
interface Props {
  title: string;
  type: "select" | "numeric" | "boolean";
  options?: readonly string[];
  value: TValue;
  setValue: (newVal: TValue) => void;
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
            <div class="flex flex-row items-center gap-4 p-4">
              <input
                type="checkbox"
                class="checkbox-primary checkbox rounded-none"
                checked={props.value as boolean}
                onChange={(e) => {
                  props.setValue(e.currentTarget.checked);
                }}
              />
              <a>{props.title}</a>
            </div>
          </Match>
          <Match when={props.type === "select"}>
            <div class="flex flex-col gap-2 p-4">
              <For each={props.options}>
                {(option, i) => (
                  <div class="flex flex-row items-center gap-4">
                    <input
                      type="checkbox"
                      class="checkbox-primary checkbox rounded-none"
                      checked={(props.value as string[]).includes(option)}
                      onChange={(e) => {
                        const temp = [...(props.value as string[])] as string[];
                        if (!e.currentTarget.checked)
                          temp.splice(temp.indexOf(option), 1);
                        else temp.push(option);
                        console.log(temp);
                        props.setValue(temp);
                      }}
                    />
                    <a>{option}</a>
                  </div>
                )}
              </For>
            </div>
          </Match>
          <Match when={props.type === "numeric"}>
            <div class="join p-4">
              <label class="form-control">
                <div class="label">
                  <span class="label-text">{props.title}</span>
                </div>
                <input
                  type="number"
                  placeholder="Min"
                  class="input join-item input-bordered input-primary"
                  value={props.value as number}
                  onChange={(e) =>
                    props.setValue(parseInt(e.currentTarget.value) ?? 0)
                  }
                  style="
                      input::-webkit-outer-spin-button,
                      input::-webkit-inner-spin-button {
                        -webkit-appearance: none;
                        margin: 0;
                      }

                      input[type=number] {
                        -moz-appearance: textfield;
                      }"
                />
              </label>
            </div>
          </Match>
        </Switch>
      </div>
    </div>
  );
};
