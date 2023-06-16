import type { JSXElement } from "solid-js";
import type { Component } from "solid-js";

export default function Server(props: {
  id: number;
  name: string;
  address: string;
  port: number;
  version: number;
  gameType: number;
  players: number;
  maxPlayers: number;
  build: string;
}) {
  return (
    <div class="bg-bg w-full my-2 grid grid-cols-8">
      <h1>{props.name}</h1>
      <h2>
        {props.players}/{props.maxPlayers} players online
      </h2>
      <h2>
        on{" "}
        {props.gameType == 4
          ? "World"
          : props.gameType == 3
          ? "Round"
          : props.gameType == 7
          ? "Versus"
          : props.gameType == 2
          ? "Race"
          : props.gameType == 5
          ? "Eliminator"
          : "Undefined"}{" "}
        mode.
      </h2>
      <h2>
        Version: {props.version}
        {props.build}
      </h2>
    </div>
  );
}
