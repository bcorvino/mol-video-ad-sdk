import {
  getAds,
  getFirstAd,
  isInline,
  isWrapper
} from '../src/index';
import {
  inlineAd,
  wrapperAd,
  wrapperParsedXML
} from './fixtures';

test('getAds must return the ads of the passed adResponse', () => {
  expect(getAds(wrapperParsedXML)).toEqual([wrapperAd]);
  expect(getAds({})).toBe(null);
});

test('getFirstAd must return the first ad of the passed adResponse', () => {
  expect(getFirstAd(wrapperParsedXML)).toEqual(wrapperAd);
  expect(getFirstAd({})).toBe(null);
});

test('isWrapper must return true if the ad contains a wrapper and false otherwise', () => {
  expect(isWrapper(wrapperAd)).toBe(true);
  expect(isWrapper(inlineAd)).toBe(false);
  expect(isWrapper({})).toBe(false);
  expect(isWrapper(null)).toBe(false);
  expect(isWrapper(1)).toBe(false);
});

test('isInline must return true if the ad contains a wrapper and false otherwise', () => {
  expect(isInline(inlineAd)).toBe(true);
  expect(isInline(wrapperAd)).toBe(false);
  expect(isInline({})).toBe(false);
  expect(isInline(null)).toBe(false);
  expect(isInline(1)).toBe(false);
});
