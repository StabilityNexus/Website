# The Stability Nexus Branding Guidelines

This document details the branding assets, design principles, color palette, and typography configurations.

## 1. Logo System

The logo is available in three distinct configurations to accommodate different visual layouts:

### A. Logomark (`logomark.svg`)

The standalone visual icon.
- **File**: `[logomark.svg](logomark.svg)`
- **Dimensions**: Vector scalable (Default canvas: 500 × 500 px)

### B. Logotype (`logotype.svg`)

The standalone text wordmark. It displays "Stability Nexus" set in the elegant serif typeface **Spectral** with a custom green-gold color scheme.
- **File**: `[logotype.svg](logotype.svg)`
- **Dimensions**: Vector scalable (Default canvas: 450 × 80 px)

### C. Combined Logo (`logo-combined.svg`)

The primary brand configuration, combining the logomark icon on the left with the Spectral logotype wordmark on the right.
- **File**: `[logo-combined.svg](logo-combined.svg)`
- **Dimensions**: Vector scalable (Default canvas: 650 × 120 px)

---

## 2. Color Palette

The color system is derived directly from the logo gradients and is mapped into the Tailwind CSS system:

| Color Name | Hex Code | Tailwind Mapping | Role |
|---|---|---|---|
| **Sun Gold** | `#FFC517` | `secondary` | Primary branding highlights, S-curves |
| **Forest Green** | `#3E921E` | `primary` | Secondary branding, logo accents, links |
| **Olive Lime** | `#91A511` | `info` | Informational overlays, subheadings |
| **Deep Slate** | `#0F172A` | `gray.900` / dark bg | Dark mode background |
| **Soft White** | `#FAFAFC` | `gray.50` / light bg | Light mode background |

---

## 3. Typography

The project specifies two core typefaces:

### A. Logotype Font: **Spectral**

An elegant, production-grade serif typeface designed by Production Type for Google Fonts.
- **Weights**: 500 (Medium), 600 (Semibold - used for logotype).
- **Setup**: Imported dynamically from Google Fonts in the application layout.

### B. Primary UI Font: **General Sans**

A clean, geometric sans-serif typeface designed by the Indian Type Foundry. It serves as the primary body font.
- **Local Files**: Stored inside the `brand/fonts/` directory. These are the OpenType (`.otf`) font source files for the brand's primary typeface.
  - `gsr.otf` (General Sans Regular - 400)
  - `gsm.otf` (General Sans Medium - 500)
  - `gssb.otf` (General Sans Semibold - 600)
  - `gsb.otf` (General Sans Bold - 700)
  - `gsl.otf` (General Sans Light - 300)
  - `gsel.otf` (General Sans Extra Light - 200)

> [!IMPORTANT]
> The `brand/fonts/` directory serves as the master source asset kit for designers and developers to install locally on their computers. For live web rendering, production-ready copies are stored inside the `public/fonts/` directory and imported by the Next.js runtime inside the layout loader.

### C. Secondary UI Font: **Instrument Serif**

A sleek, editorial serif typeface used for major section headings.
- **Weights**: 400.
