const lightColorSet = {
  mainThemeBackgroundColor: "#ffffff",
  mainThemeBackgroundSecondaryColor: "#ffffff",
  mainThemeForegroundColor: "#3C3F44",
};

const darkColorSet = {
  mainThemeBackgroundColor: "#20232A",
  mainThemeBackgroundSecondaryColor: "#282C34",
  mainThemeForegroundColor: "#edeff5",
};

const colorSet = {
  ...lightColorSet,
  light: lightColorSet,
  dark: darkColorSet,
  "no-preference": lightColorSet,
};

const StyleDict = {
  colorSet,
};

export default StyleDict;
