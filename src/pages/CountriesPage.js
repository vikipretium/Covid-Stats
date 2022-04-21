import React from 'react';
import CountryTile from '../components/CountryTile';

function AllCountries() {
  return (
    <main className="container mx-auto">
      <div className="h-48">World Stats</div>
      <div className="p-1">Countries Stats</div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {[0, 1, 2, 3, 4].map((index) => (
          <CountryTile key={index} />
        ))}
      </div>
    </main>
  );
}

export default AllCountries;
