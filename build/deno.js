export const runtime = 'deno'
export const isMainThread = typeof WorkerGlobalScope !== 'function' || !(self instanceof WorkerGlobalScope)