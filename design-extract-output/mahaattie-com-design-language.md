# Design Language: Maha Attié | Real Eatate Advisory

> Extracted from `https://www.mahaattie.com` on June 24, 2026
> 696 elements analyzed

This document describes the complete design language of the website. It is structured for AI/LLM consumption — use it to faithfully recreate the visual design in any framework.

## Color Palette

### Primary Colors

| Role | Hex | RGB | HSL | Usage Count |
|------|-----|-----|-----|-------------|
| Primary | `#1d2944` | rgb(29, 41, 68) | hsl(222, 40%, 19%) | 688 |
| Secondary | `#e4e8ec` | rgb(228, 232, 236) | hsl(210, 17%, 91%) | 471 |

### Neutral Colors

| Hex | HSL | Usage Count |
|-----|-----|-------------|
| `#000000` | hsl(0, 0%, 0%) | 239 |
| `#8492ae` | hsl(220, 21%, 60%) | 26 |
| `#ffffff` | hsl(0, 0%, 100%) | 2 |
| `#c1c1c1` | hsl(0, 0%, 76%) | 1 |

### Background Colors

Used on large-area elements: `#1d2944`, `#e4e8ec`, `#8492ae`

### Text Colors

Text color palette: `#000000`, `#e4e8ec`, `#1d2944`, `#8492ae`

### Gradients

```css
background-image: linear-gradient(rgb(29, 41, 68), rgb(29, 41, 68));
```

### Full Color Inventory

| Hex | Contexts | Count |
|-----|----------|-------|
| `#1d2944` | background, border, text | 688 |
| `#e4e8ec` | text, border, background | 471 |
| `#000000` | text, border | 239 |
| `#8492ae` | text, border, background | 26 |
| `#ffffff` | background | 2 |
| `#c1c1c1` | border | 1 |

## Typography

### Font Families

- **salmanazar-lk7x9s** — used for all (588 elements)
- **aktiv-grotesk** — used for body (1 elements)
- **ibm-plex-mono** — used for body (1 elements)

### Type Scale

| Size (px) | Size (rem) | Weight | Line Height | Letter Spacing | Used On |
|-----------|------------|--------|-------------|----------------|---------|
| 54.4px | 3.4rem | 600 | 58.752px | normal | h2, strong, span, br |
| 48px | 3rem | 400 | 48px | normal | a, div |
| 46.72px | 2.92rem | 600 | 50.4576px | normal | h2 |
| 40.8525px | 2.5533rem | 600 | 45.8502px | normal | h3, span |
| 26.752px | 1.672rem | 600 | 40.128px | -0.44288px | p |
| 26.5728px | 1.6608rem | 600 | 26.5728px | -0.44288px | div, nav |
| 25.216px | 1.576rem | 600 | 45.3888px | normal | div, a |
| 22.144px | 1.384rem | 600 | 33.216px | -0.44288px | div, a, span, svg |
| 19.072px | 1.192rem | 400 | normal | -0.57216px | a, button, span, div |
| 16px | 1rem | 400 | normal | normal | html, head, meta, base |
| 10px | 0.625rem | 600 | 10px | -0.44288px | div, span |

### Heading Scale

```css
h2 { font-size: 54.4px; font-weight: 600; line-height: 58.752px; }
h2 { font-size: 46.72px; font-weight: 600; line-height: 50.4576px; }
h3 { font-size: 40.8525px; font-weight: 600; line-height: 45.8502px; }
```

### Body Text

```css
body { font-size: 22.144px; font-weight: 600; line-height: 33.216px; }
```

### Font Weights in Use

`600` (515x), `400` (172x), `700` (9x)

## Spacing

**Base unit:** 4px

| Token | Value | Rem |
|-------|-------|-----|
| spacing-1 | 1px | 0.0625rem |
| spacing-32 | 32px | 2rem |
| spacing-36 | 36px | 2.25rem |
| spacing-64 | 64px | 4rem |
| spacing-71 | 71px | 4.4375rem |
| spacing-84 | 84px | 5.25rem |
| spacing-92 | 92px | 5.75rem |

## Border Radii

| Label | Value | Count |
|-------|-------|-------|
| xs | 2px | 1 |
| full | 50px | 6 |
| full | 150px | 1 |
| full | 300px | 2 |

## Box Shadows

**sm** — blur: 5px
```css
box-shadow: rgb(128, 128, 128) 0px 0px 5px 0px;
```

## CSS Custom Properties

### Colors

