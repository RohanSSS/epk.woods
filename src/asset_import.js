import React from 'react';

import tempAudio from './assets/temp.mp3';
import bromahsadhfb from './assets/bromahsadhfb.mp3';
import bromama from './assets/bromama.mp3';
import bruh_1 from './assets/bruh_1.mp3';
import bruh_2 from './assets/bruh_2.mp3';
import bruh_3 from './assets/bruh_3.mp3';
import bruh_4 from './assets/bruh_4.mp3';
import epk_cant_breath from './assets/epk_cant_breath.mp3';
import epk_hyperventilate from './assets/epk_hyperventilate.mp3';
import herman_dance from './assets/herman_dance.mp3';
import water_story from './assets/water_story.mp3';
import shit_joke from './assets/water_story.mp3';

const audioFiles = [
  bromahsadhfb,
  bromama,
  bruh_1,
  bruh_2,
  bruh_3,
  bruh_4,
  epk_cant_breath,
  epk_hyperventilate,
  herman_dance,
  water_story,
  shit_joke
];

const audioClips = audioFiles.map(file => {
  return new Audio(file);
})

export default audioClips;
