import type { ICustomStatOption } from "@json_out/index.js";


export interface ICustomStat {
  Name: string; // "Challenge Rank", etc - handle as type?
  Options: ICustomStatOption[];
}