```css
--tweak-summary-block-background-color: hsla(210,17%,91%,1);
--tweak-blog-basic-grid-list-meta-color: hsla(210,17%,91%,1);
--tweak-blog-item-title-color: hsla(210,17%,91%,1);
--portfolio-hover-static-title-color: hsla(210,17%,91%,1);
--secondary-button-font-font-weight: 600;
--tweak-product-basic-item-gallery-controls-color: hsla(210,17%,91%,1);
--list-section-carousel-card-color: hsla(210,17%,91%,1);
--siteBackgroundColor: hsla(222,40%,19%,1);
--tweak-product-basic-item-sale-price-color: hsla(210,17%,91%,1);
--form-field-radio-shape-border-bottom-left-radius: 5px;
--tweak-newsletter-block-button-text-color: hsla(222,40%,19%,1);
--video-grid-basic-title-color: hsla(221,41%,19%,1);
--tweak-blog-alternating-side-by-side-list-meta-color: hsla(210,17%,91%,1);
--tweak-blog-single-column-list-title-color: hsla(210,17%,91%,1);
--solidHeaderBackgroundColor: hsla(221,41%,19%,1);
--toggle-on-color: hsla(210,17%,91%,1);
--course-item-nav-border-color: hsla(221,41%,19%,.25);
--tweak-product-basic-item-breadcumb-nav-color: hsla(210,17%,91%,1);
--social-links-block-secondary-icon-color: hsla(222,40%,19%,1);
--primary-button-font-font-style: normal;
--tweak-blog-alternating-side-by-side-list-excerpt-color: hsla(210,17%,91%,1);
--secondary-button-font-font-size-value: 1.2;
--tweak-form-block-background-color: hsla(210,17%,91%,1);
--primary-button-padding-y: .1em;
--form-field-survey-shape-border-top-right-radius: 5px;
--tweak-blog-item-pagination-meta-color: hsla(210,17%,91%,1);
--video-grid-basic-description-color: hsla(221,41%,19%,1);
--backgroundOverlayColor: hsla(222,40%,19%,1);
--tweak-events-item-pagination-date-color: hsla(210,17%,91%,1);
--list-section-banner-slideshow-button-text-color: hsla(222,40%,19%,1);
--list-section-simple-card-description-color: hsla(222,40%,19%,1);
--tweak-newsletter-block-footnote-color: hsla(210,17%,91%,1);
--course-list-grid-layout-course-item-text-color: hsla(220,21%,60%,1);
--safeInverseLightAccent-hsl: 210,17%,91%;
--tweak-video-item-pagination-title-color: hsla(221,41%,19%,1);
--safeDarkAccent-hsl: 210,17%,91%;
--list-section-simple-card-button-background-color: hsla(222,40%,19%,1);
--stack-background-color: hsla(210,17%,91%,1);
--menuOverlayBackgroundColor: hsla(214,16%,91%,1);
--video-preview-badge-font-color: hsla(210,17%,91%,1);
--tweak-summary-block-header-text-color: hsla(210,17%,91%,1);
--list-section-simple-title-color: hsla(214,16%,91%,1);
--course-list-course-progress-bar-color: hsla(214,16%,91%,1);
--primary-button-font-font-size: 1.2rem;
--form-field-survey-shape-border-bottom-left-radius: 5px;
--tweak-form-block-field-input-color-on-background-hsl: 222,40%,19%;
--tweak-form-block-field-border-color: hsla(210,17%,91%,1);
--list-section-simple-card-title-color: hsla(222,40%,19%,1);
--tweak-heading-medium-color-on-background: hsla(222,40%,19%,1);
--menuOverlayButtonBackgroundColor: hsla(221,41%,19%,1);
--tweak-summary-block-primary-metadata-color-on-background: hsla(222,40%,19%,1);
--primary-button-font-line-height: 1.2em;
--image-block-card-inline-link-color: hsla(210,17%,91%,1);
--product-detail-subscriptions-frequency-text-color: hsla(210,17%,91%,1);
--list-section-banner-slideshow-card-title-color: hsla(222,40%,19%,1);
--tweak-marquee-block-heading-color-on-background: hsla(222,40%,19%,1);
--tweak-form-block-field-fill-color-a: 1;
--list-section-banner-slideshow-card-button-text-color: hsla(210,17%,91%,1);
--paragraphLinkColor: hsla(214,16%,91%,1);
--form-field-shape-border-top-right-radius: 5px;
--image-block-card-image-title-separation: 6%;
--gradientHeaderNavigationColor: hsla(210,17%,91%,1);
--tweak-heading-small-color-on-background: hsla(222,40%,19%,1);
--tweak-content-link-block-title-color: hsla(210,17%,91%,1);
--list-section-banner-slideshow-card-button-background-color: hsla(222,40%,19%,1);
--product-detail-subscriptions-button-text-color: hsla(222,40%,19%,1);
--headingMediumColor: hsla(214,16%,91%,1);
--list-section-banner-slideshow-card-description-color: hsla(222,40%,19%,1);
--list-section-title-color: hsla(214,16%,91%,1);
--lightAccent-hsl: 220,21%,60%;
--tweak-summary-block-read-more-color-on-background: hsla(222,40%,19%,1);
--tweak-menu-block-title-color: hsla(210,17%,91%,1);
--list-section-simple-description-color: hsla(214,16%,91%,1);
--secondary-button-font-font-family: "salmanazar-lk7x9s";
--form-field-radio-shape-border-top-left-radius: 5px;
--image-block-overlap-image-title-bg-color: hsla(222,40%,19%,1);
--form-field-survey-shape-border-bottom-right-radius: 5px;
--form-field-checkbox-shape-border-bottom-left-radius: 5px;
--scheduling-block-button-accent-color: hsla(210,17%,91%,1);
--tweak-blog-side-by-side-list-read-more-color: hsla(210,17%,91%,1);
--image-block-card-image-width: 55%;
--secondary-button-font-text-transform: none;
--tweak-video-item-description-color: hsla(221,41%,19%,1);
--image-block-card-image-title-bg-color: hsla(222,40%,19%,0);
--primaryButtonPadding: 1.1em;
--tweak-blog-single-column-list-excerpt-color: hsla(210,17%,91%,1);
--image-block-collage-image-subtitle-color: hsla(222,40%,19%,1);
--tweak-newsletter-block-footnote-color-on-background: hsla(222,40%,19%,1);
--tertiaryButtonTextColor: hsla(214,16%,91%,1);
--tweak-summary-block-secondary-metadata-color: hsla(210,17%,91%,1);
--darkAccent-hsl: 214,16%,91%;
--list-section-carousel-arrow-color: hsla(222,40%,19%,1);
--video-preview-badge-background-color: hsla(221,41%,19%,1);
--tweak-video-item-meta-color: hsla(221,41%,19%,1);
--tweak-product-grid-text-below-list-status-color: hsla(221,41%,19%,1);
--tweak-product-basic-item-title-color: hsla(210,17%,91%,1);
--image-block-stack-image-button-bg-color: hsla(210,17%,91%,1);
--tweak-form-block-field-input-color-on-background: hsla(222,40%,19%,1);
--tweak-newsletter-block-background-color: hsla(210,17%,91%,1);
--tweak-form-block-field-fill-color: hsla(222,40%,19%,1);
--tweak-newsletter-block-title-color-on-background: hsla(222,40%,19%,1);
--tweak-form-block-field-input-color: hsla(210,17%,91%,1);
--portfolio-grid-basic-title-color: hsla(210,17%,91%,1);
--course-list-grid-layout-course-item-background-color: hsla(210,17%,91%,1);
--tweak-product-grid-text-below-list-price-color: hsla(210,17%,91%,1);
--tweak-product-list-stroke-color: hsla(214,16%,91%,1);
--tweak-blog-item-meta-color: hsla(210,17%,91%,1);
--tweak-blog-item-author-profile-color: hsla(210,17%,91%,1);
--image-block-stack-image-title-color: hsla(210,17%,91%,1);
--tweak-text-block-background-color: hsla(214,16%,91%,1);
--tweak-social-links-block-background-color: hsla(210,17%,91%,1);
--tweak-newsletter-block-stroke-color: hsla(214,16%,91%,1);
--tweak-menu-block-item-price-color: hsla(210,17%,91%,1);
--shape-block-stroke-color: hsla(210,17%,91%,1);
--tweak-gallery-lightbox-background-color: hsla(222,40%,19%,1);
--headerDropShadowColor: hsla(210,17%,91%,1);
--tweak-form-block-field-accent-color-on-background-a: 1;
--image-block-collage-image-button-bg-color: hsla(222,40%,19%,1);
--headerBorderColor: hsla(210,17%,91%,1);
--headingSmallColor: hsla(214,16%,91%,1);
--headingExtraLargeColor: hsla(214,16%,91%,1);
--primary-button-rounded-border-bottom-left-radius: 6.4px;
--tweak-newsletter-block-button-background-color: hsla(210,17%,91%,1);
--tweak-blog-masonry-list-meta-color: hsla(210,17%,91%,1);
--safeInverseDarkAccent-hsl: 221,41%,19%;
--list-section-carousel-arrow-background-color: hsla(210,17%,91%,1);
--tweak-summary-block-excerpt-color-on-background: hsla(222,40%,19%,1);
--product-basic-item-discount-chip-text-color: hsla(222,40%,19%,1);
--tweak-form-block-description-color: hsla(210,17%,91%,1);
--tweak-newsletter-block-button-background-color-on-background: hsla(222,40%,19%,1);
--scheduling-block-button-text-color: hsla(222,40%,19%,1);
--form-field-shape-border-bottom-left-radius: 5px;
--tweak-portfolio-item-pagination-icon-color: hsla(210,17%,91%,1);
--product-basic-item-add-ons-title-color: hsla(210,17%,91%,1);
--tweak-line-block-line-color: hsla(210,17%,91%,1);
--list-section-carousel-description-color: hsla(214,16%,91%,1);
--tertiary-button-rounded-border-top-left-radius: 6.4px;
--course-item-nav-active-lesson-text-color: hsla(210,17%,91%,1);
--list-section-simple-button-text-color: hsla(222,40%,19%,1);
--siteTitleColor: hsla(214,16%,91%,1);
--video-grid-basic-meta-color: hsla(221,41%,19%,1);
--text-highlight-color-on-background: hsla(222,40%,19%,1);
--tweak-product-grid-text-below-list-sale-price-color: hsla(221,41%,19%,1);
--tweak-form-block-caption-color-on-background: hsla(222,40%,19%,1);
--portfolio-hover-follow-title-color: hsla(210,17%,91%,1);
--product-block-text-color-on-background: hsla(222,40%,19%,1);
--tertiary-button-rounded-border-bottom-left-radius: 6.4px;
--tweak-newsletter-block-description-color-on-background: hsla(222,40%,19%,1);
--tweak-quote-block-background-color: hsla(210,17%,91%,1);
--tweak-blog-masonry-list-title-color: hsla(210,17%,91%,1);
--tweak-form-block-field-accent-color-hsl: 214,16%,91%;
--list-section-carousel-card-button-text-color: hsla(210,17%,91%,1);
--tweak-blog-masonry-list-read-more-color: hsla(210,17%,91%,1);
--summary-block-limited-availability-label-color: hsla(210,17%,91%,1);
--stack-stroke-color: hsla(210,17%,91%,1);
--tweak-portfolio-item-pagination-meta-color: hsla(210,17%,91%,1);
--course-item-nav-background-color: hsla(210,17%,91%,1);
--tweak-product-list-background-color: hsla(210,17%,91%,1);
--tweak-summary-block-primary-metadata-color: hsla(210,17%,91%,1);
--tweak-form-block-stroke-color: hsla(214,16%,91%,1);
--tweak-blog-item-pagination-title-color: hsla(210,17%,91%,1);
--solidHeaderNavigationColor: hsla(210,17%,91%,1);
--tweak-marquee-block-paragraph-color: hsla(210,17%,91%,1);
--secondary-button-rounded-border-bottom-right-radius: 6.4px;
--primary-button-rounded-border-top-right-radius: 6.4px;
--tweak-form-block-field-border-color-a: 1;
--image-block-poster-image-title-bg-color-v2: hsla(222,40%,19%,0);
--tweak-form-block-field-accessory-color-on-background: hsla(222,40%,19%,1);
--tweak-accordion-block-background-color: hsla(210,17%,91%,1);
--tweak-accordion-block-stroke-color: hsla(214,16%,91%,1);
--course-list-course-item-text-color: hsla(220,21%,60%,1);
--secondaryButtonBackgroundColor: hsla(214,16%,91%,1);
--paragraphLargeColor: hsla(214,16%,91%,1);
--tweak-form-block-field-accent-color: hsla(214,16%,91%,1);
--tweak-form-block-survey-title-color: hsla(210,17%,91%,1);
--tweak-blog-basic-grid-list-excerpt-color: hsla(210,17%,91%,1);
--tweak-form-block-title-color-on-background: hsla(222,40%,19%,1);
--image-block-collage-image-button-text-color: hsla(210,17%,91%,1);
--tweak-form-block-button-background-color-on-background: hsla(222,40%,19%,1);
--tweak-summary-block-secondary-metadata-color-on-background: hsla(222,40%,19%,1);
--product-list-filters-drawer-background-color: hsla(210,17%,91%,1);
--tweak-form-block-field-accessory-color: hsla(210,17%,91%,1);
--tweak-product-quick-view-button-color: hsla(210,17%,91%,1);
--course-item-nav-text-color: hsla(221,41%,19%,1);
--image-block-poster-image-button-bg-color: hsla(222,40%,19%,1);
--primary-button-font-font-weight: 600;
--tweak-product-basic-item-price-color: hsla(210,17%,91%,1);
--tweak-form-block-field-border-color-on-background-a: 1;
--safeLightAccent-hsl: 222,40%,19%;
--tweak-form-block-caption-color: hsla(210,17%,91%,1);
--image-block-overlap-image-button-text-color: hsla(222,40%,19%,1);
--image-block-poster-image-overlay-color: hsla(214,16%,91%,1);
--tweak-events-item-pagination-icon-color: hsla(210,17%,91%,1);
--tweak-paragraph-small-color-on-background: hsla(222,40%,19%,1);
--secondary-button-font-font-style: normal;
--tweak-product-basic-item-variant-fields-color: hsla(210,17%,91%,1);
--list-section-carousel-card-title-color: hsla(222,40%,19%,1);
--image-block-stack-inline-link-color: hsla(210,17%,91%,1);
--list-section-carousel-card-button-background-color: hsla(222,40%,19%,1);
--primary-button-padding-x: 0em;
--image-block-card-image-button-text-color: hsla(222,40%,19%,1);
--tweak-portfolio-item-pagination-title-color: hsla(210,17%,91%,1);
--secondary-button-padding-y: .1em;
--image-block-collage-inline-link-color: hsla(222,40%,19%,1);
--product-detail-subscriptions-title-color: hsla(210,17%,91%,1);
--tweak-summary-block-read-more-color: hsla(210,17%,91%,1);
--safeInverseAccent-hsl: 210,17%,91%;
--primaryButtonTextColor: hsla(210,17%,91%,1);
--secondary-button-rounded-border-bottom-left-radius: 6.4px;
--form-field-survey-shape-border-top-left-radius: 5px;
--menuOverlayButtonTextColor: hsla(221,41%,19%,1);
--tweak-newsletter-block-description-color: hsla(210,17%,91%,1);
--list-section-banner-slideshow-card-color: hsla(210,17%,91%,1);
--solidHeaderDropShadowColor: hsla(210,17%,91%,1);
--form-field-checkbox-shape-border-top-right-radius: 5px;
--image-block-overlap-image-title-color: hsla(210,17%,91%,1);
--paragraphMediumColor: hsla(214,16%,91%,1);
--tweak-form-block-field-input-color-a: 1;
--tweak-blog-single-column-list-meta-color: hsla(210,17%,91%,1);
--primaryButtonBackgroundColor: hsla(214,16%,91%,1);
--primary-button-font-letter-spacing: -.03em;
--secondary-button-padding-x: 0em;
--course-list-grid-layout-course-item-hover-background-color: hsla(210,17%,91%,.9);
--tweak-text-block-stroke-color: hsla(214,16%,91%,1);
--tertiary-button-rounded-border-bottom-right-radius: 6.4px;
--tweak-product-basic-item-description-color: hsla(210,17%,91%,1);
--image-block-overlay-color: hsla(210,17%,91%,.5);
--image-block-overlap-image-overlay-color: hsla(214,16%,91%,1);
--form-field-shape-border-bottom-right-radius: 5px;
--tweak-social-links-block-stroke-color: hsla(214,16%,91%,1);
--tweak-form-block-field-fill-color-on-background-hsl: 214,16%,91%;
--tweak-newsletter-block-button-text-color-on-background: hsla(210,17%,91%,1);
--gradientHeaderBorderColor: hsla(210,17%,91%,1);
--list-section-carousel-title-color: hsla(214,16%,91%,1);
--tweak-blog-single-column-list-read-more-color: hsla(210,17%,91%,1);
--tweak-accordion-block-icon-color: hsla(214,16%,91%,1);
--accent-hsl: 222,40%,19%;
--image-block-stack-image-button-text-color: hsla(222,40%,19%,1);
--gradientHeaderBackgroundColor: hsla(221,41%,19%,1);
--shape-block-dropshadow-color: hsla(210,17%,91%,1);
--secondary-button-font-line-height: 1.2em;
--headingLinkColor: hsla(214,16%,91%,1);
--list-section-carousel-card-description-color: hsla(222,40%,19%,1);
--product-basic-item-restock-notification-color: hsla(210,17%,91%,1);
--list-section-carousel-button-background-color: hsla(210,17%,91%,1);
--tweak-blog-basic-grid-list-title-color: hsla(210,17%,91%,1);
--tweak-product-grid-text-below-list-title-color: hsla(210,17%,91%,1);
--tweak-product-quick-view-lightbox-overlay-color: hsla(221,41%,19%,1);
--tweak-menu-block-nav-color: hsla(210,17%,91%,1);
--tweak-form-block-field-accent-color-on-background: hsla(220,21%,60%,1);
--tweak-paragraph-medium-color-on-background: hsla(222,40%,19%,1);
--image-block-overlap-image-subtitle-color: hsla(210,17%,91%,1);
--tweak-accordion-block-icon-color-on-background: hsla(222,40%,19%,1);
--tweak-menu-block-item-description-color: hsla(210,17%,91%,1);
--tweak-summary-block-title-color: hsla(210,17%,91%,1);
--image-block-stack-image-subtitle-color: hsla(210,17%,91%,1);
--secondaryButtonTextColor: hsla(210,17%,91%,1);
--navigationLinkColor: hsla(214,16%,91%,1);
--announcement-bar-background-color: hsla(210,17%,91%,1);
--tweak-form-block-field-input-color-on-background-a: 1;
--tertiaryButtonBackgroundColor: hsla(222,40%,19%,1);
--list-section-simple-card-color: hsla(210,17%,91%,1);
--tweak-marquee-block-paragraph-color-on-background: hsla(222,40%,19%,1);
--scheduling-block-scheduler-background-color: hsla(222,40%,19%,1);
--tertiary-button-rounded-border-top-right-radius: 6.4px;
--list-section-banner-slideshow-description-color: hsla(210,17%,91%,1);
--video-grid-category-nav-color: hsla(221,41%,19%,1);
--primary-button-stroke: 1px;
--product-detail-subscriptions-description-text-color: hsla(210,17%,91%,1);
--tweak-accordion-block-divider-color-on-background: hsla(222,40%,19%,1);
--list-section-simple-card-description-link-color: hsla(222,40%,19%,1);
--tweak-product-grid-text-below-list-category-nav-color: hsla(210,17%,91%,1);
--image-block-poster-inline-link-color: hsla(221,41%,19%,1);
--product-detail-subscriptions-button-background-color: hsla(210,17%,91%,1);
--shape-block-background-color: hsla(210,17%,91%,1);
--course-item-nav-active-lesson-background-color: hsla(220,21%,60%,1);
--scheduling-block-header-text-color: hsla(210,17%,91%,1);
--tweak-quote-block-text-color: hsla(210,17%,91%,1);
--tweak-form-block-field-accent-color-a: 1;
--tweak-form-block-title-color: hsla(210,17%,91%,1);
--image-block-poster-image-button-text-color: hsla(210,17%,91%,1);
--list-section-banner-slideshow-arrow-background-color: hsla(210,17%,91%,1);
--product-list-filter-dropdown-label-color: hsla(210,17%,91%,1);
--primary-button-font-font-family: "salmanazar-lk7x9s";
--tweak-quote-block-text-color-on-background: hsla(222,40%,19%,1);
--tweak-gallery-icon-background-color: hsla(222,40%,19%,1);
--course-list-grid-layout-chapter-divider-color: hsla(210,17%,91%,1);
--list-section-carousel-card-description-link-color: hsla(222,40%,19%,1);
--tweak-heading-extra-large-color-on-background: hsla(222,40%,19%,1);
--tweak-marquee-block-stroke-color: hsla(214,16%,91%,1);
--social-links-block-main-icon-color: hsla(210,17%,91%,1);
--primary-button-rounded-border-top-left-radius: 6.4px;
--gradientHeaderDropShadowColor: hsla(210,17%,91%,1);
--tweak-form-block-field-fill-color-on-background: hsla(214,16%,91%,1);
--image-block-collage-image-title-bg-color: hsla(222,40%,19%,0);
--product-detail-one-time-purchase-price-text-color: hsla(210,17%,91%,1);
--image-block-card-image-subtitle-color: hsla(210,17%,91%,1);
--section-divider-stroke-color: hsla(222,40%,19%,1);
--scheduling-block-background-color: hsla(222,40%,19%,1);
--secondary-button-rounded-border-top-left-radius: 6.4px;
--product-list-filters-drawer-text-color: hsla(221,41%,19%,1);
--tweak-menu-block-item-title-color: hsla(210,17%,91%,1);
--tweak-heading-large-color-on-background: hsla(222,40%,19%,1);
--tweak-marquee-block-background-color: hsla(210,17%,91%,1);
--list-section-carousel-button-text-color: hsla(222,40%,19%,1);
--tweak-blog-side-by-side-list-title-color: hsla(210,17%,91%,1);
--form-field-checkbox-shape-border-bottom-right-radius: 5px;
--product-block-stroke-color: hsla(214,16%,91%,1);
--tweak-form-block-button-text-color-on-background: hsla(210,17%,91%,1);
--paragraphSmallColor: hsla(214,16%,91%,1);
--tweak-product-grid-text-below-list-scarcity-color: hsla(210,17%,91%,1);
--image-block-stack-image-title-bg-color: hsla(222,40%,19%,0);
--secondary-button-stroke: 1px;
--solidHeaderBorderColor: hsla(210,17%,91%,1);
--tweak-form-block-option-color-on-background: hsla(222,40%,19%,1);
--product-basic-item-discount-chip-background-color: hsla(210,17%,91%,1);
--image-block-poster-image-subtitle-color: hsla(221,41%,19%,1);
--form-field-radio-border-thickness: 2px;
--portfolio-grid-overlay-overlay-color: hsla(222,40%,19%,1);
--image-block-card-image-button-bg-color: hsla(210,17%,91%,1);
--tweak-blog-alternating-side-by-side-list-title-color: hsla(210,17%,91%,1);
--section-inset-border-color: hsla(222,40%,19%,1);
--tweak-blog-item-comment-meta-color: hsla(210,17%,91%,1);
--tweak-gallery-lightbox-icon-color: hsla(210,17%,91%,1);
--tweak-form-block-description-color-on-background: hsla(222,40%,19%,1);
--form-field-shape-border-top-left-radius: 5px;
--tweak-form-block-field-border-color-on-background: hsla(222,40%,19%,1);
--tweak-video-item-title-color: hsla(221,41%,19%,1);
--text-highlight-color: hsla(214,16%,91%,1);
--tweak-form-block-field-fill-color-hsl: 222,40%,19%;
--tweak-accordion-block-divider-color: hsla(214,16%,91%,1);
--list-section-banner-slideshow-card-description-link-color: hsla(222,40%,19%,1);
--secondary-button-font-font-size: 1.2rem;
--tweak-quote-block-source-color-on-background: hsla(222,40%,19%,1);
--announcement-bar-text-color: hsla(222,40%,19%,1);
--image-block-collage-image-overlay-color: hsla(214,16%,91%,1);
--primary-button-font-font-size-value: 1.2;
--tweak-marquee-block-heading-color: hsla(210,17%,91%,1);
--list-section-simple-button-background-color: hsla(210,17%,91%,1);
--image-block-overlap-image-button-bg-color: hsla(210,17%,91%,1);
--primary-button-rounded-border-bottom-right-radius: 6.4px;
--tweak-form-block-button-background-color: hsla(210,17%,91%,1);
--product-block-background-color: hsla(210,17%,91%,1);
--secondary-button-font-letter-spacing: -.03em;
--tweak-blog-basic-grid-list-read-more-color: hsla(210,17%,91%,1);
--image-block-card-image-card-separation: 10%;
--tweak-video-item-pagination-icon-color: hsla(221,41%,19%,1);
--image-block-card-image-overlay-color: hsla(214,16%,91%,1);
--donation-block-stroke-color: hsla(210,17%,91%,1);
--tweak-blog-masonry-list-excerpt-color: hsla(210,17%,91%,1);
--list-section-banner-slideshow-button-background-color: hsla(210,17%,91%,1);
--donation-block-background-color: hsla(210,17%,91%,1);
--course-list-grid-layout-course-item-border-color: hsla(214,16%,91%,1);
--tweak-events-item-pagination-title-color: hsla(210,17%,91%,1);
--tweak-quote-block-source-color: hsla(210,17%,91%,1);
--form-field-survey-border-thickness: 2px;
--tweak-product-grid-text-below-list-pagination-color: hsla(210,17%,91%,1);
--secondary-button-rounded-border-top-right-radius: 6.4px;
--form-field-checkbox-border-thickness: 2px;
--tweak-quote-block-stroke-color: hsla(214,16%,91%,1);
--tweak-blog-side-by-side-list-meta-color: hsla(210,17%,91%,1);
--tweak-product-basic-item-scarcity-color: hsla(221,41%,19%,1);
--tweak-blog-side-by-side-list-excerpt-color: hsla(210,17%,91%,1);
--product-detail-subscription-price-text-color: hsla(210,17%,91%,1);
--primary-button-font-text-transform: none;
--list-section-banner-slideshow-arrow-color: hsla(222,40%,19%,1);
--image-block-stack-image-overlay-color: hsla(214,16%,91%,1);
--form-field-border-thickness: 2px;
--tweak-gallery-icon-color: hsla(210,17%,91%,1);
--tweak-form-block-field-fill-color-on-background-a: 1;
--tweak-product-quick-view-lightbox-controls-color: hsla(210,17%,91%,1);
--form-field-radio-shape-border-top-right-radius: 5px;
--tweak-summary-block-title-color-on-background: hsla(222,40%,19%,1);
--menuOverlayNavigationLinkColor: hsla(221,41%,19%,1);
--image-block-card-image-button-separation: 6%;
--tweak-form-block-field-border-color-on-background-hsl: 222,40%,19%;
--tweak-summary-block-header-text-color-on-background: hsla(222,40%,19%,1);
--tweak-blog-alternating-side-by-side-list-read-more-color: hsla(210,17%,91%,1);
--course-list-course-chapter-divider-color: hsla(214,16%,91%,1);
--tweak-form-block-survey-title-color-on-background: hsla(222,40%,19%,1);
--tweak-blog-item-comment-text-color: hsla(210,17%,91%,1);
--tweak-paragraph-link-color-on-background: hsla(222,40%,19%,1);
--image-block-card-image-title-color: hsla(210,17%,91%,1);
--tweak-summary-block-stroke-color: hsla(214,16%,91%,1);
--tweak-form-block-field-border-color-hsl: 210,17%,91%;
--form-field-checkbox-shape-border-top-left-radius: 5px;
--toggle-off-color: hsla(220,21%,60%,1);
--tweak-product-list-description-text-color: hsla(210,17%,91%,1);
--image-block-poster-image-title-color: hsla(221,41%,19%,1);
--image-block-overlap-inline-link-color: hsla(210,17%,91%,1);
--image-block-collage-background-color: hsla(210,17%,91%,1);
--tweak-paragraph-large-color-on-background: hsla(222,40%,19%,1);
--tweak-newsletter-block-title-color: hsla(210,17%,91%,1);
--tweak-form-block-option-color: hsla(210,17%,91%,1);
--tweak-form-block-field-input-color-hsl: 210,17%,91%;
--tweak-form-block-field-accent-color-on-background-hsl: 220,21%,60%;
--scheduling-block-scheduler-text-color: hsla(210,17%,91%,1);
--form-field-radio-shape-border-bottom-right-radius: 5px;
--list-section-simple-card-button-text-color: hsla(210,17%,91%,1);
--portfolio-grid-overlay-title-color: hsla(210,17%,91%,1);
--tweak-blog-item-pagination-icon-color: hsla(210,17%,91%,1);
--image-block-collage-image-title-color: hsla(222,40%,19%,1);
--list-section-banner-slideshow-title-color: hsla(210,17%,91%,1);
--portfolio-index-background-title-color: hsla(210,17%,91%,1);
--headingLargeColor: hsla(214,16%,91%,1);
--tweak-form-block-button-text-color: hsla(222,40%,19%,1);
--tweak-summary-block-excerpt-color: hsla(210,17%,91%,1);
```

