module.exports = {
  allowCache: true,
  dateRanges: [],
  discontinuityStarts: [],
  iFramePlaylists: [
    {
      attributes: {
        'AVERAGE-BANDWIDTH': 248586,
        'BANDWIDTH': 593626,
        'CODECS': 'hvc1.2.4.L123.B0',
        'HDCP-LEVEL': 'NONE',
        'RESOLUTION': { width: 1280, height: 720 },
        'URI': 'sdr_720/iframe_index.m3u8',
        'VIDEO-RANGE': 'SDR'
      },
      timeline: 0,
      uri: 'sdr_720/iframe_index.m3u8'
    },
    {
      attributes: {
        'AVERAGE-BANDWIDTH': 399790,
        'BANDWIDTH': 956552,
        'CODECS': 'hvc1.2.4.L123.B0',
        'HDCP-LEVEL': 'TYPE-0',
        'RESOLUTION': { width: 1920, height: 1080 },
        'URI': 'sdr_1080/iframe_index.m3u8',
        'VIDEO-RANGE': 'SDR'
      },
      timeline: 0,
      uri: 'sdr_1080/iframe_index.m3u8'
    },
    {
      attributes: {
        'AVERAGE-BANDWIDTH': 826971,
        'BANDWIDTH': 1941397,
        'CODECS': 'hvc1.2.4.L150.B0',
        'HDCP-LEVEL': 'TYPE-1',
        'RESOLUTION': { width: 3840, height: 2160 },
        'URI': 'sdr_2160/iframe_index.m3u8',
        'VIDEO-RANGE': 'SDR'
      },
      timeline: 0,
      uri: 'sdr_2160/iframe_index.m3u8'
    },
    {
      attributes: {
        'AVERAGE-BANDWIDTH': 232253,
        'BANDWIDTH': 573073,
        'CODECS': 'dvh1.05.01',
        'HDCP-LEVEL': 'NONE',
        'RESOLUTION': { width: 1280, height: 720 },
        'URI': 'dolby_720/iframe_index.m3u8',
        'VIDEO-RANGE': 'PQ'
      },
      timeline: 0,
      uri: 'dolby_720/iframe_index.m3u8'
    },
    {
      attributes: {
        'AVERAGE-BANDWIDTH': 365337,
        'BANDWIDTH': 905037,
        'CODECS': 'dvh1.05.03',
        'HDCP-LEVEL': 'TYPE-0',
        'RESOLUTION': { width: 1920, height: 1080 },
        'URI': 'dolby_1080/iframe_index.m3u8',
        'VIDEO-RANGE': 'PQ'
      },
      timeline: 0,
      uri: 'dolby_1080/iframe_index.m3u8'
    },
    {
      attributes: {
        'AVERAGE-BANDWIDTH': 739114,
        'BANDWIDTH': 1893236,
        'CODECS': 'dvh1.05.06',
        'HDCP-LEVEL': 'TYPE-1',
        'RESOLUTION': { width: 3840, height: 2160 },
        'URI': 'dolby_2160/iframe_index.m3u8',
        'VIDEO-RANGE': 'PQ'
      },
      timeline: 0,
      uri: 'dolby_2160/iframe_index.m3u8'
    },
    {
      attributes: {
        'AVERAGE-BANDWIDTH': 232511,
        'BANDWIDTH': 572673,
        'CODECS': 'hvc1.2.4.L123.B0',
        'HDCP-LEVEL': 'NONE',
        'RESOLUTION': { width: 1280, height: 720 },
        'URI': 'hdr10_720/iframe_index.m3u8',
        'VIDEO-RANGE': 'PQ'
      },
      timeline: 0,
      uri: 'hdr10_720/iframe_index.m3u8'
    },
    {
      attributes: {
        'AVERAGE-BANDWIDTH': 364552,
        'BANDWIDTH': 905053,
        'CODECS': 'hvc1.2.4.L123.B0',
        'HDCP-LEVEL': 'TYPE-0',
        'RESOLUTION': { width: 1920, height: 1080 },
        'URI': 'hdr10_1080/iframe_index.m3u8',
        'VIDEO-RANGE': 'PQ'
      },
      timeline: 0,
      uri: 'hdr10_1080/iframe_index.m3u8'
    },
    {
      attributes: {
        'AVERAGE-BANDWIDTH': 739757,
        'BANDWIDTH': 1895477,
        'CODECS': 'hvc1.2.4.L150.B0',
        'HDCP-LEVEL': 'TYPE-1',
        'RESOLUTION': { width: 3840, height: 2160 },
        'URI': 'hdr10_2160/iframe_index.m3u8',
        'VIDEO-RANGE': 'PQ'
      },
      timeline: 0,
      uri: 'hdr10_2160/iframe_index.m3u8'
    }
  ],
  independentSegments: true,
  mediaGroups: {
    'AUDIO': {},
    'CLOSED-CAPTIONS': {},
    'SUBTITLES': {},
    'VIDEO': {}
  },
  playlists: [
    {
      attributes: {
        'HDCP-LEVEL': 'NONE',
        'CLOSED-CAPTIONS': 'NONE',
        'FRAME-RATE': 23.976,
        'RESOLUTION': {
          width: 1280,
          height: 720
        },
        'CODECS': 'hvc1.2.4.L123.B0',
        'VIDEO-RANGE': 'SDR',
        'BANDWIDTH': 3971374,
        'AVERAGE-BANDWIDTH': '2778321'
      },
      uri: 'sdr_720/prog_index.m3u8',
      timeline: 0
    },
    {
      attributes: {
        'HDCP-LEVEL': 'TYPE-0',
        'CLOSED-CAPTIONS': 'NONE',
        'FRAME-RATE': 23.976,
        'RESOLUTION': {
          width: 1920,
          height: 1080
        },
        'CODECS': 'hvc1.2.4.L123.B0',
        'VIDEO-RANGE': 'SDR',
        'BANDWIDTH': 10022043,
        'AVERAGE-BANDWIDTH': '6759875'
      },
      uri: 'sdr_1080/prog_index.m3u8',
      timeline: 0
    },
    {
      attributes: {
        'HDCP-LEVEL': 'TYPE-1',
        'CLOSED-CAPTIONS': 'NONE',
        'FRAME-RATE': 23.976,
        'RESOLUTION': {
          width: 3840,
          height: 2160
        },
        'CODECS': 'hvc1.2.4.L150.B0',
        'VIDEO-RANGE': 'SDR',
        'BANDWIDTH': 28058971,
        'AVERAGE-BANDWIDTH': '20985770'
      },
      uri: 'sdr_2160/prog_index.m3u8',
      timeline: 0
    },
    {
      attributes: {
        'HDCP-LEVEL': 'NONE',
        'CLOSED-CAPTIONS': 'NONE',
        'FRAME-RATE': 23.976,
        'RESOLUTION': {
          width: 1280,
          height: 720
        },
        'CODECS': 'dvh1.05.01',
        'VIDEO-RANGE': 'PQ',
        'BANDWIDTH': 5327059,
        'AVERAGE-BANDWIDTH': '3385450'
      },
      uri: 'dolby_720/prog_index.m3u8',
      timeline: 0
    },
    {
      attributes: {
        'HDCP-LEVEL': 'TYPE-0',
        'CLOSED-CAPTIONS': 'NONE',
        'FRAME-RATE': 23.976,
        'RESOLUTION': {
          width: 1920,
          height: 1080
        },
        'CODECS': 'dvh1.05.03',
        'VIDEO-RANGE': 'PQ',
        'BANDWIDTH': 12876596,
        'AVERAGE-BANDWIDTH': '7999361'
      },
      uri: 'dolby_1080/prog_index.m3u8',
      timeline: 0
    },
    {
      attributes: {
        'HDCP-LEVEL': 'TYPE-1',
        'CLOSED-CAPTIONS': 'NONE',
        'FRAME-RATE': 23.976,
        'RESOLUTION': {
          width: 3840,
          height: 2160
        },
        'CODECS': 'dvh1.05.06',
        'VIDEO-RANGE': 'PQ',
        'BANDWIDTH': 30041698,
        'AVERAGE-BANDWIDTH': '24975091'
      },
      uri: 'dolby_2160/prog_index.m3u8',
      timeline: 0
    },
    {
      attributes: {
        'HDCP-LEVEL': 'NONE',
        'CLOSED-CAPTIONS': 'NONE',
        'FRAME-RATE': 23.976,
        'RESOLUTION': {
          width: 1280,
          height: 720
        },
        'CODECS': 'hvc1.2.4.L123.B0',
        'VIDEO-RANGE': 'PQ',
        'BANDWIDTH': 5280654,
        'AVERAGE-BANDWIDTH': '3320040'
      },
      uri: 'hdr10_720/prog_index.m3u8',
      timeline: 0
    },
    {
      attributes: {
        'HDCP-LEVEL': 'TYPE-0',
        'CLOSED-CAPTIONS': 'NONE',
        'FRAME-RATE': 23.976,
        'RESOLUTION': {
          width: 1920,
          height: 1080
        },
        'CODECS': 'hvc1.2.4.L123.B0',
        'VIDEO-RANGE': 'PQ',
        'BANDWIDTH': 12886714,
        'AVERAGE-BANDWIDTH': '7964551'
      },
      uri: 'hdr10_1080/prog_index.m3u8',
      timeline: 0
    },
    {
      attributes: {
        'HDCP-LEVEL': 'TYPE-1',
        'CLOSED-CAPTIONS': 'NONE',
        'FRAME-RATE': 23.976,
        'RESOLUTION': {
          width: 3840,
          height: 2160
        },
        'CODECS': 'hvc1.2.4.L150.B0',
        'VIDEO-RANGE': 'PQ',
        'BANDWIDTH': 29983769,
        'AVERAGE-BANDWIDTH': '24833402'
      },
      uri: 'hdr10_2160/prog_index.m3u8',
      timeline: 0
    }
  ],
  segments: [],
  version: 7
};
