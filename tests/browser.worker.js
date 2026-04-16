import { messageListener } from './worker.js'

addEventListener('message', ({ data }) => {
    messageListener(data, globalThis)
})