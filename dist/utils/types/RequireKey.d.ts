/**
 * Generic type: require specific keys to be NonNullable.
 */
export declare type RequireKey<T, K extends keyof T> = T & {
    [P in K]-?: NonNullable<T[P]>;
};
//# sourceMappingURL=RequireKey.d.ts.map