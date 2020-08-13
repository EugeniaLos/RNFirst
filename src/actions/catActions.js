import { ADD_NEW_CAT, CHANGE_VISIBLE_CATS, SHOW_ALL_CATS } from '../constants/actionTypes';
import { cats } from '../data/cats';

export const filterCats = (filterParam) => {
  const visibleCats = cats.filter((cat) => cat.name === filterParam);
  return {
    type: CHANGE_VISIBLE_CATS,
    payload: visibleCats,
  };
};

export const showAllCats = () => ({
  type: SHOW_ALL_CATS,
});

export const addNewCat = (name, breed, age, description, additional) => {
  const cat = {
    id: cats.length + 1,
    name,
    url: '',
    breed,
    description,
    age,
    randomFact: additional,
  };

  const newCats = cats;
  newCats.push(cat);
  return {
    type: ADD_NEW_CAT,
    payload: newCats,
  };
};
