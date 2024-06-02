## VOICE VOX Test

```bash
curl -X 'POST' \
  'http://localhost:50021/audio_query?text=pyupyumaru&speaker=1' \
  -H 'accept: application/json' \
  -d ''
```

```js
const audioQuery = {
  accent_phrases: [
    {
      moras: [
        {
          text: "コ",
          consonant: "k",
          consonant_length: 0.10002633929252625,
          vowel: "o",
          vowel_length: 0.15740254521369934,
          pitch: 5.7578020095825195,
        },
        {
          text: "ン",
          consonant: null,
          consonant_length: null,
          vowel: "N",
          vowel_length: 0.08265873789787292,
          pitch: 5.909540176391602,
        },
        {
          text: "ニ",
          consonant: "n",
          consonant_length: 0.036570820957422256,
          vowel: "i",
          vowel_length: 0.11730462312698364,
          pitch: 5.997440338134766,
        },
        {
          text: "チ",
          consonant: "ch",
          consonant_length: 0.08886724710464478,
          vowel: "i",
          vowel_length: 0.08227093517780304,
          pitch: 5.979402542114258,
        },
        {
          text: "ワ",
          consonant: "w",
          consonant_length: 0.07374416291713715,
          vowel: "a",
          vowel_length: 0.18659579753875732,
          pitch: 5.958913326263428,
        },
      ],
      accent: 5,
      pause_mora: {
        text: "、",
        consonant: null,
        consonant_length: null,
        vowel: "pau",
        vowel_length: 0.34291040897369385,
        pitch: 0,
      },
      is_interrogative: false,
    },
    {
      moras: [
        {
          text: "ボ",
          consonant: "b",
          consonant_length: 0.09570878744125366,
          vowel: "o",
          vowel_length: 0.1293463259935379,
          pitch: 5.621132850646973,
        },
        {
          text: "イ",
          consonant: null,
          consonant_length: null,
          vowel: "i",
          vowel_length: 0.07829663157463074,
          pitch: 5.921660900115967,
        },
        {
          text: "ス",
          consonant: "s",
          consonant_length: 0.07955755293369293,
          vowel: "u",
          vowel_length: 0.08079370856285095,
          pitch: 6.165293216705322,
        },
        {
          text: "ボ",
          consonant: "b",
          consonant_length: 0.05956230312585831,
          vowel: "o",
          vowel_length: 0.14478734135627747,
          pitch: 6.202662467956543,
        },
        {
          text: "ッ",
          consonant: null,
          consonant_length: null,
          vowel: "cl",
          vowel_length: 0.08022505789995193,
          pitch: 0,
        },
        {
          text: "ク",
          consonant: "k",
          consonant_length: 0.07238312065601349,
          vowel: "U",
          vowel_length: 0.06309045106172562,
          pitch: 0,
        },
        {
          text: "ス",
          consonant: "s",
          consonant_length: 0.08738785982131958,
          vowel: "u",
          vowel_length: 0.07764864712953568,
          pitch: 5.954427242279053,
        },
        {
          text: "デ",
          consonant: "d",
          consonant_length: 0.0552055723965168,
          vowel: "e",
          vowel_length: 0.1634213626384735,
          pitch: 5.785795211791992,
        },
        {
          text: "ス",
          consonant: "s",
          consonant_length: 0.08339060097932816,
          vowel: "U",
          vowel_length: 0.12330324202775955,
          pitch: 0,
        },
      ],
      accent: 4,
      pause_mora: null,
      is_interrogative: false,
    },
  ],
  speedScale: 1,
  pitchScale: 0,
  intonationScale: 1,
  volumeScale: 1,
  prePhonemeLength: 0.1,
  postPhonemeLength: 0.1,
  outputSamplingRate: 24000,
  outputStereo: false,
  kana: "コンニチワ'、ボイスボ'ッ_クスデ_ス",
};
```
