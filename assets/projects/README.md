# Project images

Put your project covers in this folder, then update `index.html`.

## Naming

```
assets/projects/nova-finance.jpg
assets/projects/atlas-travel.jpg
assets/projects/bloom-skincare.jpg
assets/projects/pulse-fitness.jpg
assets/projects/ledger-saas.jpg
assets/projects/frame-studio.jpg
```

## Recommended specs

- Landscape **4:3** ratio (e.g. 1600 × 1200 px)
- Under **200 KB** each
- JPG or WebP
- No text baked into the image that duplicates the card title

## How to wire one up

Replace the placeholder cover `<div>` with a real image:

```html
<div class="project__cover cover--1">
  <img src="assets/projects/nova-finance.jpg"
       alt="Nova Finance signup flow"
       width="1600" height="1200" loading="lazy">
</div>
```

Then add this to `css/styles.css` so real images fill the frame:

```css
.project__cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
}
```