### Spacing

```css
--course-item-lesson-name-font-letter-spacing: 0em;
--portfolio-grid-overlay-title-font-font-size-value: 2.618;
--menu-block-item-description-font-letter-spacing: -.02em;
--portfolio-item-pagination-font-font-size-value: 2.618;
--portfolio-item-pagination-font-font-size: 2.618rem;
--portfolio-index-background-title-font-letter-spacing: 0em;
--menu-block-item-title-font-font-size: 1.6rem;
--product-basic-item-restock-notification-full-layout-font-font-size-value: 1.4;
--form-label-spacing-bottom: 4px;
--site-title-font-letter-spacing: 0em;
--video-item-meta-font-font-size-value: 1;
--course-item-name-mobile-font-font-size-value: 1.3;
--mobile-site-title-font-letter-spacing: 0em;
--form-field-checkbox-column-gap: 20px;
--list-section-title-text-font-font-size-value: 3.5;
--video-basic-grid-list-excerpt-font-font-size-value: 1.2;
--blog-side-by-side-list-excerpt-font-font-size: 1.4rem;
--product-basic-item-restock-notification-wrap-layout-font-font-size-value: 1.4;
--blog-basic-grid-list-excerpt-font-font-size: 1.2rem;
--product-block-price-font-font-size: 1.1rem;
--commerce-mini-cart-image-size: 60px;
--product-grid-text-below-price-font-font-size-value: 1;
--product-basic-item-scarcity-full-layout-font-letter-spacing: .01em;
--blog-single-column-list-excerpt-font-letter-spacing: -.02em;
--video-basic-grid-list-category-nav-font-letter-spacing: -.02em;
--blog-side-by-side-list-title-font-font-size-value: 3.5;
--course-list-course-item-lesson-excerpt-font-font-size: .875rem;
--form-block-caption-text-font-letter-spacing: -.02em;
--product-list-description-font-letter-spacing: -.02em;
--form-field-spacing-bottom: 20px;
--video-item-title-font-letter-spacing: 0em;
--blog-grid-masonry-list-title-font-font-size: 2.618rem;
--product-basic-item-add-ons-title-full-layout-font-font-size-value: 1.4;
--blog-alternating-side-by-side-list-title-font-letter-spacing: 0em;
--product-grid-text-below-scarcity-font-letter-spacing: .01em;
--events-item-pagination-font-font-size: 2.618rem;
--product-block-description-font-font-size-value: 1.4;
--product-basic-item-add-ons-title-half-layout-font-font-size-value: 1.4;
--newsletter-block-footnote-text-font-font-size-value: 1.2;
--events-item-pagination-date-font-font-size-value: 1;
--image-block-collage-image-content-padding: 10%;
--product-basic-item-description-half-layout-font-font-size: 1.4rem;
--product-basic-item-variant-fields-wrap-layout-font-letter-spacing: -.02em;
--blog-grid-masonry-list-excerpt-font-font-size: 1.2rem;
--blog-side-by-side-list-meta-font-letter-spacing: .01em;
--newsletter-block-title-text-font-font-size: 1.4rem;
--content-link-block-title-font-font-size: 1.4rem;
--product-grid-text-below-price-font-font-size: 1rem;
--product-basic-item-description-font-letter-spacing: -.02em;
--form-field-radio-size: 20px;
--newsletter-block-description-text-font-font-size-value: 1.4;
--product-list-clear-filters-button-text-font-font-size-value: 1.4;
--portfolio-grid-basic-title-font-font-size-value: 1.6;
--product-list-clear-filters-button-text-font-font-size: 1.4rem;
--portfolio-hover-follow-title-font-letter-spacing: 0em;
--course-item-side-nav-chapter-meta-font-font-size-value: .8;
--course-item-side-nav-lesson-meta-font-letter-spacing: .01em;
--header-button-font-font-size: 1.2rem;
--announcement-bar-font-letter-spacing: -.02em;
--menu-block-title-font-letter-spacing: 0em;
--product-grid-text-below-scarcity-font-font-size: 1rem;
--product-basic-item-price-full-layout-font-font-size-value: 1.4;
--blog-single-column-list-meta-font-letter-spacing: .01em;
--product-block-description-font-letter-spacing: -.02em;
--portfolio-index-background-title-font-font-size-value: 6;
--course-list-course-item-lesson-excerpt-font-font-size-value: .875;
--course-item-side-nav-lesson-meta-font-font-size: .8rem;
--course-list-grid-layout-chapter-name-font-font-size-value: 2;
--newsletter-block-button-text-font-font-size-value: 1.4;
--newsletter-block-field-text-font-letter-spacing: -.02em;
--course-list-chapter-item-chapter-name-font-font-size-value: 2;
--product-basic-item-variant-fields-wrap-layout-font-font-size: .75rem;
--course-list-grid-layout-course-item-meta-font-font-size: .75rem;
--course-item-name-mobile-font-letter-spacing: 0em;
--product-basic-item-title-font-font-size: 3.5rem;
--product-basic-item-title-half-layout-font-letter-spacing: 0em;
--product-basic-item-title-full-layout-font-letter-spacing: 0em;
--course-item-side-nav-chapter-meta-font-font-size: .8rem;
--normal-text-size-value: 1.4;
--header-button-font-letter-spacing: -.03em;
--product-basic-item-price-half-layout-font-font-size: 1.4rem;
--cookie-banner-disclaimer-font-font-size-value: .8;
--site-navigation-font-font-size: 1.4rem;
--blog-item-pagination-font-font-size-value: 2.618;
--product-basic-item-add-ons-title-full-layout-font-font-size: 1.4rem;
--course-list-chapter-item-chapter-meta-font-font-size-value: .75;
--blog-item-pagination-font-font-size: 2.618rem;
--tertiary-button-padding-x: .8em;
--course-item-side-nav-lesson-name-font-font-size-value: 1;
--form-block-description-text-font-font-size-value: 1.2;
--blog-side-by-side-list-title-font-font-size: 3.5rem;
--quote-block-source-font-font-size-value: 1.2;
--form-field-radio-row-gap: 12px;
--form-field-radio-column-gap: 20px;
--product-basic-item-restock-notification-wrap-layout-font-letter-spacing: -.02em;
--blog-item-title-font-font-size: 3.5rem;
--form-block-option-text-font-font-size: 1.2rem;
--product-block-description-font-font-size: 1.4rem;
--product-grid-text-below-status-font-font-size: 1rem;
--product-basic-item-title-font-letter-spacing: 0em;
--course-list-grid-layout-course-item-excerpt-font-font-size-value: .875;
--video-preview-badge-font-letter-spacing: -.02em;
--blog-side-by-side-list-meta-font-font-size-value: 1;
--form-block-option-text-font-font-size-value: 1.2;
--course-list-course-description-font-font-size: 1.7rem;
--video-preview-badge-font-font-size-value: 1.4;
--form-block-select-dropdown-text-font-font-size-value: 1.4;
--site-navigation-font-font-size-value: 1.4;
--course-list-grid-layout-course-item-name-font-letter-spacing: 0em;
--normal-meta-size-value: 1;
--menu-block-nav-font-letter-spacing: .01em;
--course-list-course-item-lesson-name-font-font-size-value: 1.125;
--product-basic-item-restock-notification-half-layout-font-font-size-value: 1.4;
--product-basic-item-description-wrap-layout-font-font-size-value: 1.4;
--course-list-grid-layout-course-item-name-font-font-size: 1.125rem;
--newsletter-block-button-text-font-letter-spacing: -.02em;
--portfolio-item-pagination-font-letter-spacing: 0em;
--blog-basic-grid-list-title-font-font-size: 2.618rem;
--form-block-survey-title-text-font-letter-spacing: -.02em;
--course-list-chapter-item-chapter-name-font-letter-spacing: 0em;
--product-basic-item-price-font-font-size-value: 1.6;
--course-list-course-name-font-letter-spacing: 0em;
--menu-block-item-title-font-font-size-value: 1.6;
--site-title-font-font-size: 1.6rem;
--heading-1-size-value: 6;
--tertiary-button-font-font-size-value: 1.2;
--product-basic-item-description-full-layout-font-font-size-value: 1.4;
--form-block-survey-title-text-font-font-size: 1.4rem;
--blog-single-column-list-title-font-font-size: 6rem;
--product-basic-item-add-ons-title-font-font-size: 1.4rem;
--product-basic-item-variant-fields-full-layout-font-font-size: .75rem;
--events-item-pagination-date-font-letter-spacing: .01em;
--product-basic-item-description-wrap-layout-font-font-size: 1.4rem;
--form-block-caption-text-font-font-size-value: 1.2;
--product-basic-item-add-ons-title-half-layout-font-letter-spacing: -.02em;
--blog-item-meta-font-font-size: 1rem;
--course-list-chapter-item-chapter-meta-font-font-size: .75rem;
--product-basic-item-title-full-layout-font-font-size-value: 6;
--events-item-pagination-font-font-size-value: 2.618;
--heading-4-size: 1.6rem;
--heading-font-letter-spacing: 0em;
--product-basic-item-price-full-layout-font-font-size: 1.4rem;
--newsletter-block-description-text-font-font-size: 1.4rem;
--blog-item-author-profile-font-letter-spacing: -.02em;
--product-basic-item-variant-fields-font-letter-spacing: .01em;
--blog-grid-masonry-list-excerpt-font-font-size-value: 1.2;
--product-grid-text-below-title-font-font-size: 1.6rem;
--blog-grid-masonry-list-title-font-letter-spacing: 0em;
--list-section-title-text-font-font-size: 3.5rem;
--list-section-title-text-font-letter-spacing: 0em;
--product-basic-item-scarcity-wrap-layout-font-font-size-value: .85;
--product-block-title-font-font-size: 1.3rem;
--product-basic-item-variant-fields-font-font-size-value: 1;
--blog-item-meta-font-letter-spacing: .01em;
--course-list-course-name-font-font-size: 6rem;
--video-item-title-font-font-size: 3.5rem;
--newsletter-block-footnote-text-font-letter-spacing: -.02em;
--course-list-grid-layout-chapter-meta-font-font-size-value: .875;
--product-basic-item-variant-fields-half-layout-font-font-size: .75rem;
--form-field-checkbox-row-gap: 12px;
--product-basic-item-title-wrap-layout-font-font-size: 6rem;
--video-basic-grid-list-category-nav-font-font-size: 1.4rem;
--product-basic-item-price-wrap-layout-font-font-size-value: 1.4;
--blog-side-by-side-list-excerpt-font-letter-spacing: -.02em;
--product-list-clear-filters-button-text-font-letter-spacing: -.02em;
--course-list-course-item-lesson-name-font-letter-spacing: -.02em;
--product-basic-item-add-ons-title-font-font-size-value: 1.4;
--body-font-letter-spacing: -.02em;
--blog-grid-masonry-list-meta-font-letter-spacing: .01em;
--menu-block-title-font-font-size-value: 2.618;
--form-block-description-text-font-font-size: 1.2rem;
--course-item-chapter-name-font-letter-spacing: -.02em;
--blog-basic-grid-list-excerpt-font-letter-spacing: -.02em;
--blog-single-column-list-title-font-letter-spacing: 0em;
--product-basic-item-description-font-font-size-value: 1.4;
--form-block-survey-title-text-font-font-size-value: 1.4;
--form-block-placeholder-text-font-font-size-value: 1.4;
--product-basic-item-price-wrap-layout-font-font-size: 1.4rem;
--product-basic-item-add-ons-title-wrap-layout-font-letter-spacing: -.02em;
--blog-side-by-side-list-excerpt-font-font-size-value: 1.4;
--cookie-banner-disclaimer-font-font-size: .8rem;
--small-text-size: 1.2rem;
--video-item-title-font-font-size-value: 3.5;
--small-text-size-value: 1.2;
--content-link-block-title-font-letter-spacing: -.02em;
--product-basic-item-description-half-layout-font-letter-spacing: -.02em;
--course-list-grid-layout-chapter-meta-font-letter-spacing: .01em;
--course-item-chapter-name-font-font-size: 1rem;
--large-text-size-value: 1.7;
--blog-side-by-side-list-title-font-letter-spacing: 0em;
--form-block-placeholder-text-font-font-size: 1.4rem;
--course-list-course-description-font-font-size-value: 1.7;
--blog-single-column-list-excerpt-font-font-size: 1.4rem;
--product-grid-text-below-price-font-letter-spacing: .01em;
--product-list-description-font-font-size: 1.4rem;
--product-grid-text-below-status-font-letter-spacing: .01em;
--blog-alternating-side-by-side-list-meta-font-letter-spacing: .01em;
--form-field-padding-horizontal: 15px;
--product-basic-item-restock-notification-half-layout-font-letter-spacing: -.02em;
--portfolio-grid-overlay-title-font-letter-spacing: 0em;
--form-field-padding-vertical: 8px;
--heading-4-size-value: 1.6;
--header-button-font-font-size-value: 1.2;
--blog-single-column-list-title-font-font-size-value: 6;
--product-basic-item-title-half-layout-font-font-size-value: 6;
--video-item-meta-font-font-size: 1rem;
--newsletter-block-footnote-text-font-font-size: 1.2rem;
--product-grid-text-below-title-font-font-size-value: 1.6;
--blog-side-by-side-list-meta-font-font-size: 1rem;
--menu-block-title-font-font-size: 2.618rem;
--product-grid-text-below-scarcity-font-font-size-value: 1;
--menu-block-item-price-font-letter-spacing: -.02em;
--product-basic-item-description-full-layout-font-letter-spacing: -.02em;
--menu-block-item-description-font-font-size: 1.4rem;
--product-basic-item-scarcity-full-layout-font-font-size-value: .85;
--course-item-name-font-letter-spacing: 0em;
--video-basic-grid-list-excerpt-font-letter-spacing: -.02em;
--newsletter-block-description-text-font-letter-spacing: 0em;
--announcement-bar-font-font-size: 1.2rem;
--video-item-description-font-letter-spacing: -.02em;
--video-basic-grid-list-title-font-font-size-value: 1.6;
--product-block-price-font-font-size-value: 1.1;
--events-item-pagination-font-letter-spacing: 0em;
--normal-meta-size: 1rem;
--menu-block-nav-font-font-size-value: 1.4;
--mobile-site-title-font-font-size: 1.4rem;
--course-list-grid-layout-chapter-name-font-letter-spacing: 0em;
--course-item-side-nav-chapter-meta-font-letter-spacing: .01em;
--product-basic-item-scarcity-half-layout-font-font-size: .85rem;
--heading-3-size: 2.618rem;
--product-list-description-font-font-size-value: 1.4;
--newsletter-block-title-text-font-font-size-value: 1.4;
--course-list-grid-layout-course-item-name-font-font-size-value: 1.125;
--announcement-bar-font-font-size-value: 1.2;
--product-block-price-font-letter-spacing: -.02em;
--video-item-description-font-font-size-value: 1.4;
--blog-grid-masonry-list-excerpt-font-letter-spacing: -.02em;
--course-item-side-nav-chapter-name-font-font-size: 1.5rem;
--product-basic-item-title-wrap-layout-font-letter-spacing: 0em;
--video-item-pagination-font-font-size-value: 2.618;
--blog-alternating-side-by-side-list-title-font-font-size: 3.5rem;
--portfolio-index-background-title-font-font-size: 6rem;
--video-basic-grid-list-title-font-letter-spacing: 0em;
--portfolio-hover-static-title-font-font-size-value: 6;
--form-block-input-text-font-font-size: 1.4rem;
--course-list-course-item-lesson-meta-font-font-size: .75rem;
--product-basic-item-variant-fields-full-layout-font-letter-spacing: -.02em;
--product-basic-item-scarcity-wrap-layout-font-letter-spacing: .01em;
--course-list-grid-layout-chapter-name-font-font-size: 2rem;
--product-basic-item-price-font-letter-spacing: 0em;
--large-text-size: 1.7rem;
--product-basic-item-add-ons-title-wrap-layout-font-font-size: 1.4rem;
--blog-item-title-font-font-size-value: 3.5;
--course-list-course-item-lesson-excerpt-font-letter-spacing: -.02em;
--product-block-title-font-font-size-value: 1.3;
--blog-grid-masonry-list-meta-font-font-size-value: 1;
--product-basic-item-restock-notification-font-font-size-value: 1.4;
--blog-item-author-profile-font-font-size-value: 1.2;
--course-item-side-nav-lesson-name-font-font-size: 1rem;
--product-basic-item-title-full-layout-font-font-size: 6rem;
--form-block-description-text-font-letter-spacing: -.02em;
--product-basic-item-title-wrap-layout-font-font-size-value: 6;
--product-basic-item-description-half-layout-font-font-size-value: 1.4;
--product-basic-item-add-ons-title-wrap-layout-font-font-size-value: 1.4;
--product-basic-item-add-ons-title-half-layout-font-font-size: 1.4rem;
--blog-alternating-side-by-side-list-meta-font-font-size: 1rem;
--blog-basic-grid-list-title-font-font-size-value: 2.618;
--blog-basic-grid-list-excerpt-font-font-size-value: 1.2;
--pagePadding: 1.5vw;
--form-field-radio-space-between-icon-and-text: 11px;
--heading-2-size: 3.5rem;
--blog-alternating-side-by-side-list-title-font-font-size-value: 3.5;
--portfolio-hover-static-title-font-font-size: 6rem;
--product-basic-item-price-half-layout-font-font-size-value: 1.4;
--product-basic-item-price-wrap-layout-font-letter-spacing: -.02em;
--product-basic-item-restock-notification-full-layout-font-font-size: 1.4rem;
--product-basic-item-restock-notification-wrap-layout-font-font-size: 1.4rem;
--blog-basic-grid-list-meta-font-font-size: 1rem;
--course-item-name-mobile-font-font-size: 1.3rem;
--course-list-grid-layout-course-item-meta-font-letter-spacing: .01em;
--blog-basic-grid-list-title-font-letter-spacing: 0em;
--blog-item-title-font-letter-spacing: 0em;
--product-basic-item-restock-notification-font-font-size: 1.4rem;
--form-field-checkbox-padding-horizontal: 15px;
--video-item-pagination-font-letter-spacing: 0em;
--blog-alternating-side-by-side-list-excerpt-font-letter-spacing: -.02em;
--course-item-lesson-name-font-font-size: 4rem;
--form-block-input-text-font-font-size-value: 1.4;
--quote-block-source-font-letter-spacing: -.02em;
--form-block-placeholder-text-font-letter-spacing: -.02em;
--product-basic-item-description-full-layout-font-font-size: 1.4rem;
--course-list-course-name-font-font-size-value: 6;
--form-field-column-gap: 10px;
--course-item-chapter-name-font-font-size-value: 1;
--video-basic-grid-list-title-font-font-size: 1.6rem;
--course-item-name-font-font-size: 2rem;
--product-basic-item-scarcity-wrap-layout-font-font-size: .85rem;
--product-basic-item-variant-fields-wrap-layout-font-font-size-value: .75;
--menu-block-item-price-font-font-size-value: 1.4;
--menu-block-nav-font-font-size: 1.4rem;
--video-basic-grid-list-meta-font-letter-spacing: .01em;
--meta-font-letter-spacing: .01em;
--normal-text-size: 1.4rem;
--form-field-checkbox-space-between-icon-and-text: 11px;
--blog-alternating-side-by-side-list-excerpt-font-font-size-value: 1.4;
--form-field-survey-size: 20px;
--course-list-grid-layout-chapter-meta-font-font-size: .875rem;
--product-basic-item-add-ons-title-font-letter-spacing: -.02em;
--video-item-description-font-font-size: 1.4rem;
--video-basic-grid-list-meta-font-font-size: 1rem;
--product-basic-item-price-full-layout-font-letter-spacing: -.02em;
--portfolio-hover-follow-title-font-font-size: 6rem;
--portfolio-grid-basic-title-font-font-size: 1.6rem;
--course-item-side-nav-chapter-name-font-font-size-value: 1.5;
--base-font-size: 16px;
--product-basic-item-restock-notification-font-letter-spacing: -.02em;
--product-basic-item-variant-fields-full-layout-font-font-size-value: .75;
--blog-alternating-side-by-side-list-excerpt-font-font-size: 1.4rem;
--tertiary-button-padding-y: .2em;
--course-list-grid-layout-course-item-meta-font-font-size-value: .75;
--quote-block-text-font-font-size-value: 1.7;
--video-item-pagination-font-font-size: 2.618rem;
--course-item-lesson-name-font-font-size-value: 4;
--course-list-course-description-font-letter-spacing: -.02em;
--course-list-grid-layout-course-item-excerpt-font-font-size: .875rem;
--newsletter-block-field-text-font-font-size: 1.4rem;
--site-title-font-font-size-value: 1.6;
--course-item-name-font-font-size-value: 2;
--portfolio-grid-overlay-title-font-font-size: 2.618rem;
--newsletter-block-title-text-font-letter-spacing: 0em;
--newsletter-block-field-text-font-font-size-value: 1.4;
--product-basic-item-variant-fields-half-layout-font-letter-spacing: -.02em;
--course-list-grid-layout-course-item-excerpt-font-letter-spacing: -.02em;
--product-basic-item-variant-fields-half-layout-font-font-size-value: .75;
--course-list-course-item-lesson-meta-font-letter-spacing: .01em;
--video-basic-grid-list-excerpt-font-font-size: 1.2rem;
--product-basic-item-variant-fields-font-font-size: 1rem;
--product-basic-item-restock-notification-half-layout-font-font-size: 1.4rem;
--form-field-radio-padding-horizontal: 15px;
--blog-basic-grid-list-meta-font-letter-spacing: .01em;
--form-block-select-dropdown-text-font-letter-spacing: -.02em;
--form-caption-spacing-bottom: 2px;
--product-basic-item-restock-notification-full-layout-font-letter-spacing: -.02em;
--menu-block-item-title-font-letter-spacing: 0em;
--blog-basic-grid-list-meta-font-font-size-value: 1;
--course-item-side-nav-chapter-name-font-letter-spacing: 0em;
--mobile-site-title-font-font-size-value: 1.4;
--blog-single-column-list-excerpt-font-font-size-value: 1.4;
--form-description-spacing-bottom: 4px;
--product-basic-item-title-font-font-size-value: 3.5;
--quote-block-text-font-font-size: 1.7rem;
--form-block-title-text-font-letter-spacing: -.02em;
--form-block-title-text-font-font-size-value: 1.4;
--course-list-chapter-item-chapter-meta-font-letter-spacing: .01em;
--product-grid-text-below-title-font-letter-spacing: 0em;
--form-block-input-text-font-letter-spacing: -.02em;
--heading-3-size-value: 2.618;
--blog-item-author-profile-font-font-size: 1.2rem;
--portfolio-hover-static-title-font-letter-spacing: 0em;
--menu-block-item-price-font-font-size: 1.4rem;
--product-basic-item-price-font-font-size: 1.6rem;
--product-basic-item-description-wrap-layout-font-letter-spacing: -.02em;
--product-basic-item-title-half-layout-font-font-size: 6rem;
--product-block-title-font-letter-spacing: -.02em;
--quote-block-source-font-font-size: 1.2rem;
--form-field-checkbox-padding-vertical: 5px;
--product-basic-item-price-half-layout-font-letter-spacing: -.02em;
--events-item-pagination-date-font-font-size: 1rem;
--quote-block-text-font-letter-spacing: -.02em;
--product-basic-item-scarcity-font-font-size-value: 1.4;
--commerce-mini-cart-image-placeholder-size: 22px;
--product-basic-item-scarcity-font-letter-spacing: .01em;
--blog-item-meta-font-font-size-value: 1;
--video-preview-badge-font-font-size: 1.4rem;
--tertiary-button-font-letter-spacing: -.03em;
--blog-grid-masonry-list-meta-font-font-size: 1rem;
--form-field-checkbox-size: 20px;
--product-basic-item-description-font-font-size: 1.4rem;
--form-field-radio-padding-vertical: 5px;
--form-block-caption-text-font-font-size: 1.2rem;
--form-block-option-text-font-letter-spacing: -.02em;
--course-list-chapter-item-chapter-name-font-font-size: 2rem;
--blog-alternating-side-by-side-list-meta-font-font-size-value: 1;
--heading-2-size-value: 3.5;
--course-item-side-nav-lesson-name-font-letter-spacing: -.02em;
--portfolio-grid-basic-title-font-letter-spacing: 0em;
--course-list-course-item-lesson-meta-font-font-size-value: .75;
--blog-single-column-list-meta-font-font-size: 1rem;
--content-link-block-title-font-font-size-value: 1.4;
--form-block-title-text-font-font-size: 1.4rem;
--blog-grid-masonry-list-title-font-font-size-value: 2.618;
--course-item-side-nav-lesson-meta-font-font-size-value: .8;
--product-basic-item-scarcity-font-font-size: 1.4rem;
--product-basic-item-scarcity-full-layout-font-font-size: .85rem;
--portfolio-hover-follow-title-font-font-size-value: 6;
--heading-1-size: 6rem;
--video-basic-grid-list-category-nav-font-font-size-value: 1.4;
--form-block-select-dropdown-text-font-font-size: 1.4rem;
--newsletter-block-button-text-font-font-size: 1.4rem;
--cookie-banner-disclaimer-font-letter-spacing: -.02em;
--product-basic-item-scarcity-half-layout-font-letter-spacing: .01em;
--site-navigation-font-letter-spacing: 0em;
--tertiary-button-font-font-size: 1.2rem;
--blog-single-column-list-meta-font-font-size-value: 1;
--product-basic-item-scarcity-half-layout-font-font-size-value: .85;
--video-item-meta-font-letter-spacing: .01em;
--blog-item-pagination-font-letter-spacing: 0em;
--product-grid-text-below-status-font-font-size-value: 1;
--course-list-course-item-lesson-name-font-font-size: 1.125rem;
--menu-block-item-description-font-font-size-value: 1.4;
--form-field-dropdown-icon-size: 18px;
--video-basic-grid-list-meta-font-font-size-value: 1;
--product-basic-item-add-ons-title-full-layout-font-letter-spacing: -.02em;
```

