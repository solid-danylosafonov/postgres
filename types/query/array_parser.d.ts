type AllowedSeparators = "," | ";";
type Transformer<T> = (value: string) => T;
export declare function parseArray<T>(source: string, transform: Transformer<T>, separator?: AllowedSeparators): any;
export {};
