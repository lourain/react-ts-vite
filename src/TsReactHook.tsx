import React from "react";
import { useArray } from "./utils";

export const TsReactHooks = () => {
  const persons: { name: string; age: number }[] = [
    { name: "jack", age: 25 },
    { name: "ma", age: 22 },
  ];

  const { value, add, removeIndex } = useArray(persons);
  return (
    <div>
      <button onClick={() => add({ name: "john", age: 22 })}>add john</button>
      <button onClick={() => removeIndex(0)}>remove 0</button>
      {value.map((person) => {
        return (
          <p>
            {person.name} {person.age}
          </p>
        );
      })}
    </div>
  );
};
