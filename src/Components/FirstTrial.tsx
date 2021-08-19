import React, { ReactElement, useState } from "react";
import { Istate } from "../App";
import AddToList from "./AddToList";
import List from "./List";

interface Props {}

export default function FirstTrial({}: Props): ReactElement {
  const [people, setPeople] = useState<Istate["people"]>([
    {
      age: 32,
      name: "Levi",
      notes: "Fidget Spinner",
      url: "https://i.pinimg.com/originals/15/2c/86/152c86196f4b6e5e4a6b501fa542f2a5.png",
    },
    {
      age: 23,
      name: "Mikasa",
      notes: "Rule 34",
      url: "https://i.pinimg.com/originals/aa/f3/10/aaf310d49ada94d872038ef3284466f0.png",
    },
  ]);
  return (
    <div className="App">
      <div style={{ marginTop: "5rem" }}>People invited to my party</div>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}
