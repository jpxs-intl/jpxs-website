import { A } from "@solidjs/router";
import Button from "../components/Button";
export default function Home() {
  return (
    <div class="h-[100vh]">
      <div class="text-4xl ml-4 mt-4 flex justify-center">
        <div>
          <h1 class="text-lightorange inline">jpxs</h1>
          <h2 class="inline">.io</h2>
        </div>
      </div>
      <div class="flex justify-center gap-8 py-32">
        <Button href="/live">Server List</Button>
        <Button href="/player">Player Search</Button>
      </div>
    </div>
  );
}
