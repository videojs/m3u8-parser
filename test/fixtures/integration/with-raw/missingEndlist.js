module.exports = {
  allowCache: true,
  mediaSequence: 0,
  segments: [
    {
      duration: 10,
      raw: [
        '#EXTINF:10,',
        '00001.ts'
      ],
      timeline: 0,
      uri: '00001.ts'
    },
    {
      duration: 10,
      raw: [
        '#EXTINF:10,',
        '00002.ts'
      ],
      timeline: 0,
      uri: '00002.ts'
    }
  ],
  targetDuration: 10,
  discontinuitySequence: 0,
  discontinuityStarts: []
};
