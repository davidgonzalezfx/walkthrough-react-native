import { StyleSheet } from 'react-native'

const dynamicStyles = (appStyles, colorScheme) => {
  return StyleSheet.create({
    title: {
      fontSize: 25,
      fontWeight: 'bold',
      textAlign: 'center',
      paddingBottom: 25,
      color: appStyles.colorSet[colorScheme].mainThemeForegroundColor
    },
    text: {
      fontSize: 18,
      textAlign: 'center',
      color: appStyles.colorSet[colorScheme].mainThemeForegroundColor,
      paddingLeft: 10,
      paddingRight: 10
    },
    image: {
      flex: 3,
      width: 400,
      height: 400
    },
    info: {
      flex: 2,
      paddingTop: 32,
      width: '100%',
      backgroundColor: appStyles.colorSet[colorScheme].mainThemeBackgroundSecondaryColor,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: appStyles.colorSet[colorScheme].mainThemeBackgroundColor,
      paddingHorizontal: 0
    },
    button: {
      fontSize: 18,
      color: 'white',
      marginTop: 10
    },
    nextButton: {
      alignItems: 'center',
      justifyContent: 'center',
      height: 50,
      backgroundColor: '#3FB1B5',
      borderRadius: 15,
      color: '#ffffff'
    },
    gettingStartedButton: {
      alignItems: 'center',
      justifyContent: 'center',
      height: 50,
      backgroundColor: '#FE5244',
      borderRadius: 15,
      color: '#ffffff'
    },
    buttonsText: {
      color: '#fff',
      fontSize: 18
    }
  })
}

export default dynamicStyles
