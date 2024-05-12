import axios, { AxiosError } from "axios";
import { useQuery } from "react-query";
import { EntitiesKey } from "../reactQuery";
import { Entity } from "@/types/data";
import { Config } from "../app.config";

const { url } = Config;

const fetchEntities = async (id: number, max: number): Promise<Entity[]> => {
  try {
    const { data } = await axios.get(`${url}/entity/range/${id}/${max}`);
    console.log(data);
    return data;
  } catch (error) {
    const axiosError = error as AxiosError;
    console.error(axiosError.message);
    throw error;
  }
};

const useEntities = (id: number, max: number) => {
  return useQuery<Entity[]>([EntitiesKey, "list", id], () => fetchEntities(id, max));
};

export default useEntities;
