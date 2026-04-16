# @dandre3000/environment

Check if code is running on the main thread or a worker of a browser, node, bun or deno instance.

## Installation

npm i @dandre3000/environment

## Usage

```js
import { isMainThread, runtime } from '@dandre3000/environment'

if (isMainThread) {
    const url = new URL(import.meta.url)
    
    if (runtime === 'node') {
        const worker = new (await import('node:worker_threads')).Worker(url)

        worker.on('message', data => console.log(data))
    } else {
        const worker = new Worker(url, { type: 'module' })

        worker.addEventListener('message', ({ data }) => console.log(data))
    }
} else {
    if (runtime === 'node') {
        (await import('node:worker_threads')).parentPort.postMessage('YOOO')
    } else {
        postMessage('YOOO')
    }
}
```

## Exports

#### runtime: 'bun' | 'browser' | 'deno' | 'node'

The name of the current runtme.

#### isMainThread: boolean

True if the current global scope is the main thread or false otherwise.

## License

[MIT](https://github.com/dandre3000/environment/blob/main/LICENSE)
