import type { ImageMetadata } from 'astro';

/**
 * Case-study images live in `src/assets/work/<slug>/`.
 * Content data files resolve them through this helper so every image is
 * processed by astro:assets (responsive srcset, WebP, intrinsic dimensions).
 */
const images = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/work/**/*.{png,jpg,jpeg,webp}',
  { eager: true },
);

export function workImage(path: string): ImageMetadata {
  const key = `../assets/work/${path}`;
  const image = images[key];
  if (!image) {
    throw new Error(`Work image not found: ${key}`);
  }
  return image.default;
}
