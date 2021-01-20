import QUnit from 'qunit';
import testDataExpected from 'data-files!expecteds';
import testDataManifests from 'data-files!manifests';
import {Parser} from '../src';

QUnit.module('m3u8s', function(hooks) {
  hooks.beforeEach(function() {
    this.parser = new Parser();
  });

  QUnit.module('general');

  QUnit.test('can be constructed', function(assert) {
    assert.notStrictEqual(this.parser, 'undefined', 'parser is defined');
  });

  QUnit.test('can set custom parsers', function(assert) {
    const manifest = [
      '#EXTM3U',
      '#EXT-X-VERSION:3',
      '#EXT-X-TARGETDURATION:10',
      '#EXT-X-MEDIA-SEQUENCE:0',
      '#EXT-X-PROGRAM-DATE-TIME:2017-07-31T20:35:35.053+00:00',
      '#VOD-STARTTIMESTAMP:1501533337573',
      '#VOD-TOTALDELETEDDURATION:0.0',
      '#VOD-FRAMERATE:29.97',
      ''
    ].join('\n');

    this.parser.addParser({
      expression: /^#VOD-STARTTIMESTAMP/,
      customType: 'startTimestamp'
    });
    this.parser.addParser({
      expression: /^#VOD-TOTALDELETEDDURATION/,
      customType: 'totalDeleteDuration'
    });
    this.parser.addParser({
      expression: /^#VOD-FRAMERATE/,
      customType: 'framerate',
      dataParser: (line) => (line.split(':')[1])
    });

    this.parser.push(manifest);
    this.parser.end();
    assert.strictEqual(
      this.parser.manifest.custom.startTimestamp,
      '#VOD-STARTTIMESTAMP:1501533337573',
      'sets custom timestamp line'
    );

    assert.strictEqual(
      this.parser.manifest.custom.totalDeleteDuration,
      '#VOD-TOTALDELETEDDURATION:0.0',
      'sets custom delete duration'
    );

    assert.strictEqual(this.parser.manifest.custom.framerate, '29.97', 'sets framerate');
  });

  QUnit.test('segment level custom data', function(assert) {
    const manifest = [
      '#EXTM3U',
      '#VOD-TIMING:1511816599485',
      '#COMMENT',
      '#EXTINF:8.0,',
      'ex1.ts',
      '#VOD-TIMING',
      '#EXTINF:8.0,',
      'ex2.ts',
      '#VOD-TIMING:1511816615485',
      '#EXT-UNKNOWN',
      '#EXTINF:8.0,',
      'ex3.ts',
      '#VOD-TIMING:1511816623485',
      '#EXTINF:8.0,',
      'ex3.ts',
      '#EXT-X-ENDLIST'
    ].join('\n');

    this.parser.addParser({
      expression: /^#VOD-TIMING/,
      customType: 'vodTiming',
      segment: true
    });

    this.parser.push(manifest);
    this.parser.end();
    assert.equal(
      this.parser.manifest.segments[0].custom.vodTiming,
      '#VOD-TIMING:1511816599485',
      'parser attached segment level custom data'
    );
    assert.equal(
      this.parser.manifest.segments[1].custom.vodTiming,
      '#VOD-TIMING',
      'parser got segment level custom data without :'
    );
  });

  QUnit.test('attaches cue-out data to segment', function(assert) {
    const manifest = [
      '#EXTM3U',
      '#EXTINF:5,',
      '#COMMENT',
      'ex1.ts',
      '#EXT-X-CUE-OUT:10',
      '#EXTINF:5,',
      'ex2.ts',
      '#EXT-X-CUE-OUT15',
      '#EXT-UKNOWN-TAG',
      '#EXTINF:5,',
      'ex3.ts',
      '#EXT-X-CUE-OUT',
      '#EXTINF:5,',
      'ex3.ts',
      '#EXT-X-ENDLIST'
    ].join('\n');

    this.parser.push(manifest);
    this.parser.end();

    assert.equal(this.parser.manifest.segments[1].cueOut, '10', 'parser attached cue out tag');
    assert.equal(this.parser.manifest.segments[2].cueOut, '15', 'cue out without : seperator');
    assert.equal(this.parser.manifest.segments[3].cueOut, '', 'cue out without data');
  });

  QUnit.test('attaches cue-out-cont data to segment', function(assert) {
    const manifest = [
      '#EXTM3U',
      '#EXTINF:5,',
      '#COMMENT',
      'ex1.ts',
      '#EXT-X-CUE-OUT-CONT:10/60',
      '#EXTINF:5,',
      'ex2.ts',
      '#EXT-X-CUE-OUT-CONT15/30',
      '#EXT-UKNOWN-TAG',
      '#EXTINF:5,',
      'ex3.ts',
      '#EXT-X-CUE-OUT-CONT',
      '#EXTINF:5,',
      'ex3.ts',
      '#EXT-X-ENDLIST'
    ].join('\n');

    this.parser.push(manifest);
    this.parser.end();

    assert.equal(
      this.parser.manifest.segments[1].cueOutCont, '10/60',
      'parser attached cue out cont tag'
    );
    assert.equal(
      this.parser.manifest.segments[2].cueOutCont, '15/30',
      'cue out cont without : seperator'
    );
    assert.equal(this.parser.manifest.segments[3].cueOutCont, '', 'cue out cont without data');
  });

  QUnit.test('attaches cue-in data to segment', function(assert) {
    const manifest = [
      '#EXTM3U',
      '#EXTINF:5,',
      '#COMMENT',
      'ex1.ts',
      '#EXT-X-CUE-IN',
      '#EXTINF:5,',
      'ex2.ts',
      '#EXT-X-CUE-IN:15',
      '#EXT-UKNOWN-TAG',
      '#EXTINF:5,',
      'ex3.ts',
      '#EXT-X-CUE-IN=abc',
      '#EXTINF:5,',
      'ex3.ts',
      '#EXT-X-ENDLIST'
    ].join('\n');

    this.parser.push(manifest);
    this.parser.end();

    assert.equal(this.parser.manifest.segments[1].cueIn, '', 'parser attached cue in tag');
    assert.equal(this.parser.manifest.segments[2].cueIn, '15', 'cue in with data');
    assert.equal(
      this.parser.manifest.segments[3].cueIn, '=abc',
      'cue in without colon seperator'
    );
  });

  QUnit.test('parses characteristics attribute', function(assert) {
    const manifest = [
      '#EXTM3U',
      '#EXT-X-MEDIA:TYPE=SUBTITLES,GROUP-ID="subs",CHARACTERISTICS="char",NAME="test"',
      '#EXT-X-STREAM-INF:BANDWIDTH=1,CODECS="mp4a.40.2, avc1.4d400d",SUBTITLES="subs"',
      'index.m3u8'
    ].join('\n');

    this.parser.push(manifest);
    this.parser.end();

    assert.equal(
      this.parser.manifest.mediaGroups.SUBTITLES.subs.test.characteristics,
      'char',
      'parsed CHARACTERISTICS attribute'
    );
  });

  QUnit.test('parses FORCED attribute', function(assert) {
    const manifest = [
      '#EXTM3U',
      '#EXT-X-MEDIA:TYPE=SUBTITLES,GROUP-ID="subs",CHARACTERISTICS="char",NAME="test",FORCED=YES',
      '#EXT-X-STREAM-INF:BANDWIDTH=1,CODECS="mp4a.40.2, avc1.4d400d",SUBTITLES="subs"',
      'index.m3u8'
    ].join('\n');

    this.parser.push(manifest);
    this.parser.end();

    assert.ok(
      this.parser.manifest.mediaGroups.SUBTITLES.subs.test.forced,
      'parsed FORCED attribute'
    );
  });

  QUnit.test('parses Widevine #EXT-X-KEY attributes and attaches to manifest', function(assert) {
    const manifest = [
      '#EXTM3U',
      '#EXT-X-KEY:METHOD=SAMPLE-AES-CTR,' +
      'URI="data:text/plain;base64,AAAAPnBzc2gAAAAA7e+LqXnWSs6jyCfc1R0h7QAAAB4iFnN' +
      'oYWthX2NlYzJmNjRhYTc4OTBhMTFI49yVmwY=",KEYID=0x800AACAA522958AE888062B5695DB6BF,' +
      'KEYFORMATVERSIONS="1",KEYFORMAT="urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed"',
      '#EXTINF:5,',
      'ex1.ts',
      '#EXT-X-ENDLIST'
    ].join('\n');

    this.parser.push(manifest);
    this.parser.end();

    assert.ok(this.parser.manifest.contentProtection, 'contentProtection property added');
    assert.equal(
      this.parser.manifest.contentProtection['com.widevine.alpha'].attributes.schemeIdUri,
      'urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed',
      'schemeIdUri set correctly'
    );
    assert.equal(
      this.parser.manifest.contentProtection['com.widevine.alpha'].attributes.keyId,
      '800AACAA522958AE888062B5695DB6BF',
      'keyId set correctly'
    );
    assert.equal(
      this.parser.manifest.contentProtection['com.widevine.alpha'].pssh.byteLength,
      62,
      'base64 URI decoded to TypedArray'
    );
  });

  QUnit.test('Widevine #EXT-X-KEY attributes not attached to manifest if METHOD is invalid', function(assert) {
    const manifest = [
      '#EXTM3U',
      '#EXT-X-KEY:METHOD=NONE,' +
      'URI="data:text/plain;base64,AAAAPnBzc2gAAAAA7e+LqXnWSs6jyCfc1R0h7QAAAB4iFnN' +
      'oYWthX2NlYzJmNjRhYTc4OTBhMTFI49yVmwY=",KEYID=0x800AACAA522958AE888062B5695DB6BF,' +
      'KEYFORMATVERSIONS="1",KEYFORMAT="urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed"',
      '#EXTINF:5,',
      'ex1.ts',
      '#EXT-X-ENDLIST'
    ].join('\n');

    this.parser.push(manifest);
    this.parser.end();

    assert.notOk(this.parser.manifest.contentProtection, 'contentProtection not added');
  });

  QUnit.test('Widevine #EXT-X-KEY attributes not attached to manifest if URI is invalid', function(assert) {
    const manifest = [
      '#EXTM3U',
      '#EXT-X-KEY:METHOD=SAMPLE-AES-CTR,' +
      'URI="AAAAPnBzc2gAAAAA7e+LqXnWSs6jyCfc1R0h7QAAAB4iFnN' +
      'oYWthX2NlYzJmNjRhYTc4OTBhMTFI49yVmwY=",KEYID=0x800AACAA522958AE888062B5695DB6BF,' +
      'KEYFORMATVERSIONS="1",KEYFORMAT="urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed"',
      '#EXTINF:5,',
      'ex1.ts',
      '#EXT-X-ENDLIST'
    ].join('\n');

    this.parser.push(manifest);
    this.parser.end();

    assert.notOk(this.parser.manifest.contentProtection, 'contentProtection not added');
  });

  QUnit.test('Widevine #EXT-X-KEY attributes not attached to manifest if KEYID is invalid', function(assert) {
    const manifest = [
      '#EXTM3U',
      '#EXT-X-KEY:METHOD=SAMPLE-AES-CTR,' +
      'URI="data:text/plain;base64,AAAAPnBzc2gAAAAA7e+LqXnWSs6jyCfc1R0h7QAAAB4iFnN' +
      'oYWthX2NlYzJmNjRhYTc4OTBhMTFI49yVmwY=",KEYID=800AACAA522958AE888062B5695DB6BF,' +
      'KEYFORMATVERSIONS="1",KEYFORMAT="urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed"',
      '#EXTINF:5,',
      'ex1.ts',
      '#EXT-X-ENDLIST'
    ].join('\n');

    this.parser.push(manifest);
    this.parser.end();

    assert.notOk(this.parser.manifest.contentProtection, 'contentProtection not added');
  });

  QUnit.test('Widevine #EXT-X-KEY attributes not attached to manifest if KEYFORMAT is not Widevine UUID', function(assert) {
    const manifest = [
      '#EXTM3U',
      '#EXT-X-KEY:METHOD=SAMPLE-AES-CTR,' +
      'URI="data:text/plain;base64,AAAAPnBzc2gAAAAA7e+LqXnWSs6jyCfc1R0h7QAAAB4iFnN' +
      'oYWthX2NlYzJmNjRhYTc4OTBhMTFI49yVmwY=",KEYID=0x800AACAA522958AE888062B5695DB6BF,' +
      'KEYFORMATVERSIONS="1",KEYFORMAT="invalid-keyformat"',
      '#EXTINF:5,',
      'ex1.ts',
      '#EXT-X-ENDLIST'
    ].join('\n');

    this.parser.push(manifest);
    this.parser.end();

    assert.notOk(this.parser.manifest.contentProtection, 'contentProtection not added');
  });

  QUnit.test('byterange offset defaults to next byte', function(assert) {
    const manifest = [
      '#EXTM3U',
      '#EXTINF:5,',
      '#EXT-X-BYTERANGE:10@5',
      'segment.ts',
      '#EXTINF:5,',
      '#EXT-X-BYTERANGE:20',
      'segment.ts',
      '#EXTINF:5,',
      '#EXT-X-BYTERANGE:30',
      'segment.ts',
      '#EXTINF:5,',
      'segment2.ts',
      '#EXT-X-BYTERANGE:15@100',
      'segment.ts',
      '#EXT-X-BYTERANGE:17',
      'segment.ts',
      '#EXT-X-ENDLIST'
    ].join('\n');

    this.parser.push(manifest);
    this.parser.end();

    assert.deepEqual(
      this.parser.manifest.segments[0].byterange,
      { length: 10, offset: 5 },
      'first segment has correct byterange'
    );
    assert.deepEqual(
      this.parser.manifest.segments[1].byterange,
      { length: 20, offset: 15 },
      'second segment has correct byterange'
    );
    assert.deepEqual(
      this.parser.manifest.segments[2].byterange,
      { length: 30, offset: 35 },
      'third segment has correct byterange'
    );
    assert.notOk(this.parser.manifest.segments[3].byterange, 'fourth segment has no byterange');
    assert.deepEqual(
      this.parser.manifest.segments[4].byterange,
      { length: 15, offset: 100 },
      'fifth segment has correct byterange'
    );
    // not tested is a segment with no offset coming after a segment that isn't a sub range,
    // as the spec requires that a byterange without an offset must follow a segment that
    // is a sub range of the same media resource
    assert.deepEqual(
      this.parser.manifest.segments[5].byterange,
      { length: 17, offset: 115 },
      'sixth segment has correct byterange'
    );
  });

  QUnit.module('warn/info');

  QUnit.test('triggers warning for missing EXT-X-START TIME-OFFSET attribute', function(assert) {

    const manifest = [
      '#EXT-X-VERSION:3',
      '#EXT-X-TARGETDURATION:10',
      '#EXT-X-START:PRECISE=YES',
      '#EXTINF:10,',
      'media-00001.ts',
      '#EXT-X-ENDLIST'
    ].join('\n');
    let warning;

    this.parser.on('warn', function(warn) {
      warning = warn;
    });
    this.parser.push(manifest);
    this.parser.end();

    assert.ok(warning, 'a warning was triggered');
    assert.ok((/ignoring start/).test(warning.message), 'message is about start tag');
    assert.strictEqual(typeof this.parser.manifest.start, 'undefined', 'does not parse start');
  });

  QUnit.module('integration');

  for (const key in testDataExpected) {
    if (!testDataManifests[key]) {
      throw new Error(`${key}.js does not have an equivelent m3u8 manifest to test against`);
    }
  }

  for (const key in testDataManifests) {
    if (!testDataExpected[key]) {
      throw new Error(`${key}.m3u8 does not have an equivelent expected js file to test against`);
    }
    QUnit.test(`parses ${key}.m3u8 as expected in ${key}.js`, function(assert) {
      this.parser.push(testDataManifests[key]());
      this.parser.end();

      assert.deepEqual(
        this.parser.manifest,
        testDataExpected[key](),
        key + '.m3u8 was parsed correctly'
      );
    });
  }

});
