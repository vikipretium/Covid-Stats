import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { getMapUrl } from '../modules/mapUtils';

function CountryTile({ data }) {
  const { id, name, stat } = data;
  const imageUrl = getMapUrl(id);
  return (
    <Link
      to={`/countries/${id}`}
      className="flex flex-col justify-end aspect-square bg-blue-600 hover:shadow p-2 text-right m-0.5 relative "
    >
      <div
        className="absolute inset-2 bottom-8 z-0 opacity-20"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      />
      <h2 className="font-bold text-2xl uppercase leading-none z-10">{name}</h2>
      <p className="text-lg z-10">{stat}</p>
    </Link>
  );
}
CountryTile.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    stat: PropTypes.number.isRequired,
  }).isRequired,
};
export default CountryTile;
