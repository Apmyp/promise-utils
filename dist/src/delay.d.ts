export declare function delay<T>(delayTime: number, value: T): Promise<T>;
export declare function delay<T>(delayTime: number): Promise<void>;
export declare function immediate<T>(value: T): Promise<T>;
export declare function immediate<T>(): Promise<void>;