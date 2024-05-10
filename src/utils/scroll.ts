/* eslint-disable @typescript-eslint/no-explicit-any */
import { debounce } from './debounce';
import { KeyboardEvent } from 'react';

const keys: Record<string, number> = {
  ' ': 1,
  ArrowDown: 1,
  ArrowUp: 1,
  Home: 1,
  End: 1,
  PageUp: 1,
  PageDown: 1,
};

function preventDefault(e: Event) {
  if (e.cancelable) e.preventDefault();
}

function preventDefaultForScrollKeys(e: Event) {
  if (keys[(e as unknown as KeyboardEvent).key]) {
    if (e.cancelable) preventDefault(e);
    return false;
  }
}

// modern Chrome requires { passive: false } when adding event
let supportsPassive = false;
try {
  (window as any).addEventListener(
    'test',
    null,
    Object.defineProperty({}, 'passive', {
      get: function () {
        supportsPassive = true;
      },
    }),
  );
} catch (e) {
  //
}

const wheelOpt = supportsPassive ? { passive: false } : false;
const wheelEvent =
  'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

// TODO: Delete this file if not used

// call this to Disable
export function disableScroll() {
  window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
  window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

// call this to Enable
export function enableScroll() {
  window.removeEventListener('DOMMouseScroll', preventDefault, false);
  (window as any).removeEventListener(wheelEvent, preventDefault, wheelOpt);
  window.removeEventListener('touchmove', preventDefault, wheelOpt as any);
  window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}

export const disableScrollTemporary = (durationMs: number) => {
  disableScroll();
  const enable = debounce(() => {
    setTimeout(() => {
      enableScroll();
    }, durationMs);
  }, durationMs);
  enable();
};

export const scrollToTopWithDisableScroll = () => {
  disableScrollTemporary(200);
  scrollTo(0, 0);
};
