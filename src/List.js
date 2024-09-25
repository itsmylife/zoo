import { useState } from "react";
import { initialAnimals } from "./data.js";
import { getImageUrl } from "./utils.js";

export default function List() {
  const [type, setType] = useState("all");

  return (
    <>
      <button
        className="filter-button"
        id="cute"
        onClick={() => setType("cute")}
      >
        All Cute Animals
      </button>
      <button
        className="filter-button"
        id="scary"
        onClick={() => setType("scary")}
      >
        All Scary Animals
      </button>
      <button
        className="filter-button"
        id="selector"
        onClick={() => setType("all")}
      >
        Selectors Choice
      </button>
      <ul>{getList(type)}</ul>
    </>
  );
}

function getList(type) {
  return initialAnimals
    .filter((animal) => type === "all" ? true : animal.type === type)
    .map((animal) => (
      <li className="animal-item" key={"animal-" + animal.id}>
        <img
          className="animal-picture"
          src={getImageUrl(animal)}
          alt={animal.name}
        />
        <p className="animal-description">
          <b>{animal.name}</b>
          <br />
          {animal.description}
        </p>
      </li>
    ));
}
