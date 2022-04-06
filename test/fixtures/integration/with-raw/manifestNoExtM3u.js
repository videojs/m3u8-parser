module.exports = {
  allowCache: true,
  mediaSequence: 0,
  segments: [
    {
      duration: 10,
      raw: [
        '#EXTINF:10,',
        '/test/ts-files/zencoder/gogo/00001.ts'
      ],
      timeline: 0,
      uri: '/test/ts-files/zencoder/gogo/00001.ts'
    }
  ],
  targetDuration: 10,
  endList: true,
  discontinuitySequence: 0,
  discontinuityStarts: []
};
