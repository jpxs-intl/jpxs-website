import Server from "../components/Server";
import { For, createResource } from "solid-js";
import { A } from "@solidjs/router";
import Button from "../components/Button";
import { ApiURL } from "../App";
type server = {
	id: number;
	name: string;
	address: string;
	port: number;
	version: number;
	gameType: number;
	players: number;
	maxPlayers: number;
	build: string;
	tps?: number;
	customMode?: { name: string };
	map: string;
	icon?: string;
	link?: string;
	description?: string;
	masterServer: string;
	latency: number;
	emoji: string;
	country: string;
};

const peopleWeHate = ["205.174.149.108"];

const [servers, { refetch }] = createResource(async () => {
	const serverList = await (await fetch(`${ApiURL}/servers`)).json();
	serverList
		.filter((server: server) => !peopleWeHate.includes(server.address))
		.sort((a: server, b: server) => {
			return a.players > b.players ? -1 : 1;
		})
		.map((server: server) => {
			server.name = `${server.emoji} ${server.name}`;

			if (server.masterServer == "jpxs") {
				server.build = `${server.build} (freeweekend)`;
				server.icon = server.icon || "https://assets.jpxs.io/img/default/freeweekend.png";
			} else {
				server.icon = server.icon || "https://assets.jpxs.io/img/default/subrosa.png";
			}
		});
	return serverList;
});

setInterval(refetch, 15000);

export type { server };
export default function ServerList() {
	return (
		<div>
			<div class="grid grid-cols-1 lg:grid-cols-2 3xl:grid-cols-3 mx-2 sm:mx-8 my-8 gap-2">
				<For each={servers()}>{(server: server) => <Server server={server}></Server>}</For>
			</div>
			<div class="my-8 mx-2 flex justify-center">
				<Button href="/">Go Back</Button>
			</div>
		</div>
	);
}
