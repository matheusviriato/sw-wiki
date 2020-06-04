import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_ALL_PERSONS } from '../../../services/queries/persons';

const Persons = () => {
  const { loading, error, data } = useQuery(GET_ALL_PERSONS);

  if (loading) return <div> Loading... </div>;

  const { allPersons = [] } = data;

  return allPersons.map((person) => {
    return <div key={person.id}>{person.name}</div>;
  });
};

export default Persons;
