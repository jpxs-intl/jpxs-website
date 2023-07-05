import { Topbar } from "./Topbar";
import { A } from "@solidjs/router";

export default function Home() {
  return (
    <div>
      <Topbar />
      <div class="text-4xl ml-4 mt-4 mb-10">
        <h1 class="text-lightorange inline">jpxs</h1>
        <h2 class="inline">.international</h2>
      </div>
      <A
        href="/live"
        class="bg-bg px-8 py-2 my-8 mx-2 text-xl hover:bg-lightorange"
      >
        Server List
      </A>
      <A
        href="/player"
        class="bg-bg px-8 py-2 my-8 mx-2 text-xl hover:bg-lightorange"
      >
        Player Search
      </A>
    </div>
  );
}
