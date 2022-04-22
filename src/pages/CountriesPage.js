import React from 'react';
import CountriesList from '../components/CountriesList';
import { getMapUrl } from '../modules/mapUtils';

function AllCountries() {
  const imageUrl = getMapUrl('world');

  return (
    <main className="container mx-auto flex flex-col grow">
      <div className="h-48 md:h-64 grid place-content-center relative text-center">
        <div
          className="absolute inset-0 z-0 opacity-50"
          style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        />
        <h2 className="z-10 text-center text-3xl">World Covid-19 Cases</h2>
      </div>
      <div className="bg-pink-500 grow rounded-xl border border-pink-600">
        <div className="p-2 text-center uppercase font-bold">
          Cases of Countries
        </div>
        <CountriesList />
        <div className="h-4" />
      </div>
    </main>
  );
}

export default AllCountries;