### Typography

```css
--tertiary-button-font-font-style: normal;
--product-basic-item-restock-notification-wrap-layout-font-font-style: normal;
--content-link-block-title-font-font-weight: 600;
--product-basic-item-title-half-layout-font-font-family: "salmanazar-lk7x9s";
--quote-block-text-font-font-family: "salmanazar-lk7x9s";
--quote-block-text-font-font-weight: 600;
--product-basic-item-add-ons-title-half-layout-font-font-weight: 600;
--product-basic-item-description-font-line-height: 1.5em;
--course-list-grid-layout-chapter-meta-font-font-style: normal;
--product-basic-item-restock-notification-wrap-layout-font-text-transform: none;
--course-list-course-description-font-line-height: 1.5em;
--product-basic-item-scarcity-font-line-height: 1em;
--video-basic-grid-list-category-nav-font-font-family: "salmanazar-lk7x9s";
--product-list-clear-filters-button-text-font-text-transform: none;
--form-block-placeholder-text-font-line-height: 1.5em;
--product-list-description-font-text-transform: none;
--blog-grid-masonry-list-title-font-text-transform: none;
--blog-item-author-profile-font-line-height: 1.5em;
--product-basic-item-variant-fields-wrap-layout-font-font-family: "salmanazar-lk7x9s";
--product-basic-item-add-ons-title-wrap-layout-font-font-weight: 600;
--video-basic-grid-list-title-font-font-weight: 600;
--blog-item-author-profile-font-font-family: "salmanazar-lk7x9s";
--product-list-clear-filters-button-text-font-font-family: "salmanazar-lk7x9s";
--mobile-site-title-font-text-transform: none;
--course-item-side-nav-lesson-meta-font-line-height: 1em;
--blog-side-by-side-list-excerpt-font-font-family: "salmanazar-lk7x9s";
--portfolio-item-pagination-font-font-style: normal;
--product-list-clear-filters-button-text-font-line-height: 1.5em;
--newsletter-block-button-text-font-line-height: 1.5em;
--blog-basic-grid-list-meta-font-font-style: normal;
--product-basic-item-variant-fields-font-line-height: 1em;
--newsletter-block-description-text-font-font-family: "ibm-plex-mono";
--menu-block-title-font-font-style: normal;
--heading-font-font-weight: 600;
--course-list-course-item-lesson-meta-font-font-weight: 600;
--blog-alternating-side-by-side-list-title-font-font-family: "salmanazar-lk7x9s";
--product-basic-item-title-full-layout-font-font-weight: 600;
--events-item-pagination-font-text-transform: none;
--blog-basic-grid-list-excerpt-font-font-style: normal;
--form-block-survey-title-text-font-font-style: normal;
--product-basic-item-add-ons-title-half-layout-font-font-family: "salmanazar-lk7x9s";
--meta-font-text-transform: none;
--course-list-grid-layout-course-item-meta-font-font-weight: 600;
--course-list-course-item-lesson-meta-font-font-style: normal;
--menu-block-item-description-font-font-style: normal;
--blog-single-column-list-excerpt-font-font-style: normal;
--site-title-font-line-height: 1.8em;
--blog-side-by-side-list-meta-font-font-style: normal;
--product-basic-item-variant-fields-font-font-weight: 600;
--video-basic-grid-list-meta-font-text-transform: none;
--product-basic-item-scarcity-font-font-style: normal;
--course-list-course-name-font-font-family: "salmanazar-lk7x9s";
--product-basic-item-restock-notification-full-layout-font-font-weight: 600;
--course-list-grid-layout-chapter-name-font-font-style: normal;
--product-basic-item-variant-fields-font-font-style: normal;
--blog-basic-grid-list-meta-font-line-height: 1em;
--course-item-chapter-name-font-font-weight: 600;
--product-basic-item-description-wrap-layout-font-text-transform: none;
--portfolio-hover-follow-title-font-font-family: "salmanazar-lk7x9s";
--product-basic-item-scarcity-font-text-transform: none;
--tertiary-button-font-line-height: 1.2em;
--product-grid-text-below-price-font-line-height: 1em;
--video-item-description-font-font-style: normal;
--blog-single-column-list-meta-font-font-style: normal;
--portfolio-grid-overlay-title-font-text-transform: none;
--blog-basic-grid-list-meta-font-font-weight: 600;
--content-link-block-title-font-font-family: "salmanazar-lk7x9s";
--quote-block-source-font-font-style: normal;
--product-grid-text-below-status-font-font-weight: 600;
--product-grid-text-below-price-font-font-family: "salmanazar-lk7x9s";
--form-block-description-text-font-text-transform: none;
--course-item-side-nav-lesson-name-font-font-style: normal;
--newsletter-block-field-text-font-text-transform: none;
--product-basic-item-restock-notification-half-layout-font-line-height: 1.5em;
--menu-block-item-description-font-text-transform: none;
--video-preview-badge-font-font-style: normal;
--course-list-grid-layout-course-item-name-font-font-family: "salmanazar-lk7x9s";
--course-list-grid-layout-course-item-name-font-line-height: 1.2em;
--portfolio-hover-follow-title-font-text-transform: none;
--blog-single-column-list-excerpt-font-text-transform: none;
--form-block-select-dropdown-text-font-font-family: "salmanazar-lk7x9s";
--newsletter-block-button-text-font-font-weight: 600;
--product-basic-item-add-ons-title-font-line-height: 1.5em;
--course-list-chapter-item-chapter-meta-font-font-weight: 600;
--video-item-description-font-font-family: "salmanazar-lk7x9s";
--product-basic-item-scarcity-half-layout-font-font-family: "salmanazar-lk7x9s";
--blog-alternating-side-by-side-list-excerpt-font-font-family: "salmanazar-lk7x9s";
--product-basic-item-variant-fields-wrap-layout-font-line-height: 1.5em;
--site-title-font-font-style: normal;
--blog-side-by-side-list-meta-font-font-family: "salmanazar-lk7x9s";
--course-list-grid-layout-course-item-meta-font-line-height: 1em;
--form-block-select-dropdown-text-font-font-style: normal;
--cookie-banner-disclaimer-font-line-height: 1.5em;
--blog-grid-masonry-list-meta-font-font-family: "salmanazar-lk7x9s";
--form-block-description-text-font-font-style: normal;
--blog-alternating-side-by-side-list-meta-font-line-height: 1em;
--product-basic-item-add-ons-title-wrap-layout-font-font-family: "salmanazar-lk7x9s";
--product-basic-item-restock-notification-full-layout-font-text-transform: none;
--course-list-course-description-font-font-family: "salmanazar-lk7x9s";
--blog-alternating-side-by-side-list-excerpt-font-line-height: 1.5em;
--course-item-name-mobile-font-font-weight: 600;
--blog-item-meta-font-font-style: normal;
--video-basic-grid-list-title-font-line-height: 1.2em;
--form-block-option-text-font-line-height: 1.5em;
--product-basic-item-restock-notification-wrap-layout-font-font-family: "salmanazar-lk7x9s";
--announcement-bar-font-font-family: "salmanazar-lk7x9s";
--video-basic-grid-list-meta-font-line-height: 1em;
--menu-block-nav-font-font-weight: 600;
--product-basic-item-title-half-layout-font-font-weight: 600;
--product-basic-item-title-full-layout-font-line-height: 1.2em;
--product-basic-item-price-full-layout-font-font-family: "salmanazar-lk7x9s";
--events-item-pagination-font-font-weight: 600;
--video-basic-grid-list-meta-font-font-family: "salmanazar-lk7x9s";
--product-basic-item-add-ons-title-font-text-transform: none;
--course-list-course-item-lesson-excerpt-font-line-height: 1.5em;
--video-item-meta-font-font-weight: 600;
--events-item-pagination-date-font-font-family: "salmanazar-lk7x9s";
--form-block-title-text-font-text-transform: none;
--course-list-grid-layout-chapter-meta-font-line-height: 1em;
--blog-single-column-list-title-font-text-transform: none;
--newsletter-block-description-text-font-font-style: normal;
--form-block-option-text-font-font-weight: 600;
--menu-block-item-price-font-font-style: normal;
--blog-alternating-side-by-side-list-meta-font-font-family: "salmanazar-lk7x9s";
--blog-grid-masonry-list-excerpt-font-line-height: 1.5em;
--product-block-description-font-line-height: 1.5em;
--course-item-side-nav-chapter-meta-font-font-style: normal;
--product-basic-item-title-wrap-layout-font-text-transform: none;
--video-basic-grid-list-excerpt-font-font-weight: 600;
--blog-single-column-list-title-font-font-weight: 600;
--list-section-title-text-font-text-transform: none;
--product-list-description-font-font-family: "salmanazar-lk7x9s";
--product-grid-text-below-scarcity-font-font-style: normal;
--blog-side-by-side-list-excerpt-font-line-height: 1.5em;
--events-item-pagination-date-font-font-weight: 600;
--video-basic-grid-list-excerpt-font-font-style: normal;
--blog-basic-grid-list-title-font-font-weight: 600;
--meta-font-font-weight: 600;
--course-list-chapter-item-chapter-meta-font-font-style: normal;
--product-basic-item-title-full-layout-font-text-transform: none;
--form-block-placeholder-text-font-text-transform: none;
--blog-basic-grid-list-excerpt-font-text-transform: none;
--portfolio-index-background-title-font-text-transform: none;
--course-list-grid-layout-chapter-meta-font-text-transform: none;
--blog-item-title-font-font-style: normal;
--product-basic-item-title-full-layout-font-font-style: normal;
--portfolio-item-pagination-font-font-family: "salmanazar-lk7x9s";
--mobile-site-title-font-font-family: "salmanazar-lk7x9s";
--product-basic-item-title-half-layout-font-font-style: normal;
--header-button-font-text-transform: uppercase;
--product-basic-item-restock-notification-font-font-style: normal;
--course-item-side-nav-chapter-meta-font-text-transform: none;
--video-item-pagination-font-font-style: normal;
--blog-grid-masonry-list-title-font-font-style: normal;
--course-list-grid-layout-chapter-name-font-font-family: "salmanazar-lk7x9s";
--product-grid-text-below-status-font-text-transform: none;
--course-item-side-nav-chapter-name-font-font-family: "salmanazar-lk7x9s";
--portfolio-grid-overlay-title-font-font-weight: 600;
--product-basic-item-price-full-layout-font-text-transform: none;
--course-list-course-description-font-font-style: normal;
--product-basic-item-price-half-layout-font-font-weight: 600;
--blog-grid-masonry-list-meta-font-text-transform: none;
--course-list-grid-layout-chapter-meta-font-font-family: "salmanazar-lk7x9s";
--product-grid-text-below-title-font-font-family: "salmanazar-lk7x9s";
--form-block-survey-title-text-font-text-transform: none;
--site-navigation-font-font-weight: 400;
--portfolio-index-background-title-font-font-style: normal;
--blog-side-by-side-list-title-font-font-family: "salmanazar-lk7x9s";
--product-basic-item-add-ons-title-full-layout-font-font-family: "salmanazar-lk7x9s";
--blog-grid-masonry-list-title-font-line-height: 1.2em;
--video-item-title-font-line-height: 1.2em;
--course-list-course-item-lesson-excerpt-font-font-weight: 600;
--menu-block-item-description-font-font-family: "salmanazar-lk7x9s";
--product-block-description-font-font-family: "salmanazar-lk7x9s";
--product-basic-item-scarcity-half-layout-font-line-height: 1em;
--form-block-title-text-font-font-family: "salmanazar-lk7x9s";
--menu-block-item-title-font-font-weight: 600;
--course-list-course-description-font-text-transform: none;
--blog-item-pagination-font-font-style: normal;
--product-list-clear-filters-button-text-font-font-style: normal;
--menu-block-item-title-font-line-height: 1.2em;
--course-list-grid-layout-course-item-excerpt-font-text-transform: none;
--product-basic-item-restock-notification-wrap-layout-font-font-weight: 600;
--video-item-pagination-font-font-weight: 600;
--content-link-block-title-font-line-height: 1.5em;
--video-item-pagination-font-font-family: "salmanazar-lk7x9s";
--blog-single-column-list-title-font-line-height: 1.2em;
--form-block-select-dropdown-text-font-font-weight: 600;
--product-basic-item-variant-fields-half-layout-font-line-height: 1.5em;
--product-list-description-font-font-weight: 600;
--menu-block-title-font-font-weight: 600;
--course-list-course-name-font-font-weight: 600;
--form-block-title-text-font-font-weight: 600;
--product-basic-item-restock-notification-font-line-height: 1.5em;
--menu-block-nav-font-text-transform: none;
--blog-alternating-side-by-side-list-meta-font-font-weight: 600;
--form-block-title-text-font-line-height: 1.5em;
--product-basic-item-price-font-font-family: "salmanazar-lk7x9s";
--product-basic-item-restock-notification-half-layout-font-font-style: normal;
--product-basic-item-restock-notification-full-layout-font-font-style: normal;
--product-basic-item-scarcity-half-layout-font-font-style: normal;
--product-basic-item-title-half-layout-font-line-height: 1.2em;
--course-item-side-nav-lesson-meta-font-font-weight: 600;
--product-basic-item-scarcity-font-font-family: "salmanazar-lk7x9s";
--form-block-survey-title-text-font-font-weight: 600;
--newsletter-block-field-text-font-font-style: normal;
--course-item-side-nav-lesson-name-font-font-weight: 600;
--blog-alternating-side-by-side-list-title-font-font-weight: 600;
--cookie-banner-disclaimer-font-font-weight: 600;
--portfolio-hover-follow-title-font-font-weight: 600;
--course-item-lesson-name-font-text-transform: none;
--site-navigation-font-font-family: "salmanazar-lk7x9s";
--product-block-description-font-font-style: normal;
--course-item-side-nav-lesson-name-font-line-height: 1.5em;
--header-button-font-font-weight: 400;
--product-block-title-font-font-family: "salmanazar-lk7x9s";
--menu-block-item-price-font-font-weight: 600;
--blog-item-pagination-font-line-height: 1.2em;
--blog-side-by-side-list-title-font-line-height: 1.2em;
--course-list-chapter-item-chapter-name-font-font-family: "salmanazar-lk7x9s";
--course-item-chapter-name-font-font-family: "salmanazar-lk7x9s";
--video-preview-badge-font-font-weight: 600;
--product-basic-item-title-wrap-layout-font-line-height: 1.2em;
--form-block-description-text-font-font-family: "salmanazar-lk7x9s";
--product-basic-item-description-wrap-layout-font-font-family: "salmanazar-lk7x9s";
--body-font-font-family: "salmanazar-lk7x9s";
--course-list-grid-layout-course-item-name-font-font-style: normal;
--body-font-line-height: 1.5em;
--course-list-course-name-font-line-height: 1.2em;
--video-basic-grid-list-excerpt-font-font-family: "salmanazar-lk7x9s";
--product-block-price-font-font-family: "salmanazar-lk7x9s";
--product-basic-item-restock-notification-full-layout-font-line-height: 1.5em;
--product-basic-item-price-wrap-layout-font-font-style: normal;
--product-basic-item-restock-notification-font-text-transform: none;
--course-list-grid-layout-chapter-name-font-line-height: 1.2em;
--portfolio-hover-follow-title-font-line-height: 1.2em;
--course-list-grid-layout-chapter-name-font-text-transform: none;
--course-item-name-font-text-transform: none;
--site-title-font-font-weight: 600;
--newsletter-block-button-text-font-font-family: "salmanazar-lk7x9s";
--quote-block-text-font-text-transform: none;
--course-list-course-item-lesson-meta-font-text-transform: none;
--menu-block-item-title-font-text-transform: none;
--meta-font-line-height: 1em;
--site-navigation-font-font-style: normal;
--quote-block-text-font-font-style: normal;
--video-preview-badge-font-text-transform: none;
--product-basic-item-variant-fields-wrap-layout-font-font-style: normal;
--product-basic-item-variant-fields-full-layout-font-line-height: 1.5em;
--heading-font-font-style: normal;
--blog-item-meta-font-font-family: "salmanazar-lk7x9s";
--course-item-name-font-line-height: 1.2em;
--product-basic-item-description-font-text-transform: none;
--course-list-grid-layout-course-item-meta-font-font-family: "salmanazar-lk7x9s";
--cookie-banner-disclaimer-font-font-style: normal;
--course-item-side-nav-chapter-name-font-font-style: normal;
--video-item-pagination-font-line-height: 1.2em;
--blog-basic-grid-list-title-font-line-height: 1.2em;
--product-basic-item-description-full-layout-font-font-style: normal;
--list-section-title-text-font-font-weight: 600;
--product-basic-item-price-half-layout-font-font-style: normal;
--product-grid-text-below-status-font-font-style: normal;
--product-basic-item-scarcity-half-layout-font-font-weight: 600;
--announcement-bar-font-text-transform: none;
--course-item-side-nav-lesson-name-font-font-family: "salmanazar-lk7x9s";
--product-basic-item-add-ons-title-half-layout-font-text-transform: none;
--form-block-input-text-font-font-weight: 600;
--product-list-description-font-line-height: 1.5em;
--blog-grid-masonry-list-excerpt-font-font-style: normal;
--course-item-lesson-name-font-font-family: "salmanazar-lk7x9s";
--portfolio-hover-static-title-font-font-weight: 600;
--blog-basic-grid-list-excerpt-font-font-weight: 600;
--blog-item-title-font-font-family: "salmanazar-lk7x9s";
--heading-font-text-transform: none;
--product-basic-item-description-wrap-layout-font-font-style: normal;
--product-basic-item-description-full-layout-font-line-height: 1.5em;
--tertiary-button-font-font-family: "salmanazar-lk7x9s";
--form-block-placeholder-text-font-font-family: "salmanazar-lk7x9s";
--form-block-caption-text-font-font-family: "salmanazar-lk7x9s";
--video-item-description-font-line-height: 1.5em;
--video-basic-grid-list-meta-font-font-style: normal;
--product-block-price-font-font-style: normal;
--course-item-name-font-font-family: "salmanazar-lk7x9s";
--product-basic-item-scarcity-wrap-layout-font-text-transform: none;
--blog-grid-masonry-list-title-font-font-family: "salmanazar-lk7x9s";
--form-block-caption-text-font-font-style: normal;
--blog-item-title-font-line-height: 1.2em;
--product-basic-item-title-wrap-layout-font-font-weight: 600;
--product-basic-item-scarcity-full-layout-font-line-height: 1em;
--course-list-course-item-lesson-excerpt-font-text-transform: none;
--blog-grid-masonry-list-title-font-font-weight: 600;
--portfolio-hover-static-title-font-font-style: normal;
--product-basic-item-title-font-font-style: normal;
--product-basic-item-price-half-layout-font-font-family: "salmanazar-lk7x9s";
--blog-grid-masonry-list-meta-font-font-style: normal;
--product-block-title-font-font-style: normal;
--content-link-block-title-font-text-transform: none;
--portfolio-grid-basic-title-font-line-height: 1.2em;
--portfolio-hover-static-title-font-font-family: "salmanazar-lk7x9s";
--video-preview-badge-font-line-height: 1.5em;
--blog-grid-masonry-list-excerpt-font-text-transform: none;
--menu-block-title-font-line-height: 1.2em;
--course-list-course-item-lesson-excerpt-font-font-family: "salmanazar-lk7x9s";
--product-list-description-font-font-style: normal;
--course-item-side-nav-chapter-name-font-font-weight: 600;
--product-grid-text-below-price-font-font-style: normal;
--product-basic-item-variant-fields-half-layout-font-font-weight: 600;
--blog-alternating-side-by-side-list-title-font-text-transform: none;
--blog-basic-grid-list-meta-font-text-transform: none;
--product-grid-text-below-status-font-line-height: 1em;
--product-basic-item-add-ons-title-wrap-layout-font-font-style: normal;
--menu-block-nav-font-font-style: normal;
--course-list-grid-layout-course-item-name-font-font-weight: 600;
--product-basic-item-add-ons-title-full-layout-font-font-style: normal;
--site-navigation-font-text-transform: none;
--blog-item-pagination-font-font-family: "salmanazar-lk7x9s";
--form-block-caption-text-font-font-weight: 600;
--course-item-side-nav-chapter-name-font-line-height: 1.2em;
--blog-alternating-side-by-side-list-title-font-line-height: 1.2em;
--site-title-font-font-family: "salmanazar-lk7x9s";
--course-list-grid-layout-course-item-excerpt-font-font-family: "salmanazar-lk7x9s";
--cookie-banner-disclaimer-font-text-transform: none;
--product-basic-item-title-half-layout-font-text-transform: none;
--newsletter-block-title-text-font-font-style: normal;
--body-font-text-transform: none;
--blog-item-meta-font-line-height: 1em;
--newsletter-block-title-text-font-font-weight: 700;
--form-block-input-text-font-font-family: "salmanazar-lk7x9s";
--video-item-pagination-font-text-transform: none;
--announcement-bar-font-line-height: 1.5em;
--portfolio-grid-basic-title-font-font-style: normal;
--course-item-lesson-name-font-font-style: normal;
--course-list-grid-layout-course-item-excerpt-font-line-height: 1.5em;
--blog-single-column-list-title-font-font-style: normal;
--video-item-title-font-text-transform: none;
--cookie-banner-disclaimer-font-font-family: "salmanazar-lk7x9s";
--newsletter-block-footnote-text-font-font-weight: 600;
--product-basic-item-variant-fields-half-layout-font-font-style: normal;
--content-link-block-title-font-font-style: normal;
--product-basic-item-restock-notification-half-layout-font-text-transform: none;
--newsletter-block-footnote-text-font-font-family: "salmanazar-lk7x9s";
--blog-side-by-side-list-title-font-font-style: normal;
--blog-item-author-profile-font-font-weight: 600;
--course-list-grid-layout-chapter-meta-font-font-weight: 600;
--blog-side-by-side-list-title-font-font-weight: 600;
--portfolio-grid-overlay-title-font-line-height: 1.2em;
--form-block-survey-title-text-font-font-family: "salmanazar-lk7x9s";
--course-item-side-nav-chapter-meta-font-font-weight: 600;
--product-basic-item-price-font-font-style: normal;
--blog-side-by-side-list-excerpt-font-font-weight: 600;
--blog-single-column-list-title-font-font-family: "salmanazar-lk7x9s";
--meta-font-font-style: normal;
--form-block-survey-title-text-font-line-height: 1.5em;
--video-item-description-font-text-transform: none;
--product-basic-item-price-full-layout-font-font-weight: 600;
--portfolio-item-pagination-font-text-transform: none;
--heading-font-line-height: 1.2em;
--product-basic-item-restock-notification-half-layout-font-font-weight: 600;
--product-basic-item-restock-notification-font-font-weight: 600;
--newsletter-block-field-text-font-font-weight: 600;
--menu-block-nav-font-line-height: 1em;
--portfolio-index-background-title-font-font-weight: 600;
--course-item-name-mobile-font-line-height: 1.2em;
--product-basic-item-title-font-text-transform: none;
--product-grid-text-below-price-font-text-transform: none;
--video-basic-grid-list-category-nav-font-font-style: normal;
--product-basic-item-add-ons-title-wrap-layout-font-line-height: 1.5em;
--blog-single-column-list-meta-font-font-weight: 600;
--form-block-option-text-font-font-family: "salmanazar-lk7x9s";
--product-block-title-font-font-weight: 600;
--blog-single-column-list-excerpt-font-font-family: "salmanazar-lk7x9s";
--product-basic-item-price-wrap-layout-font-text-transform: none;
--product-grid-text-below-title-font-text-transform: none;
--form-block-input-text-font-text-transform: none;
--product-basic-item-add-ons-title-half-layout-font-font-style: normal;
--newsletter-block-title-text-font-line-height: 1.5em;
--product-basic-item-description-half-layout-font-text-transform: none;
--video-item-title-font-font-style: normal;
--blog-grid-masonry-list-meta-font-line-height: 1em;
--product-grid-text-below-status-font-font-family: "salmanazar-lk7x9s";
--product-basic-item-description-full-layout-font-font-family: "salmanazar-lk7x9s";
--video-item-meta-font-font-family: "salmanazar-lk7x9s";
--product-basic-item-description-full-layout-font-font-weight: 600;
--portfolio-grid-basic-title-font-font-weight: 600;
--form-block-select-dropdown-text-font-text-transform: none;
--product-basic-item-price-font-font-weight: 600;
--portfolio-index-background-title-font-font-family: "salmanazar-lk7x9s";
--portfolio-grid-basic-title-font-font-family: "salmanazar-lk7x9s";
--blog-item-pagination-font-font-weight: 600;
--events-item-pagination-font-font-style: normal;
--heading-font-font-family: "salmanazar-lk7x9s";
--blog-item-author-profile-font-font-style: normal;
--product-basic-item-description-half-layout-font-font-style: normal;
--video-item-meta-font-text-transform: none;
--menu-block-item-description-font-font-weight: 600;
--form-block-description-text-font-line-height: 1.5em;
--course-list-course-item-lesson-name-font-text-transform: none;
--events-item-pagination-font-font-family: "salmanazar-lk7x9s";
--product-basic-item-scarcity-font-font-weight: 600;
--product-basic-item-variant-fields-wrap-layout-font-text-transform: none;
--course-list-grid-layout-course-item-excerpt-font-font-style: normal;
--product-basic-item-scarcity-wrap-layout-font-font-style: normal;
--portfolio-hover-static-title-font-line-height: 1.2em;
--video-basic-grid-list-category-nav-font-line-height: 1.5em;
--product-basic-item-restock-notification-half-layout-font-font-family: "salmanazar-lk7x9s";
--form-block-select-dropdown-text-font-line-height: 1.5em;
--quote-block-text-font-line-height: 1.5em;
--blog-single-column-list-meta-font-font-family: "salmanazar-lk7x9s";
--announcement-bar-font-font-weight: 600;
--newsletter-block-title-text-font-text-transform: uppercase;
--newsletter-block-button-text-font-font-style: normal;
--newsletter-block-footnote-text-font-line-height: 1.5em;
--menu-block-item-price-font-line-height: 1.5em;
--product-basic-item-price-full-layout-font-font-style: normal;
--video-basic-grid-list-title-font-font-family: "salmanazar-lk7x9s";
--product-basic-item-price-wrap-layout-font-font-weight: 600;
--mobile-site-title-font-font-weight: 600;
--product-basic-item-add-ons-title-font-font-weight: 600;
--course-item-lesson-name-font-line-height: 1.2em;
--events-item-pagination-date-font-text-transform: none;
--product-basic-item-description-font-font-style: normal;
--blog-alternating-side-by-side-list-meta-font-font-style: normal;
--blog-item-title-font-font-weight: 600;
--newsletter-block-button-text-font-text-transform: none;
--video-basic-grid-list-excerpt-font-line-height: 1.5em;
--blog-single-column-list-excerpt-font-font-weight: 600;
--blog-single-column-list-meta-font-text-transform: none;
--product-basic-item-description-half-layout-font-font-family: "salmanazar-lk7x9s";
--quote-block-source-font-font-family: "salmanazar-lk7x9s";
--blog-item-title-font-text-transform: none;
--blog-side-by-side-list-meta-font-text-transform: none;
--blog-alternating-side-by-side-list-excerpt-font-text-transform: none;
--product-grid-text-below-scarcity-font-line-height: 1em;
--blog-grid-masonry-list-meta-font-font-weight: 600;
--product-basic-item-variant-fields-full-layout-font-font-family: "salmanazar-lk7x9s";
--product-basic-item-scarcity-full-layout-font-font-weight: 600;
--blog-grid-masonry-list-excerpt-font-font-family: "salmanazar-lk7x9s";
--menu-block-item-title-font-font-family: "salmanazar-lk7x9s";
--product-basic-item-add-ons-title-full-layout-font-text-transform: none;
--blog-item-meta-font-text-transform: none;
--product-basic-item-restock-notification-wrap-layout-font-line-height: 1.5em;
--video-item-meta-font-line-height: 1em;
--menu-block-item-price-font-font-family: "salmanazar-lk7x9s";
--site-title-font-text-transform: none;
--video-basic-grid-list-title-font-font-style: normal;
--course-list-chapter-item-chapter-name-font-text-transform: none;
--product-basic-item-title-full-layout-font-font-family: "salmanazar-lk7x9s";
--video-basic-grid-list-category-nav-font-text-transform: none;
--course-list-grid-layout-course-item-meta-font-font-style: normal;
--course-item-side-nav-chapter-name-font-text-transform: none;
--portfolio-hover-static-title-font-text-transform: none;
--portfolio-grid-overlay-title-font-font-family: "salmanazar-lk7x9s";
--product-basic-item-restock-notification-font-font-family: "salmanazar-lk7x9s";
--course-list-chapter-item-chapter-name-font-line-height: 1.2em;
--blog-side-by-side-list-meta-font-font-weight: 600;
--course-list-chapter-item-chapter-name-font-font-weight: 600;
--form-block-description-text-font-font-weight: 600;
--course-list-course-item-lesson-name-font-line-height: 1.5em;
--course-list-course-item-lesson-meta-font-line-height: 1em;
--product-basic-item-price-full-layout-font-line-height: 1.5em;
--product-list-clear-filters-button-text-font-font-weight: 600;
--video-item-description-font-font-weight: 600;
--video-basic-grid-list-meta-font-font-weight: 600;
--product-basic-item-scarcity-full-layout-font-text-transform: none;
--course-list-course-item-lesson-meta-font-font-family: "salmanazar-lk7x9s";
--blog-single-column-list-excerpt-font-line-height: 1.5em;
--blog-item-pagination-font-text-transform: none;
--product-basic-item-description-wrap-layout-font-line-height: 1.5em;
--course-item-side-nav-chapter-meta-font-line-height: 1em;
--course-item-chapter-name-font-line-height: 1.5em;
--events-item-pagination-date-font-line-height: 1em;
--course-list-course-name-font-text-transform: none;
--blog-single-column-list-meta-font-line-height: 1em;
--header-button-font-font-family: "aktiv-grotesk";
--product-grid-text-below-title-font-font-style: normal;
--product-basic-item-variant-fields-half-layout-font-text-transform: none;
--product-basic-item-title-font-font-family: "salmanazar-lk7x9s";
--announcement-bar-font-font-style: normal;
--product-block-title-font-text-transform: none;
--blog-alternating-side-by-side-list-excerpt-font-font-style: normal;
--newsletter-block-field-text-font-line-height: 1.5em;
--portfolio-item-pagination-font-font-weight: 600;
--video-item-title-font-font-weight: 600;
--product-grid-text-below-title-font-font-weight: 600;
--product-basic-item-description-half-layout-font-line-height: 1.5em;
--course-item-name-font-font-weight: 600;
--events-item-pagination-date-font-font-style: normal;
--product-basic-item-price-font-line-height: 1.2em;
--tertiary-button-font-text-transform: none;
--events-item-pagination-font-line-height: 1.2em;
--product-grid-text-below-title-font-line-height: 1.2em;
--product-basic-item-variant-fields-font-font-family: "salmanazar-lk7x9s";
--blog-basic-grid-list-meta-font-font-family: "salmanazar-lk7x9s";
--form-block-option-text-font-font-style: normal;
--list-section-title-text-font-font-style: normal;
--product-basic-item-variant-fields-wrap-layout-font-font-weight: 600;
--course-list-course-item-lesson-excerpt-font-font-style: normal;
--menu-block-item-description-font-line-height: 1.5em;
--form-block-input-text-font-line-height: 1.5em;
--newsletter-block-title-text-font-font-family: "ibm-plex-mono";
--newsletter-block-description-text-font-font-weight: 400;
--product-basic-item-restock-notification-full-layout-font-font-family: "salmanazar-lk7x9s";
--product-basic-item-title-wrap-layout-font-font-family: "salmanazar-lk7x9s";
--quote-block-source-font-line-height: 1.5em;
--product-grid-text-below-price-font-font-weight: 600;
--list-section-title-text-font-font-family: "salmanazar-lk7x9s";
--product-basic-item-description-font-font-family: "salmanazar-lk7x9s";
--product-basic-item-description-font-font-weight: 600;
--blog-side-by-side-list-meta-font-line-height: 1em;
--product-basic-item-price-half-layout-font-line-height: 1.5em;
--product-block-price-font-line-height: 1.5em;
--product-basic-item-scarcity-full-layout-font-font-family: "salmanazar-lk7x9s";
--product-basic-item-scarcity-wrap-layout-font-line-height: 1em;
--blog-basic-grid-list-title-font-font-style: normal;
--course-item-name-font-font-style: normal;
--video-basic-grid-list-excerpt-font-text-transform: none;
--blog-side-by-side-list-excerpt-font-text-transform: none;
--course-list-chapter-item-chapter-meta-font-font-family: "salmanazar-lk7x9s";
--video-basic-grid-list-category-nav-font-font-weight: 600;
--product-basic-item-price-half-layout-font-text-transform: none;
--form-block-placeholder-text-font-font-style: normal;
--course-list-course-item-lesson-name-font-font-style: normal;
--list-section-title-text-font-line-height: 1.2em;
--product-block-description-font-text-transform: none;
--menu-block-item-price-font-text-transform: none;
--product-basic-item-price-font-text-transform: none;
--form-block-caption-text-font-line-height: 1.5em;
--product-basic-item-variant-fields-full-layout-font-font-style: normal;
--product-basic-item-add-ons-title-wrap-layout-font-text-transform: none;
--product-grid-text-below-scarcity-font-text-transform: none;
--menu-block-title-font-text-transform: none;
--product-basic-item-price-wrap-layout-font-line-height: 1.5em;
--product-basic-item-description-wrap-layout-font-font-weight: 600;
--portfolio-grid-basic-title-font-text-transform: none;
--course-item-side-nav-chapter-meta-font-font-family: "salmanazar-lk7x9s";
--meta-font-font-family: "salmanazar-lk7x9s";
--mobile-site-title-font-line-height: 1.5em;
--portfolio-item-pagination-font-line-height: 1.2em;
--product-basic-item-add-ons-title-full-layout-font-line-height: 1.5em;
--newsletter-block-description-text-font-text-transform: uppercase;
--product-basic-item-scarcity-half-layout-font-text-transform: none;
--blog-alternating-side-by-side-list-title-font-font-style: normal;
--form-block-caption-text-font-text-transform: none;
--video-preview-badge-font-font-family: "salmanazar-lk7x9s";
--course-item-side-nav-lesson-meta-font-font-family: "salmanazar-lk7x9s";
--product-basic-item-scarcity-wrap-layout-font-font-family: "salmanazar-lk7x9s";
--course-list-course-description-font-font-weight: 600;
--product-basic-item-description-full-layout-font-text-transform: none;
--form-block-placeholder-text-font-font-weight: 600;
--quote-block-source-font-font-weight: 600;
--product-block-title-font-line-height: 1.5em;
--course-list-grid-layout-chapter-name-font-font-weight: 600;
--video-item-title-font-font-family: "salmanazar-lk7x9s";
--blog-basic-grid-list-title-font-font-family: "salmanazar-lk7x9s";
--course-item-side-nav-lesson-name-font-text-transform: none;
--course-list-grid-layout-course-item-excerpt-font-font-weight: 600;
--course-list-chapter-item-chapter-name-font-font-style: normal;
--product-basic-item-title-wrap-layout-font-font-style: normal;
--blog-side-by-side-list-title-font-text-transform: none;
--newsletter-block-footnote-text-font-text-transform: none;
--product-block-description-font-font-weight: 600;
--product-basic-item-add-ons-title-full-layout-font-font-weight: 600;
--product-basic-item-variant-fields-font-text-transform: none;
--newsletter-block-field-text-font-font-family: "salmanazar-lk7x9s";
--course-item-name-mobile-font-font-family: "salmanazar-lk7x9s";
--course-list-chapter-item-chapter-meta-font-line-height: 1em;
--video-item-meta-font-font-style: normal;
--menu-block-item-title-font-font-style: normal;
--form-block-title-text-font-font-style: normal;
--product-basic-item-scarcity-wrap-layout-font-font-weight: 600;
--course-list-course-name-font-font-style: normal;
--menu-block-nav-font-font-family: "salmanazar-lk7x9s";
--blog-basic-grid-list-excerpt-font-font-family: "salmanazar-lk7x9s";
--product-basic-item-scarcity-full-layout-font-font-style: normal;
--product-basic-item-price-wrap-layout-font-font-family: "salmanazar-lk7x9s";
--course-list-grid-layout-course-item-name-font-text-transform: none;
--course-list-course-item-lesson-name-font-font-weight: 600;
--header-button-font-line-height: 1.8em;
--newsletter-block-description-text-font-line-height: 1.5em;
--course-item-side-nav-lesson-meta-font-text-transform: none;
--newsletter-block-footnote-text-font-font-style: normal;
--product-basic-item-add-ons-title-font-font-style: normal;
--course-list-chapter-item-chapter-meta-font-text-transform: none;
--video-basic-grid-list-title-font-text-transform: none;
--blog-basic-grid-list-excerpt-font-line-height: 1.5em;
--course-item-name-mobile-font-text-transform: none;
--product-block-price-font-text-transform: none;
--portfolio-hover-follow-title-font-font-style: normal;
--course-item-name-mobile-font-font-style: normal;
--menu-block-title-font-font-family: "salmanazar-lk7x9s";
--course-item-lesson-name-font-font-weight: 600;
--course-item-chapter-name-font-text-transform: none;
--blog-side-by-side-list-excerpt-font-font-style: normal;
--course-item-side-nav-lesson-meta-font-font-style: normal;
--mobile-site-title-font-font-style: normal;
--site-navigation-font-line-height: 1.5em;
--product-basic-item-variant-fields-full-layout-font-font-weight: 600;
--product-basic-item-add-ons-title-font-font-family: "salmanazar-lk7x9s";
--body-font-font-weight: 600;
--blog-alternating-side-by-side-list-excerpt-font-font-weight: 600;
--product-basic-item-title-font-line-height: 1.2em;
--form-block-option-text-font-text-transform: none;
--course-list-grid-layout-course-item-meta-font-text-transform: none;
--quote-block-source-font-text-transform: none;
--product-basic-item-description-half-layout-font-font-weight: 600;
--portfolio-index-background-title-font-line-height: 1.2em;
--body-font-font-style: normal;
--product-basic-item-title-font-font-weight: 600;
--blog-item-author-profile-font-text-transform: none;
--course-list-course-item-lesson-name-font-font-family: "salmanazar-lk7x9s";
--product-basic-item-variant-fields-half-layout-font-font-family: "salmanazar-lk7x9s";
--form-block-input-text-font-font-style: normal;
--product-grid-text-below-scarcity-font-font-weight: 600;
--blog-item-meta-font-font-weight: 600;
--product-grid-text-below-scarcity-font-font-family: "salmanazar-lk7x9s";
--course-item-chapter-name-font-font-style: normal;
--blog-basic-grid-list-title-font-text-transform: none;
--portfolio-grid-overlay-title-font-font-style: normal;
--product-basic-item-variant-fields-full-layout-font-text-transform: none;
--header-button-font-font-style: normal;
--blog-alternating-side-by-side-list-meta-font-text-transform: none;
--product-block-price-font-font-weight: 600;
--blog-grid-masonry-list-excerpt-font-font-weight: 600;
--product-basic-item-add-ons-title-half-layout-font-line-height: 1.5em;
--tertiary-button-font-font-weight: 600;
```

