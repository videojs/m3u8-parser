module.exports = {
  allowCache: true,
  discontinuitySequence: 0,
  discontinuityStarts: [],
  mediaSequence: 0,
  playlistType: 'VOD',
  preloadSegment: {
    preloadHints: [
      {
        'BYTERANGE-LENGTH': 2000,
        'TYPE': 'PART',
        'URI': 'filePart273.1.mp4',
        'byterange': {
          length: 2000,
          offset: 0
        }
      },
      {
        'BYTERANGE-LENGTH': 5000,
        'BYTERANGE-START': 8355216,
        'TYPE': 'MAP',
        'URI': 'file-init.mp4',
        'byterange': {
          length: 5000,
          offset: 8355216
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
        length: 587500,
        offset: 0
      },
      duration: 10,
      timeline: 0,
      uri: 'hls_450k_video.ts'
    },
    {
      byterange: {
        length: 587500,
        offset: 522828
      },
      duration: 10,
      timeline: 0,
      uri: 'hls_450k_video.ts'
    },
    {
      byterange: {
        length: 713084,
        offset: 1110328
      },
      duration: 10,
      timeline: 0,
      uri: 'hls_450k_video2.ts'
    },
    {
      byterange: {
        length: 476580,
        offset: 1823412
      },
      duration: 10,
      timeline: 0,
      uri: 'hls_450k_video.ts'
    },
    {
      byterange: {
        length: 535612,
        offset: 2299992
      },
      duration: 10,
      timeline: 0,
      uri: 'hls_450k_video.ts'
    },
    {
      byterange: {
        length: 207176,
        offset: 2835604
      },
      duration: 10,
      timeline: 0,
      uri: 'hls_450k_video.ts'
    },
    {
      byterange: {
        length: 455900,
        offset: 3042780
      },
      duration: 10,
      timeline: 0,
      uri: 'hls_450k_video.ts'
    },
    {
      byterange: {
        length: 657248,
        offset: 3498680
      },
      duration: 10,
      timeline: 0,
      uri: 'hls_450k_video.ts'
    },
    {
      byterange: {
        length: 571708,
        offset: 4155928
      },
      duration: 10,
      timeline: 0,
      uri: 'hls_450k_video.ts'
    },
    {
      byterange: {
        length: 485040,
        offset: 4727636
      },
      duration: 10,
      timeline: 0,
      uri: 'hls_450k_video.ts'
    },
    {
      byterange: {
        length: 709136,
        offset: 5212676
      },
      duration: 10,
      timeline: 0,
      uri: 'hls_450k_video.ts'
    },
    {
      byterange: {
        length: 730004,
        offset: 5921812
      },
      duration: 10,
      timeline: 0,
      uri: 'hls_450k_video.ts'
    },
    {
      byterange: {
        length: 456276,
        offset: 6651816
      },
      duration: 10,
      timeline: 0,
      uri: 'hls_450k_video.ts'
    },
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
          URI: 'hls_450k_video.part.ts',
          byterange: {
            length: 45553,
            offset: 0
          }
        },
        {
          BYTERANGE: '28823@7622329',
          DURATION: 0.33334,
          URI: 'hls_450k_video.part.ts',
          byterange: {
            length: 28823,
            offset: 7622329
          }
        },
        {
          BYTERANGE: '22444',
          DURATION: 0.33334,
          URI: 'hls_450k_video.part.ts',
          byterange: {
            length: 22444,
            offset: 7651152
          }
        },
        {
          BYTERANGE: '22444',
          DURATION: 0.33334,
          URI: 'hls_450k_video.part.ts',
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
  targetDuration: 10,
  version: 3
};
