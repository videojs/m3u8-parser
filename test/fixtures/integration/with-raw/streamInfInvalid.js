module.exports = {
  allowCache: true,
  playlists: [
    {
      attributes: {
        'PROGRAM-ID': 1
      },
      raw: [
        '#EXT-X-STREAM-INF:PROGRAM-ID=1',
        'media.m3u8'
      ],
      timeline: 0,
      uri: 'media.m3u8'
    },
    {
      raw: [
        '#EXT-X-STREAM-INF:',
        'media1.m3u8'
      ],
      timeline: 0,
      uri: 'media1.m3u8'
    }
  ],
  discontinuityStarts: [],
  mediaGroups: {
    'VIDEO': {},
    'AUDIO': {},
    'CLOSED-CAPTIONS': {},
    'SUBTITLES': {}
  },
  segments: []
};
