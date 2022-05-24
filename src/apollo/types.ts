export interface ProfilesRequest {
  profileIds: string[];
}

export interface FollowingRequest {
  request: {
    address: string;
  };
}

export interface UserCountReturn {
  globalProtocolStats: {
    totalProfiles: number;
  };
}

export interface ProfilesReturn {
  profiles: {
    items: {
      id: string;
      ownedBy: string;
    }[];
  };
}

export interface FollowingReturn {
  following: {
    items: {
      profile: {
        id: string;
        ownedBy: string;
      };
    }[];
  };
}
