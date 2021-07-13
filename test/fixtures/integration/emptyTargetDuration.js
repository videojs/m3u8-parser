module.exports = {
  allowCache: true,
  playlists: [
    {
      attributes: {
        'PROGRAM-ID': 1,
        'BANDWIDTH': 240000,
        'RESOLUTION': {
          width: 396,
          height: 224
        }
      },
      raw: [
        '#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=240000,RESOLUTION=396x224',
        'http://c.brightcove.com/services/mobile/streaming/index/rendition.m3u8?assetId=1824686811001&videoId=1824650741001'
      ],
      timeline: 0,
      uri: 'http://c.brightcove.com/services/mobile/streaming/index/rendition.m3u8?assetId=1824686811001&videoId=1824650741001'
    },
    {
      attributes: {
        'PROGRAM-ID': 1,
        'BANDWIDTH': 40000
      },
      raw: [
        '#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=40000',
        'http://c.brightcove.com/services/mobile/streaming/index/rendition.m3u8?assetId=1824683759001&videoId=1824650741001'
      ],
      timeline: 0,
      uri: 'http://c.brightcove.com/services/mobile/streaming/index/rendition.m3u8?assetId=1824683759001&videoId=1824650741001'
    },
    {
      attributes: {
        'PROGRAM-ID': 1,
        'BANDWIDTH': 440000,
        'RESOLUTION': {
          width: 396,
          height: 224
        }
      },
      raw: [
        '#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=440000,RESOLUTION=396x224',
        'http://c.brightcove.com/services/mobile/streaming/index/rendition.m3u8?assetId=1824686593001&videoId=1824650741001'
      ],
      timeline: 0,
      uri: 'http://c.brightcove.com/services/mobile/streaming/index/rendition.m3u8?assetId=1824686593001&videoId=1824650741001'
    },
    {
      attributes: {
        'PROGRAM-ID': 1,
        'BANDWIDTH': 1928000,
        'RESOLUTION': {
          width: 960,
          height: 540
        }
      },
      raw: [
        '#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=1928000,RESOLUTION=960x540',
        'http://c.brightcove.com/services/mobile/streaming/index/rendition.m3u8?assetId=1824687660001&videoId=1824650741001'
      ],
      timeline: 0,
      uri: 'http://c.brightcove.com/services/mobile/streaming/index/rendition.m3u8?assetId=1824687660001&videoId=1824650741001'
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
