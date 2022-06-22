import React from 'react';

const names =  ['Jack', 'Mary', 'John', 'Krish', 'Navin'];

function Filter() {
  return (
    <div>
        <h1>Filter by "J"</h1>
      {names.filter(name => name.includes('J')).map(filteredName => (
        <li>
          {filteredName}
        </li>
      ))}
    </div>
  );
}

export default Filter;