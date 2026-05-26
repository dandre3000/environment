declare module '@dandre3000/environment' {
    /** Alias for process.exit or globalThis.close. */
    export const exit: (code?: number | string | null) => never
    /** True if the current global scope is the main thread or false otherwise. */
    export const isMainThread: boolean
    /** The name of the current runtme. */
    export const runtime: 'bun' | 'browser' | 'deno' | 'node'
}