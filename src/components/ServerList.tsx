import Server from "./Server";
import { For, createResource } from "solid-js";
import { Topbar } from "./Topbar";

const [servers] = createResource(async () => {
  const serverList = await (await fetch("/api/servers")).json();
  serverList.sort(
    (
      a: {
        id: number;
        name: string;
        address: string;
        port: number;
        version: number;
        gameType: number;
        players: number;
        maxPlayers: number;
        build: string;
      },
      b: {
        id: number;
        name: string;
        address: string;
        port: number;
        version: number;
        gameType: number;
        players: number;
        maxPlayers: number;
        build: string;
      }
    ) => {
      return a.players > b.players ? -1 : 1;
    }
  );
  return serverList;
});
export default function ServerList() {
  return (
    <div>
      <Topbar></Topbar>
      <For each={servers()}>
        {(server: {
          id: number;
          name: string;
          address: string;
          port: number;
          version: number;
          gameType: number;
          players: number;
          maxPlayers: number;
          build: string;
        }) => (
          <Server
            id={server.id}
            name={server.name}
            address={server.address}
            port={server.port}
            version={server.version}
            gameType={server.gameType}
            players={server.players}
            maxPlayers={server.maxPlayers}
            build={server.build}
          ></Server>
        )}
      </For>
      <div class="my-8 mx-2">
        <a href="/" class="bg-bg px-8 py-2  text-xl hover:bg-lightorange">
          Go Back
        </a>
      </div>
    </div>
  );
}
