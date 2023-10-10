import { A } from "@solidjs/router";
import { JSX } from "solid-js";
export default function (props: {
  href: string;
  children?: JSX.Element;
  class?: string;
}) {
  return (
    <A
      href={props.href}
      class={`bg-crust rounded-xl px-8 py-2 my-8 text-xl hover:bg-lightorange ${props.class}`}
    >
      {props.children}
    </A>
  );
}
