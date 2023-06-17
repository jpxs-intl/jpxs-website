import type { Component } from "solid-js";
import type { JSXElement } from "solid-js";
import { createSignal } from "solid-js";
var [menuText, setMenuText] = createSignal("Home");
function Topbar() {
  return (
    <div class="w-full bg-orange text-2xl py-1 px-2">JPXS | {menuText()}</div>
  );
}

export { Topbar, setMenuText };
