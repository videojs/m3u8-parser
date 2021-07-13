module.exports = {
  allowCache: true,
  mediaSequence: 0,
  playlistType: 'VOD',
  segments: [
    {
      duration: 0.01,
      raw: [
        '#EXTINF:0,',
        'http://example.com/00001.ts'
      ],
      timeline: 0,
      uri: 'http://example.com/00001.ts'
    }
  ],
  targetDuration: 10,
  endList: true,
  discontinuitySequence: 0,
  discontinuityStarts: []
};
