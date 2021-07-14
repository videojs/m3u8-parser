module.exports = {
  allowCache: true,
  discontinuitySequence: 0,
  discontinuityStarts: [],
  mediaSequence: 0,
  playlistType: 'VOD',
  preloadSegment: {
    preloadHints: [
      {
        type: 'PART',
        uri: 'filePart273.1.mp4',
        byterange: {
          length: 2000,
          offset: 0
        }
      },
      {
        type: 'MAP',
        uri: 'file-init.mp4',
        byterange: {
          length: 5000,
          offset: 8355216
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
      '#EXT-X-PRELOAD-HINT:TYPE=PART,URI=\"filePart273.1.mp4\",BYTERANGE-LENGTH=2000',
      '#EXT-X-PRELOAD-HINT:TYPE=MAP,URI=\"file-init.mp4\",BYTERANGE-LENGTH=5000,BYTERANGE-START=8355216',
      '#EXT-X-PRELOAD-HINT:TYPE=FOO,URI=\"foo.mp4\",BYTERANGE-LENGTH=5000'
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
      raw: [
        '#EXTINF:10,',
        '#EXT-X-BYTERANGE:587500@',
        'hls_450k_video.ts'
      ],
      timeline: 0,
      uri: 'hls_450k_video.ts'
    },
    {
      byterange: {
        length: 587500,
        offset: 522828
      },
      duration: 10,
      raw: [
        '#EXTINF:10,',
        '#EXT-X-BYTERANGE:587500@522828',
        'hls_450k_video.ts'
      ],
      timeline: 0,
      uri: 'hls_450k_video.ts'
    },
    {
      byterange: {
        length: 713084,
        offset: 1110328
      },
      duration: 10,
      raw: [
        '#EXTINF:10,',
        '#EXT-X-BYTERANGE:713084',
        'hls_450k_video2.ts'
      ],
      timeline: 0,
      uri: 'hls_450k_video2.ts'
    },
    {
      byterange: {
        length: 476580,
        offset: 1823412
      },
      duration: 10,
      raw: [
        '#EXTINF:10,',
        '#EXT-X-BYTERANGE:476580@1823412',
        'hls_450k_video.ts'
      ],
      timeline: 0,
      uri: 'hls_450k_video.ts'
    },
    {
      byterange: {
        length: 535612,
        offset: 2299992
      },
      duration: 10,
      raw: [
        '#EXTINF:10,',
        '#EXT-X-BYTERANGE:535612@2299992',
        'hls_450k_video.ts'
      ],
      timeline: 0,
      uri: 'hls_450k_video.ts'
    },
    {
      byterange: {
        length: 207176,
        offset: 2835604
      },
      duration: 10,
      raw: [
        '#EXTINF:10,',
        '#EXT-X-BYTERANGE:207176@2835604',
        'hls_450k_video.ts'
      ],
      timeline: 0,
      uri: 'hls_450k_video.ts'
    },
    {
      byterange: {
        length: 455900,
        offset: 3042780
      },
      duration: 10,
      raw: [
        '#EXTINF:10,',
        '#EXT-X-BYTERANGE:455900@3042780',
        'hls_450k_video.ts'
      ],
      timeline: 0,
      uri: 'hls_450k_video.ts'
    },
    {
      byterange: {
        length: 657248,
        offset: 3498680
      },
      duration: 10,
      raw: [
        '#EXTINF:10,',
        '#EXT-X-BYTERANGE:657248@3498680',
        'hls_450k_video.ts'
      ],
      timeline: 0,
      uri: 'hls_450k_video.ts'
    },
    {
      byterange: {
        length: 571708,
        offset: 4155928
      },
      duration: 10,
      raw: [
        '#EXTINF:10,',
        '#EXT-X-BYTERANGE:571708@4155928',
        'hls_450k_video.ts'
      ],
      timeline: 0,
      uri: 'hls_450k_video.ts'
    },
    {
      byterange: {
        length: 485040,
        offset: 4727636
      },
      duration: 10,
      raw: [
        '#EXTINF:10,',
        '#EXT-X-BYTERANGE:485040@4727636',
        'hls_450k_video.ts'
      ],
      timeline: 0,
      uri: 'hls_450k_video.ts'
    },
    {
      byterange: {
        length: 709136,
        offset: 5212676
      },
      duration: 10,
      raw: [
        '#EXTINF:10,',
        '#EXT-X-BYTERANGE:709136@5212676',
        'hls_450k_video.ts'
      ],
      timeline: 0,
      uri: 'hls_450k_video.ts'
    },
    {
      byterange: {
        length: 730004,
        offset: 5921812
      },
      duration: 10,
      raw: [
        '#EXTINF:10,',
        '#EXT-X-BYTERANGE:730004@5921812',
        'hls_450k_video.ts'
      ],
      timeline: 0,
      uri: 'hls_450k_video.ts'
    },
    {
      byterange: {
        length: 456276,
        offset: 6651816
      },
      duration: 10,
      raw: [
        '#EXTINF:10,',
        '#EXT-X-BYTERANGE:456276@6651816',
        'hls_450k_video.ts'
      ],
      timeline: 0,
      uri: 'hls_450k_video.ts'
    },
    {
      byterange: {
        length: 468684,
        offset: 7108092
      },
      duration: 10,
      raw: [
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
          uri: 'hls_450k_video.part.ts',
          byterange: {
            length: 45553,
            offset: 0
          }
        },
        {
          duration: 0.33334,
          uri: 'hls_450k_video.part.ts',
          byterange: {
            length: 28823,
            offset: 7622329
          }
        },
        {
          duration: 0.33334,
          uri: 'hls_450k_video.part.ts',
          byterange: {
            length: 22444,
            offset: 7651152
          }
        },
        {
          duration: 0.33334,
          uri: 'hls_450k_video.part.ts',
          byterange: {
            length: 22444,
            offset: 7673596
          }
        }
      ],
      raw: [
        '#EXT-X-PART:DURATION=0.33334,URI=\"hls_450k_video.part.ts\",BYTERANGE=45553',
        '#EXT-X-PART:DURATION=0.33334,URI=\"hls_450k_video.part.ts\",BYTERANGE=28823@7622329',
        '#EXT-X-PART:DURATION=0.33334,URI=\"hls_450k_video.part.ts\",BYTERANGE=22444',
        '#EXT-X-PART:DURATION=0.33334,URI=\"hls_450k_video.part.ts\",BYTERANGE=22444',
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
  targetDuration: 10,
  version: 3
};
