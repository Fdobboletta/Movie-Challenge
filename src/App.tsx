import React, { useCallback, useEffect, useState, FC } from 'react';

import CardMovie from './components/CardMovie';
import ErrorMessage from './components/ErrorMessage';
import SearchBar from './components/SearchBar';
import Config from './config';
import { IMovie, IError, HttpResponse, IResponse } from './types';

const App: FC = () => {
  const [movies, setMovies] = useState<IMovie[] | undefined>(undefined);
  const [error, setError] = useState<IError | undefined>(undefined);
  const [keyWord, setKeyWord] = useState<string>('');

  const getMovies = useCallback(async () => {
    try {
      const timeoutId = setTimeout(() => {
        throw new Error('promise timeout');
      }, 25000);
      const response: HttpResponse<IResponse> = await fetch(Config.API, {
        headers: new Headers({
          Authorization: Config.TOKEN,
          'Content-Type': 'application/json;charset=utf-8',
        }),
      });
      clearTimeout(timeoutId);
      if (response.ok) {
        const resJson: IResponse = await response.json();
        setError(undefined);
        setMovies(resJson.results);
      } else {
        const resJson: IError = await response.json();
        throw resJson;
      }
    } catch (error) {
      setError(error);
      setMovies(undefined);
    }
  }, []);

  useEffect(() => {
    getMovies();
  }, [getMovies]);

  const filteredMovies =
    movies && movies.filter(({ overview }) => overview.toLocaleLowerCase().includes(keyWord.toLocaleLowerCase()));

  return (
    <>
      <SearchBar onSubmit={setKeyWord} />
      {filteredMovies && filteredMovies.length > 0
        ? filteredMovies.map(({ title, overview, poster_path, id }) => (
            <CardMovie title={title} overview={overview} posterPath={poster_path} key={id} />
          ))
        : keyWord && <p>There are no movies with that overview.</p>}
      {!filteredMovies && error && <ErrorMessage statusMessage={error.status_message} statusCode={error.status_code} />}
    </>
  );
};

export default App;
