import {
  Scheme,
  TonalPalette,
  argbFromHex,
  themeFromSourceColor,
} from "@material/material-color-utilities";
import { default as color } from "color";

enum ElevationLevels {
  "level0",
  "level1",
  "level2",
  "level3",
  "level4",
  "level5",
}

export type SystemScheme = {
  primary: string;
  onPrimary: string;
  primaryContainer: string;
  onPrimaryContainer: string;

  secondary: string;
  onSecondary: string;
  secondaryContainer: string;
  onSecondaryContainer: string;

  tertiary: string;
  onTertiary: string;
  tertiaryContainer: string;
  onTertiaryContainer: string;

  background: string;
  onBackground: string;

  surface: string;
  onSurface: string;
  surfaceVariant: string;
  onSurfaceVariant: string;

  outline: string;
  outlineVariant: string;

  inverseSurface: string;
  inverseOnSurface: string;
  inversePrimary: string;
};

export type Material3Scheme = SystemScheme & {
  error: string;
  onError: string;
  errorContainer: string;
  onErrorContainer: string;

  shadow: string;
  scrim: string;
  surfaceDisabled: string;
  onSurfaceDisabled: string;
  backdrop: string;

  surfaceContainer: string;
  surfaceContainerLow: string;
  surfaceContainerLowest: string;
  surfaceContainerLower: string;
  surfaceContainerHigh: string;
  surfaceContainerHighest: string;
  surfaceBright: string;
  surfaceDim: string;
  surfaceTint: string;

  outlineVariant: string;

  elevation: {
    [key in keyof typeof ElevationLevels]: string;
  };
};

export type Material3Theme = {
  light: Material3Scheme;
  dark: Material3Scheme;
};

const opacity = {
  level1: 0.08,
  level2: 0.12,
  level3: 0.16,
  level4: 0.38,
};

const elevations = ["transparent", 0.03, 0.08, 0.11, 0.12, 0.14];

type Palettes = {
  primary: TonalPalette;
  secondary: TonalPalette;
  tertiary: TonalPalette;
  neutral: TonalPalette;
  neutralVariant: TonalPalette;
  error: TonalPalette;
};

export function createThemeFromSourceColor(
  sourceColor: string
): Material3Theme {
  const { light, dark, palettes } = generateSchemesFromSourceColor(sourceColor);

  return {
    light: {
      ...light,
      ...generateMissingFields(light, palettes, "light"),
    } as Material3Scheme,
    dark: {
      ...dark,
      ...generateMissingFields(dark, palettes, "dark"),
    } as Material3Scheme,
  };
}

function generateMissingFields(
  scheme: SystemScheme,
  palettes: Palettes,
  colorScheme: "light" | "dark"
) {
  const elevation = elevations.reduce(
    (acc, value, index) => ({
      ...acc,
      [`level${index}`]:
        index === 0
          ? value
          : color(scheme.surface)
              .mix(color(scheme.primary), Number(value))
              .hex(),
    }),
    {}
  ) as Material3Scheme["elevation"];

  const customColors = {
    surfaceDisabled: color(scheme.onSurface)
      .alpha(opacity.level2)
      .rgb()
      .string(),
    onSurfaceDisabled: color(scheme.onSurface)
      .alpha(opacity.level4)
      .rgb()
      .string(),
    backdrop: color(palettes.neutralVariant.tone(20)).alpha(0.4).rgb().string(),
    surfaceContainer: color(
      palettes.neutral.tone(colorScheme === "dark" ? 12 : 94)
    ).hex(),
    surfaceContainerLow: color(
      palettes.neutral.tone(colorScheme === "dark" ? 10 : 96)
    ).hex(),
    surfaceContainerLowest: color(
      palettes.neutral.tone(colorScheme === "dark" ? 4 : 100)
    ).hex(),
    surfaceContainerHigh: color(
      palettes.neutral.tone(colorScheme === "dark" ? 17 : 92)
    ).hex(),
    surfaceContainerHighest: color(
      palettes.neutral.tone(colorScheme === "dark" ? 22 : 90)
    ).hex(),
    surfaceBright: color(
      palettes.neutral.tone(colorScheme === "dark" ? 24 : 98)
    ).hex(),
    surfaceDim: color(
      palettes.neutral.tone(colorScheme === "dark" ? 6 : 87)
    ).hex(),
    outlineVariant: color(
      palettes.neutralVariant.tone(colorScheme === "dark" ? 30 : 80)
    ).hex(),
    surfaceContainerLower: color(
      palettes.neutral.tone(colorScheme === "dark" ? 16 : 97)
    ).hex(),
    surfaceTint: scheme.primary,
  };

  return { elevation, ...customColors };
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
      [key]: color(value).hex(),
    };
  }, {} as { [key in SchemeKeys]: string });
}

export function toHslString(color: color) {
  return color
    .hsl()
    .round()
    .string()
    .replace(/(hsl\(|\)|,)/g, "");
}
