module.exports = {
  allowCache: true,
  discontinuitySequence: 0,
  discontinuityStarts: [],
  mediaSequence: 0,
  playlistType: 'VOD',
  preloadSegment: {
    parts: [
      {
        duration: 0.33334,
        uri: 'hls_450k_video.ts',
        byterange: {
          length: 22444,
          offset: 0
        }
      }
    ],
    preloadHints: [
      {
        type: 'PART',
        uri: 'filePart273.1.mp4',
        byterange: {
          length: 2000,
          offset: 22444
        }
      },
      {
        type: 'MAP',
        uri: 'file-init.mp4',
        byterange: {
          length: 5000,
          offset: 8377660
        }
      },
      {
        type: 'FOO',
        uri: 'foo.mp4',
        byterange: {
          length: 5000,
          offset: 0
        }
      }
    ],
    raw: [
      '#EXT-X-PART:DURATION=0.33334,URI=\"hls_450k_video.ts\",BYTERANGE=22444',
      '#EXT-X-PRELOAD-HINT:TYPE=PART,URI=\"filePart273.1.mp4\",BYTERANGE-LENGTH=2000',
      '#EXT-X-PRELOAD-HINT:TYPE=MAP,URI=\"file-init.mp4\",BYTERANGE-LENGTH=5000,BYTERANGE-START=8377660',
      '#EXT-X-PRELOAD-HINT:TYPE=FOO,URI=\"foo.mp4\",BYTERANGE-LENGTH=5000'
    ],
    timeline: 0
  },
  segments: [
    {
      byterange: {
        length: 468684,
        offset: 7108092
      },
      duration: 10,
      raw: [
        '#EXTINF:10,',
        '#EXTINF:10,',
        '#EXT-X-BYTERANGE:468684@7108092',
        'hls_450k_video.ts'
      ],
      timeline: 0,
      uri: 'hls_450k_video.ts'
    },
    {
      byterange: {
        length: 444996,
        offset: 7576776
      },
      duration: 10,
      raw: [
        '#EXTINF:10,',
        '#EXT-X-BYTERANGE:444996@7576776',
        'hls_450k_video.ts'
      ],
      timeline: 0,
      uri: 'hls_450k_video.ts'
    },
    {
      byterange: {
        length: 331444,
        offset: 8021772
      },
      duration: 10,
      parts: [
        {
          duration: 0.33334,
          uri: 'hls_450k_video.ts',
          byterange: {
            length: 45553,
            offset: 0
          }
        },
        {
          duration: 0.33334,
          uri: 'hls_450k_video.ts',
          byterange: {
            length: 28823,
            offset: 7622329
          }
        },
        {
          duration: 0.33334,
          uri: 'hls_450k_video.ts',
          byterange: {
            length: 22444,
            offset: 7651152
          }
        },
        {
          duration: 0.33334,
          uri: 'hls_450k_video.ts',
          byterange: {
            length: 22444,
            offset: 7673596
          }
        }
      ],
      raw: [
        '#EXT-X-PART:DURATION=0.33334,URI=\"hls_450k_video.ts\",BYTERANGE=45553',
        '#EXT-X-PART:DURATION=0.33334,URI=\"hls_450k_video.ts\",BYTERANGE=28823@7622329',
        '#EXT-X-PART:DURATION=0.33334,URI=\"hls_450k_video.ts\",BYTERANGE=22444',
        '#EXT-X-PART:DURATION=0.33334,URI=\"hls_450k_video.ts\",BYTERANGE=22444',
        '#EXTINF:10,',
        '#EXT-X-BYTERANGE:331444@8021772',
        'hls_450k_video.ts'
      ],
      timeline: 0,
      uri: 'hls_450k_video.ts'
    },
    {
      byterange: {
        length: 44556,
        offset: 8353216
      },
      duration: 1.4167,
      parts: [
        {
          duration: 0.33334,
          uri: 'hls_450k_video.ts',
          byterange: {
            length: 45553,
            offset: 8021772
          }
        },
        {
          duration: 0.33334,
          uri: 'hls_450k_video.ts',
          byterange: {
            length: 28823,
            offset: 8067325
          }
        },
        {
          duration: 0.33334,
          uri: 'hls_450k_video.ts',
          byterange: {
            length: 22444,
            offset: 8096148
          }
        }
      ],
      raw: [
        '#EXT-X-PART:DURATION=0.33334,URI=\"hls_450k_video.ts\",BYTERANGE=45553@8021772',
        '#EXT-X-PART:DURATION=0.33334,URI=\"hls_450k_video.ts\",BYTERANGE=28823',
        '#EXT-X-PART:DURATION=0.33334,URI=\"hls_450k_video.ts\",BYTERANGE=22444',
        '#EXTINF:1.4167,',
        '#EXT-X-BYTERANGE:44556@8353216',
        'hls_450k_video.ts'
      ],
      timeline: 0,
      uri: 'hls_450k_video.ts'
    }
  ],
  skip: {
    skippedSegments: 3
  },
  targetDuration: 10,
  version: 3
};