### Other

```css
--form-field-dropdown-icon-thickness: 1px;
--image-block-stack-image-button-separation: 4%;
--previous-section-divider-offset: 0px;
--m-scale-y: 1;
--tertiary-button-stroke: 0px;
--m-scale-x: 1;
--m-offset-x: 0px;
--m-rotation-x: 0deg;
--image-block-overlap-image-content-offset: 35%;
--m-0-offset-x: 0px;
--m-scale-z: 1;
--image-block-stack-image-title-separation: 4%;
--m-stable-rotation-y: 0deg;
--tweak-global-animations-animation-delay: .6s;
--maxPageWidth: 1800px;
--white-hsl: 221,41%,19%;
--m-stable-offset-y: 0px;
--m-rotation-z: 0deg;
--m-0-scale-x: 1;
--m-0-scale-y: 1;
--m-stable-scale-y: 1;
--m-stable-offset-z: 0px;
--image-block-overlap-image-button-separation: 5%;
--m-stable-opacity: 1;
--m-opacity: 1;
--m-0-rotation-y: 0deg;
--tweak-global-animations-animation-duration: 1.5s;
--image-block-collage-image-width: 70%;
--image-block-collage-image-content-width: 50%;
--image-block-poster-image-content-width: 70%;
--m-rotation-y: 0deg;
--m-stable-rotation-x: 0deg;
--image-block-stack-image-content-separation: 7%;
--m-offset-z: 0px;
--image-block-overlap-image-width: 55%;
--m-skew-x: 0deg;
--m-0-skew-x: 0deg;
--course-list-course-item-hover-background: hsla(210,17%,91%,.9);
--m-0-scale-z: 1;
--m-0-rotation-z: 0deg;
--m-stable-skew-y: 0deg;
--m-stable-offset-x: 0px;
--course-list-course-item-background: hsla(210,17%,91%,1);
--m-0-offset-z: 0px;
--black-hsl: 210,17%,91%;
--m-0-opacity: 1;
--m-stable-scale-z: 1;
--image-block-collage-image-button-separation: 5%;
--m-0-offset-y: 0px;
--m-skew-y: 0deg;
--m-stable-rotation-z: 0deg;
--m-0-skew-y: 0deg;
--image-block-collage-image-content-offset: 5%;
--m-offset-y: 0px;
--m-0-rotation-x: 0deg;
--image-block-poster-image-title-separation: 5%;
--m-stable-scale-x: 1;
--image-block-overlap-image-title-separation: 3%;
--m-stable-skew-x: 0deg;
--image-block-poster-image-button-separation: 6%;
--image-block-collage-image-title-separation: 4%;
```

