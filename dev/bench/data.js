window.BENCHMARK_DATA = {
  lastUpdate: 1639458401425,
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
          id: '5860d8ce4f2e829f29c2789be8b0029d0b1c9aec',
          message:
            'Merge pull request #929 from napi-rs/async-error-handling\n\nfix(napi): ThreadsafeFunction with ErrorStrategy::Fatal should throw fatal exception',
          timestamp: '2021-12-14T12:59:07+08:00',
          tree_id: '564d313887343a2c6b80d9f58502e251f8268f2e',
          url: 'https://github.com/napi-rs/napi-rs/commit/5860d8ce4f2e829f29c2789be8b0029d0b1c9aec',
        },
        date: 1639458400169,
        tool: 'benchmarkjs',
        benches: [
          {
            name: 'noop#napi-rs',
            value: 52518527,
            range: '±0.29%',
            unit: 'ops/sec',
            extra: '96 samples',
          },
          {
            name: 'noop#JavaScript',
            value: 711519930,
            range: '±0.17%',
            unit: 'ops/sec',
            extra: '97 samples',
          },
          {
            name: 'Plus number#napi-rs',
            value: 18436475,
            range: '±0.14%',
            unit: 'ops/sec',
            extra: '97 samples',
          },
          {
            name: 'Plus number#JavaScript',
            value: 708323757,
            range: '±0.15%',
            unit: 'ops/sec',
            extra: '98 samples',
          },
          {
            name: 'Create buffer#napi-rs',
            value: 317780,
            range: '±11.05%',
            unit: 'ops/sec',
            extra: '53 samples',
          },
          {
            name: 'Create buffer#JavaScript',
            value: 1372910,
            range: '±3.5%',
            unit: 'ops/sec',
            extra: '80 samples',
          },
          {
            name: 'createArray#createArrayJson',
            value: 38687,
            range: '±0.13%',
            unit: 'ops/sec',
            extra: '96 samples',
          },
          {
            name: 'createArray#create array for loop',
            value: 7630,
            range: '±0.13%',
            unit: 'ops/sec',
            extra: '99 samples',
          },
          {
            name: 'createArray#create array with serde trait',
            value: 7688,
            range: '±0.13%',
            unit: 'ops/sec',
            extra: '99 samples',
          },
          {
            name: 'getArrayFromJs#get array from json string',
            value: 16514,
            range: '±0.84%',
            unit: 'ops/sec',
            extra: '96 samples',
          },
          {
            name: 'getArrayFromJs#get array from serde',
            value: 10353,
            range: '±0.03%',
            unit: 'ops/sec',
            extra: '99 samples',
          },
          {
            name: 'getArrayFromJs#get array with for loop',
            value: 12195,
            range: '±0.05%',
            unit: 'ops/sec',
            extra: '99 samples',
          },
          {
            name: 'Get Set property#Get Set from native#u32',
            value: 385874,
            range: '±5.8%',
            unit: 'ops/sec',
            extra: '76 samples',
          },
          {
            name: 'Get Set property#Get Set from JavaScript#u32',
            value: 341650,
            range: '±5.93%',
            unit: 'ops/sec',
            extra: '75 samples',
          },
          {
            name: 'Get Set property#Get Set from native#string',
            value: 348317,
            range: '±5.54%',
            unit: 'ops/sec',
            extra: '77 samples',
          },
          {
            name: 'Get Set property#Get Set from JavaScript#string',
            value: 327537,
            range: '±5.82%',
            unit: 'ops/sec',
            extra: '79 samples',
          },
          {
            name: 'Async task#spawn task',
            value: 37658,
            range: '±0.92%',
            unit: 'ops/sec',
            extra: '84 samples',
          },
          {
            name: 'Async task#ThreadSafeFunction',
            value: 380,
            range: '±2.27%',
            unit: 'ops/sec',
            extra: '69 samples',
          },
          {
            name: 'Async task#Tokio future to Promise',
            value: 28685,
            range: '±0.42%',
            unit: 'ops/sec',
            extra: '83 samples',
          },
          {
            name: 'Query#query * 100',
            value: 1966,
            range: '±2.21%',
            unit: 'ops/sec',
            extra: '86 samples',
          },
          {
            name: 'Query#query * 1',
            value: 28758,
            range: '±0.64%',
            unit: 'ops/sec',
            extra: '70 samples',
          },
        ],
      },
    ],
  },
}
