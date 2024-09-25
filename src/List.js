import { useState } from 'react';
import { initialAnimals } from './data.js';
import { getImageUrl } from './utils.js';

export default function List() {
  const [animals, setAnimals] = useState({ type: null, list: initialAnimals });

  function handleClick(e) {
    let type = e.target.id;

    if (type && type !== "selector") {
      setAnimals({
        type: type,
        list: initialAnimals.filter((a) => a.type === type),
      });
    } else {
      setAnimals({ type: type, list: initialAnimals });
    }
  }

  return (
    <>
      <button className="filter-button" id="cute" onClick={handleClick}>
        All Cute Animals
      </button>
      <button className="filter-button" id="scary" onClick={handleClick}>
        All Scary Animals
      </button>
      <button className="filter-button" id="selector" onClick={handleClick}>
        Selectors Choice
      </button>
      <ul>{getList(animals.list)}</ul>
    </>
  );
}

function getList(animals) {
  return animals.map((animal) => (
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
