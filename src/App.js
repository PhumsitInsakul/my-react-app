import React from 'react';

const App = () => {
  // Sample data of cute animal images
  const animals = [
    { id: 1, imageUrl: 'https://placekitten.com/200/300', alt: 'Cute kitten' },
    { id: 2, imageUrl: 'https://placebear.com/200/300', alt: 'Adorable bear' },
    { id: 3, imageUrl: 'https://place-puppy.com/200x300', alt: 'Sweet puppy' },
    { id: 4, imageUrl: 'https://placekitten.com/201/301', alt: 'Another cute kitten' },
    { id: 5, imageUrl: 'https://placebear.com/201/301', alt: 'Another adorable bear' },
    { id: 6, imageUrl: 'https://place-puppy.com/201x301', alt: 'Another sweet puppy' },
  ];

  return (
    <div>
      <h1>Cute Animal Gallery</h1>
      <div className="animal-gallery">
        {animals.map(animal => (
          <div key={animal.id} className="animal-card">
            <img src={animal.imageUrl} alt={animal.alt} />
            <p>{animal.alt}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
