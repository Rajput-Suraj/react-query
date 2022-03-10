import React from "react";
import { useParams } from "react-router-dom";
import { useSuperHeroData } from "../hooks/useSuperHero";

const RQSuperHeroPage = () => {
    const { id } = useParams();

    const { isLoading, data, isError, error } = useSuperHeroData(id);

    if (isLoading) {
        return <h2>Loading...</h2>;
    }

    if (isError) {
        return <h2>{error.message}</h2>;
    }

    return (
        <>
            <h2>RQSuperHero Details</h2>
            {
                <>
                    <h3>{data?.data.name}</h3>
                    <h3>{data?.data.alterego}</h3>
                </>
            }
        </>
    );
};

export default RQSuperHeroPage;
