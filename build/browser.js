export const runtime = 'browser'
export const isMainThread = typeof WorkerGlobalScope !== 'function' || !(self instanceof WorkerGlobalScope)