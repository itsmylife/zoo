import { useState } from 'react';
import { initialAnimals } from './data.js';
import { getImageUrl } from './utils.js';

export default function List() {
  const [animals, setAnimals] = useState(
    initialAnimals
  );
  return <>
      <button onClick={() => {
              setAnimals(initialAnimals.filter(a =>
                a.type === "cute"
              ));
            }}>
              All Cute Animals
        </button>
        <button onClick={() => {
              setAnimals(initialAnimals.filter(a =>
                a.type === "scary"
              ));
            }}>
              All Scary Animals
        </button>
        <button onClick={() => {
              setAnimals(initialAnimals);
            }}>
              Selectors Choice
        </button>
      <ul>{getList(animals)}</ul>
    </>;
}

function getList (animals) {
  return animals.map(animal =>
    <li key={"animal-" + animal.id}>
      <img
        src={getImageUrl(animal)}
        alt={animal.name}
      />
      <p>
        <b>{animal.name}</b><br />
          {' ' + animal.description + ' '}
      </p>
    </li>
  );
}