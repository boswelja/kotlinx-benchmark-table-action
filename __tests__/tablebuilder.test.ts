import * as tablebuild from '../src/tablebuilder'
import { Benchmark } from '../src/benchmark'
import { debug } from '@actions/core'
import sample from './sample.json'

const runMock = jest.spyOn(tablebuild, 'buildBenchmarkTable')

describe('tablebuilder', () => {
    it('maps the parsed benchmarks into markdown', () => {
        let benchmarks: Benchmark[] = JSON.parse(JSON.stringify(sample))
        debug("Num of benchmarks: " + benchmarks.length)
        let result = tablebuild.buildBenchmarkTable(benchmarks)
        expect(result).toBe(expectedTable)
    })
})

const expectedTable = "<table><tr><th>Benchmark</th><th>Score</th><th>Error</th></tr><tr><td>com.benchmarks.MessagesBenchmark.messageInsertionBenchmark</td><td>1.782ops/s</td><td>0.223ops/s</td></tr><tr><td>com.benchmarks.MessagesBenchmark.queryMessagesBenchmark</td><td>50.457ops/s</td><td>3.394ops/s</td></tr></table>"