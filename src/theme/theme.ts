import { MD3LightTheme, MD3DarkTheme } from 'react-native-paper';

// Material Design 3 Light Theme
export const lightTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#1976D2', // MD3 Blue
    primaryContainer: '#D3E4FD',
    secondary: '#03DAC6', // MD3 Teal
    secondaryContainer: '#B2DFDB',
    tertiary: '#FF6F00', // MD3 Orange
    tertiaryContainer: '#FFE0B2',
    surface: '#FFFFFF',
    surfaceVariant: '#F5F5F5',
    surfaceDisabled: '#E0E0E0',
    background: '#FAFAFA',
    error: '#B00020',
    errorContainer: '#FFDAD6',
    onPrimary: '#FFFFFF',
    onPrimaryContainer: '#001B3E',
    onSecondary: '#003D33',
    onSecondaryContainer: '#003D33',
    onTertiary: '#FFFFFF',
    onTertiaryContainer: '#2A1700',
    onSurface: '#1C1B1F',
    onSurfaceVariant: '#49454F',
    onSurfaceDisabled: '#9E9E9E',
    onError: '#FFFFFF',
    onErrorContainer: '#410E0B',
    onBackground: '#1C1B1F',
    outline: '#79747E',
    outlineVariant: '#C4C7C5',
    inverseSurface: '#2E3133',
    inverseOnSurface: '#F0F0F4',
    inversePrimary: '#A4C8FF',
    shadow: '#000000',
    scrim: '#000000',
    backdrop: 'rgba(0, 0, 0, 0.4)',
  },
};

// Material Design 3 Dark Theme
export const darkTheme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    primary: '#90CAF9', // MD3 Blue
    primaryContainer: '#004A77',
    secondary: '#80CBC4', // MD3 Teal
    secondaryContainer: '#004D40',
    tertiary: '#FFB74D', // MD3 Orange
    tertiaryContainer: '#C66900',
    surface: '#0F1419',
    surfaceVariant: '#1C1B1F',
    surfaceDisabled: '#2E3133',
    background: '#0F1419',
    error: '#CF6679',
    errorContainer: '#B1384E',
    onPrimary: '#001B3E',
    onPrimaryContainer: '#D3E4FD',
    onSecondary: '#003D33',
    onSecondaryContainer: '#B2DFDB',
    onTertiary: '#2A1700',
    onTertiaryContainer: '#FFE0B2',
    onSurface: '#E6E1E5',
    onSurfaceVariant: '#C4C7C5',
    onSurfaceDisabled: '#9E9E9E',
    onError: '#000000',
    onErrorContainer: '#FFDAD6',
    onBackground: '#E6E1E5',
    outline: '#8E918F',
    outlineVariant: '#41484D',
    inverseSurface: '#E6E1E5',
    inverseOnSurface: '#2E3133',
    inversePrimary: '#1976D2',
    shadow: '#000000',
    scrim: '#000000',
    backdrop: 'rgba(0, 0, 0, 0.6)',
  },
};

// Default to light theme for backward compatibility
export const theme = lightTheme;

// Enhanced colors object with MD3 palette
export const colors = {
  primary: '#1976D2',
  primaryLight: '#42A5F5',
  primaryDark: '#1565C0',
  secondary: '#03DAC6',
  secondaryLight: '#4DB6AC',
  secondaryDark: '#00897B',
  tertiary: '#FF6F00',
  tertiaryLight: '#FF9800',
  tertiaryDark: '#E65100',
  success: '#4CAF50',
  successLight: '#81C784',
  successDark: '#388E3C',
  warning: '#FF9800',
  warningLight: '#FFB74D',
  warningDark: '#F57C00',
  error: '#F44336',
  errorLight: '#EF5350',
  errorDark: '#D32F2F',
  info: '#2196F3',
  infoLight: '#64B5F6',
  infoDark: '#1976D2',
  white: '#FFFFFF',
  black: '#000000',
  gray: {
    50: '#FAFAFA',
    100: '#F5F5F5',
    200: '#EEEEEE',
    300: '#E0E0E0',
    400: '#BDBDBD',
    500: '#9E9E9E',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
  },
  surface: {
    light: '#FFFFFF',
    dark: '#0F1419',
  },
  background: {
    light: '#FAFAFA',
    dark: '#0F1419',
  },
};
