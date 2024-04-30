# kotlinx-benchmark-table-action
An Action to take info from kotlinx-benchmark outputs and display them in a table as a pull request comment

Check [action.yml](action.yml) for a description of inputs and outputs.

### Configuration sample

1. As a GitHub Summary check:

```yml
- name: Create Benchmark Table
  id: benchmark-table
  uses: boswelja/kotlinx-benchmark-table-action@0.0.2
  with:
    benchmark-results: ./benchmarks/build/reports/benchmarks/main/**/jvm.json
- name: Post Results
  run: |
    echo '## Benchmarks results ⏱️' >> $GITHUB_STEP_SUMMARY
    echo '${{steps.benchmark-table.outputs.benchmark-table}}️' >> $GITHUB_STEP_SUMMARY
```

2. As a GitHub PR comment (Assuming the action is running on a GitHub runners):

```yml
- name: Create Benchmark Table
  id: benchmark-table
  uses: boswelja/kotlinx-benchmark-table-action@0.0.2
  with:
    benchmark-results: ./benchmarks/build/reports/benchmarks/main/**/jvm.json
- name: Post Results
  env:
    GH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
    GH_HEAD_REF: ${{github.head_ref}}
  run: |
    gh pr comment "$GH_HEAD_REF" --body "
    ## Benchmarks from last commit:
    ${{steps.benchmark-table.outputs.benchmark-table}}
    "
```
