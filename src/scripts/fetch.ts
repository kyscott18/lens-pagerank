import { BigNumber } from "ethers";

import { getFollowing, getProfiles, getTotalProfiles } from "../apollo";

export const pagerank = async (): Promise<void> => {
  const testProfile = BigNumber.from(16).toHexString();
  const testAddress = "0x88a769db5055B046c9A45Db621978bbEC65c8c5b";

  const totalProfilesData = await getTotalProfiles();
  console.log(totalProfilesData.data.globalProtocolStats.totalProfiles);

  const profileData = await getProfiles([testProfile]);
  console.log(profileData.data.profiles.items[0]);

  const followingData = await getFollowing(testAddress);
  console.log(followingData.data.following.items);
};

pagerank().catch((err) => {
  console.error(err);
});
