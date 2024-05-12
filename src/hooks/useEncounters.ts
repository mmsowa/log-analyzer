import axios, { AxiosError } from "axios";
import { useQuery } from "react-query";
import { EncountersKey } from "../reactQuery";
import { Encounter } from "@/types/data";
import { Config } from "../app.config";

const { url } = Config;

const fetchEncounters = async (id: number, max: number): Promise<Encounter[]> => {
  try {
    const { data } = await axios.get(`${url}/encounter/range/${id}/${max}`);
    console.log(data);
    return data;
  } catch (error) {
    const axiosError = error as AxiosError;
    console.error(axiosError.message);
    throw error;
  }
};

const useEncounters = (id: number, max: number) => {
  return useQuery<Encounter[]>([EncountersKey, "list", id], () => fetchEncounters(id, max));
};

export default useEncounters;
