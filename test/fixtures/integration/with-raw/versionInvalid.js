module.exports = {
  allowCache: true,
  mediaSequence: 0,
  playlistType: 'VOD',
  segments: [
    {
      duration: 10,
      raw: [
        '#EXTINF:10,',
        'hls_450k_video.ts'
      ],
      timeline: 0,
      uri: 'hls_450k_video.ts'
    }
  ],
  targetDuration: 10,
  endList: true,
  discontinuitySequence: 0,
  discontinuityStarts: []
};
