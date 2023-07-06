import { Topbar } from "../components/Topbar";

export default function Error() {
  const hash = window.location.hash.substring(1, window.location.hash.length);
  const args = hash.split(";");
  // default values
  const props: { [key: string]: string } = {
    title: "Oopsies, something went wrong!",
    description: "An error has occurred, we just don't know what.",
    button: "Go back to main page",
    href: "/",
  };
  for (const prop of args) {
    // requires the following arguments in this format: #title=mytitle;description=mydescription;button=mybutton;href=https%3A%2F%2Fwww.example.com
    const splitProp = prop.split("=");
    const identifier = splitProp[0];
    const val = splitProp[1];
    if (val == undefined) {
      continue;
    }
    props[identifier] = val;
    console.log(`${identifier} has value of ${val}`);
  }
  return (
    <div>
      <Topbar page="Error" />
      <div class="text-center">
        <h1 class="text-6xl glow my-2">{decodeURIComponent(props.title)}</h1>
        <h2 class="text-2xl">{decodeURIComponent(props.description)}</h2>
        <div class="my-8 mx-2">
          <a
            class="bg-bg px-8 py-2  text-xl hover:bg-lightorange"
            href={decodeURIComponent(props.href)}
          >
            {decodeURIComponent(props.button)}
          </a>
        </div>
      </div>
    </div>
  );
}
