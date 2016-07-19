{
  allowCache: true,
  discontinuityStarts: [],
  mediaGroups: {
    AUDIO: {
      aac: {
        English: {
          autoselect: true,
          default: true,
          language: "eng",
          uri: "eng/prog_index.m3u8"
        }
      }
    },
    VIDEO: {
      "500kbs": {
        Angle1: {
          autoselect: true,
          default: true
        },
        Angle2: {
          autoselect: true,
          default: false,
          uri: "Angle2/500kbs/prog_index.m3u8"
        },
        Angle3: {
          autoselect: true,
          default: false,
          uri: "Angle3/500kbs/prog_index.m3u8"
        }
      }
    },
    "CLOSED-CAPTIONS": {},
    SUBTITLES: {}
  },
  playlists: [{
    attributes: {
      "PROGRAM-ID": 1,
      BANDWIDTH: 754857,
      CODECS: "mp4a.40.2,avc1.4d401e",
      AUDIO: "aac",
      VIDEO: "500kbs"
    },
    "tags": [
      "#EXTM3U",
      "#EXT-X-MEDIA:TYPE=VIDEO,GROUP-ID=\"500kbs\",NAME=\"Angle1\",AUTOSELECT=YES,DEFAULT=YES",
      "#EXT-X-MEDIA:TYPE=VIDEO,GROUP-ID=\"500kbs\",NAME=\"Angle2\",AUTOSELECT=YES,DEFAULT=NO,URI=\"Angle2/500kbs/prog_index.m3u8\"",
      "#EXT-X-MEDIA:TYPE=VIDEO,GROUP-ID=\"500kbs\",NAME=\"Angle3\",AUTOSELECT=YES,DEFAULT=NO,URI=\"Angle3/500kbs/prog_index.m3u8\"",
      "#EXT-X-MEDIA:TYPE=AUDIO,GROUP-ID=\"aac\",LANGUAGE=\"eng\",NAME=\"English\",AUTOSELECT=YES,DEFAULT=YES,URI=\"eng/prog_index.m3u8\"",
      "#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=754857,CODECS=\"mp4a.40.2,avc1.4d401e\",VIDEO=\"500kbs\",AUDIO=\"aac\""
    ],
    timeline: 0,
    uri: "Angle1/500kbs/prog_index.m3u8"
  }]
}
