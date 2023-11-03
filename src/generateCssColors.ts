interface ColorScheme {
  background: string;
  foreground: string;
  card: string;
  cardForeground: string;
  popover: string;
  popoverForeground: string;
  primary: string;
  primaryForeground: string;
  secondary: string;
  secondaryForeground: string;
  muted: string;
  mutedForeground: string;
  accent: string;
  accentForeground: string;
  destructive: string;
  destructiveForeground: string;
  border: string;
  input: string;
  ring: string;
}

interface CssColors {
  light: ColorScheme & { radius: string };
  dark: ColorScheme;
}

export function generateCssColors(colors: CssColors) {
  return `
@layer base {
  :root {
    --background: ${colors.light.background};
    --foreground: ${colors.light.foreground};
    --card: ${colors.light.card};
    --card-foreground: ${colors.light.cardForeground};
    --popover: ${colors.light.popover};
    --popover-foreground: ${colors.light.popoverForeground};
    --primary: ${colors.light.primary};
    --primary-foreground: ${colors.light.primaryForeground};
    --secondary: ${colors.light.secondary};
    --secondary-foreground: ${colors.light.secondaryForeground};
    --muted: ${colors.light.muted};
    --muted-foreground: ${colors.light.mutedForeground};
    --accent: ${colors.light.accent};
    --accent-foreground: ${colors.light.accentForeground};
    --destructive: ${colors.light.destructive};
    --destructive-foreground: ${colors.light.destructiveForeground};
    --border: ${colors.light.border};
    --input: ${colors.light.input};
    --ring: ${colors.light.ring};
    --radius: ${colors.light.radius};
  }

  .dark {
    --background: ${colors.dark.background};
    --foreground: ${colors.dark.foreground};
    --card: ${colors.dark.card};
    --card-foreground: ${colors.dark.cardForeground};
    --popover: ${colors.dark.popover};
    --popover-foreground: ${colors.dark.popoverForeground};
    --primary: ${colors.dark.primary};
    --primary-foreground: ${colors.dark.primaryForeground};
    --secondary: ${colors.dark.secondary};
    --secondary-foreground: ${colors.dark.secondaryForeground};
    --muted: ${colors.dark.muted};
    --muted-foreground: ${colors.dark.mutedForeground};
    --accent: ${colors.dark.accent};
    --accent-foreground: ${colors.dark.accentForeground};
    --destructive: ${colors.dark.destructive};
    --destructive-foreground: ${colors.dark.destructiveForeground};
    --border: ${colors.dark.border};
    --input: ${colors.dark.input};
    --ring: ${colors.dark.ring};
  }
}  
`;
  return `
  @layer base {
    :root {
      --background: 60 64% 98%;
      --foreground: 222.2 84% 4.9%;
      --card: 73 33% 95%;
      --card-foreground: 222.2 84% 4.9%;
      --popover: 73 33% 95%;
      --popover-foreground: 222.2 84% 4.9%;
      --primary: 101 55% 27%;
      --primary-foreground: 0 0% 100%;
      --secondary: 210 40% 96.1%;
      --secondary-foreground: 222.2 47.4% 11.2%;
      --muted: 210 40% 96.1%;
      --muted-foreground: 215.4 16.3% 46.9%;
      --accent: 210 40% 96.1%;
      --accent-foreground: 222.2 47.4% 11.2%;
      --destructive: 0 84.2% 60.2%;
      --destructive-foreground: 0 0% 100%;
      --border: 83 19% 87%;
      --input: 83 19% 87%;
      --ring: 101 55% 27%;
      --radius: 0.75rem;
    }
   
    .dark {
      --background: 90 8% 10%;
      --foreground: 210 40% 98%;
      --card: 96 14% 14%;
      --card-foreground: 210 40% 98%;
      --popover: 96 14% 14%;
      --popover-foreground: 210 40% 98%;
      --primary: 99 52% 66%;
      --primary-foreground: 101.80000000000001 100% 11%;
      --secondary: 217.2 32.6% 17.5%;
      --secondary-foreground: 210 40% 98%;
      --muted: 217.2 32.6% 17.5%;
      --muted-foreground: 215 20.2% 65.1%;
      --accent: 217.2 32.6% 17.5%;
      --accent-foreground: 210 40% 98%;
      --destructive: 0 62.8% 30.6%;
      --destructive-foreground: 210 40% 98%;
      --border: 90 7% 26%;
      --input: 90 7% 26%;
      --ring: 99 52% 66%;
    }
  }
  `;
}
