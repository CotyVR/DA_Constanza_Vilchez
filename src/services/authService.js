import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { base_auth_url, api_key } from '../firebase/database'

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({baseUrl: base_auth_url}),
    endpoints: (builder) =>({
        signup: builder.mutation({
            query: ({...auth}) => ({
                url: baseQuery,
                method:
                body:
            })
        }),
        login: builder.mutation({})
    })
})

export const {useSignupMutation, useLoginMutation} = authApi