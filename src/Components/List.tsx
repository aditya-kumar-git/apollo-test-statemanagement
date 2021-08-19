import React from "react";
import { Istate as Props } from "../App";

interface AdditionalData {
  smallData: { age: number; name: string; notes?: string; url: string };
}

const List: React.FC<Props> = ({ people }) => {
  const renderList = (data: AdditionalData["smallData"], index: number) => {
    return (
      <div className="boxes" key={data.name + data.age + index}>
        <img className="dp" alt="DP" src={data.url} />
        <div>{data.name}</div>
        <div>Age:{data.age}</div>
        <div>{data.notes}</div>
      </div>
    );
  };

  return (
    <div className="boxContainer">
      {people.map((data, index) => {
        return renderList(data, index);
      })}
    </div>
  );
};
export default List;
