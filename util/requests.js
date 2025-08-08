import request from "requestV2";

import Data from "./data";
import { uuidApis, statsApis } from "./apis/apis";
import { handleError } from "./error";

const requestAndTransformData = (url, func, headers = { "User-Agent": " Mozilla/5.0", "Content-Type": "application/json" }) => {
  return request({ url: url, headers: headers, json: true }).then((data) => func(data));
};

const requestDataDynamic = (value, apiList) => {
  const tryAPIs = (index) => {
    if (index >= apiList.length) {
      handleError(`Could not get Data for ${value}`);
      Data.debug.req["fail"]++;
      return null;
    }

    const { urlFunc, transformFunc, key } = apiList[index];

    if (Data.debug.req[key]) Data.debug.req[key]++;
    else Data.debug.req[key] = 1;

    return requestAndTransformData(urlFunc(value), transformFunc).catch((e) => tryAPIs(index + 1));
  };

  return tryAPIs(0);
};

export const requestUUID = (name) => requestDataDynamic(name, uuidApis).catch((e) => handleError("Failed to get UUID", e));
export const requestStats = (uuid) => requestDataDynamic(uuid, statsApis).catch((e) => handleError("Failed to get Dungeon Stats", e));