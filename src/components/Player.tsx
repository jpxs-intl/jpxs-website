function dateToString(date: Date, relative?: boolean) {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  if (relative) {
    const rtf1 = new Intl.RelativeTimeFormat("en", { style: "short" });
    if (new Date().getFullYear() - year > 0) {
      return rtf1.format(-(new Date().getFullYear() - year), "year");
    } else if (new Date().getMonth() + 1 - month > 0) {
      return rtf1.format(-(new Date().getMonth() + 1 - month), "month");
    } else if (new Date().getDate() - day > 0) {
      return rtf1.format(-(new Date().getDate() - day), "day");
    } else if (new Date().getHours() - date.getHours() > 0) {
      return rtf1.format(-(new Date().getHours() - date.getHours()), "hour");
    } else {
      return rtf1.format(
        -(new Date().getMinutes() - date.getMinutes()),
        "minute"
      );
    }
  }
  return `${month}/${day}/${year}`;
}
export default function Player(props: {
  name: string;
  gameId: number;
  phoneNumber: number;
  firstSeen: Date;
  lastSeen: Date;
  steamId: number;
}) {
  return (
    <div class="bg-bg px-4 mx-2 my-2 w-72">
      <h1 class="text-2xl font-bold">{props.name}</h1>
      <h2>Phone Number: {props.phoneNumber}</h2>
      <h2>Game Id: {props.gameId}</h2>
      <h2>Steam ID: {props.steamId}</h2>
      <h2>First seen at {dateToString(props.firstSeen)}</h2>
      <h2>Last seen {dateToString(props.lastSeen, true)}</h2>
    </div>
  );
}
