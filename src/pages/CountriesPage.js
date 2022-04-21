import React from 'react';
import CountriesList from '../components/CountriesList';

function AllCountries() {
  return (
    <main className="container mx-auto">
      <div className="h-48">World Stats</div>
      <div className="p-1">Countries Stats</div>
      <CountriesList />
    </main>
  );
}

export default AllCountries;
