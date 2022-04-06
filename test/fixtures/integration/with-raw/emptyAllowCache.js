module.exports = {
  allowCache: true,
  mediaSequence: 0,
  playlistType: 'VOD',
  segments: [
    {
      byterange: {
        length: 522828,
        offset: 0
      },
      duration: 10,
      raw: [
        '#EXTINF:10,',
        '#EXT-X-BYTERANGE:522828@0',
        'hls_450k_video.ts'
      ],
      timeline: 0,
      uri: 'hls_450k_video.ts'
    }
  ],
  targetDuration: 10,
  endList: true,
  discontinuitySequence: 0,
  discontinuityStarts: [],
  version: 4
};
