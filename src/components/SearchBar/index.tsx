import React, { FC, useState } from 'react';

import { IProps } from './types';
import './styles.css';

const SearchBar: FC<IProps> = ({ onSubmit }: IProps) => {
  const [value, setValue] = useState<string>('');

  return (
    <form className="container-form">
      <input
        className="input-text"
        type="text"
        name="search"
        onChange={(e) => {
          setValue(e.target.value);
          if (e.target.value === '') onSubmit('');
        }}
      />
      <button
        className="input-submit"
        onClick={(e) => {
          e.preventDefault();
          onSubmit(value);
        }}
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
