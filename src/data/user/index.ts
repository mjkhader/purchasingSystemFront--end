import { createApi } from "@reduxjs/toolkit/query/react";
import { LoginModel, Token, UserModel } from "../../types/user";
import customFetchBase from "../middleware";

export const UserApi = createApi({
    reducerPath: "UserApi",
    baseQuery: customFetchBase,
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,
    endpoints: (builder) => ({
        login: builder.mutation<Token, LoginModel>({
            query: (body) => ({
                url: "auth/SignIn",
                method: "POST",
                body,
            }),
        }),
        getUsers: builder.query<UserModel[], void>({
            query: () => ({
                url: "auth/getAllUsers",
                method: "GET",
            }),
        }),
    }),
});

export const {
    useLoginMutation,
    useGetUsersQuery,
} = UserApi;
