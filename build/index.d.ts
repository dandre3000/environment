declare module '@dandre3000/environment' {
    /** The name of the current runtme. */
    export const runtime: 'bun' | 'browser' | 'deno' | 'node'
    /** True if the current global scope is the main thread or false otherwise. */
    export const isMainThread: boolean
}