export default {
  "absoluteUris": {
  "allowCache": true,
  "mediaSequence": 0,
  "playlistType": "VOD",
  "segments": [
    {
      "duration": 10,
      "timeline": 0,
      "uri": "http://example.com/00001.ts"
    },
    {
      "duration": 10,
      "timeline": 0,
      "uri": "https://example.com/00002.ts"
    },
    {
      "duration": 10,
      "timeline": 0,
      "uri": "//example.com/00003.ts"
    },
    {
      "duration": 10,
      "timeline": 0,
      "uri": "http://example.com/00004.ts"
    }
  ],
  "targetDuration": 10,
  "endList": true,
  "discontinuitySequence": 0,
  "discontinuityStarts": []
}
,
  "allowCache": {
  "allowCache": true,
  "mediaSequence": 0,
  "playlistType": "VOD",
  "segments": [
    {
      "byterange": {
        "length": 522828,
        "offset": 0
      },
      "duration": 10,
      "timeline": 0,
      "uri": "hls_450k_video.ts"
    },
    {
      "byterange": {
        "length": 587500,
        "offset": 522828
      },
      "duration": 10,
      "timeline": 0,
      "uri": "hls_450k_video.ts"
    },
    {
      "byterange": {
        "length": 713084,
        "offset": 1110328
      },
      "duration": 10,
      "timeline": 0,
      "uri": "hls_450k_video.ts"
    },
    {
      "byterange": {
        "length": 476580,
        "offset": 1823412
      },
      "duration": 10,
      "timeline": 0,
      "uri": "hls_450k_video.ts"
    },
    {
      "byterange": {
        "length": 535612,
        "offset": 2299992
      },
      "duration": 10,
      "timeline": 0,
      "uri": "hls_450k_video.ts"
    },
    {
      "byterange": {
        "length": 207176,
        "offset": 2835604
      },
      "duration": 10,
      "timeline": 0,
      "uri": "hls_450k_video.ts"
    },
    {
      "byterange": {
        "length": 455900,
        "offset": 3042780
      },
      "duration": 10,
      "timeline": 0,
      "uri": "hls_450k_video.ts"
    },
    {
      "byterange": {
        "length": 657248,
        "offset": 3498680
      },
      "duration": 10,
      "timeline": 0,
      "uri": "hls_450k_video.ts"
    },
    {
      "byterange": {
        "length": 571708,
        "offset": 4155928
      },
      "duration": 10,
      "timeline": 0,
      "uri": "hls_450k_video.ts"
    },
    {
      "byterange": {
        "length": 485040,
        "offset": 4727636
      },
      "duration": 10,
      "timeline": 0,
      "uri": "hls_450k_video.ts"
    },
    {
      "byterange": {
        "length": 709136,
        "offset": 5212676
      },
      "duration": 10,
      "timeline": 0,
      "uri": "hls_450k_video.ts"
    },
    {
      "byterange": {
        "length": 730004,
        "offset": 5921812
      },
      "duration": 10,
      "timeline": 0,
      "uri": "hls_450k_video.ts"
    },
    {
      "byterange": {
        "length": 456276,
        "offset": 6651816
      },
      "duration": 10,
      "timeline": 0,
      "uri": "hls_450k_video.ts"
    },
    {
      "byterange": {
        "length": 468684,
        "offset": 7108092
      },
      "duration": 10,
      "timeline": 0,
      "uri": "hls_450k_video.ts"
    },
    {
      "byterange": {
        "length": 444996,
        "offset": 7576776
      },
      "duration": 10,
      "timeline": 0,
      "uri": "hls_450k_video.ts"
    },
    {
      "byterange": {
        "length": 331444,
        "offset": 8021772
      },
      "duration": 10,
      "timeline": 0,
      "uri": "hls_450k_video.ts"
    },
    {
      "byterange": {
        "length": 44556,
        "offset": 8353216
      },
      "duration": 1.4167,
      "timeline": 0,
      "uri": "hls_450k_video.ts"
    }
  ],
  "targetDuration": 10,
  "endList": true,
  "discontinuitySequence": 0,
  "discontinuityStarts": []
}
,
  "allowCacheInvalid": {
  "allowCache": true,
  "mediaSequence": 0,
  "playlistType": "VOD",
  "segments": [
    {
      "byterange": {
        "length": 522828,
        "offset": 0
      },
      "duration": 10,
      "timeline": 0,
      "uri": "hls_450k_video.ts"
    }
  ],
  "targetDuration": 10,
  "endList": true,
  "discontinuitySequence": 0,
  "discontinuityStarts": []
}
,
  "alternateAudio": {
  allowCache: true,
  discontinuityStarts: [],
  mediaGroups: {
    // TYPE
    AUDIO: {
      // GROUP-ID
      "audio": {
        // NAME
        "English": {
          language: 'eng',
          autoselect: true,
          default: true,
          uri: "eng/prog_index.m3u8"
        },
        // NAME
        "Français": {
          language: "fre",
          autoselect: true,
          default: false,
          uri: "fre/prog_index.m3u8"
        },
        // NAME
        "Espanol": {
          language: "sp",
          autoselect: true,
          default: false,
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
      CODECS: "avc1.42e00a,mp4a.40.2",
      AUDIO: 'audio'
    },
    timeline: 0,
    uri: "lo/prog_index.m3u8"
  }, {
    attributes: {
      "PROGRAM-ID": 1,
      BANDWIDTH: 591680,
      CODECS: "avc1.42e01e,mp4a.40.2",
      AUDIO: 'audio'
    },
    timeline: 0,
    uri: "hi/prog_index.m3u8"
  }]
}
,
  "alternateVideo": {
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
    timeline: 0,
    uri: "Angle1/500kbs/prog_index.m3u8"
  }]
}
,
  "brightcove": {
  "allowCache": true,
  "playlists": [
    {
      "attributes": {
        "PROGRAM-ID": 1,
        "BANDWIDTH": 240000,
        "RESOLUTION": {
          "width": 396,
          "height": 224
        }
      },
      "timeline": 0,
      "uri": "http://c.brightcove.com/services/mobile/streaming/index/rendition.m3u8?assetId=1824686811001&videoId=1824650741001"
    },
    {
      "attributes": {
        "PROGRAM-ID": 1,
        "BANDWIDTH": 40000
      },
      "timeline": 0,
      "uri": "http://c.brightcove.com/services/mobile/streaming/index/rendition.m3u8?assetId=1824683759001&videoId=1824650741001"
    },
    {
      "attributes": {
        "PROGRAM-ID": 1,
        "BANDWIDTH": 440000,
        "RESOLUTION": {
          "width": 396,
          "height": 224
        }
      },
      "timeline": 0,
      "uri": "http://c.brightcove.com/services/mobile/streaming/index/rendition.m3u8?assetId=1824686593001&videoId=1824650741001"
    },
    {
      "attributes": {
        "PROGRAM-ID": 1,
        "BANDWIDTH": 1928000,
        "RESOLUTION": {
          "width": 960,
          "height": 540
        }
      },
      "timeline": 0,
      "uri": "http://c.brightcove.com/services/mobile/streaming/index/rendition.m3u8?assetId=1824687660001&videoId=1824650741001"
    }
  ],
  "discontinuityStarts": [],
  "mediaGroups": {
    "VIDEO": {},
    "AUDIO": {},
    "CLOSED-CAPTIONS": {},
    "SUBTITLES": {}
  }
}
,
  "byteRange": {
  "allowCache": true,
  "mediaSequence": 0,
  "playlistType": "VOD",
  "segments": [
    {
      "duration": 10,
      "timeline": 0,
      "uri": "hls_450k_video.ts"
    },
    {
      "byterange": {
        "length": 587500,
        "offset": 522828
      },
      "duration": 10,
      "timeline": 0,
      "uri": "hls_450k_video.ts"
    },
    {
      "byterange": {
        "length": 713084,
        "offset": 0
      },
      "duration": 10,
      "timeline": 0,
      "uri": "hls_450k_video2.ts"
    },
    {
      "byterange": {
        "length": 476580,
        "offset": 1823412
      },
      "duration": 10,
      "timeline": 0,
      "uri": "hls_450k_video.ts"
    },
    {
      "byterange": {
        "length": 535612,
        "offset": 2299992
      },
      "duration": 10,
      "timeline": 0,
      "uri": "hls_450k_video.ts"
    },
    {
      "byterange": {
        "length": 207176,
        "offset": 2835604
      },
      "duration": 10,
      "timeline": 0,
      "uri": "hls_450k_video.ts"
    },
    {
      "byterange": {
        "length": 455900,
        "offset": 3042780
      },
      "duration": 10,
      "timeline": 0,
      "uri": "hls_450k_video.ts"
    },
    {
      "byterange": {
        "length": 657248,
        "offset": 3498680
      },
      "duration": 10,
      "timeline": 0,
      "uri": "hls_450k_video.ts"
    },
    {
      "byterange": {
        "length": 571708,
        "offset": 4155928
      },
      "duration": 10,
      "timeline": 0,
      "uri": "hls_450k_video.ts"
    },
    {
      "byterange": {
        "length": 485040,
        "offset": 4727636
      },
      "duration": 10,
      "timeline": 0,
      "uri": "hls_450k_video.ts"
    },
    {
      "byterange": {
        "length": 709136,
        "offset": 5212676
      },
      "duration": 10,
      "timeline": 0,
      "uri": "hls_450k_video.ts"
    },
    {
      "byterange": {
        "length": 730004,
        "offset": 5921812
      },
      "duration": 10,
      "timeline": 0,
      "uri": "hls_450k_video.ts"
    },
    {
      "byterange": {
        "length": 456276,
        "offset": 6651816
      },
      "duration": 10,
      "timeline": 0,
      "uri": "hls_450k_video.ts"
    },
    {
      "byterange": {
        "length": 468684,
        "offset": 7108092
      },
      "duration": 10,
      "timeline": 0,
      "uri": "hls_450k_video.ts"
    },
    {
      "byterange": {
        "length": 444996,
        "offset": 7576776
      },
      "duration": 10,
      "timeline": 0,
      "uri": "hls_450k_video.ts"
    },
    {
      "byterange": {
        "length": 331444,
        "offset": 8021772
      },
      "duration": 10,
      "timeline": 0,
      "uri": "hls_450k_video.ts"
    },
    {
      "byterange": {
        "length": 44556,
        "offset": 8353216
      },
      "duration": 1.4167,
      "timeline": 0,
      "uri": "hls_450k_video.ts"
    }
  ],
  "targetDuration": 10,
  "endList": true,
  "discontinuitySequence": 0,
  "discontinuityStarts": []
}
,
  "dateTime": {
    "allowCache": false,
    "mediaSequence": 0,
    "playlistType": "VOD",
    "segments": [
      {
        "duration": 10,
        "timeline": 0,
        "uri": "hls_450k_video.ts"
      }
    ],
    "targetDuration": 10,
    "endList": true,
    "dateTime": "2016-06-22T09:20:16.166-04:00",
    "discontinuitySequence": 0,
    "discontinuityStarts": []
  }
