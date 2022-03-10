import axios from "axios";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

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
                <div key={hero.id}>
                    <Link to={`/rq-super-heroes/${hero.id}`}>{hero.name}</Link>
                </div>
            ))}
        </>
    );
};

export default RQSuperHeroesPage;
