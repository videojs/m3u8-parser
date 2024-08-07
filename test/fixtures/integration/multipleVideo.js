module.exports = {
  allowCache: true,
  dateRanges: [],
  discontinuityStarts: [],
  iFramePlaylists: [],
  mediaGroups: {
    'AUDIO': {
      aac: {
        English: {
          autoselect: true,
          default: true,
          language: 'eng',
          uri: 'eng/prog_index.m3u8'
        }
      }
    },
    'VIDEO': {
      '200kbs': {
        Angle1: {
          autoselect: true,
          default: true
        },
        Angle2: {
          autoselect: true,
          default: false,
          uri: 'Angle2/200kbs/prog_index.m3u8'
        },
        Angle3: {
          autoselect: true,
          default: false,
          uri: 'Angle3/200kbs/prog_index.m3u8'
        }
      },
      '500kbs': {
        Angle1: {
          autoselect: true,
          default: true
        },
        Angle2: {
          autoselect: true,
          default: false,
          uri: 'Angle2/500kbs/prog_index.m3u8'
        },
        Angle3: {
          autoselect: true,
          default: false,
          uri: 'Angle3/500kbs/prog_index.m3u8'
        }
      }
    },
    'CLOSED-CAPTIONS': {},
    'SUBTITLES': {}
  },
  playlists: [{
    attributes: {
      'PROGRAM-ID': 1,
      'BANDWIDTH': 300000,
      'CODECS': 'mp4a.40.2,avc1.4d401e',
      'AUDIO': 'aac',
      'VIDEO': '200kbs'
    },
    timeline: 0,
    uri: 'Angle1/200kbs/prog_index.m3u'
  }, {
    attributes: {
      'PROGRAM-ID': 1,
      'BANDWIDTH': 754857,
      'CODECS': 'mp4a.40.2,avc1.4d401e',
      'AUDIO': 'aac',
      'VIDEO': '500kbs'
    },
    timeline: 0,
    uri: 'Angle1/500kbs/prog_index.m3u8'
  }],
  segments: []
};
