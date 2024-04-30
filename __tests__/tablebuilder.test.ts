import * as tablebuild from '../src/tablebuilder'
import { Benchmark } from '../src/benchmark'
import { debug } from '@actions/core'
import sample from './fixtures/sample.json'
import { readFileSync } from 'fs'

const runMock = jest.spyOn(tablebuild, 'buildBenchmarkTable')

describe('tablebuilder', () => {
    it('maps the parsed benchmarks into markdown', () => {
        let benchmarks: Benchmark[] = JSON.parse(JSON.stringify(sample))
        debug("Num of benchmarks: " + benchmarks.length)
        let result = tablebuild.buildBenchmarkTable(benchmarks)
        let output = readFileSync(__dirname + '/fixtures/output.txt')
        
        expect(result).toBe(output.toString())
    })
})
