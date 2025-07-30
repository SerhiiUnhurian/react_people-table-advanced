import React from 'react';
import { Person } from '../types';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';

type Props = {
  person: Person;
  onSelect: (slug: string) => void;
};

export const PersonLink: React.FC<Props> = ({ person, onSelect }) => {
  const { search } = useLocation();

  return (
    <>
      <Link
        to={{ pathname: `/people/${person.slug}`, search }}
        className={classNames({
          'has-text-danger': person.sex === 'f',
        })}
        onClick={() => onSelect(person.slug)}
      >
        {person.name}
      </Link>
    </>
  );
};
