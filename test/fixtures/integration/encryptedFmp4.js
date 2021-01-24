module.exports = {
  allowCache: true,
  mediaSequence: 7794,
  discontinuitySequence: 0,
  discontinuityStarts: [],
  segments: [
    {
      duration: 2.833,
      timeline: 0,
      key: {
        method: 'AES-128',
        uri: 'https://priv.example.com/key.php?r=52',
        iv: new Uint32Array([0, 0, 0, 7794])
      },
      map: {
        key: {
          method: 'AES-128',
          uri: 'https://priv.example.com/key.php?r=52',
          iv: new Uint32Array([0, 0, 0, 7794])
        },
        uri: 'http://media.example.com/init52.mp4'
      },
      uri: 'http://media.example.com/fileSequence52-A.m4s'
    },
    {
      duration: 15,
      timeline: 0,
      key: {
        method: 'AES-128',
        uri: 'https://priv.example.com/key.php?r=52',
        iv: new Uint32Array([0, 0, 0, 7795])
      },
      map: {
        key: {
          method: 'AES-128',
          uri: 'https://priv.example.com/key.php?r=52',
          iv: new Uint32Array([0, 0, 0, 7794])
        },
        uri: 'http://media.example.com/init52.mp4'
      },
      uri: 'http://media.example.com/fileSequence52-B.m4s'
    },
    {
      duration: 13.333,
      timeline: 0,
      key: {
        method: 'AES-128',
        uri: 'https://priv.example.com/key.php?r=52',
        iv: new Uint32Array([0, 0, 0, 7796])
      },
      map: {
        key: {
          method: 'AES-128',
          uri: 'https://priv.example.com/key.php?r=52',
          iv: new Uint32Array([0, 0, 0, 7794])
        },
        uri: 'http://media.example.com/init52.mp4'
      },
      uri: 'http://media.example.com/fileSequence52-C.m4s'
    },
    {
      duration: 15,
      timeline: 0,
      key: {
        method: 'AES-128',
        uri: 'https://priv.example.com/key.php?r=53',
        iv: new Uint32Array([0, 0, 0, 7797])
      },
      map: {
        key: {
          method: 'AES-128',
          uri: 'https://priv.example.com/key.php?r=53',
          iv: new Uint32Array([0, 0, 0, 7797])
        },
        uri: 'http://media.example.com/init53-A.mp4'
      },
      uri: 'http://media.example.com/fileSequence53-A.m4s'
    },
    {
      duration: 14,
      timeline: 0,
      key: {
        method: 'AES-128',
        uri: 'https://priv.example.com/key.php?r=53',
        iv: new Uint32Array([0, 0, 331, 3063767524])
      },
      map: {
        key: {
          method: 'AES-128',
          uri: 'https://priv.example.com/key.php?r=53',
          iv: new Uint32Array([0, 0, 331, 3063767524])
        },
        uri: 'http://media.example.com/init53-B.mp4'
      },
      uri: 'http://media.example.com/fileSequence53-B.m4s'
    },
    {
      duration: 12,
      timeline: 0,
      key: {
        method: 'AES-128',
        uri: 'https://priv.example.com/key.php?r=54',
        iv: new Uint32Array([0, 0, 0, 7799])
      },
      map: {
        uri: 'http://media.example.com/init54-A.mp4'
      },
      uri: 'http://media.example.com/fileSequence54-A.m4s'
    },
    {
      duration: 13,
      timeline: 0,
      key: {
        method: 'AES-128',
        uri: 'https://priv.example.com/key.php?r=54',
        iv: new Uint32Array([0, 0, 0, 7800])
      },
      map: {
        uri: 'http://media.example.com/init54-A.mp4'
      },
      uri: 'http://media.example.com/fileSequence54-B.m4s'
    },
    {
      duration: 10,
      timeline: 0,
      map: {
        key: {
          method: 'AES-128',
          uri: 'https://priv.example.com/key.php?r=54',
          iv: new Uint32Array([0, 0, 0, 7801])
        },
        uri: 'http://media.example.com/init54-B.mp4'
      },
      uri: 'http://media.example.com/fileSequence54-A.m4s'
    },
    {
      duration: 11,
      timeline: 0,
      map: {
        key: {
          method: 'AES-128',
          uri: 'https://priv.example.com/key.php?r=54',
          iv: new Uint32Array([0, 0, 0, 7801])
        },
        uri: 'http://media.example.com/init54-B.mp4'
      },
      uri: 'http://media.example.com/fileSequence54-B.m4s'
    },
    {
      duration: 4,
      timeline: 0,
      key: {
        method: 'AES-128',
        uri: 'https://priv.example.com/key.php?r=54-b',
        iv: new Uint32Array([0, 0, 0, 7803])
      },
      map: {
        key: {
          method: 'AES-128',
          uri: 'https://priv.example.com/key.php?r=54-a',
          iv: new Uint32Array([0, 0, 0, 7803])
        },
        uri: 'http://media.example.com/init54-D.mp4'
      },
      uri: 'http://media.example.com/fileSequence54-A.m4s'
    },
    {
      duration: 12,
      timeline: 0,
      map: {
        uri: 'http://media.example.com/init54-E.mp4'
      },
      uri: 'http://media.example.com/fileSequence54-A.m4s'
    }
  ],
  targetDuration: 15,
  version: 7
};
