import { A } from "@solidjs/router";
import Button from "../components/Button";
import discord from "../assets/discord-mark-blue.svg";
import forum from "../assets/forum-icon.svg";
import github from "../assets/github-mark-white.svg";

function Icon(props: { src: string; href: string }) {
  return (
    <a href={props.href} target="__blank">
      <img src={props.src} height="32" width="32" />
    </a>
  );
}
export default function Home() {
  return (
    <div>
      <div class="text-4xl ml-4 mt-4 flex justify-center">
        <div>
          <h1 class="text-lightorange inline">jpxs</h1>
          <h2 class="inline">.io</h2>
        </div>
      </div>
      <div class="flex justify-center gap-8 pt-32">
        <Button href="/live">Server List</Button>
        <Button href="/player">Player Search</Button>
      </div>
      <div class="flex justify-center py-2 gap-8">
        <Icon href="https://discord.jpxs.io" src={discord} />
        <Icon href="https://forums.jpxs.io" src={forum} />
        <Icon href="https://github.com/jpxs-intl" src={github} />
      </div>
    </div>
  );
}
