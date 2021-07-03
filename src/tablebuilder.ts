import { Benchmark } from "./benchmark";

function formattedScoreFor(benchmark: Benchmark): string {
    return benchmark.primaryMetric.score.toFixed(3) + benchmark.primaryMetric.scoreUnit
}

function formattedErrorFor(benchmark: Benchmark): string {
    return benchmark.primaryMetric.scoreError.toFixed(3) + benchmark.primaryMetric.scoreUnit
}

export function buildBenchmarkTable(benchmarks: Benchmark[]): string {
    var tableString = "| Benchmark | Score | Error |\n" +
                      "| --------- | ----- | ----- |\n";

    benchmarks.forEach(function (benchmark) {
        tableString +=
            "| " + benchmark.benchmark + " | " + formattedScoreFor(benchmark) + " | " + formattedErrorFor(benchmark) + " |"
    });

    return tableString;
}
