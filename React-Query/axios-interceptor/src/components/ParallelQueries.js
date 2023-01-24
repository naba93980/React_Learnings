import axios from 'axios'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom';

const fetchSuperHeroes = () => {
    return axios.get('http://localhost:4000/superheroes')
}

const fetchFriends = () => {
    return axios.get('http://localhost:4000/friends')
}

export const ParallelQueries = () => {
    const { data: superHeroes } = useQuery('super-heroes', fetchSuperHeroes)
    const { data: friends } = useQuery('friends', fetchFriends)
    console.log(superHeroes);

    return (
        <div>
            <h2>ParallelQueriesPage</h2>
            {superHeroes?.data.map((hero) => {
                return (
                    <div key={hero.id}>
                        <Link to={`/rq-super-heroes/${hero.id}`}>{hero.name}</Link>
                    </div>
                )
            })}
            <br />
            {friends?.data.map((friend) => {
                return (
                    <div key={friend.id}>
                        <p>{friend.name}</p>
                    </div>
                )
            })}
        </div>
    )
}