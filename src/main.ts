import { getInput, setOutput, setFailed, exportVariable, debug, info } from '@actions/core'
import { glob } from "glob"
import { mapFilesToBenchmarks } from "./benchmark"
import { buildBenchmarkTable } from "./tablebuilder"

export function run() {
    // Get the result json path
    let benchmarkResultPath = getInput("benchmark-results", { required: true })
    debug("Getting results matching path " + benchmarkResultPath)

    try {
        // Get all benchmarks
        let filePaths = glob.sync(benchmarkResultPath);
        let benchmarks = mapFilesToBenchmarks(filePaths);
        if (benchmarks.length < 1) {
            setFailed("Didn't find any benchmarks");
            return
        }

        // Build and output the table
        let table = buildBenchmarkTable(benchmarks)
        setOutput("benchmark-table", table);
    } catch {
        setFailed("Failed to get benchmarks")
        return
    }
}
