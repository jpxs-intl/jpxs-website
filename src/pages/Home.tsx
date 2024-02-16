import { A } from "@solidjs/router";
import Button from "../components/Button";
import discord from "../assets/discord-mark-blue.svg";
import forum from "../assets/forum-icon.svg";
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
        <a href="https://discord.jpxs.io">
          <img src={discord} height="32" width="32" />
        </a>
        <a href="https://forums.jpxs.io">
          <img src={forum} height="32" width="32" />
        </a>
      </div>
    </div>
  );
}
