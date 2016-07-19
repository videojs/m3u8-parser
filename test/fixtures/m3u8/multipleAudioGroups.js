{
  allowCache: true,
  discontinuityStarts: [],
  mediaGroups: {
    AUDIO: {
      "audio-lo": {
        "English": {
          autoselect: true,
          default: true,
          language: "eng",
          uri: "englo/prog_index.m3u8"
        },
        "Français": {
          autoselect: true,
          default: false,
          language: "fre",
          uri: "frelo/prog_index.m3u8"
        },
        "Espanol": {
          autoselect: true,
          default: false,
          language: "sp",
          uri: "splo/prog_index.m3u8"
        }
      },
      "audio-hi": {
        "English": {
          autoselect: true,
          default: true,
          language: "eng",
          uri: "eng/prog_index.m3u8"
        },
        "Français": {
          autoselect: true,
          default: false,
          language: "fre",
          uri: "fre/prog_index.m3u8"
        },
        "Espanol": {
          autoselect: true,
          default: false,
          language: "sp",
          uri: "sp/prog_index.m3u8"
        }
      }
    },
    VIDEO: {},
    "CLOSED-CAPTIONS": {},
    SUBTITLES: {}
  },
  playlists: [{
    attributes: {
      "PROGRAM-ID": 1,
      BANDWIDTH: 195023,
      CODECS: "mp4a.40.5",
      AUDIO: "audio-lo",
    },
    "tags": [
      "#EXTM3U",
      "#EXT-X-MEDIA:TYPE=AUDIO,GROUP-ID=\"audio-lo\",LANGUAGE=\"eng\",NAME=\"English\",AUTOSELECT=YES, DEFAULT=YES,URI=\"englo/prog_index.m3u8\"",
      "#EXT-X-MEDIA:TYPE=AUDIO,GROUP-ID=\"audio-lo\",LANGUAGE=\"fre\",NAME=\"Français\",AUTOSELECT=YES, DEFAULT=NO,URI=\"frelo/prog_index.m3u8\"",
      "#EXT-X-MEDIA:TYPE=AUDIO,GROUP-ID=\"audio-lo\",LANGUAGE=\"sp\",NAME=\"Espanol\",AUTOSELECT=YES, DEFAULT=NO,URI=\"splo/prog_index.m3u8\"",
      "#EXT-X-MEDIA:TYPE=AUDIO,GROUP-ID=\"audio-hi\",LANGUAGE=\"eng\",NAME=\"English\",AUTOSELECT=YES, DEFAULT=YES,URI=\"eng/prog_index.m3u8\"",
      "#EXT-X-MEDIA:TYPE=AUDIO,GROUP-ID=\"audio-hi\",LANGUAGE=\"fre\",NAME=\"Français\",AUTOSELECT=YES, DEFAULT=NO,URI=\"fre/prog_index.m3u8\"",
      "#EXT-X-MEDIA:TYPE=AUDIO,GROUP-ID=\"audio-hi\",LANGUAGE=\"sp\",NAME=\"Espanol\",AUTOSELECT=YES, DEFAULT=NO,URI=\"sp/prog_index.m3u8\"",
      "#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=195023,CODECS=\"mp4a.40.5\", AUDIO=\"audio-lo\""
    ],
    timeline: 0,
    uri: "lo/prog_index.m3u8"
  }, {
    attributes: {
      "PROGRAM-ID": 1,
      BANDWIDTH: 260000,
      CODECS: "avc1.42e01e,mp4a.40.2",
      AUDIO: "audio-lo"
    },
    "tags": [
      "#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=260000,CODECS=\"avc1.42e01e,mp4a.40.2\", AUDIO=\"audio-lo\""
    ],
    timeline: 0,
    uri: "lo2/prog_index.m3u8"
  }, {
    attributes: {
      "PROGRAM-ID": 1,
      BANDWIDTH: 591680,
      CODECS: "mp4a.40.2, avc1.64001e",
      AUDIO: "audio-hi"
    },
      "tags": [
        "#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=591680,CODECS=\"mp4a.40.2, avc1.64001e\", AUDIO=\"audio-hi\""
      ],
    timeline: 0,
    uri: "hi/prog_index.m3u8"
  }, {
    attributes: {
      "PROGRAM-ID": 1,
      BANDWIDTH: 650000,
      CODECS: "avc1.42e01e,mp4a.40.2",
      AUDIO: "audio-hi"
    },
      "tags": [
        "#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=650000,CODECS=\"avc1.42e01e,mp4a.40.2\", AUDIO=\"audio-hi\""
      ],
    timeline: 0,
    uri: "hi2/prog_index.m3u8"
  }]
}
