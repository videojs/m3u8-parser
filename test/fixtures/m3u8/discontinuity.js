{
  "allowCache": true,
  "mediaSequence": 0,
  "discontinuitySequence": 0,
  "segments": [
    {
      "duration": 10,
      "tags": [
        "#EXTM3U",
        "#EXT-X-VERSION:3",
        "#EXT-X-TARGETDURATION:19",
        "#EXT-X-MEDIA-SEQUENCE:0",
        "#EXTINF:10,0"
      ],
      "timeline": 0,
      "uri": "001.ts"
    },
    {
      "duration": 19,
      "tags": [
        "#EXTINF:19,0"
      ],
      "timeline": 0,
      "uri": "002.ts"
    },
    {
      "discontinuity": true,
      "duration": 10,
      "tags": [
        "#EXT-X-DISCONTINUITY",
        "#EXTINF:10,0"
      ],
      "timeline": 1,
      "uri": "003.ts"
    },
    {
      "duration": 11,
      "tags": [
        "#EXTINF:11,0"
      ],
      "timeline": 1,
      "uri": "004.ts"
    },
    {
      "discontinuity": true,
      "duration": 10,
      "tags": [
        "#EXT-X-DISCONTINUITY",
        "#EXTINF:10,0"
      ],

      "timeline": 2,
      "uri": "005.ts"
    },
    {
      "duration": 10,
      "tags": [
        "#EXTINF:10,0"
      ],
      "timeline": 2,
      "uri": "006.ts"
    },
    {
      "duration": 10,
      "tags": [
        "#EXTINF:10,0"
      ],
      "timeline": 2,
      "uri": "007.ts"
    },
    {
      "discontinuity": true,
      "duration": 10,
      "tags": [
        "#EXT-X-DISCONTINUITY",
        "#EXTINF:10,0"
      ],
      "timeline": 3,
      "uri": "008.ts"
    },
    {
      "duration": 16,
      "tags": [
        "#EXTINF:16,0"
      ],
      "timeline": 3,
      "uri": "009.ts"
    }
  ],
  "targetDuration": 19,
  "endList": true,
  "discontinuityStarts": [2, 4, 7]
}
