import React from 'react';

import { DetailedCatCard } from '../DetailedCatCard/DetailedCatCard';

export const DetailsScreen = ({ route }) => {
  const { catId } = route.params;
  return (
    <DetailedCatCard id={catId} />
  );
};
