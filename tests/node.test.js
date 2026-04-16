import { Worker } from 'node:worker_threads'
import { runTests } from './test.js'
import test from 'node:test'

runTests(test, 'node',  Worker)