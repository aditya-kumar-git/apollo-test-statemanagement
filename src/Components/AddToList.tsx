import { useState } from "react";
import { Istate } from "../App";

interface IProps {
  people: Istate["people"];
  setPeople: React.Dispatch<
    React.SetStateAction<
      {
        age: number;
        name: string;
        notes?: string | undefined;
        url: string;
      }[]
    >
  >;
}

const AddToList = ({ people, setPeople }: IProps) => {
  const [input, setInput] = useState({ name: "", age: "", url: "", notes: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    val: number
  ): void => {
    switch (val) {
      case 1:
        setInput({ ...input, name: e.target.value });
        return;
      case 2:
        !isNaN(+e.target.value) && setInput({ ...input, age: e.target.value });

        return;
      case 3:
        setInput({ ...input, url: e.target.value });
        return;
      case 4:
        setInput({ ...input, notes: e.target.value });
        return;
      default:
        return;
    }
  };

  const addToList = (): void => {
    setPeople([
      ...people,
      {
        name: input.name,
        age: parseInt(input.age),
        url: input.url,
        notes: input.notes,
      },
    ]);
  };

  return (
    <div className="AddToListCon">
      <input
        placeholder="Name"
        className="AddToListInput"
        value={input.name}
        onChange={(x) => handleChange(x, 1)}
      />
      <input
        placeholder="Age"
        className="AddToListInput"
        value={input.age}
        onChange={(x) => handleChange(x, 2)}
      />
      <input
        placeholder="URL"
        className="AddToListInput"
        value={input.url}
        onChange={(x) => handleChange(x, 3)}
      />
      <textarea
        placeholder="Notes"
        className="AddToListInput"
        value={input.notes}
        onChange={(x) => handleChange(x, 4)}
      />
      <button onClick={addToList} className="AddToListButton">
        Add to list
      </button>
    </div>
  );
};

export default AddToList;
