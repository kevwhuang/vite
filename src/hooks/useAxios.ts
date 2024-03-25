'use strict';

import axios, { type AxiosRequestConfig } from 'axios';
import useSWR from 'swr';

interface Params {
    endpoint: string;
    options?: AxiosRequestConfig;
}

function useAxios(params: Params) {
    const { data, error, isLoading, mutate } = useSWR(params, fetcher);
    return { data, error, loading: isLoading, mutate };
}

async function fetcher(params: Params) {
    try {
        const res = await axios(`/.netlify/functions/${params.endpoint}`, params.options);
        return res.data;
    } catch (err) {
        alert(err);
    }
}

export default useAxios;
