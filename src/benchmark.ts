import { readFileSync } from "fs";

export interface Benchmark {
    jmhVersion:            string;
    benchmark:             string;
    mode:                  string;
    threads:               number;
    forks:                 number;
    jvm:                   string;
    jvmArgs:               string[];
    jdkVersion:            string;
    vmName:                string;
    vmVersion:             string;
    warmupIterations:      number;
    warmupTime:            string;
    warmupBatchSize:       number;
    measurementIterations: number;
    measurementTime:       string;
    measurementBatchSize:  number;
    primaryMetric:         PrimaryMetric;
    secondaryMetrics:      SecondaryMetrics;
}

export interface PrimaryMetric {
    score:            number;
    scoreError:       number;
    scoreConfidence:  number[];
    scorePercentiles: { [key: string]: number };
    scoreUnit:        string;
    rawData:          Array<number[]>;
}

export interface SecondaryMetrics {
}

function benchmarksFromFile(filePath: string): Benchmark[] {
    let rawData = readFileSync(filePath);
    let benchmarks: Benchmark[] = JSON.parse(rawData.toString());
    return benchmarks;
}

export function mapFilesToBenchmarks(files: string[]): Benchmark[] {
    return files.flatMap(function (filePath) {
        return benchmarksFromFile(filePath)
    })
}
