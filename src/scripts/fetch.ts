import { chunk } from "lodash";

import { maxChunk } from "..";
import { getFollowing, getProfiles, getTotalProfiles } from "../apollo";
import type { FollowingReturn, ProfilesReturn } from "../apollo/types";
import { multipleQuery, numToId } from "./utils";

export const pagerank = async (): Promise<void> => {
  const totalProfilesData = await getTotalProfiles();
  const profileIds = [
    ...Array(totalProfilesData.data.globalProtocolStats.totalProfiles).keys(),
  ].map((n) => numToId(n));

  const profileRequests = chunk(profileIds, maxChunk).map(
    (pids) => () => getProfiles(pids)
  );
  const profileData = await multipleQuery<ProfilesReturn>(profileRequests);
  const profiles = profileData.flatMap((pd) => pd.profiles.items);
  const addresses = profiles.map((p) => p.ownedBy);

  const followingRequests = addresses.map((a) => () => getFollowing(a));
  const followingData = await multipleQuery<FollowingReturn>(followingRequests);

  followingData;
};

pagerank().catch((err) => {
  console.error(err);
});
