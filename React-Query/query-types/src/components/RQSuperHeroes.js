import React from 'react';
import useSuperHeroesData from '../hooks/useSuperHeroesData';
import { Link } from 'react-router-dom';

const onSuccess = (data) => {
  console.log(data);
  console.log('Perform side effect after data fetching');
}
const onError = (error) => {
  console.log(error);
  console.log('Perform side effect after encountering error');
}

export default function RQSuperHeroes() {
  const { isLoading, data, isError, error, isFetching, refetch } = useSuperHeroesData(onSuccess, onError);

  console.log({isLoading, isFetching});

  if (isLoading) {
    return <h2>Loading...</h2>
  }
  if(isError){
    return <h2>{error.message}</h2>
  }
  return (
    <>
      <h2>RQ Super Heroes Page</h2>
      <button onClick={refetch}>Fetch heroes</button>
      {data?.data.map((hero) => {
        return (
          <div key={hero.id}>
            <Link to={`/rq-super-heroes/${hero.id}`}>{hero.name}</Link>
          </div>
        )
      })}
    </>
    )
}
