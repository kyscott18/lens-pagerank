import type { ApolloQueryResult } from "apollo-client";
import { BigNumber } from "ethers";
import { chunk } from "lodash";

export const numToId = (num: number): string =>
  BigNumber.from(num).toHexString();

const queryChunk = 6;

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const multipleQuery = async <T>(
  callbacks: (() => Promise<ApolloQueryResult<T>>)[]
): Promise<Array<T>> => {
  const callbackChunks = chunk(callbacks, queryChunk);

  let acc: Array<T> = [];
  for (const cc of callbackChunks) {
    const cur = await Promise.all(cc.map((c) => c()));
    acc = acc.concat(cur.flatMap((c) => c.data));
    await delay(100);
  }
  return acc;
};
