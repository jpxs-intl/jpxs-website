import Server from "./Server";
import { For, createResource } from "solid-js";
const [servers] = createResource(async () => {
  return await (await fetch("/api/servers")).json();
});
export default function ServerList() {
  return (
    <div>
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
    </div>
  );
}
