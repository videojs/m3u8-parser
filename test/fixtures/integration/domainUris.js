module.exports = {
  allowCache: true,
  mediaSequence: 0,
  playlistType: 'VOD',
  segments: [
    {
      duration: 10,
      raw: [
        '#EXTINF:10,',
        '/00001.ts'
      ],
      timeline: 0,
      uri: '/00001.ts'
    },
    {
      duration: 10,
      raw: [
        '#EXTINF:10,',
        '/subdir/00002.ts'
      ],
      timeline: 0,
      uri: '/subdir/00002.ts'
    },
    {
      duration: 10,
      raw: [
        '#EXTINF:10,',
        '/00003.ts'
      ],
      timeline: 0,
      uri: '/00003.ts'
    },
    {
      duration: 10,
      raw: [
        '#EXTINF:10,',
        '/00004.ts'
      ],
      timeline: 0,
      uri: '/00004.ts'
    }
  ],
  targetDuration: 10,
  endList: true,
  discontinuitySequence: 0,
  discontinuityStarts: []
};
