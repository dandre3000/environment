declare module '@dandre3000/environment' {
    /** Alias for process.exit or globalThis.close. */
    export const exit: (code?: number | string | null) => never
    /** True if the current global scope is the main thread or false otherwise. */
    export const isMainThread: boolean
    /** The name of the current runtme. */
    export const runtime: 'bun' | 'browser' | 'deno' | 'node'
}

declare module '@dandre3000/environment/browser.js' {
    /** Alias for process.exit or globalThis.close. */
    export const exit: () => never
    /** True if the current global scope is the main thread or false otherwise. */
    export const isMainThread: boolean
    /** The name of the current runtme. */
    export const runtime: 'browser'
}

declare module '@dandre3000/environment/bun.js' {
    /** Alias for process.exit or globalThis.close. */
    export const exit: (code?: number | string | null) => never
    /** True if the current global scope is the main thread or false otherwise. */
    export const isMainThread: boolean
    /** The name of the current runtme. */
    export const runtime: 'bun'
}

declare module '@dandre3000/environment/deno.js' {
    /** Alias for process.exit or globalThis.close. */
    export const exit: (code?: number | string | null) => never
    /** True if the current global scope is the main thread or false otherwise. */
    export const isMainThread: boolean
    /** The name of the current runtme. */
    export const runtime: 'deno'
}

declare module '@dandre3000/environment/node.js' {
    /** Alias for process.exit or globalThis.close. */
    export const exit: (code?: number | string | null) => never
    /** True if the current global scope is the main thread or false otherwise. */
    export const isMainThread: boolean
    /** The name of the current runtme. */
    export const runtime: 'node'
}