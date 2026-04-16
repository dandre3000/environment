import { parentPort } from 'node:worker_threads'
import { messageListener } from './worker.js'

parentPort.once('message', data => messageListener(data, parentPort))