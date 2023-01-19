import React from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'


const fetchSuperHeroes = () => {
  return axios.get('http://localhost:4000/superheroes');
  }

const onSuccess = (data) => {
  console.log(data);
  console.log('Perform side effect after data fetching');
}
const onError = (error) => {
  console.log(error);
  console.log('Perform side effect after encountering error');
}

export default function RQSuperHeroes() {
  const { isLoading, data, isError, error, isFetching, refetch } = useQuery('super-heroes', fetchSuperHeroes,{
    // cacheTime: 5000,
    // staleTime: 10000,
    // refetchOnMount : 'always', // true, false
    // refetchOnWindowFocus: 'always', // true, false
    // refetchInterval: 2000,
    // refetchIntervalInBackground: true
    // enabled: false,
    onSuccess: onSuccess,
    onError: onError,
    select: (data) => {
      const superHeroNames = data.data.map((hero) => hero.name)
      return superHeroNames
    },
  });

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
      {/* {data?.data.map((hero) => {
        return <div key={hero.name}>{hero.name}</div>
      })} */}
      {data.map((heroName) => {
        return <div key={heroName}>{heroName}</div>
      })}
    </>
    )
}
