import React from 'react';

import { DetailedCatCard } from '../DetailedCatCard/DetailedCatCard';

export const DetailsScreen = ({ route }) => {
  const { catId } = route.params;
  console.log(catId);
  return (
    <DetailedCatCard id={catId} />
  );
};
