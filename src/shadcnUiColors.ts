import {
  argbFromHex,
  CorePalette,
  Hct,
  SchemeContent,
  SchemeExpressive,
  SchemeFidelity,
  SchemeFruitSalad,
  SchemeMonochrome,
  SchemeNeutral,
  SchemeRainbow,
  SchemeTonalSpot,
  SchemeVibrant,
} from "@material/material-color-utilities";
import Color from "color";
import { generateCssColors } from "./generateCssColors.js";

export enum Variant {
  MONOCHROME = 0,
  NEUTRAL = 1,
  TONAL_SPOT = 2,
  VIBRANT = 3,
  EXPRESSIVE = 4,
  FIDELITY = 5,
  CONTENT = 6,
  RAINBOW = 7,
  FRUIT_SALAD = 8,
}

export function generateShadcnUiColors(
  hexColor: string,
  variant = Variant.VIBRANT
) {
  const { light, dark, palettes } = generateSchemesFromSourceColor(
    hexColor,
    variant
  );

  return generateCssColors({
    light: {
      background: light.background,
      foreground: light.onBackground,
      card: "#fff",
      cardForeground: light.onSurface,
      popover: "#fff",
      popoverForeground: light.onSurface,
      primary: light.primary,
      primaryForeground: light.onPrimary,
      secondary: light.secondary,
      secondaryForeground: light.onSecondary,
      tertiary: light.tertiary,
      tertiaryForeground: light.onTertiary,
      muted: light.onSecondary,
      mutedForeground: light.outline,
      accent: light.surfaceVariant,
      accentForeground: light.onSurfaceVariant,
      destructive: Color(light.error).lighten(0.45).hex(),
      destructiveForeground: light.onError,
      border: Color(light.surfaceVariant).lighten(0.03).hex(),
      input: light.surfaceVariant,
      ring: light.primary,
      radius: "0.6rem",
    },
    dark: {
      background: dark.background,
      foreground: dark.onBackground,
      card: dark.surfaceContainerLow,
      cardForeground: dark.onSurface,
      popover: dark.surfaceContainerLow,
      popoverForeground: dark.onSurface,
      primary: dark.primary,
      primaryForeground: dark.onPrimary,
      secondary: dark.secondary,
      secondaryForeground: dark.onSecondary,
      tertiary: dark.tertiary,
      tertiaryForeground: dark.onTertiary,
      muted: dark.onSecondary,
      mutedForeground: dark.outline,
      accent: dark.surfaceVariant,
      accentForeground: dark.onSurfaceVariant,
      destructive: Color(light.error).lighten(0.6).hex(),
      destructiveForeground: dark.onError,
      border: Color(dark.surfaceVariant).darken(0.3).hex(),
      input: Color(dark.surfaceVariant).darken(0.1).hex(),
      ring: dark.primary,
    },
  });
}

function generateSchemesFromSourceColor(
  hexColor: string,
  variant = Variant.NEUTRAL
) {
  const argbColor = argbFromHex(hexColor);
  const hctColor = Hct.fromInt(argbColor);

  const palette = CorePalette.of(argbColor);
  const palettes = {
    primary: palette.a1,
    secondary: palette.a2,
    tertiary: palette.a3,
    neutral: palette.n1,
    neutralVariant: palette.n2,
    error: palette.error,
  };

  switch (variant) {
    case Variant.MONOCHROME:
      return {
        light: new SchemeMonochrome(hctColor, false, 0),
        dark: new SchemeMonochrome(hctColor, true, 0),
        palettes,
      };
    case Variant.NEUTRAL:
      return {
        light: new SchemeNeutral(hctColor, false, 0),
        dark: new SchemeNeutral(hctColor, true, 0),
        palettes,
      };
    case Variant.TONAL_SPOT:
      return {
        light: new SchemeTonalSpot(hctColor, false, 0),
        dark: new SchemeTonalSpot(hctColor, true, 0),
        palettes,
      };
    case Variant.VIBRANT:
      return {
        light: new SchemeVibrant(hctColor, false, 0),
        dark: new SchemeVibrant(hctColor, true, 0),
        palettes,
      };
    case Variant.EXPRESSIVE:
      return {
        light: new SchemeExpressive(hctColor, false, 0),
        dark: new SchemeExpressive(hctColor, true, 0),
        palettes,
      };
    case Variant.FIDELITY:
      return {
        light: new SchemeFidelity(hctColor, false, 0),
        dark: new SchemeFidelity(hctColor, true, 0),
        palettes,
      };
    case Variant.CONTENT:
      return {
        light: new SchemeContent(hctColor, false, 0),
        dark: new SchemeContent(hctColor, true, 0),
        palettes,
      };
    case Variant.RAINBOW:
      return {
        light: new SchemeRainbow(hctColor, false, 0),
        dark: new SchemeRainbow(hctColor, true, 0),
        palettes,
      };
    case Variant.FRUIT_SALAD:
      return {
        light: new SchemeFruitSalad(hctColor, false, 0),
        dark: new SchemeFruitSalad(hctColor, true, 0),
        palettes,
      };
    default:
      throw new Error(`Invalid variant: ${variant}`);
  }
}
