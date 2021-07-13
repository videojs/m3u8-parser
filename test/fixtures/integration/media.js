module.exports = {
  allowCache: true,
  mediaSequence: 0,
  playlistType: 'VOD',
  segments: [
    {
      duration: 10,
      raw: [
        '#EXTINF:10,',
        'media-00001.ts'
      ],
      timeline: 0,
      uri: 'media-00001.ts'
    },
    {
      duration: 10,
      raw: [
        '#EXTINF:10,',
        'media-00002.ts'
      ],
      timeline: 0,
      uri: 'media-00002.ts'
    },
    {
      duration: 10,
      raw: [
        '#EXTINF:10,',
        'media-00003.ts'
      ],
      timeline: 0,
      uri: 'media-00003.ts'
    },
    {
      duration: 10,
      raw: [
        '#EXTINF:10,',
        'media-00004.ts'
      ],
      timeline: 0,
      uri: 'media-00004.ts'
    }
  ],
  targetDuration: 10,
  endList: true,
  discontinuitySequence: 0,
  discontinuityStarts: []
};
