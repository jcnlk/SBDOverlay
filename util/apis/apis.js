import { statsSbdCf, statsSbdAz } from "./stats/sbd";
import { statsSBE } from "./stats/sbecommands";
import { statsSkyCrypt } from "./stats/skycrypt";

const playerDBUrlFunc = (name) => `https://playerdb.co/api/player/minecraft/${name}`;
const transformPlayerDBFunc = (data) => data.data.player.raw_id;

const uuidPlayerDB = { urlFunc: playerDBUrlFunc, transformFunc: transformPlayerDBFunc, key: "uuid-pdb" };

const mojangUrlFunc = (name) => `https://api.mojang.com/users/profiles/minecraft/${name}`;
const transformMojangFunc = (data) => data.id;

const uuidMojang = { urlFunc: mojangUrlFunc, transformFunc: transformMojangFunc, key: "uuid-mojang" };

const ashconUrlFunc = (name) => `https://api.ashcon.app/mojang/v2/user/${name}`;
const transformAshconFunc = (data) => data.uuid.replace(/-/g, "");

const uuidAshcon = { urlFunc: ashconUrlFunc, transformFunc: transformAshconFunc, key: "uuid-ash" };

export const uuidApis = [uuidPlayerDB, uuidMojang, uuidAshcon];
export const statsApis = [statsSbdAz, statsSbdCf, statsSBE, statsSkyCrypt];