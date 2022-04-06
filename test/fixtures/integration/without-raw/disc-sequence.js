module.exports = {
  allowCache: true,
  mediaSequence: 0,
  discontinuitySequence: 3,
  segments: [
    {
      duration: 10,
      raw: undefined,
      timeline: 3,
      uri: '001.ts'
    },
    {
      duration: 19,
      raw: undefined,
      timeline: 3,
      uri: '002.ts'
    },
    {
      discontinuity: true,
      duration: 10,
      raw: undefined,
      timeline: 4,
      uri: '003.ts'
    },
    {
      duration: 11,
      raw: undefined,
      timeline: 4,
      uri: '004.ts'
    }
  ],
  targetDuration: 19,
  endList: true,
  discontinuityStarts: [2],
  version: 3
};
