import { InMemoryCache } from "apollo-cache-inmemory";
import type { ApolloQueryResult } from "apollo-client";
import ApolloClient from "apollo-client";
import { HttpLink } from "apollo-link-http";
import fetch from "cross-fetch";

import { API_URL } from "./constants";
import { GET_FOLLOWING, GET_PROFILES, USER_COUNT_QUERY } from "./queries";
import type {
  FollowingRequest,
  FollowingReturn,
  ProfilesRequest,
  ProfilesReturn,
  UserCountReturn,
} from "./types";

export const client = new ApolloClient({
  link: new HttpLink({
    uri: API_URL,
    fetch,
  }),
  cache: new InMemoryCache(),
});

export const getTotalProfiles = async (): Promise<
  ApolloQueryResult<UserCountReturn>
> => client.query<UserCountReturn>({ query: USER_COUNT_QUERY });

export const getProfiles = async (
  profileIds: string[]
): Promise<ApolloQueryResult<ProfilesReturn>> =>
  client.query<ProfilesReturn, ProfilesRequest>({
    query: GET_PROFILES,
    variables: { profileIds },
  });

export const getFollowing = async (
  address: string
): Promise<ApolloQueryResult<FollowingReturn>> =>
  client.query<FollowingReturn, FollowingRequest>({
    query: GET_FOLLOWING,
    variables: {
      request: {
        address,
      },
    },
  });
