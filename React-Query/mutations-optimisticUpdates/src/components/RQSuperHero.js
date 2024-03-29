import { useSuperHeroData } from '../hooks/useSuperHeroData'
import { useParams } from 'react-router-dom'

export const RQSuperHero = () => {
    const { heroId } = useParams();
    const { isLoading, data, isError, error, isFetching } = useSuperHeroData(heroId);
    console.log({isLoading, isFetching});
    if (isLoading) {
        return <h2>Loading...</h2>
        }
        if (isError) {
        return <h2>{error.message}</h2>
        }
        return (
        <div>
        {data?.data.name} - {data?.data.alterEgo}
        </div>
        )
}