### Semantic

```css
success: [object Object];
warning: [object Object];
error: [object Object];
info: [object Object];
```

## Breakpoints

| Name | Value | Type |
|------|-------|------|
| sm | 430px | max-width |
| 575px | 575px | max-width |
| sm | 576px | min-width |
| sm | 640px | max-width |
| md | 767px | max-width |
| md | 768px | min-width |
| md | 769px | min-width |
| lg | 991px | max-width |
| lg | 992px | min-width |
| lg | 1024px | max-width |
| lg | 1025px | min-width |
| 1099px | 1099px | max-width |
| 1199px | 1199px | max-width |
| xl | 1280px | max-width |
| xl | 1281px | min-width |

## Transitions & Animations

**Easing functions:** `[object Object]`, `[object Object]`, `[object Object]`, `[object Object]`

**Durations:** `0.3s`, `0.14s`, `0.1s`, `0.4s`, `1.5s`, `0.00983607s`, `0.0196721s`, `0.0295082s`, `0.0393443s`, `0.0491803s`, `0.0590164s`, `0.25s`, `0.0688525s`, `0.0786885s`, `0.0885246s`, `0.0983607s`, `0.108197s`, `0.118033s`, `0.127869s`, `0.6s`, `0.137705s`, `0.147541s`, `0.157377s`, `0.167213s`, `0.177049s`, `0.186885s`, `0.196721s`, `0.206557s`, `0.216393s`, `0.22623s`, `0.236066s`, `0.245902s`, `0.255738s`, `0.265574s`, `0.27541s`, `0.285246s`, `0.295082s`, `0.304918s`, `0.314754s`, `0.32459s`, `0.334426s`, `0.344262s`, `0.354098s`, `0.363934s`, `0.37377s`, `0.383607s`, `0.393443s`, `0.403279s`, `0.413115s`, `0.422951s`, `0.432787s`, `0.442623s`, `0.2s`, `0.452459s`, `0.462295s`, `0.472131s`, `0.481967s`, `0.491803s`, `0.501639s`, `0.511475s`, `0.521311s`, `0.531148s`, `0.540984s`, `0.55082s`, `0.560656s`, `0.570492s`, `0.580328s`, `0.590164s`

