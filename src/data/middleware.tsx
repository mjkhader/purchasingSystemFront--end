import {
    BaseQueryFn,
    FetchArgs,
    fetchBaseQuery,
    FetchBaseQueryError,
} from '@reduxjs/toolkit/query';
import { Mutex } from 'async-mutex';
import { Base_URL } from '../env';

const mutex = new Mutex();

const baseQuery = fetchBaseQuery({
    baseUrl: `${Base_URL}/api/`,
    prepareHeaders: (headers, { getState }) => {
        const token = (getState() as any)?.user?.Token;
        if (token) {
            headers.set('authorization', `Bearer ${token}`);
            return headers;
        }
        return headers;
    },
});
const customFetchBase: BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError
> = async (args, api, extraOptions) => {

    const urlEnd = typeof args === 'string' ? args : args.url;
    const adjustedArgs =
        typeof args === 'string' ? urlEnd : { ...args, url: urlEnd };

    await mutex.waitForUnlock();

    let result = (await baseQuery(adjustedArgs, api, extraOptions)) as any;


    if (result?.error?.data?.status >= 400) {
        console.warn(
            `Api Call to  ${(args as any).url} Failed`,
            adjustedArgs,
            api,
            extraOptions,
        );
    }
    if (result?.error?.data?.status === 401) {
        console.debug(
            `${new Date()} Got an unauthorized response from ${(args as any).url} `,
        );
    }

    return result;
};

export default customFetchBase;