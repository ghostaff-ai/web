// A film the scroll plays: the section stays pinned while scrolling moves through
// a sequence of frames (public/film/<name>/0001.webp …), forward and back, the way
// Apple's product pages do it. The frames come from AI-made shots (Higgsfield),
// cut with ffmpeg. Until a film has frames, its poster stands in.
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function mountScrollFilm(section: HTMLElement) {
  const canvas = section.querySelector('canvas')!;
  const name = section.dataset.film!;
  const count = Number(section.dataset.frames ?? 0);
  const captions = [...section.querySelectorAll<HTMLElement>('[data-at]')];
  const ctx = canvas.getContext('2d')!;
  const frames: HTMLImageElement[] = [];
  for (let i = 1; i <= count; i++) {
    const img = new Image();
    img.src = `/film/${name}/${String(i).padStart(4, '0')}.webp`;
    frames.push(img);
  }

  let shown = -1;
  const draw = (p: number) => {
    const i = Math.min(count - 1, Math.floor(p * count));
    const img = frames[i];
    if (!img || i === shown || !img.complete) return;
    shown = i;
    const { width: w, height: h } = canvas;
    const s = Math.max(w / img.naturalWidth, h / img.naturalHeight); // cover
    const iw = img.naturalWidth * s, ih = img.naturalHeight * s;
    ctx.drawImage(img, (w - iw) / 2, (h - ih) / 2, iw, ih);
  };
  const size = () => {
    canvas.width = canvas.clientWidth * Math.min(devicePixelRatio, 2);
    canvas.height = canvas.clientHeight * Math.min(devicePixelRatio, 2);
    shown = -1;
  };
  new ResizeObserver(size).observe(canvas);
  size();
  frames[0]?.addEventListener('load', () => draw(0));

  ScrollTrigger.create({
    trigger: section,
    start: 'top top',
    end: `+=${section.dataset.length ?? 300}%`,
    pin: true,
    scrub: true,
    onUpdate: ({ progress }) => {
      if (count) draw(progress);
      section.style.setProperty('--p', String(progress));
      for (const c of captions) {
        const [a, b] = c.dataset.at!.split('-').map(Number);
        c.classList.toggle('on', progress >= a && progress < b);
      }
    },
  });
}