### Common Transitions

```css
transition: all;
transition: background 0.3s ease-in-out, padding 0.14s ease-in-out, transform 0.14s ease-in-out 0.14s;
transition: padding 0.14s ease-in-out;
transition: background-color 0.1s linear, color 0.1s linear;
transition: opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1);
transition: opacity 1.5s;
transition: opacity 1.5s 0.00983607s;
transition: opacity 1.5s 0.0196721s;
transition: opacity 1.5s 0.0295082s;
transition: opacity 1.5s 0.0393443s;
```

### Keyframe Animations

**fonts-loading**
```css
@keyframes fonts-loading {
  0%, 99% { color: transparent; }
}
```

## Component Patterns

Detected UI component patterns and their most common styles:

### Buttons (13 instances)

```css
.button {
  background-color: rgb(29, 41, 68);
  color: rgb(0, 0, 0);
  font-size: 19.072px;
  font-weight: 400;
  padding-top: 1.9072px;
  padding-right: 0px;
  border-radius: 0px;
}
```

### Cards (5 instances)

```css
.card {
  background-color: rgb(29, 41, 68);
  border-radius: 0px;
  padding-top: 0px;
  padding-right: 0px;
}
```

### Inputs (2 instances)

```css
.input {
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
  border-color: rgba(0, 0, 0, 0.12);
  border-radius: 0px;
  font-size: 22.144px;
  padding-top: 22.4px;
  padding-right: 32px;
}
```

