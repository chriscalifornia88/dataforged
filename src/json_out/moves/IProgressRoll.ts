import type { ProgressRollType } from "@json_out/common/index.js";


export interface IProgressRoll {
  Track?: ProgressRollType | undefined;
  "All of"?: ProgressRollType[] | undefined;
  "Best of"?: ProgressRollType[] | undefined;
  "Worst of"?: ProgressRollType[] | undefined;
}
