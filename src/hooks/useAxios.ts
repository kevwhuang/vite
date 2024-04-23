import axios, { type AxiosRequestConfig } from 'axios';
import useSWR from 'swr';

interface AxiosParams {
    endpoint: string;
    options?: AxiosRequestConfig;
}

function useAxios(params: AxiosParams) {
    const { data, error, isLoading, mutate } = useSWR(params, fetcher);
    return { data, error, loading: isLoading, mutate };
}

async function fetcher(params: AxiosParams) {
    try {
        const res = await axios(`/.netlify/functions/${params.endpoint}`, params.options);
        return res.data;
    } catch (err) {
        alert(err);
    }
}

export default useAxios;
