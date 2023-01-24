import { useQueries } from "react-query"
import axios from 'axios'

const fetchSuperHero = (herold) => {
    return axios.get(`http://localhost:4000/superheroes/${herold}`)
}
export const DynamicParallelQueries = ({ heroIds }) => {
    const queryResults = useQueries(
        heroIds.map((id) => {
            return {
                queryKey: ['super-hero', id],
                queryFn: () => fetchSuperHero(id),
            }
        })
    )
    console.log({ queryResults })
    return <div>DynamicParallelPage</div>
}