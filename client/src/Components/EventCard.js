import React from "react";
import PeaEventCard from "./PeaEventCard";

// const AVATAR =
//   "https://i.pinimg.com/originals/0a/dd/87/0add874e1ea0676c4365b2dd7ddd32e3.jpg";
const PEOPLE = [
  {
    src: "https://avatars.dicebear.com/v2/avataaars/example.svg",
    name: "Yeoman",
    tag: "@whatsup yeo",
    onClick: () => alert("Followed Yeoman!")
  },
  {
    src: "https://avatars.dicebear.com/v2/avataaars/example2.svg",
    name: "GGWP",
    tag: "@goodgamewellplay",
    onClick: () => alert("Followed GGWP!")
  },
  {
    src: "https://avatars.dicebear.com/v2/avataaars/example3.svg",
    name: "Sawasdee",
    tag: "@helloTH",
    onClick: () => alert("Followed Sawasdee!")
  }
];

const Preview = props => (
  <PeaEventCard
    name={props.name}
    people={PEOPLE}
    image={"https://picsum.photos/1950"}
    range={props.range}
    price={45}
    time={props.time}
    category={props.category}
    venue={props.venue}
    id={props.id}
    // images={[AVATAR, AVATAR, AVATAR, AVATAR, AVATAR]}
  />
);

export default Preview;
