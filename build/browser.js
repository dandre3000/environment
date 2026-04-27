export const isMainThread = typeof WorkerGlobalScope !== 'function' || !(self instanceof WorkerGlobalScope)
export const runtime = 'browser'