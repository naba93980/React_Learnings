import { useQuery } from 'react-query'
import axios from 'axios'

const fetchSuperHero = (herold) => {
    return axios.get(`http://localhost:4000/superheroes/${herold}`)
}

export const useSuperHeroData = (heroId) => {
    return useQuery(['super-hero', heroId],()=> fetchSuperHero(heroId),{
        refetchOnMount: true
})
}
