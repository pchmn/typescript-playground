import {
  Scheme,
  TonalPalette,
  argbFromHex,
  themeFromSourceColor,
} from "@material/material-color-utilities";
import { default as Color, default as color } from "color";

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

const elevations = ["transparent", 0.05, 0.08, 0.11, 0.12, 0.14];

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
          : color(`hsl(${scheme.surface.replaceAll(" ", ",")})`)
              .mix(
                color(`hsl(${scheme.primary.replaceAll(" ", ",")})`),
                Number(value)
              )
              .hex(),
    }),
    {}
  ) as Material3Scheme["elevation"];

  const customColors = {
    surfaceDisabled: toHslString(
      color(`hsl(${scheme.onSurface.replaceAll(" ", ",")})`).alpha(
        opacity.level2
      )
    ),
    onSurfaceDisabled: toHslString(
      color(`hsl(${scheme.onSurface.replaceAll(" ", ",")})`).alpha(
        opacity.level4
      )
    ),
    backdrop: toHslString(color(palettes.neutralVariant.tone(20)).alpha(0.4)),
    surfaceContainer: toHslString(
      color(palettes.neutral.tone(colorScheme === "dark" ? 12 : 94))
    ),
    surfaceContainerLow: toHslString(
      color(palettes.neutral.tone(colorScheme === "dark" ? 10 : 96))
    ),
    surfaceContainerLowest: toHslString(
      color(palettes.neutral.tone(colorScheme === "dark" ? 4 : 100))
    ),
    surfaceContainerHigh: toHslString(
      color(palettes.neutral.tone(colorScheme === "dark" ? 17 : 92))
    ),
    surfaceContainerHighest: toHslString(
      color(palettes.neutral.tone(colorScheme === "dark" ? 22 : 90))
    ),
    surfaceBright: toHslString(
      color(palettes.neutral.tone(colorScheme === "dark" ? 24 : 98))
    ),
    surfaceDim: toHslString(
      color(palettes.neutral.tone(colorScheme === "dark" ? 6 : 87))
    ),
    surfaceContainerLower: toHslString(
      color(palettes.neutral.tone(colorScheme === "dark" ? 16 : 97))
    ),
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
      [key]: toHslString(color(value)),
    };
  }, {} as { [key in SchemeKeys]: string });
}

function toHslString(color: Color) {
  return color
    .hsl()
    .round()
    .string()
    .replace(/(hsl\(|\)|,)/g, "");
}
