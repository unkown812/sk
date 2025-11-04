# Enhance Colors and UI with Modern Color Schemes

## Tasks
- [ ] Update src/theme/theme.ts with Material Design 3 light and dark themes
- [ ] Update tailwind.config.js with MD3 colors and dark mode support
- [ ] Update src/index.css for dark mode utilities
- [ ] Update src/style.css for better dark mode support
- [ ] Test dark mode toggle in settings
- [ ] Verify UI components use new themes properly

## Information Gathered
- Project uses React Native Paper for mobile screens and Tailwind CSS for web pages
- Current theme has blue primary (#3550B2), orange secondary (#FF8A00)
- Settings screen has dark mode toggle but no full dark theme implementation
- Colors are used in screens like Dashboard, Students, Fees, etc.

## Plan
1. Implement Material Design 3 color palette (light and dark variants)
2. Add dark mode support to themes
3. Update Tailwind config with new color tokens
4. Enhance CSS with dark mode classes
5. Ensure components adapt to theme changes

## Dependent Files
- src/theme/theme.ts
- tailwind.config.js
- src/index.css
- src/style.css
- src/screens/SettingsScreen.tsx (for dark mode toggle functionality)
