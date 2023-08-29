import { Client } from "../client.ts";
import { Pool } from "../pool.ts";
import { type ClientOptions } from "../connection/connection_params.ts";
export declare function generateSimpleClientTest(client_options: ClientOptions): (test_function: (client: Client) => Promise<void>) => () => Promise<void>;
export declare function generatePoolClientTest(client_options: ClientOptions): (test_function: (pool: Pool, size: number, lazy: boolean) => Promise<void>, size?: number, lazy?: boolean) => () => any;
