import { createApi } from "@reduxjs/toolkit/query/react";
import { LoginModel, SignUpModel, Token, UserModel } from "../../types/user";
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
        signUp: builder.mutation<void, SignUpModel>({
            query: (body) => ({
                url: "auth/register",
                method: "POST",
                body,
            }),
        }),
    }),
});

export const {
    useLoginMutation,
    useGetUsersQuery,
    useSignUpMutation,
} = UserApi;
