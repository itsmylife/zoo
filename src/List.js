import { animals } from './data.js';
import { getImageUrl } from './utils.js';

// function MyComponent() {
//     return (
//       <div>
//         <p>Ksenia</p>
//         <p>{new Date().toLocaleDateString()}</p>
//       </div>
//     );
// }
// export default MyComponent;



export default function List() {
  const listItems = animals.map(animal =>
    <li key={animal.id}>
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
  return <ul>{listItems}</ul>;
}