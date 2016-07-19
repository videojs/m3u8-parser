{
  "allowCache": true,
  "mediaSequence": 0,
  "discontinuitySequence": 3,
  "segments": [
    {
      "duration": 10,
      "tags": [
        "#EXTM3U",
        "#EXT-X-VERSION:3",
        "#EXT-X-TARGETDURATION:19",
        "#EXT-X-MEDIA-SEQUENCE:0",
        "#EXT-X-DISCONTINUITY-SEQUENCE:3",
        "#EXTINF:10,0"
      ],
      "timeline": 3,
      "uri": "001.ts"
    },
    {
      "duration": 19,
      "tags": [
        "#EXTINF:19,0"
      ],
      "timeline": 3,
      "uri": "002.ts"
    },
    {
      "discontinuity": true,
      "duration": 10,
      "tags": [
        "#EXT-X-DISCONTINUITY",
        "#EXTINF:10,0"
      ],
      "timeline": 4,
      "uri": "003.ts"
    },
    {
      "duration": 11,
      "tags": [
        "#EXTINF:11,0"
      ],
      "timeline": 4,
      "uri": "004.ts"
    }
  ],
  "targetDuration": 19,
  "endList": true,
  "discontinuityStarts": [2]
}
