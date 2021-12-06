window.BENCHMARK_DATA = {
  lastUpdate: 1638771958478,
  repoUrl: 'https://github.com/napi-rs/napi-rs',
  entries: {
    Benchmark: [
      {
        commit: {
          author: {
            email: 'lynweklm@gmail.com',
            name: 'LongYinan',
            username: 'Brooooooklyn',
          },
          committer: {
            email: 'noreply@github.com',
            name: 'GitHub',
            username: 'web-flow',
          },
          distinct: true,
          id: '15a127c1b9eb42ee570bf7889e144f5db60d1a77',
          message:
            'Merge pull request #906 from napi-rs/skip-register-in-test\n\nfix(napi-derive): disable register logic in rust test',
          timestamp: '2021-12-06T14:07:45+08:00',
          tree_id: '16e4b84b0de7199617fe45143d474d09d5485353',
          url: 'https://github.com/napi-rs/napi-rs/commit/15a127c1b9eb42ee570bf7889e144f5db60d1a77',
        },
        date: 1638771956742,
        tool: 'benchmarkjs',
        benches: [
          {
            name: 'noop#napi-rs',
            value: 47344258,
            range: '±0.7%',
            unit: 'ops/sec',
            extra: '90 samples',
          },
          {
            name: 'noop#JavaScript',
            value: 622881011,
            range: '±0.55%',
            unit: 'ops/sec',
            extra: '91 samples',
          },
          {
            name: 'Plus number#napi-rs',
            value: 16013798,
            range: '±0.75%',
            unit: 'ops/sec',
            extra: '92 samples',
          },
          {
            name: 'Plus number#JavaScript',
            value: 616697875,
            range: '±0.47%',
            unit: 'ops/sec',
            extra: '93 samples',
          },
          {
            name: 'Create buffer#napi-rs',
            value: 334065,
            range: '±9.9%',
            unit: 'ops/sec',
            extra: '59 samples',
          },
          {
            name: 'Create buffer#JavaScript',
            value: 1572723,
            range: '±3.98%',
            unit: 'ops/sec',
            extra: '83 samples',
          },
          {
            name: 'createArray#createArrayJson',
            value: 36171,
            range: '±0.45%',
            unit: 'ops/sec',
            extra: '91 samples',
          },
          {
            name: 'createArray#create array for loop',
            value: 7036,
            range: '±0.51%',
            unit: 'ops/sec',
            extra: '91 samples',
          },
          {
            name: 'createArray#create array with serde trait',
            value: 6881,
            range: '±0.63%',
            unit: 'ops/sec',
            extra: '89 samples',
          },
          {
            name: 'getArrayFromJs#get array from json string',
            value: 14782,
            range: '±1.04%',
            unit: 'ops/sec',
            extra: '86 samples',
          },
          {
            name: 'getArrayFromJs#get array from serde',
            value: 9483,
            range: '±0.57%',
            unit: 'ops/sec',
            extra: '90 samples',
          },
          {
            name: 'getArrayFromJs#get array with for loop',
            value: 11300,
            range: '±0.46%',
            unit: 'ops/sec',
            extra: '87 samples',
          },
          {
            name: 'Get Set property#Get Set from native#u32',
            value: 342354,
            range: '±5.02%',
            unit: 'ops/sec',
            extra: '75 samples',
          },
          {
            name: 'Get Set property#Get Set from JavaScript#u32',
            value: 303153,
            range: '±5.27%',
            unit: 'ops/sec',
            extra: '74 samples',
          },
          {
            name: 'Get Set property#Get Set from native#string',
            value: 329782,
            range: '±5.05%',
            unit: 'ops/sec',
            extra: '78 samples',
          },
          {
            name: 'Get Set property#Get Set from JavaScript#string',
            value: 282600,
            range: '±4.84%',
            unit: 'ops/sec',
            extra: '82 samples',
          },
          {
            name: 'Async task#spawn task',
            value: 29404,
            range: '±0.74%',
            unit: 'ops/sec',
            extra: '82 samples',
          },
          {
            name: 'Async task#ThreadSafeFunction',
            value: 359,
            range: '±3.26%',
            unit: 'ops/sec',
            extra: '66 samples',
          },
          {
            name: 'Async task#Tokio future to Promise',
            value: 23370,
            range: '±2.11%',
            unit: 'ops/sec',
            extra: '81 samples',
          },
          {
            name: 'Query#query * 100',
            value: 1777,
            range: '±1.28%',
            unit: 'ops/sec',
            extra: '87 samples',
          },
          {
            name: 'Query#query * 1',
            value: 24798,
            range: '±1.05%',
            unit: 'ops/sec',
            extra: '84 samples',
          },
        ],
      },
    ],
  },
}
