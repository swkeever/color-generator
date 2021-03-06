import { APP_DATA_KEY } from '../App';
import config from './config';

export const defaultColors = [
  {
    name: 'Gray',
    lightness: {
      start: 17,
      range: 90,
    },
    saturation: {
      a: 0.001,
      b: 0,
      c: 0,
    },
    hue: {
      start: 207,
      range: 0,
    },
    editing: true,
  },
  {
    name: 'Red',
    lightness: {
      start: 13,
      range: 87,
    },
    saturation: {
      a: 0.025,
      b: 98,
      c: 42,
    },
    hue: {
      range: 8,
      start: 354,
    },
    editing: false,
  },
  {
    name: 'Orange',
    lightness: {
      start: 20,
      range: 82,
    },
    saturation: {
      a: 0.05,
      b: 94,
      c: 90,
    },
    hue: {
      range: 17,
      start: 20,
    },
    editing: false,
  },
  {
    name: 'Yellow',
    lightness: {
      start: 19,
      range: 79,
    },
    saturation: {
      a: 0.05,
      b: 88,
      c: 57,
    },
    hue: {
      range: 13,
      start: 48,
    },
    editing: false,
  },
  {
    name: 'Green',
    lightness: {
      start: 0,
      range: 100,
    },
    saturation: {
      a: 0.025,
      b: 50,
      c: 50,
    },
    hue: {
      range: 10,
      start: 120,
    },
    editing: false,
  },
  {
    name: 'Blue',
    lightness: {
      start: 12,
      range: 92,
    },
    saturation: {
      a: 0.025,
      b: 50,
      c: 50,
    },
    hue: {
      range: 10,
      start: 210,
    },
    editing: false,
  },
  {
    name: 'Violet',
    lightness: {
      start: 12,
      range: 94,
    },
    saturation: {
      a: 0.025,
      b: 50,
      c: 50,
    },
    hue: {
      range: 10,
      start: 270,
    },
    editing: false,
  },
];

export function getInitialColors() {
  const appData = localStorage.getItem(APP_DATA_KEY);
  if (appData) {
    return JSON.parse(appData);
  }
  return [];
}

export function getNextColor(colors) {
  return ({
    name: 'Click to name',
    hue: {
      start: colors.length > 0
        ? (colors[colors.length - 1].hue.start + 60) % 360
        : Math.floor(Math.random() * config.hue.max),
      range: 10,
    },
    saturation: {
      a: config.saturation.a.max / 2,
      b: config.saturation.b.max / 2,
      c: config.saturation.c.max / 2,
    },
    lightness: {
      start: config.lightness.min,
      range: 100,
    },
    editing: true,
  });
}
