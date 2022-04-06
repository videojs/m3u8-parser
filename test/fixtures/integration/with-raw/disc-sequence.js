module.exports = {
  allowCache: true,
  mediaSequence: 0,
  discontinuitySequence: 3,
  segments: [
    {
      duration: 10,
      raw: [
        '#EXTINF:10,0',
        '001.ts'
      ],
      timeline: 3,
      uri: '001.ts'
    },
    {
      duration: 19,
      raw: [
        '#EXTINF:19,0',
        '002.ts'
      ],
      timeline: 3,
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
      timeline: 4,
      uri: '003.ts'
    },
    {
      duration: 11,
      raw: [
        '#EXTINF:11,0',
        '004.ts'
      ],
      timeline: 4,
      uri: '004.ts'
    }
  ],
  targetDuration: 19,
  endList: true,
  discontinuityStarts: [2],
  version: 3
};
