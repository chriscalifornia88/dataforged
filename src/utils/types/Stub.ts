/* eslint-disable @typescript-eslint/no-explicit-any */
import type { PartialBy } from "@dataforged/utils/types/PartialBy.js";
import type { PartialExcept } from "@dataforged/utils/types/PartialExcept.js";

/**
 * Make a stub of T where ReqK is required, OmitK is omitted, and all other keys are optional.
 *
 */
export type StubExcept<T, ReqKey extends keyof T, OmitKey extends keyof any=""> = Omit<PartialExcept<T, ReqKey>, OmitKey>;

/**
 * Make a stub of T where PartialKey is nullable, OmitK is omitted, and all other keys are required.
 *
 */
export type StubBy<T, PartialKey extends keyof T, OmitKey extends keyof any=""> = Omit<PartialBy<T, PartialKey>, OmitKey>;
