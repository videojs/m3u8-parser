{
  "allowCache": true,
  "mediaSequence": 7794,
  "discontinuitySequence": 0,
  "discontinuityStarts": [],
  "segments": [
    {
      "duration": 2.833,
      "tags": [
        "#EXTM3U",
        "#EXT-X-VERSION:3",
        "#EXT-X-MEDIA-SEQUENCE:7794",
        "#EXT-X-TARGETDURATION:15",
        "#EXT-X-KEY:METHOD=AES-128,URI=\"https://priv.example.com/key.php?r=52\"",
        "#EXTINF:2.833,"
      ],
      "timeline": 0,
      "key": {
        "method": "AES-128",
        "uri": "https://priv.example.com/key.php?r=52"
      },
      "uri": "http://media.example.com/fileSequence52-A.ts"
    },
    {
      "duration": 15,
      "tags": [
        "#EXTINF:15.0,"
      ],
      "timeline": 0,
      "key": {
        "method": "AES-128",
        "uri": "https://priv.example.com/key.php?r=52"
      },
      "uri": "http://media.example.com/fileSequence52-B.ts"
    },
    {
      "duration": 13.333,
      "tags": [
        "#EXTINF:13.333,"
      ],
      "timeline": 0,
      "key": {
        "method": "AES-128",
        "uri": "https://priv.example.com/key.php?r=52"
      },
      "uri": "http://media.example.com/fileSequence52-C.ts"
    },
    {
      "duration": 15,
      "tags": [
        "#EXT-X-KEY:METHOD=AES-128,URI=\"https://priv.example.com/key.php?r=53\"",
        "#EXTINF:15.0,"
      ],
      "timeline": 0,
      "key": {
        "method": "AES-128",
        "uri": "https://priv.example.com/key.php?r=53"
      },
      "uri": "http://media.example.com/fileSequence53-A.ts"
    },
    {
      "duration": 14,
      "tags": [
        "#EXT-X-KEY:METHOD=AES-128,URI=\"https://priv.example.com/key.php?r=54\",IV=0x00000000000000000000014BB69D61E4",
        "#EXTINF:14.0,"
      ],
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
      "tags": [
        "#EXT-X-KEY:METHOD=NONE",
        "#EXTINF:15.0,"
      ],
      "timeline": 0,
      "uri": "http://media.example.com/fileSequence53-B.ts"
    }
  ],
  "targetDuration": 15
}
