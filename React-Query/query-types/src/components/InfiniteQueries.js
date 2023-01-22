import { Fragment } from 'react'
import { useInfiniteQuery } from 'react-query'
import axios from 'axios'

const fetchColors = ({ pageParam = 1 }) => {
  console.log("fetching");
  return axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageParam}`)
}

export const InfiniteQueries = () => {
  const { isLoading, isError, error, data, isFetching, hasNextPage, isFetchingNextPage, fetchNextPage } = useInfiniteQuery(['colors'], fetchColors, {
    getNextPageParam: (lastPage, pages) =>{
      console.log(lastPage);
      console.log(pages);
      if (pages.length < 4) {
        return pages.length + 1
      } else {
        return undefined
      }
    }
  });
  console.log({isLoading, isFetching});

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  if (isError) {
    return <h2>{error.message}</h2>
  }

  return (
    <>
    <h1>Infinite Queries</h1>
      <div>
        {data?.pages.map((group, i) => {
          return (
            <Fragment key={i}>
              {group.data.map(color => (
                <h2 key={color.id}>
                  {color.id} {color.label}
                </h2>
              ))}
            </Fragment>
          )
        })}
      </div>
      <div>
        <button onClick={() => fetchNextPage()} disabled={!hasNextPage}>
          Load more
        </button>
      </div>
      <div>{isFetching && isFetchingNextPage ? 'Fetching...' : null}</div>
    </>
  )
}

// flow -> fetchColors() ->  getNextPageParam() -> populates properties like hasNextPage, fetchNextPage args, once button is clicked fetchNextPage() runs, passes args to fetchColors and runs fetchColors() query