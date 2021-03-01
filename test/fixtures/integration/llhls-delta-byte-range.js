module.exports = {
  allowCache: true,
  discontinuitySequence: 0,
  discontinuityStarts: [],
  mediaSequence: 0,
  playlistType: 'VOD',
  preloadSegment: {
    parts: [
      {
        BYTERANGE: '22444',
        DURATION: 0.33334,
        URI: 'hls_450k_video.ts',
        byterange: {
          length: 22444,
          offset: 0
        }
      }
    ],
    preloadHints: [
      {
        'BYTERANGE-LENGTH': 2000,
        'TYPE': 'PART',
        'URI': 'filePart273.1.mp4',
        'byterange': {
          length: 2000,
          offset: 22444
        }
      },
      {
        'BYTERANGE-LENGTH': 5000,
        'BYTERANGE-START': 8377660,
        'TYPE': 'MAP',
        'URI': 'file-init.mp4',
        'byterange': {
          length: 5000,
          offset: 8377660
        }
      },
      {
        'BYTERANGE-LENGTH': 5000,
        'TYPE': 'FOO',
        'URI': 'foo.mp4',
        'byterange': {
          length: 5000,
          offset: 0
        }
      }
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
      timeline: 0,
      uri: 'hls_450k_video.ts'
    },
    {
      byterange: {
        length: 444996,
        offset: 7576776
      },
      duration: 10,
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
          BYTERANGE: '45553',
          DURATION: 0.33334,
          URI: 'hls_450k_video.ts',
          byterange: {
            length: 45553,
            offset: 0
          }
        },
        {
          BYTERANGE: '28823@7622329',
          DURATION: 0.33334,
          URI: 'hls_450k_video.ts',
          byterange: {
            length: 28823,
            offset: 7622329
          }
        },
        {
          BYTERANGE: '22444',
          DURATION: 0.33334,
          URI: 'hls_450k_video.ts',
          byterange: {
            length: 22444,
            offset: 7651152
          }
        },
        {
          BYTERANGE: '22444',
          DURATION: 0.33334,
          URI: 'hls_450k_video.ts',
          byterange: {
            length: 22444,
            offset: 7673596
          }
        }
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
          BYTERANGE: '45553@8021772',
          DURATION: 0.33334,
          URI: 'hls_450k_video.ts',
          byterange: {
            length: 45553,
            offset: 8021772
          }
        },
        {
          BYTERANGE: '28823',
          DURATION: 0.33334,
          URI: 'hls_450k_video.ts',
          byterange: {
            length: 28823,
            offset: 8067325
          }
        },
        {
          BYTERANGE: '22444',
          DURATION: 0.33334,
          URI: 'hls_450k_video.ts',
          byterange: {
            length: 22444,
            offset: 8096148
          }
        }
      ],
      timeline: 0,
      uri: 'hls_450k_video.ts'
    }
  ],
  skip: {
    'SKIPPED-SEGMENTS': 3
  },
  targetDuration: 10,
  version: 3
};
