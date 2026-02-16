import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam.p.rapidapi.com/',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', import.meta.env.VITE_SHAZAM_CORE_RAPID_API_KEY);

            return headers;
        },
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({ query: () => 'charts/list' }),
        getSongDetails: builder.query({ query: ({ songid }) => `shazam-songs/get-details?id=${songid}` }),
        getSongRelated: builder.query({ query: ({ songid }) => `shazam-songs/list-similarities?id=track-similarities-id-${songid}` }),
        getArtistDetails: builder.query({ query: (artistId) => `artists/get-details?id=${artistId}` }),
        getArtistSongs: builder.query({ query: ({artistId}) => `artists/get-top-songs?id=${artistId}` }),
    }),
});

export const {
    useGetTopChartsQuery,
    useGetSongDetailsQuery,
    useGetSongRelatedQuery,
    useGetArtistDetailsQuery,
    useGetArtistSongsQuery,
} = shazamCoreApi;