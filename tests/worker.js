import { isMainThread, runtime } from '@dandre3000/environment'

export const messageListener = (data, port) => {
    if (data === 'isMainThread') port.postMessage(isMainThread)
    if (data === 'runtime') port.postMessage(runtime)
}