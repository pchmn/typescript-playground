import {
  Scheme,
  argbFromHex,
  themeFromSourceColor,
} from "@material/material-color-utilities";
import color from "color";
import { createThemeFromSourceColor } from "./createMaterial3Theme.js";
import { generateCssColors } from "./generateCssColors.js";

function main() {
  const { light, dark } = createThemeFromSourceColor("#9CD67D");

  const cssColors = generateCssColors({
    light: {
      background: light.background,
      foreground: light.onBackground,
      card: light.surfaceContainerLower,
      cardForeground: light.onSurface,
      popover: light.surfaceContainerLower,
      popoverForeground: light.onSurface,
      primary: light.primary,
      primaryForeground: light.onPrimary,
      secondary: light.secondary,
      secondaryForeground: light.onSecondary,
      muted: light.onSecondary,
      mutedForeground: light.secondary,
      accent: light.secondaryContainer,
      accentForeground: light.onSecondaryContainer,
      destructive: light.error,
      destructiveForeground: light.onError,
      border: light.surfaceVariant,
      input: light.surfaceVariant,
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
      mutedForeground: dark.secondary,
      accent: dark.secondaryContainer,
      accentForeground: dark.onSecondaryContainer,
      destructive: dark.error,
      destructiveForeground: dark.onError,
      border: dark.surfaceVariant,
      input: dark.surfaceVariant,
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
