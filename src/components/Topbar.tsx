function Topbar(props: { page: string }) {
  return (
    <div class="w-full bg-orange text-2xl py-1 px-2">
      <a href="/">JPXS | {props.page}</a>
    </div>
  );
}

export { Topbar };