,
  "disallowCache": {
  "allowCache": false,
  "mediaSequence": 0,
  "playlistType": "VOD",
  "segments": [
    {
      "byterange": {
        "length": 522828,
        "offset": 0
      },
      "duration": 10,
      "timeline": 0,
      "uri": "hls_450k_video.ts"
    }
  ],
  "targetDuration": 10,
  "endList": true,
  "discontinuitySequence": 0,
  "discontinuityStarts": []
}
,
  "disc-sequence": {
  "allowCache": true,
  "mediaSequence": 0,
  "discontinuitySequence": 3,
  "segments": [
    {
      "duration": 10,
      "timeline": 3,
      "uri": "001.ts"
    },
    {
      "duration": 19,
      "timeline": 3,
      "uri": "002.ts"
    },
    {
      "discontinuity": true,
      "duration": 10,
      "timeline": 4,
      "uri": "003.ts"
    },
    {
      "duration": 11,
      "timeline": 4,
      "uri": "004.ts"
    }
  ],
  "targetDuration": 19,
  "endList": true,
  "discontinuityStarts": [2]
}
,
  "discontinuity": {
  "allowCache": true,
  "mediaSequence": 0,
  "discontinuitySequence": 0,
  "segments": [
    {
      "duration": 10,
      "timeline": 0,
      "uri": "001.ts"
    },
    {
      "duration": 19,
      "timeline": 0,
      "uri": "002.ts"
    },
    {
      "discontinuity": true,
      "duration": 10,
      "timeline": 1,
      "uri": "003.ts"
    },
    {
      "duration": 11,
      "timeline": 1,
      "uri": "004.ts"
    },
    {
      "discontinuity": true,
      "duration": 10,
      "timeline": 2,
      "uri": "005.ts"
    },
    {
      "duration": 10,
      "timeline": 2,
      "uri": "006.ts"
    },
    {
      "duration": 10,
      "timeline": 2,
      "uri": "007.ts"
    },
    {
      "discontinuity": true,
      "duration": 10,
      "timeline": 3,
      "uri": "008.ts"
    },
    {
      "duration": 16,
      "timeline": 3,
      "uri": "009.ts"
    }
  ],
  "targetDuration": 19,
  "endList": true,
  "discontinuityStarts": [2, 4, 7]
}
,
  "domainUris": {
  "allowCache": true,
  "mediaSequence": 0,
  "playlistType": "VOD",
  "segments": [
    {
      "duration": 10,
      "timeline": 0,
      "uri": "/00001.ts"
    },
    {
      "duration": 10,
      "timeline": 0,
      "uri": "/subdir/00002.ts"
    },
    {
      "duration": 10,
      "timeline": 0,
      "uri": "/00003.ts"
    },
    {
      "duration": 10,
      "timeline": 0,
      "uri": "/00004.ts"
    }
  ],
  "targetDuration": 10,
  "endList": true,
  "discontinuitySequence": 0,
  "discontinuityStarts": []
}
,
  "emptyAllowCache": {
  "allowCache": true,
  "mediaSequence": 0,
  "playlistType": "VOD",
  "segments": [
    {
      "byterange": {
        "length": 522828,
        "offset": 0
      },
      "duration": 10,
      "timeline": 0,
      "uri": "hls_450k_video.ts"
    }
  ],
  "targetDuration": 10,
  "endList": true,
  "discontinuitySequence": 0,
  "discontinuityStarts": []
}
,
  "emptyMediaSequence": {
  "allowCache": true,
  "mediaSequence": 0,
  "playlistType": "VOD",
  "segments": [
    {
      "duration": 6.64,
      "timeline": 0,
      "uri": "/test/ts-files/tvy7/8a5e2822668b5370f4eb1438b2564fb7ab12ffe1-hi720.ts"
    },
    {
      "duration": 6.08,
      "timeline": 0,
      "uri": "/test/ts-files/tvy7/56be1cef869a1c0cc8e38864ad1add17d187f051-hi720.ts"
    },
    {
      "duration": 6.6,
      "timeline": 0,
      "uri": "/test/ts-files/tvy7/549c8c77f55f049741a06596e5c1e01dacaa46d0-hi720.ts"
    },
    {
      "duration": 5,
      "timeline": 0,
      "uri": "/test/ts-files/tvy7/6cfa378684ffeb1c455a64dae6c103290a1f53d4-hi720.ts"
    }
  ],
  "targetDuration": 8,
  "endList": true,
  "discontinuitySequence": 0,
  "discontinuityStarts": []
}
,
  "emptyPlaylistType": {
  "allowCache": true,
  "mediaSequence": 0,
  "segments": [
    {
      "duration": 10,
      "timeline": 0,
      "uri": "/test/ts-files/zencoder/haze/Haze_Mantel_President_encoded_1200-00001.ts"
    },
    {
      "duration": 10,
      "timeline": 0,
      "uri": "/test/ts-files/zencoder/haze/Haze_Mantel_President_encoded_1200-00002.ts"
    },
    {
      "duration": 10,
      "timeline": 0,
      "uri": "/test/ts-files/zencoder/haze/Haze_Mantel_President_encoded_1200-00003.ts"
    },
    {
      "duration": 10,
      "timeline": 0,
      "uri": "/test/ts-files/zencoder/haze/Haze_Mantel_President_encoded_1200-00004.ts"
    },
    {
      "duration": 10,
      "timeline": 0,
      "uri": "/test/ts-files/zencoder/haze/Haze_Mantel_President_encoded_1200-00005.ts"
    },
    {
      "duration": 8,
      "timeline": 0,
      "uri": "/test/ts-files/zencoder/haze/Haze_Mantel_President_encoded_1200-00006.ts"
    }
  ],
  "targetDuration": 10,
  "endList": true,
  "discontinuitySequence": 0,
  "discontinuityStarts": []
}
,
  "emptyTargetDuration": {
  "allowCache": true,
  "playlists": [
    {
      "attributes": {
        "PROGRAM-ID": 1,
        "BANDWIDTH": 240000,
        "RESOLUTION": {
          "width": 396,
          "height": 224
        }
      },
      "timeline": 0,
      "uri": "http://c.brightcove.com/services/mobile/streaming/index/rendition.m3u8?assetId=1824686811001&videoId=1824650741001"
    },
    {
      "attributes": {
        "PROGRAM-ID": 1,
        "BANDWIDTH": 40000
      },
      "timeline": 0,
      "uri": "http://c.brightcove.com/services/mobile/streaming/index/rendition.m3u8?assetId=1824683759001&videoId=1824650741001"
    },
    {
      "attributes": {
        "PROGRAM-ID": 1,
        "BANDWIDTH": 440000,
        "RESOLUTION": {
          "width": 396,
          "height": 224
        }
      },
      "timeline": 0,
      "uri": "http://c.brightcove.com/services/mobile/streaming/index/rendition.m3u8?assetId=1824686593001&videoId=1824650741001"
    },
    {
      "attributes": {
        "PROGRAM-ID": 1,
        "BANDWIDTH": 1928000,
        "RESOLUTION": {
          "width": 960,
          "height": 540
        }
      },
      "timeline": 0,
      "uri": "http://c.brightcove.com/services/mobile/streaming/index/rendition.m3u8?assetId=1824687660001&videoId=1824650741001"
    }
  ],
  "discontinuityStarts": [],
  "mediaGroups": {
    "VIDEO": {},
    "AUDIO": {},
    "CLOSED-CAPTIONS": {},
    "SUBTITLES": {}
  }
}
,
  "encrypted": {
  "allowCache": true,
  "mediaSequence": 7794,
  "discontinuitySequence": 0,
  "discontinuityStarts": [],
  "segments": [
    {
      "duration": 2.833,
      "timeline": 0,
      "key": {
        "method": "AES-128",
        "uri": "https://priv.example.com/key.php?r=52"
      },
      "uri": "http://media.example.com/fileSequence52-A.ts"
    },
    {
      "duration": 15,
      "timeline": 0,
      "key": {
        "method": "AES-128",
        "uri": "https://priv.example.com/key.php?r=52"
      },
      "uri": "http://media.example.com/fileSequence52-B.ts"
    },
    {
      "duration": 13.333,
      "timeline": 0,
      "key": {
        "method": "AES-128",
        "uri": "https://priv.example.com/key.php?r=52"
      },
      "uri": "http://media.example.com/fileSequence52-C.ts"
    },
    {
      "duration": 15,
      "timeline": 0,
      "key": {
        "method": "AES-128",
        "uri": "https://priv.example.com/key.php?r=53"
      },
      "uri": "http://media.example.com/fileSequence53-A.ts"
    },
    {
      "duration": 14,
      "timeline": 0,
      "key": {
        "method": "AES-128",
        "uri": "https://priv.example.com/key.php?r=54",
        "iv": new Uint32Array([0, 0, 331, 3063767524])
      },
      "uri": "http://media.example.com/fileSequence53-B.ts"
    },
    {
      "duration": 15,
      "timeline": 0,
      "uri": "http://media.example.com/fileSequence53-B.ts"
    }
  ],
  "targetDuration": 15
}
,
  "event": {
  "allowCache": true,
  "mediaSequence": 0,
  "playlistType": "EVENT",
  "segments": [
    {
      "duration": 10,
      "timeline": 0,
      "uri": "/test/ts-files/zencoder/haze/Haze_Mantel_President_encoded_1200-00001.ts"
    },
    {
      "duration": 10,
      "timeline": 0,
      "uri": "/test/ts-files/zencoder/haze/Haze_Mantel_President_encoded_1200-00002.ts"
    },
    {
      "duration": 10,
      "timeline": 0,
      "uri": "/test/ts-files/zencoder/haze/Haze_Mantel_President_encoded_1200-00003.ts"
    },
    {
      "duration": 10,
      "timeline": 0,
      "uri": "/test/ts-files/zencoder/haze/Haze_Mantel_President_encoded_1200-00004.ts"
    },
    {
      "duration": 10,
      "timeline": 0,
      "uri": "/test/ts-files/zencoder/haze/Haze_Mantel_President_encoded_1200-00005.ts"
    },
    {
      "duration": 8,
      "timeline": 0,
      "uri": "/test/ts-files/zencoder/haze/Haze_Mantel_President_encoded_1200-00006.ts"
    }
  ],
  "targetDuration": 10,
  "endList": true,
  "discontinuitySequence": 0,
  "discontinuityStarts": []
}
,
  "extXPlaylistTypeInvalidPlaylist": {
  "allowCache": true,
  "mediaSequence": 1,
  "segments": [
    {
      "duration": 6.64,
      "timeline": 0,
      "uri": "/test/ts-files/tvy7/8a5e2822668b5370f4eb1438b2564fb7ab12ffe1-hi720.ts"
    }
  ],
  "targetDuration": 8,
  "endList": true,
  "discontinuitySequence": 0,
  "discontinuityStarts": []
}
,
  "extinf": {
  "allowCache": true,
  "mediaSequence": 0,
  "playlistType": "VOD",
  "segments": [
    {
      "byterange": {
        "length": 522828,
        "offset": 0
      },
      "duration": 10,
      "timeline": 0,
      "uri": "hls_450k_video.ts"
    },
    {
      "byterange": {
        "length": 587500,
        "offset": 522828
      },
      "duration": 10,
      "timeline": 0,
      "uri": "hls_450k_video.ts"
    },
    {
      "byterange": {
        "length": 713084,
        "offset": 1110328
      },
      "duration": 5,
      "timeline": 0,
      "uri": "hls_450k_video.ts"
    },
    {
      "byterange": {
        "length": 476580,
        "offset": 1823412
      },
      "duration": 9.7,
      "timeline": 0,
      "uri": "hls_450k_video.ts"
    },
    {
      "byterange": {
        "length": 535612,
        "offset": 2299992
      },
      "duration": 10,
      "timeline": 0,
      "uri": "hls_450k_video.ts"
    },
    {
      "byterange": {
        "length": 207176,
        "offset": 2835604
      },
      "duration": 10,
      "timeline": 0,
      "uri": "hls_450k_video.ts"
    },
    {
      "byterange": {
        "length": 455900,
        "offset": 3042780
      },
      "duration": 10,
      "timeline": 0,
      "uri": "hls_450k_video.ts"
    },
    {
      "byterange": {
        "length": 657248,
        "offset": 3498680
      },
      "duration": 10,
      "timeline": 0,
      "uri": "hls_450k_video.ts"
    },
    {
      "byterange": {
        "length": 571708,
        "offset": 4155928
      },
      "duration": 10,
      "timeline": 0,
      "uri": "hls_450k_video.ts"
    },
    {
      "byterange": {
        "length": 485040,
        "offset": 4727636
      },
      "duration": 10,
      "timeline": 0,
      "uri": "hls_450k_video.ts"
    },
    {
      "byterange": {
        "length": 709136,
        "offset": 5212676
      },
      "duration": 10,
      "timeline": 0,
      "uri": "hls_450k_video.ts"
    },
    {
      "byterange": {
        "length": 730004,
        "offset": 5921812
      },
      "duration": 10,
      "timeline": 0,
      "uri": "hls_450k_video.ts"
    },
    {
      "byterange": {
        "length": 456276,
        "offset": 6651816
      },
      "duration": 10,
      "timeline": 0,
      "uri": "hls_450k_video.ts"
    },
    {
      "byterange": {
        "length": 468684,
        "offset": 7108092
      },
      "duration": 10,
      "timeline": 0,
      "uri": "hls_450k_video.ts"
    },
    {
      "byterange": {
        "length": 444996,
        "offset": 7576776
      },
      "duration": 10,
      "timeline": 0,
      "uri": "hls_450k_video.ts"
    },
    {
      "byterange": {
        "length": 331444,
        "offset": 8021772
      },
      "duration": 10,
      "timeline": 0,
      "uri": "hls_450k_video.ts"
    },
    {
      "byterange": {
        "length": 44556,
        "offset": 8353216
      },
      "duration": 10,
      "timeline": 0,
      "uri": "hls_450k_video.ts"
    }
  ],
  "targetDuration": 10,
  "endList": true,
  "discontinuitySequence": 0,
  "discontinuityStarts": []
}
,
  "invalidAllowCache": {
  "allowCache": true,
  "mediaSequence": 0,
  "playlistType": "VOD",
  "segments": [
    {
      "byterange": {
        "length": 522828,
        "offset": 0
      },
      "duration": 10,
      "timeline": 0,
      "uri": "hls_450k_video.ts"
    }
  ],
  "targetDuration": 10,
  "endList": true,
  "discontinuitySequence": 0,
  "discontinuityStarts": []
}
,
  "invalidMediaSequence": {
  "allowCache": true,
  "mediaSequence": 0,
  "playlistType": "VOD",
  "segments": [
    {
      "duration": 6.64,
      "timeline": 0,
      "uri": "/test/ts-files/tvy7/8a5e2822668b5370f4eb1438b2564fb7ab12ffe1-hi720.ts"
    },
    {
      "duration": 6.08,
      "timeline": 0,
      "uri": "/test/ts-files/tvy7/56be1cef869a1c0cc8e38864ad1add17d187f051-hi720.ts"
    },
    {
      "duration": 6.6,
      "timeline": 0,
      "uri": "/test/ts-files/tvy7/549c8c77f55f049741a06596e5c1e01dacaa46d0-hi720.ts"
    },
    {
      "duration": 5,
      "timeline": 0,
      "uri": "/test/ts-files/tvy7/6cfa378684ffeb1c455a64dae6c103290a1f53d4-hi720.ts"
    }
  ],
  "targetDuration": 8,
  "endList": true,
  "discontinuitySequence": 0,
  "discontinuityStarts": []
}
,
  "invalidPlaylistType": {
  "allowCache": true,
  "mediaSequence": 0,
  "segments": [
    {
      "duration": 10,
      "timeline": 0,
      "uri": "/test/ts-files/zencoder/haze/Haze_Mantel_President_encoded_1200-00001.ts"
    },
    {
      "duration": 10,
      "timeline": 0,
      "uri": "/test/ts-files/zencoder/haze/Haze_Mantel_President_encoded_1200-00002.ts"
    },
    {
      "duration": 10,
      "timeline": 0,
      "uri": "/test/ts-files/zencoder/haze/Haze_Mantel_President_encoded_1200-00003.ts"
    },
    {
      "duration": 10,
      "timeline": 0,
      "uri": "/test/ts-files/zencoder/haze/Haze_Mantel_President_encoded_1200-00004.ts"
    },
    {
      "duration": 10,
      "timeline": 0,
      "uri": "/test/ts-files/zencoder/haze/Haze_Mantel_President_encoded_1200-00005.ts"
    },
    {
      "duration": 8,
      "timeline": 0,
      "uri": "/test/ts-files/zencoder/haze/Haze_Mantel_President_encoded_1200-00006.ts"
    }
  ],
  "targetDuration": 10,
  "endList": true,
  "discontinuitySequence": 0,
  "discontinuityStarts": []
}
,
  "invalidTargetDuration": {
  "allowCache": true,
  "mediaSequence": 0,
  "playlistType": "VOD",
  "segments": [
    {
      "byterange": {
        "length": 522828,
        "offset": 0
      },
      "duration": 10,
      "timeline": 0,
      "uri": "hls_450k_video.ts"
    },
    {
      "byterange": {
        "length": 587500,
        "offset": 522828
      },
      "duration": 10,
      "timeline": 0,
      "uri": "hls_450k_video.ts"
    },
    {
      "byterange": {
        "length": 713084,
        "offset": 1110328
      },
      "duration": 10,
      "timeline": 0,
      "uri": "hls_450k_video.ts"
    },
    {
      "byterange": {
        "length": 476580,
        "offset": 1823412
      },
      "duration": 10,
      "timeline": 0,
      "uri": "hls_450k_video.ts"
    },
    {
      "byterange": {
        "length": 535612,
        "offset": 2299992
      },
      "duration": 10,
      "timeline": 0,
      "uri": "hls_450k_video.ts"
    },
    {
      "byterange": {
        "length": 207176,
        "offset": 2835604
      },
      "duration": 10,
      "timeline": 0,
      "uri": "hls_450k_video.ts"
    },
    {
      "byterange": {
        "length": 455900,
        "offset": 3042780
      },
      "duration": 10,
      "timeline": 0,
      "uri": "hls_450k_video.ts"
    },
    {
      "byterange": {
        "length": 657248,
        "offset": 3498680
      },
      "duration": 10,
      "timeline": 0,
      "uri": "hls_450k_video.ts"
    },
    {
      "byterange": {
        "length": 571708,
        "offset": 4155928
      },
      "duration": 10,
      "timeline": 0,
      "uri": "hls_450k_video.ts"
    },
    {
      "byterange": {
        "length": 485040,
        "offset": 4727636
      },
      "duration": 10,
      "timeline": 0,
      "uri": "hls_450k_video.ts"
    },
    {
      "byterange": {
        "length": 709136,
        "offset": 5212676
      },
      "duration": 10,
      "timeline": 0,
      "uri": "hls_450k_video.ts"
    },
    {
      "byterange": {
        "length": 730004,
        "offset": 5921812
      },
      "duration": 10,
      "timeline": 0,
      "uri": "hls_450k_video.ts"
    },
    {
      "byterange": {
        "length": 456276,
        "offset": 6651816
      },
      "duration": 10,
      "timeline": 0,
      "uri": "hls_450k_video.ts"
    },
    {
      "byterange": {
        "length": 468684,
        "offset": 7108092
      },
      "duration": 10,
      "timeline": 0,
      "uri": "hls_450k_video.ts"
    },
    {
      "byterange": {
        "length": 444996,
        "offset": 7576776
      },
      "duration": 10,
      "timeline": 0,
      "uri": "hls_450k_video.ts"
    },
    {
      "byterange": {
        "length": 331444,
        "offset": 8021772
      },
      "duration": 10,
      "timeline": 0,
      "uri": "hls_450k_video.ts"
    },
    {
      "byterange": {
        "length": 44556,
        "offset": 8353216
      },
      "duration": 1.4167,
      "timeline": 0,
      "uri": "hls_450k_video.ts"
    }
  ],
  "endList": true,
  "discontinuitySequence": 0,
  "discontinuityStarts": []
}
,
  "liveMissingSegmentDuration": {
  "allowCache": true,
  "mediaSequence": 0,
  "playlistType": "VOD",
  "segments": [
    {
      "duration": 6.64,
      "timeline": 0,
      "uri": "/test/ts-files/tvy7/8a5e2822668b5370f4eb1438b2564fb7ab12ffe1-hi720.ts"
    },
    {
      "duration": 8,
      "timeline": 0,
      "uri": "/test/ts-files/tvy7/56be1cef869a1c0cc8e38864ad1add17d187f051-hi720.ts"
    },
    {
      "duration": 8,
      "timeline": 0,
      "uri": "/test/ts-files/tvy7/549c8c77f55f049741a06596e5c1e01dacaa46d0-hi720.ts"
    }
  ],
  "targetDuration": 8,
  "discontinuitySequence": 0,
  "discontinuityStarts": []
}
,
  "liveStart30sBefore": {
  "allowCache": true,
  "mediaSequence": 0,
  "segments": [
    {
      "duration": 10,
      "timeline": 0,
      "uri": "001.ts"
    },
    {
      "duration": 19,
      "timeline": 0,
      "uri": "002.ts"
    },
    {
      "duration": 10,
      "timeline": 0,
      "uri": "003.ts"
    },
    {
      "duration": 11,
      "timeline": 0,
      "uri": "004.ts"
    },
    {
      "duration": 10,
      "timeline": 0,
      "uri": "005.ts"
    },
    {
      "duration": 10,
      "timeline": 0,
      "uri": "006.ts"
    },
    {
      "duration": 10,
      "timeline": 0,
      "uri": "007.ts"
    },
    {
      "duration": 10,
      "timeline": 0,
      "uri": "008.ts"
    },
    {
      "duration": 16,
      "timeline": 0,
      "uri": "009.ts"
    }
  ],
  "targetDuration": 10,
  "discontinuitySequence": 0,
  "discontinuityStarts": []
}
,
  "manifestExtTTargetdurationNegative": {
  "allowCache": true,
  "mediaSequence": 0,
  "segments": [
    {
      "duration": 10,
      "timeline": 0,
      "uri": "/test/ts-files/zencoder/gogo/00001.ts"
    }
  ],
  "endList": true,
  "discontinuitySequence": 0,
  "discontinuityStarts": []
}
,
  "manifestExtXEndlistEarly": {
  "allowCache": true,
  "mediaSequence": 0,
  "segments": [
    {
      "duration": 10,
      "timeline": 0,
      "uri": "/test/ts-files/zencoder/gogo/00001.ts"
    },
    {
      "duration": 10,
      "timeline": 0,
      "uri": "/test/ts-files/zencoder/gogo/00002.ts"
    },
    {
      "duration": 10,
      "timeline": 0,
      "uri": "/test/ts-files/zencoder/gogo/00003.ts"
    },
    {
      "duration": 10,
      "timeline": 0,
      "uri": "/test/ts-files/zencoder/gogo/00004.ts"
    },
    {
      "duration": 10,
      "timeline": 0,
      "uri": "/test/ts-files/zencoder/gogo/00005.ts"
    }
  ],
  "targetDuration": 10,
  "endList": true,
  "discontinuitySequence": 0,
  "discontinuityStarts": []
}
,
  "manifestNoExtM3u": {
  "allowCache": true,
  "mediaSequence": 0,
  "segments": [
    {
      "duration": 10,
      "timeline": 0,
      "uri": "/test/ts-files/zencoder/gogo/00001.ts"
    }
  ],
  "targetDuration": 10,
  "endList": true,
  "discontinuitySequence": 0,
  "discontinuityStarts": []
}
,
  "master": {
  "allowCache": true,
  "playlists": [
    {
      "attributes": {
        "PROGRAM-ID": 1,
        "BANDWIDTH": 240000,
        "RESOLUTION": {
          "width": 396,
          "height": 224
        }
      },
      "timeline": 0,
      "uri": "media.m3u8"
    },
    {
      "attributes": {
        "PROGRAM-ID": 1,
        "BANDWIDTH": 40000
      },
      "timeline": 0,
      "uri": "media1.m3u8"
    },
    {
      "attributes": {
        "PROGRAM-ID": 1,
        "BANDWIDTH": 440000,
        "RESOLUTION": {
          "width": 396,
          "height": 224
        }
      },
      "timeline": 0,
      "uri": "media2.m3u8"
    },
    {
      "attributes": {
        "PROGRAM-ID": 1,
        "BANDWIDTH": 1928000,
        "RESOLUTION": {
          "width": 960,
          "height": 540
        }
      },
      "timeline": 0,
      "uri": "media3.m3u8"
    }
  ],
  "discontinuityStarts": [],
  "mediaGroups": {
    "VIDEO": {},
    "AUDIO": {},
    "CLOSED-CAPTIONS": {},
    "SUBTITLES": {}
  }
}
,
  "media": {
  "allowCache": true,
  "mediaSequence": 0,
  "playlistType": "VOD",
  "segments": [
    {
      "duration": 10,
      "timeline": 0,
      "uri": "media-00001.ts"
    },
    {
      "duration": 10,
      "timeline": 0,
      "uri": "media-00002.ts"
    },
    {
      "duration": 10,
      "timeline": 0,
      "uri": "media-00003.ts"
    },
    {
      "duration": 10,
      "timeline": 0,
      "uri": "media-00004.ts"
    }
  ],
  "targetDuration": 10,
  "endList": true,
  "discontinuitySequence": 0,
  "discontinuityStarts": []
}
,
  "mediaSequence": {
  "allowCache": true,
  "mediaSequence": 0,
  "playlistType": "VOD",
  "segments": [
    {
      "duration": 6.64,
      "timeline": 0,
      "uri": "/test/ts-files/tvy7/8a5e2822668b5370f4eb1438b2564fb7ab12ffe1-hi720.ts"
    },
    {
      "duration": 6.08,
      "timeline": 0,
      "uri": "/test/ts-files/tvy7/56be1cef869a1c0cc8e38864ad1add17d187f051-hi720.ts"
    },
    {
      "duration": 6.6,
      "timeline": 0,
      "uri": "/test/ts-files/tvy7/549c8c77f55f049741a06596e5c1e01dacaa46d0-hi720.ts"
    },
    {
      "duration": 5,
      "timeline": 0,
      "uri": "/test/ts-files/tvy7/6cfa378684ffeb1c455a64dae6c103290a1f53d4-hi720.ts"
    }
  ],
  "targetDuration": 8,
  "endList": true,
  "discontinuitySequence": 0,
  "discontinuityStarts": []
}
,
  "missingEndlist": {
  "allowCache": true,
  "mediaSequence": 0,
  "segments": [
    {
      "duration": 10,
      "timeline": 0,
      "uri": "00001.ts"
    },
    {
      "duration": 10,
      "timeline": 0,
      "uri": "00002.ts"
    }
  ],
  "targetDuration": 10,
  "discontinuitySequence": 0,
  "discontinuityStarts": []
}
,
  "missingExtinf": {
  "allowCache": true,
  "mediaSequence": 0,
  "playlistType": "VOD",
  "segments": [
    {
      "duration": 10,
      "timeline": 0,
      "uri": "hls_450k_video.ts"
    },
    {
      "duration": 10,
      "timeline": 0,
      "uri": "hls_450k_video.ts"
    },
    {
      "duration": 10,
      "timeline": 0,
      "uri": "hls_450k_video.ts"
    }
  ],
  "targetDuration": 10,
  "endList": true,
  "discontinuitySequence": 0,
  "discontinuityStarts": []
}
,
  "missingMediaSequence": {
  "allowCache": true,
  "mediaSequence": 0,
  "playlistType": "VOD",
  "segments": [
    {
      "duration": 6.64,
      "timeline": 0,
      "uri": "/test/ts-files/tvy7/8a5e2822668b5370f4eb1438b2564fb7ab12ffe1-hi720.ts"
    },
    {
      "duration": 6.08,
      "timeline": 0,
      "uri": "/test/ts-files/tvy7/56be1cef869a1c0cc8e38864ad1add17d187f051-hi720.ts"
    },
    {
      "duration": 6.6,
      "timeline": 0,
      "uri": "/test/ts-files/tvy7/549c8c77f55f049741a06596e5c1e01dacaa46d0-hi720.ts"
    },
    {
      "duration": 5,
      "timeline": 0,
      "uri": "/test/ts-files/tvy7/6cfa378684ffeb1c455a64dae6c103290a1f53d4-hi720.ts"
    }
  ],
  "targetDuration": 8,
  "endList": true,
  "discontinuitySequence": 0,
  "discontinuityStarts": []
}
,
  "missingSegmentDuration": {
  "allowCache": true,
  "mediaSequence": 0,
  "playlistType": "VOD",
  "segments": [
    {
      "duration": 6.64,
      "timeline": 0,
      "uri": "/test/ts-files/tvy7/8a5e2822668b5370f4eb1438b2564fb7ab12ffe1-hi720.ts"
    },
    {
      "duration": 8,
      "timeline": 0,
      "uri": "/test/ts-files/tvy7/56be1cef869a1c0cc8e38864ad1add17d187f051-hi720.ts"
    },
    {
      "duration": 8,
      "timeline": 0,
      "uri": "/test/ts-files/tvy7/549c8c77f55f049741a06596e5c1e01dacaa46d0-hi720.ts"
    },
    {
      "duration": 8,
      "timeline": 0,
      "uri": "/test/ts-files/tvy7/6cfa378684ffeb1c455a64dae6c103290a1f53d4-hi720.ts"
    }
  ],
  "targetDuration": 8,
  "endList": true,
  "discontinuitySequence": 0,
  "discontinuityStarts": []
}
,
  "multipleAudioGroups": {
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
    timeline: 0,
    uri: "lo/prog_index.m3u8"
  }, {
    attributes: {
      "PROGRAM-ID": 1,
      BANDWIDTH: 260000,
      CODECS: "avc1.42e01e,mp4a.40.2",
      AUDIO: "audio-lo"
    },
    timeline: 0,
    uri: "lo2/prog_index.m3u8"
  }, {
    attributes: {
      "PROGRAM-ID": 1,
      BANDWIDTH: 591680,
      CODECS: "mp4a.40.2, avc1.64001e",
      AUDIO: "audio-hi"
    },
    timeline: 0,
    uri: "hi/prog_index.m3u8"
  }, {
    attributes: {
      "PROGRAM-ID": 1,
      BANDWIDTH: 650000,
      CODECS: "avc1.42e01e,mp4a.40.2",
      AUDIO: "audio-hi"
    },
    timeline: 0,
    uri: "hi2/prog_index.m3u8"
  }]
}
,
  "multipleAudioGroupsCombinedMain": {
  allowCache: true,
  discontinuityStarts: [],
  mediaGroups: {
    AUDIO: {
      "audio-lo": {
        "English": {
          autoselect: true,
          default: true,
          language: "eng",
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
    timeline: 0,
    uri: "lo/prog_index.m3u8"
  }, {
    attributes: {
      "PROGRAM-ID": 1,
      BANDWIDTH: 260000,
      CODECS: "avc1.42e01e,mp4a.40.2",
      AUDIO: "audio-lo"
    },
    timeline: 0,
    uri: "lo2/prog_index.m3u8"
  }, {
    attributes: {
      "PROGRAM-ID": 1,
      BANDWIDTH: 591680,
      CODECS: "mp4a.40.2, avc1.64001e",
      AUDIO: "audio-hi"
    },
    timeline: 0,
    uri: "hi/prog_index.m3u8"
  }, {
    attributes: {
      "PROGRAM-ID": 1,
      BANDWIDTH: 650000,
      CODECS: "avc1.42e01e,mp4a.40.2",
      AUDIO: "audio-hi"
    },
    timeline: 0,
    uri: "hi2/prog_index.m3u8"
  }]
}
,
  "multipleTargetDurations": {
  "allowCache": true,
  "mediaSequence": 0,
  "targetDuration": 10,
  "segments": [
    {
      "uri": "001.ts",
      "timeline": 0
    },
    {
      "uri": "002.ts",
      "duration": 9,
      "timeline": 0
    },
    {
      "uri": "003.ts",
      "duration": 7,
      "timeline": 0
    },
    {
      "uri": "004.ts",
      "duration": 10,
      "timeline": 0
    }
  ],
  "discontinuitySequence": 0,
  "discontinuityStarts": []
}
,
  "multipleVideo": {
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
      "200kbs": {
        Angle1: {
          autoselect: true,
          default: true
        },
        Angle2: {
          autoselect: true,
          default: false,
          uri: "Angle2/200kbs/prog_index.m3u8"
        },
        Angle3: {
          autoselect: true,
          default: false,
          uri: "Angle3/200kbs/prog_index.m3u8"
        }
      },
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
      BANDWIDTH: 300000,
      CODECS: "mp4a.40.2,avc1.4d401e",
      AUDIO: "aac",
      VIDEO: "200kbs"
    },
    timeline: 0,
    uri: "Angle1/200kbs/prog_index.m3u"
  }, {
    attributes: {
      "PROGRAM-ID": 1,
      BANDWIDTH: 754857,
      CODECS: "mp4a.40.2,avc1.4d401e",
      AUDIO: "aac",
      VIDEO: "500kbs"
    },
    timeline: 0,
    uri: "Angle1/500kbs/prog_index.m3u8"
  }]
}
,
  "negativeMediaSequence": {
  "allowCache": true,
  "mediaSequence": -11,
  "playlistType": "VOD",
  "segments": [
    {
      "duration": 6.64,
      "timeline": 0,
      "uri": "/test/ts-files/tvy7/8a5e2822668b5370f4eb1438b2564fb7ab12ffe1-hi720.ts"
    },
    {
      "duration": 6.08,
      "timeline": 0,
      "uri": "/test/ts-files/tvy7/56be1cef869a1c0cc8e38864ad1add17d187f051-hi720.ts"
    },
    {
      "duration": 6.6,
      "timeline": 0,
      "uri": "/test/ts-files/tvy7/549c8c77f55f049741a06596e5c1e01dacaa46d0-hi720.ts"
    },
    {
      "duration": 5,
      "timeline": 0,
      "uri": "/test/ts-files/tvy7/6cfa378684ffeb1c455a64dae6c103290a1f53d4-hi720.ts"
    }
  ],
  "targetDuration": 8,
  "endList": true,
  "discontinuitySequence": 0,
  "discontinuityStarts": []
}
,
  "playlist": {
  "allowCache": true,
  "mediaSequence": 0,
  "playlistType": "VOD",
  "segments": [
    {
      "byterange": {
        "length": 522828,
        "offset": 0
      },
      "duration": 10,
      "timeline": 0,
      "uri": "hls_450k_video.ts"
    },
    {
      "byterange": {
        "length": 587500,
        "offset": 522828
      },
      "duration": 10,
      "timeline": 0,
      "uri": "hls_450k_video.ts"
    },
    {
      "byterange": {
        "length": 713084,
        "offset": 1110328
      },
      "duration": 10,
      "timeline": 0,
      "uri": "hls_450k_video.ts"
    },
    {
      "byterange": {
        "length": 476580,
        "offset": 1823412
      },
      "duration": 10,
      "timeline": 0,
      "uri": "hls_450k_video.ts"
    },
    {
      "byterange": {
        "length": 535612,
        "offset": 2299992
      },
      "duration": 10,
      "timeline": 0,
      "uri": "hls_450k_video.ts"
    },
    {
      "byterange": {
        "length": 207176,
        "offset": 2835604
      },
      "duration": 10,
      "timeline": 0,
      "uri": "hls_450k_video.ts"
    },
    {
      "byterange": {
        "length": 455900,
        "offset": 3042780
      },
      "duration": 10,
      "timeline": 0,
      "uri": "hls_450k_video.ts"
    },
    {
      "byterange": {
        "length": 657248,
        "offset": 3498680
      },
      "duration": 10,
      "timeline": 0,
      "uri": "hls_450k_video.ts"
    },
    {
      "byterange": {
        "length": 571708,
        "offset": 4155928
      },
      "duration": 10,
      "timeline": 0,
      "uri": "hls_450k_video.ts"
    },
    {
      "byterange": {
        "length": 485040,
        "offset": 4727636
      },
      "duration": 10,
      "timeline": 0,
      "uri": "hls_450k_video.ts"
    },
    {
      "byterange": {
        "length": 709136,
        "offset": 5212676
      },
      "duration": 10,
      "timeline": 0,
      "uri": "hls_450k_video.ts"
    },
    {
      "byterange": {
        "length": 730004,
        "offset": 5921812
      },
      "duration": 10,
      "timeline": 0,
      "uri": "hls_450k_video.ts"
    },
    {
      "byterange": {
        "length": 456276,
        "offset": 6651816
      },
      "duration": 10,
      "timeline": 0,
      "uri": "hls_450k_video.ts"
    },
    {
      "byterange": {
        "length": 468684,
        "offset": 7108092
      },
      "duration": 10,
      "timeline": 0,
      "uri": "hls_450k_video.ts"
    },
    {
      "byterange": {
        "length": 444996,
        "offset": 7576776
      },
      "duration": 10,
      "timeline": 0,
      "uri": "hls_450k_video.ts"
    },
    {
      "byterange": {
        "length": 331444,
        "offset": 8021772
      },
      "duration": 10,
      "timeline": 0,
      "uri": "hls_450k_video.ts"
    },
    {
      "byterange": {
        "length": 44556,
        "offset": 8353216
      },
      "duration": 1.4167,
      "timeline": 0,
      "uri": "hls_450k_video.ts"
    }
  ],
  "targetDuration": 10,
  "endList": true,
  "discontinuitySequence": 0,
  "discontinuityStarts": []
}
,
  "playlistMediaSequenceHigher": {
  "allowCache": true,
  "mediaSequence": 17,
  "playlistType": "VOD",
  "segments": [
    {
      "duration": 6.64,
      "timeline": 0,
      "uri": "/test/ts-files/tvy7/8a5e2822668b5370f4eb1438b2564fb7ab12ffe1-hi720.ts"
    }
  ],
  "targetDuration": 8,
  "endList": true,
  "discontinuitySequence": 0,
  "discontinuityStarts": []
}
,
  "streamInfInvalid": {
  "allowCache": true,
  "playlists": [
    {
      "attributes": {
        "PROGRAM-ID": 1
      },
      "timeline": 0,
      "uri": "media.m3u8"
    },
    {
      "timeline": 0,
      "uri": "media1.m3u8"
    }
  ],
  "discontinuityStarts": [],
  "mediaGroups": {
    "VIDEO": {},
    "AUDIO": {},
    "CLOSED-CAPTIONS": {},
    "SUBTITLES": {}
  }
}
,
  "twoMediaSequences": {
  "allowCache": true,
  "mediaSequence": 11,
  "playlistType": "VOD",
  "segments": [
    {
      "duration": 6.64,
      "timeline": 0,
      "uri": "/test/ts-files/tvy7/8a5e2822668b5370f4eb1438b2564fb7ab12ffe1-hi720.ts"
    },
    {
      "duration": 6.08,
      "timeline": 0,
      "uri": "/test/ts-files/tvy7/56be1cef869a1c0cc8e38864ad1add17d187f051-hi720.ts"
    },
    {
      "duration": 6.6,
      "timeline": 0,
      "uri": "/test/ts-files/tvy7/549c8c77f55f049741a06596e5c1e01dacaa46d0-hi720.ts"
    },
    {
      "duration": 5,
      "timeline": 0,
      "uri": "/test/ts-files/tvy7/6cfa378684ffeb1c455a64dae6c103290a1f53d4-hi720.ts"
    }
  ],
  "targetDuration": 8,
  "endList": true,
  "discontinuitySequence": 0,
  "discontinuityStarts": []
}
,
  "versionInvalid": {
  "allowCache": true,
  "mediaSequence": 0,
  "playlistType": "VOD",
  "segments": [
    {
      "duration": 10,
      "timeline": 0,
      "uri": "hls_450k_video.ts"
    }
  ],
  "targetDuration": 10,
  "endList": true,
  "discontinuitySequence": 0,
  "discontinuityStarts": []
}
,
  "whiteSpace": {
  "allowCache": true,
  "mediaSequence": 0,
  "playlistType": "VOD",
  "segments": [
    {
      "duration": 10,
      "timeline": 0,
      "uri": "http://example.com/00001.ts"
    },
    {
      "duration": 10,
      "timeline": 0,
      "uri": "https://example.com/00002.ts"
    },
    {
      "duration": 10,
      "timeline": 0,
      "uri": "//example.com/00003.ts"
    },
    {
      "duration": 10,
      "timeline": 0,
      "uri": "http://example.com/00004.ts"
    }
  ],
  "targetDuration": 10,
  "endList": true,
  "discontinuitySequence": 0,
  "discontinuityStarts": []
}
,
  "zeroDuration": {
  "allowCache": true,
  "mediaSequence": 0,
  "playlistType": "VOD",
  "segments": [
    {
      "duration": 0.01,
      "timeline": 0,
      "uri": "http://example.com/00001.ts"
    }
  ],
  "targetDuration": 10,
  "endList": true,
  "discontinuitySequence": 0,
  "discontinuityStarts": []
}

};
