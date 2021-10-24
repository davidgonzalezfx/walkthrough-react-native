import React, { useRef } from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import AppIntroSlider from 'react-native-app-intro-slider'
import dynamicStyles from './styles'
import { useColorScheme } from 'react-native-appearance'

const WalkthroughScreen = (props) => {
  const appConfig = props.appConfig
  const appStyles = props.appStyles
  // const colorScheme = useColorScheme()
  const colorScheme = 'dark'
  const styles = dynamicStyles(appStyles, colorScheme)
  const refContainer = useRef(null)

  const slides = appConfig.onboardingConfig.walkthroughScreens.map((screenSpec, index) => {
    return {
      key: `${index}`,
      text: screenSpec.description,
      title: screenSpec.title,
      image: screenSpec.icon
    }
  })

  const _renderItem = ({ item, dimensions }) => (
    <View style={[styles.container, dimensions]}>
      <Image style={styles.image} source={item.image} size={300} color='white' />
      <View style={styles.info}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    </View>
  )

  const _renderNextButton = () => {
    return (
      <View>
        <TouchableOpacity
          onPress={() =>
            refContainer.current.goToSlide(refContainer.current.state.activeIndex + 1, false)
          }
          style={styles.nextButton}
        >
          <Text style={styles.buttonsText}>Next</Text>
        </TouchableOpacity>
      </View>
    )
  }

  const _renderDoneButton = () => {
    return (
      <View>
        <TouchableOpacity style={styles.gettingStartedButton}>
          <Text style={styles.buttonsText}>Getting Started</Text>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <AppIntroSlider
      ref={refContainer}
      data={slides}
      renderItem={_renderItem}
      renderNextButton={_renderNextButton}
      renderDoneButton={_renderDoneButton}
      bottomButton
    />
  )
}

WalkthroughScreen.propTypes = {
  appStyles: PropTypes.object,
  appConfig: PropTypes.object
}

export default WalkthroughScreen
