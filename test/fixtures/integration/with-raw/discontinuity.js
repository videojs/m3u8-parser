module.exports = {
  allowCache: true,
  mediaSequence: 0,
  discontinuitySequence: 0,
  segments: [
    {
      duration: 10,
      raw: [
        '#EXTINF:10,0',
        '001.ts'
      ],
      timeline: 0,
      uri: '001.ts'
    },
    {
      duration: 19,
      raw: [
        '#EXTINF:19,0',
        '002.ts'
      ],
      timeline: 0,
      uri: '002.ts'
    },
    {
      discontinuity: true,
      duration: 10,
      raw: [
        '#EXT-X-DISCONTINUITY',
        '#EXTINF:10,0',
        '003.ts'
      ],
      timeline: 1,
      uri: '003.ts'
    },
    {
      duration: 11,
      raw: [
        '#EXTINF:11,0',
        '004.ts'
      ],
      timeline: 1,
      uri: '004.ts'
    },
    {
      discontinuity: true,
      duration: 10,
      raw: [
        '#EXT-X-DISCONTINUITY',
        '#EXTINF:10,0',
        '005.ts'
      ],
      timeline: 2,
      uri: '005.ts'
    },
    {
      duration: 10,
      raw: [
        '#EXTINF:10,0',
        '006.ts'
      ],
      timeline: 2,
      uri: '006.ts'
    },
    {
      duration: 10,
      raw: [
        '#EXTINF:10,0',
        '007.ts'
      ],
      timeline: 2,
      uri: '007.ts'
    },
    {
      discontinuity: true,
      duration: 10,
      raw: [
        '#EXT-X-DISCONTINUITY',
        '#EXTINF:10,0',
        '008.ts'
      ],
      timeline: 3,
      uri: '008.ts'
    },
    {
      duration: 16,
      raw: [
        '#EXTINF:16,0',
        '009.ts'
      ],
      timeline: 3,
      uri: '009.ts'
    }
  ],
  targetDuration: 19,
  endList: true,
  discontinuityStarts: [2, 4, 7],
  version: 3
};
