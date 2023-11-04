import {
  Scheme,
  argbFromHex,
  themeFromSourceColor,
} from "@material/material-color-utilities";
import { default as Color, default as color } from "color";
import { createThemeFromSourceColor } from "./createMaterial3Theme.js";
import { generateCssColors } from "./generateCssColors.js";

function main() {
  const { light, dark } = createThemeFromSourceColor("#E5DFFF");

  const cssColors = generateCssColors({
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
      muted: light.onSecondary,
      mutedForeground: light.outline,
      accent: Color(light.surfaceVariant).lighten(0.05).hex(),
      accentForeground: light.onSurfaceVariant,
      destructive: light.error,
      destructiveForeground: light.onError,
      border: Color(light.surfaceVariant).lighten(0.03).hex(),
      input: Color(light.surfaceVariant).lighten(0.03).hex(),
      ring: light.primary,
      radius: "0.75rem",
    },
    dark: {
      background: dark.background,
      foreground: dark.onBackground,
      card: dark.surfaceContainerLower,
      cardForeground: dark.onSurface,
      popover: dark.surfaceContainerLower,
      popoverForeground: dark.onSurface,
      primary: dark.primary,
      primaryForeground: dark.onPrimary,
      secondary: dark.secondary,
      secondaryForeground: dark.onSecondary,
      muted: dark.onSecondary,
      mutedForeground: dark.outline,
      accent: Color(dark.surfaceVariant).darken(0.2).hex(),
      accentForeground: dark.onSurfaceVariant,
      destructive: dark.error,
      destructiveForeground: dark.onError,
      border: Color(dark.surfaceVariant).darken(0.2).hex(),
      input: Color(dark.surfaceVariant).darken(0.2).hex(),
      ring: dark.primary,
    },
  });

  console.log(JSON.stringify({ light, dark }, null, 2));
  console.log(cssColors);
}

function generateSchemesFromSourceColor(sourceColor: string) {
  const { schemes, palettes } = themeFromSourceColor(argbFromHex(sourceColor));

  return {
    light: transformScheme(schemes.light),
    dark: transformScheme(schemes.dark),
    palettes,
  };
}

function transformScheme(scheme: Scheme) {
  const jsonScheme = scheme.toJSON();
  type SchemeKeys = keyof typeof jsonScheme;

  return Object.entries(jsonScheme).reduce((acc, [key, value]) => {
    return {
      ...acc,
      [key]: color(value)
        .hsl()
        .round()
        .string()
        .replace(/(hsl\(|\)|,)/g, ""),
    };
  }, {} as { [key in SchemeKeys]: string });
}

main();
