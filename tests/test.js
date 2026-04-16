import { isMainThread, runtime } from '@dandre3000/environment'
import { expect } from 'expect'

export const runTests = (test, _runtime, Worker) => {
    test(`runtime should equal ${_runtime} in the main thread and a worker`, async () => {
        expect(runtime).toBe(_runtime)

        const worker = new Worker(new URL(Worker === globalThis.Worker ? './browser.worker.js' : './node.worker.js', import.meta.url), { type: 'module' })
        const message = new Promise(resolve => {
            worker.once ? worker.once('message', value => resolve(value)) :
            worker.addEventListener('message', ({ data }) => resolve(data), { once: true })
        })

        worker.postMessage('runtime')
        expect(await message).toBe(_runtime)
    })

    test('isMainThread should return true in the main thread and false in a worker', async () => {
        expect(isMainThread).toBe(true)

        const worker = new Worker(new URL(Worker === globalThis.Worker ? './browser.worker.js' : './node.worker.js', import.meta.url), { type: 'module' })
        const message = new Promise(resolve => {
            worker.once ? worker.once('message', value => resolve(value)) :
            worker.addEventListener('message', ({ data }) => resolve(data), { once: true })
        })

        worker.postMessage('isMainThread')
        expect(await message).toBe(false)
    })
}