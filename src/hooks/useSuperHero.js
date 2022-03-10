import axios from "axios";
import { useQuery } from "react-query";

export const useSuperHeroData = (id) => {
    return useQuery(["super-hero", id], () => {
        return axios.get(`http://localhost:4000/superheroes/${id}`);
    });
};