### Links (26 instances)

```css
.link {
  color: rgb(29, 41, 68);
  font-size: 19.072px;
  font-weight: 600;
}
```

### Navigation (59 instances)

```css
.navigatio {
  background-color: rgb(29, 41, 68);
  color: rgb(228, 232, 236);
  padding-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  position: static;
}
```

### Footer (1 instances)

```css
.foote {
  color: rgb(228, 232, 236);
  padding-top: 0px;
  padding-bottom: 0px;
  font-size: 22.144px;
}
```

### Modals (8 instances)

```css
.modal {
  background-color: rgba(228, 232, 236, 0.5);
  border-radius: 0px;
  padding-top: 0px;
  padding-right: 0px;
}
```

### Dropdowns (19 instances)

```css
.dropdown {
  background-color: rgb(228, 232, 236);
  border-radius: 0px;
  border-color: rgb(228, 232, 236);
  padding-top: 0px;
}
```

### Badges (1 instances)

```css
.badge {
  color: rgb(29, 41, 68);
  font-size: 19.072px;
  font-weight: 600;
  padding-top: 0px;
  padding-right: 0px;
  border-radius: 0px;
}
```

## Component Clusters

Reusable component instances grouped by DOM structure and style similarity:

### Button — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgb(29, 41, 68);
  color: rgb(228, 232, 236);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(228, 232, 236);
  font-size: 16px;
  font-weight: 400;
```

### Button — 6 instances, 3 variants

**Variant 1** (1 instance)

```css
  background: rgb(29, 41, 68);
  color: rgb(228, 232, 236);
  padding: 1.9072px 0px 1.9072px 0px;
  border-radius: 0px;
  border: 0px 0px 1px none none solid rgb(29, 41, 68);
  font-size: 19.072px;
  font-weight: 400;
```

**Variant 2** (2 instances)

```css
  background: rgb(29, 41, 68);
  color: rgb(228, 232, 236);
  padding: 3.8144px 15.2576px 3.8144px 15.2576px;
  border-radius: 300px;
  border: 0px solid rgb(228, 232, 236);
  font-size: 19.072px;
  font-weight: 600;
```

**Variant 3** (3 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(29, 41, 68);
  padding: 1.9072px 0px 1.9072px 0px;
  border-radius: 0px;
  border: 0px 0px 1px none none solid rgb(29, 41, 68);
  font-size: 19.072px;
  font-weight: 600;
```

### Button — 5 instances, 2 variants

**Variant 1** (4 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(29, 41, 68);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(29, 41, 68);
  font-size: 22.144px;
  font-weight: 600;
```

**Variant 2** (1 instance)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(228, 232, 236);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(228, 232, 236);
  font-size: 22.144px;
  font-weight: 600;
```

### Button — 2 instances, 2 variants

**Variant 1** (1 instance)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(29, 41, 68);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(29, 41, 68);
  font-size: 22.144px;
  font-weight: 600;
```

**Variant 2** (1 instance)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(228, 232, 236);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(228, 232, 236);
  font-size: 22.144px;
  font-weight: 600;
```

### Button — 3 instances, 1 variant

**Variant 1** (3 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(29, 41, 68);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(29, 41, 68);
  font-size: 22.144px;
  font-weight: 600;
```

### Card — 4 instances, 1 variant

**Variant 1** (4 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(29, 41, 68);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(29, 41, 68);
  font-size: 22.144px;
  font-weight: 600;
```

### Button — 2 instances, 1 variant

**Variant 1** (2 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(0, 0, 0);
  padding: 0px 0px 0px 0px;
  border-radius: 50%;
  border: 0px none rgb(0, 0, 0);
  font-size: 22.144px;
  font-weight: 400;
```

### Input — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
  padding: 22.4px 32px 22.4px 32px;
  border-radius: 0px;
  border: 1px solid rgba(0, 0, 0, 0.12);
  font-size: 22.144px;
  font-weight: 600;
```

### Button — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(29, 41, 68);
  padding: 8px 4px 8px 0px;
  border-radius: 0px;
  border: 0px none rgb(29, 41, 68);
  font-size: 22.144px;
  font-weight: 600;
```

### Button — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(29, 41, 68);
  padding: 22.4px 32px 22.4px 32px;
  border-radius: 0px;
  border: 0px 0px 1px none none solid rgb(29, 41, 68);
  font-size: 19.072px;
  font-weight: 600;
```

### Button — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(29, 41, 68);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(29, 41, 68);
  font-size: 19.072px;
  font-weight: 600;
```

## Layout System

**8 grid containers** and **103 flex containers** detected.

### Container Widths

| Max Width | Padding |
|-----------|---------|
| 100% | 0px |

### Grid Column Patterns

| Columns | Usage Count |
|---------|-------------|
| 26-column | 7x |
| 1-column | 1x |

### Grid Templates

```css
grid-template-columns: 8.1875px 41.1875px 41.1875px 41.1875px 41.1875px 41.1875px 41.1875px 41.1875px 41.1875px 41.1875px 41.1875px 41.1875px 41.1875px 41.1875px 41.1875px 41.1875px 41.1875px 41.1875px 41.1875px 41.1875px 41.1875px 41.1875px 41.1875px 41.1875px 41.1875px 8.1875px;
gap: 11px;
grid-template-columns: 8.1875px 41.1875px 41.1875px 41.1875px 41.1875px 41.1875px 41.1875px 41.1875px 41.1875px 41.1875px 41.1875px 41.1875px 41.1875px 41.1875px 41.1875px 41.1875px 41.1875px 41.1875px 41.1875px 41.1875px 41.1875px 41.1875px 41.1875px 41.1875px 41.1875px 8.1875px;
gap: 11px;
grid-template-columns: 8.1875px 41.1875px 41.1875px 41.1875px 41.1875px 41.1875px 41.1875px 41.1875px 41.1875px 41.1875px 41.1875px 41.1875px 41.1875px 41.1875px 41.1875px 41.1875px 41.1875px 41.1875px 41.1875px 41.1875px 41.1875px 41.1875px 41.1875px 41.1875px 41.1875px 8.1875px;
gap: 11px;
grid-template-columns: 11.1875px 44.0625px 44.0625px 44.0625px 44.0625px 44.0625px 44.0625px 44.0625px 44.0625px 44.0625px 44.0625px 44.0625px 44.0625px 44.0625px 44.0625px 44.0625px 44.0625px 44.0625px 44.0625px 44.0625px 44.0625px 44.0625px 44.0625px 44.0625px 44.0625px 11.1875px;
gap: 8px;
grid-template-columns: 1280px;
```

### Flex Patterns

| Direction/Wrap | Count |
|----------------|-------|
| column/nowrap | 36x |
| row/nowrap | 65x |
| row/wrap | 2x |

**Gap values:** `11px`, `8px`

## Accessibility (WCAG 2.1)

**Overall Score: 100%** — 3 passing, 0 failing color pairs

### Passing Color Pairs

| Foreground | Background | Ratio | Level |
|------------|------------|-------|-------|
| `#e4e8ec` | `#1d2944` | 11.74:1 | AAA |

## Design System Score

**Overall: 89/100 (Grade: B)**

| Category | Score |
|----------|-------|
| Color Discipline | 100/100 |
| Typography Consistency | 80/100 |
| Spacing System | 85/100 |
| Shadow Consistency | 100/100 |
| Border Radius Consistency | 100/100 |
| Accessibility | 100/100 |
| CSS Tokenization | 100/100 |

**Strengths:** Tight, disciplined color palette, Well-defined spacing scale, Clean elevation system, Consistent border radii, Strong accessibility compliance, Good CSS variable tokenization

**Issues:**
- 826 !important rules — prefer specificity over overrides
- 86% of CSS is unused — consider purging
- 16594 duplicate CSS declarations

## Gradients

**1 unique gradients** detected.

| Type | Direction | Stops | Classification |
|------|-----------|-------|----------------|
| linear | — | 2 | brand |

```css
background: linear-gradient(rgb(29, 41, 68), rgb(29, 41, 68));
```

## Z-Index Map

**14 unique z-index values** across 3 layers.

| Layer | Range | Elements |
|-------|-------|----------|
| dropdown | 100,100 | div.f.l.o.a.t.i.n.g.-.c.a.r.t. .h.i.d.d.e.n |
| sticky | 10,12 | header.d.a.r.k. .h.e.a.d.e.r. .t.h.e.m.e.-.c.o.l.-.-.p.r.i.m.a.r.y, div.f.e.-.b.l.o.c.k. .f.e.-.b.l.o.c.k.-.y.u.i._.3._.1.7._.2._.1._.1.7.7.7.4.5.0.4.9.2.1.3.1._.2.8.6.1.3, div.f.e.-.b.l.o.c.k. .f.e.-.b.l.o.c.k.-.e.d.4.8.d.2.d.b.8.4.5.e.3.2.2.c.7.f.6.7 |
| base | 0,9 | div.s.q.s.-.h.t.m.l.-.c.o.n.t.e.n.t, div.s.q.s.-.h.t.m.l.-.c.o.n.t.e.n.t, div.s.q.s.-.h.t.m.l.-.c.o.n.t.e.n.t |

## SVG Icons

**2 unique SVG icons** detected. Dominant style: **filled**.

| Size Class | Count |
|------------|-------|
| lg | 2 |

**Icon colors:** `rgb(0, 0, 0)`

## Font Files

| Family | Source | Weights | Styles |
|--------|--------|---------|--------|
| salmanazar-lk7x9s | self-hosted | 400, 600 | normal |
| ibm-plex-mono | self-hosted | 400, 700 | normal, italic |
| aktiv-grotesk | self-hosted | 400 | normal |

## Image Style Patterns

| Pattern | Count | Key Styles |
|---------|-------|------------|
| general | 4 | objectFit: cover, borderRadius: 0px, shape: square |
| gallery | 1 | objectFit: cover, borderRadius: 0px, shape: square |

**Aspect ratios:** 2:3 (2x), 3:4 (2x), 4:3 (1x)

## Motion Language

**Feel:** mixed · **Scroll-linked:** yes

### Duration Tokens

| name | value | ms |
|---|---|---|
| `xs` | `100ms` | 100 |
| `sm` | `200ms` | 200 |
| `md` | `300ms` | 300 |
| `lg` | `600ms` | 600 |
| `xxl` | `1.5s` | 1500 |

### Easing Families

- **ease-in-out** (4 uses) — `ease`
- **linear** (4 uses) — `linear`
- **custom** (7 uses) — `cubic-bezier(0.4, 0, 0.2, 1)`
- **ease-out** (6 uses) — `cubic-bezier(0.2, 0.6, 0.3, 1)`

## Component Anatomy

### button — 22 instances

**Slots:** label, icon
**Variants:** primary · link · tertiary
**Sizes:** large · small · medium

| variant | count | sample label |
|---|---|---|
| default | 14 | Book a Private Consultation |
| primary | 5 | SKIP TO CONTENT
Maha Attié
Home
About
Bl |
| tertiary | 2 | Book a Private Consultation |
| link | 1 | SKIP TO CONTENT |

### card — 4 instances

**Slots:** heading, description

## Brand Voice

**Tone:** friendly · **Pronoun:** third-person · **Headings:** Title Case (verbose)

### Top CTA Verbs

- **book** (6)
- **learn** (3)
- **visit** (3)
- **read** (3)
- **sign** (3)
- **contact** (1)
- **skip** (1)

### Button Copy Patterns

- "book a private consultation" (6×)
- "learn more" (3×)
- "visit skyrise" (3×)
- "read more" (3×)
- "sign up" (3×)
- "skip to content
maha attié
home
about
blog
contact
strategic real estate advisory for long-term value

helping investors make disciplined real-estate decisions" (1×)
- "skip to content" (1×)

### Sample Headings

> Strategic Real Estate Advisory For Long-Term Value
> I advise clients on real estate decisions with a focus on structure, timing, and long-term value. Each engagement is approached with clarity and discipline, ensuring that every step is aligned with both investment logic and personal objectives.
> Services
> 01. Strategic Consultation
02. Framing Mandate
03. Advisory Retainer
04. Development Sales
05. Exclusivity Mandate
> "Maha is on a mission to better grasp your needs and desires in order to bring them to life with unconditional commitment, safety and trust."
> Strategic Real Estate Advisory For Long-Term Value
> I advise clients on real estate decisions with a focus on structure, timing, and long-term value. Each engagement is approached with clarity and discipline, ensuring that every step is aligned with both investment logic and personal objectives.
> Services
> 01. Strategic Consultation
02. Framing Mandate
03. Advisory Retainer
04. Development Sales
05. Exclusivity Mandate
> "Maha is on a mission to better grasp your needs and desires in order to bring them to life with unconditional commitment, safety and trust."

## Page Intent

**Type:** `landing` (confidence 0.31)
**Description:** Professional real estate advisory focusing on long-term value, investment strategies, and property sourcing in Lebanon, Cyprus, and Greece. Book your consultation today.

Alternates: blog-post (0.35)

## Section Roles

Reading order (top→bottom): nav → nav → testimonial → hero → nav → nav → cta → testimonial → hero → hero → hero → cta → nav → footer → content

| # | Role | Heading | Confidence |
|---|------|---------|------------|
| 0 | nav | — | 0.4 |
| 1 | nav | — | 0.9 |
| 2 | nav | — | 0.9 |
| 3 | nav | — | 0.9 |
| 4 | testimonial | Strategic Real Estate Advisory For Long-Term Value | 0.8 |
| 5 | hero | Strategic Real Estate Advisory For Long-Term Value | 0.85 |
| 6 | cta | I advise clients on real estate decisions with a focus on structure, timing, and | 0.75 |
| 7 | testimonial | "Maha is on a mission to better grasp your needs and desires in order to bring t | 0.8 |
| 8 | hero | My advisory work is supported by SkyRise, a real estate and contracting firm wit | 0.4 |
| 9 | hero | Work with a real estate advisor who prioritizes your vision and protects your in | 0.4 |
| 10 | hero | How I Select the Right Property, A Structured Approach to Decisions. | 0.4 |
| 11 | cta | Subscribe To Our Newletter | 0.75 |
| 12 | nav | — | 0.4 |
| 13 | footer | — | 0.95 |
| 14 | content | — | 0.3 |

## Material Language

**Label:** `flat` (confidence 0)

| Metric | Value |
|--------|-------|
| Avg saturation | 0.141 |
| Shadow profile | soft |
| Avg shadow blur | 0px |
| Max radius | 300px |
| backdrop-filter in use | no |
| Gradients | 1 |

## Imagery Style

**Label:** `photography` (confidence 0.7)
**Counts:** total 5, svg 0, icon 0, screenshot-like 0, photo-like 5
**Dominant aspect:** portrait
**Radius profile on images:** square

## Quick Start

To recreate this design in a new project:

1. **Install fonts:** Add `salmanazar-lk7x9s` from Google Fonts or your font provider
2. **Import CSS variables:** Copy `variables.css` into your project
3. **Tailwind users:** Use the generated `tailwind.config.js` to extend your theme
4. **Design tokens:** Import `design-tokens.json` for tooling integration
