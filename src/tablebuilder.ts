import { Benchmark } from "./benchmark"

function formattedScoreFor(benchmark: Benchmark): string {
    return benchmark.primaryMetric.score.toFixed(3) + benchmark.primaryMetric.scoreUnit
}

function formattedErrorFor(benchmark: Benchmark): string {
    return benchmark.primaryMetric.scoreError.toFixed(3) + benchmark.primaryMetric.scoreUnit
}

export function buildBenchmarkTable(benchmarks: Benchmark[]): string {
    let tableString = `<table><tr><th>Benchmark</th><th>Score</th><th>Error</th></tr>`
    benchmarks.forEach(function (benchmark) {
        tableString += `<tr>`
        tableString += `<td>${benchmark.benchmark}</td>`
        tableString += `<td>${formattedScoreFor(benchmark)}</td>`
        tableString += `<td>${formattedErrorFor(benchmark)}</td>`
        tableString += `</tr>`
    })
    tableString += `</table>`

    return tableString
}
