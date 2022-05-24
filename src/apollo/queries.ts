import gql from "graphql-tag";

export const USER_COUNT_QUERY = gql`
  query {
    globalProtocolStats {
      totalProfiles
    }
  }
`;

export const GET_FOLLOWING = gql`
  query ($request: FollowingRequest!) {
    following(request: $request) {
      items {
        profile {
          id
          # name
          # bio
          # handle
          # picture {
          #   ... on NftImage {
          #     contractAddress
          #     tokenId
          #     uri
          #     verified
          #   }
          #   ... on MediaSet {
          #     original {
          #       url
          #       width
          #       height
          #       mimeType
          #     }
          #     medium {
          #       url
          #       width
          #       height
          #       mimeType
          #     }
          #     small {
          #       url
          #       width
          #       height
          #       mimeType
          #     }
          #   }
          # }
          # coverPicture {
          #   ... on NftImage {
          #     contractAddress
          #     tokenId
          #     uri
          #     verified
          #   }
          #   ... on MediaSet {
          #     original {
          #       url
          #       width
          #       height
          #       mimeType
          #     }
          #     small {
          #       width
          #       url
          #       height
          #       mimeType
          #     }
          #     medium {
          #       url
          #       width
          #       height
          #       mimeType
          #     }
          #   }
          # }
          ownedBy
          # dispatcher {
          #   address
          #   canUseRelay
          # }
          # stats {
          #   totalFollowers
          #   totalFollowing
          #   totalPosts
          #   totalComments
          #   totalMirrors
          #   totalPublications
          #   totalCollects
          # }
          # followModule {
          #   ... on FeeFollowModuleSettings {
          #     type
          #     amount {
          #       asset {
          #         name
          #         symbol
          #         decimals
          #         address
          #       }
          #       value
          #     }
          #     recipient
          #   }
          #   ... on ProfileFollowModuleSettings {
          #     type
          #   }
          #   ... on RevertFollowModuleSettings {
          #     type
          #   }
          # }
        }
      }
      # pageInfo {
      #   prev
      #   next
      #   totalCount
      # }
    }
  }
`;

export const GET_PROFILES = gql`
  query ($profileIds: [ProfileId!]!) {
    profiles(request: { profileIds: $profileIds }) {
      items {
        id
        # name
        # bio
        # attributes {
        #   displayType
        #   traitType
        #   key
        #   value
        # }
        # metadata
        # isDefault
        # picture {
        #   ... on NftImage {
        #     contractAddress
        #     tokenId
        #     uri
        #     verified
        #   }
        #   ... on MediaSet {
        #     original {
        #       url
        #       mimeType
        #     }
        #   }
        #   __typename
        # }
        # handle
        # coverPicture {
        #   ... on NftImage {
        #     contractAddress
        #     tokenId
        #     uri
        #     verified
        #   }
        #   ... on MediaSet {
        #     original {
        #       url
        #       mimeType
        #     }
        #   }
        #   __typename
        # }
        ownedBy
        # dispatcher {
        #   address
        #   canUseRelay
        # }
        # stats {
        #   totalFollowers
        #   totalFollowing
        #   totalPosts
        #   totalComments
        #   totalMirrors
        #   totalPublications
        #   totalCollects
        # }
        # followModule {
        #   ... on FeeFollowModuleSettings {
        #     type
        #     amount {
        #       asset {
        #         symbol
        #         name
        #         decimals
        #         address
        #       }
        #       value
        #     }
        #     recipient
        #   }
        #   ... on ProfileFollowModuleSettings {
        #     type
        #   }
        #   ... on RevertFollowModuleSettings {
        #     type
        #   }
        # }
      }
      # pageInfo {
      #   prev
      #   next
      #   totalCount
      # }
    }
  }
`;
