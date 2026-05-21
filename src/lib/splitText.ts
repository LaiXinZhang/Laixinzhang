import gsap from 'gsap';

export interface SplitOptions {
  type?: 'chars' | 'words' | 'lines';
  tag?: string;
  className?: string;
}

/**
 * Custom text splitting utility to replace GSAP SplitText premium plugin.
 * Splits text content into individual characters or words wrapped in spans.
 */
export function splitText(element: HTMLElement, options: SplitOptions = {}): HTMLElement[] {
  const { type = 'chars', tag = 'span', className = 'split-item' } = options;

  const text = element.textContent || '';
  element.innerHTML = '';

  const items: HTMLElement[] = [];

  if (type === 'chars') {
    // Split into individual characters, preserving spaces as word separators
    const words = text.split(' ');
    words.forEach((word, wordIndex) => {
      const wordWrapper = document.createElement('span');
      wordWrapper.style.display = 'inline-block';
      wordWrapper.style.whiteSpace = 'nowrap';

      for (let i = 0; i < word.length; i++) {
        const span = document.createElement(tag);
        span.className = className;
        span.textContent = word[i];
        span.style.display = 'inline-block';
        span.style.willChange = 'transform, opacity';
        wordWrapper.appendChild(span);
        items.push(span);
      }

      element.appendChild(wordWrapper);

      // Add space between words (not after the last word)
      if (wordIndex < words.length - 1) {
        const space = document.createTextNode('\u00A0');
        element.appendChild(space);
      }
    });
  } else if (type === 'words') {
    const words = text.split(' ');
    words.forEach((word, index) => {
      const span = document.createElement(tag);
      span.className = className;
      span.textContent = word;
      span.style.display = 'inline-block';
      span.style.willChange = 'transform, opacity';
      element.appendChild(span);
      items.push(span);

      if (index < words.length - 1) {
        const space = document.createTextNode('\u00A0');
        element.appendChild(space);
      }
    });
  }

  return items;
}

/**
 * Animate split characters with GSAP stagger
 */
export function animateChars(
  items: HTMLElement[],
  vars: gsap.TweenVars = {},
  stagger: number = 0.03
): gsap.core.Timeline {
  const tl = gsap.timeline();
  tl.from(items, {
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger,
    ease: 'power3.out',
    ...vars,
  });
  return tl;
}

/**
 * Revert split text back to original
 */
export function revertSplit(element: HTMLElement, originalText: string): void {
  element.textContent = originalText;
}
