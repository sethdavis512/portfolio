import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: `Seth Davis' Portfolio` },
    { name: "description", content: "Welcome to Seth Davis' Portfolio" },
  ];
}

export default function Home() {
  return <>Dude. Nice.</>;
}
