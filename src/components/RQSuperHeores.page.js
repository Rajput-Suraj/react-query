import axios from "axios";
import { useQuery } from "react-query";

const RQSuperHeroesPage = () => {
    const { isLoading, data, isError, error } = useQuery("super-heroes", () => {
        return axios.get("http://localhost:4000/superheroes");
    });

    if (isLoading) {
        return <h2>Loading...</h2>;
    }

    if (isError) {
        return <h2>{error.message}</h2>;
    }

    return (
        <>
            <h2>RQSuperHeroesPage</h2>
            {data?.data.map((hero) => (
                <div key={hero.id}>{hero.name}</div>
            ))}
        </>
    );
};

export default RQSuperHeroesPage;
