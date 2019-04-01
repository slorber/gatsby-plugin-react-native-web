import React, { useState } from 'react'

import Layout from '../components/layout'
import {
  SearchBar,
  AirbnbRating,
  Rating,
  Slider,
  PricingCard,
  SocialIcon,
  Tooltip,
  ThemeProvider,
} from 'react-native-elements'
import Example from '../components/example'
import { Text } from 'react-native'

const SearchBarExample = () => {
  const [text, setText] = useState('')
  return (
    <Example title="Searchbar">
      <SearchBar placeholder="Search" onChangeText={setText} value={text} />
    </Example>
  )
}

const AirbnbRatingExample = () => {
  return (
    <Example title="AirbnbRating">
      <AirbnbRating
        count={5}
        reviews={['Very bad', 'Bad', 'OK', 'Good', 'Very good']}
        size={20}
        onFinishRating={rating => alert(rating)}
      />
    </Example>
  )
}

const HeartRatingExample = () => {
  return (
    <Example title="HeartRatingExample">
      <Rating
        type="heart"
        ratingCount={10}
        imageSize={60}
        showRating
        onFinishRating={rating => alert(rating)}
      />
    </Example>
  )
}

const PricingCardExample = () => {
  return (
    <Example title="PricingCard">
      <PricingCard
        style={{ maxWidth: 300 }}
        color="#4f9deb"
        title="Free"
        price="$0"
        info={['1 User', 'Basic Support', 'All Core Features']}
        button={{ title: 'GET STARTED', icon: 'flight-takeoff' }}
      />
    </Example>
  )
}

const SocialIconExample = () => {
  return (
    <Example
      title="SocialIcon"
      style={{ flexDirection: 'row', flexWrap: 'wrap' }}
    >
      <SocialIcon type="twitter" />
      <SocialIcon raised={false} type="gitlab" />
      <SocialIcon light type="medium" />
      <SocialIcon light raised={false} type="medium" />
      <SocialIcon title="Sign In With Facebook" button type="facebook" />
      <SocialIcon title="Some Twitter Message" button type="twitter" />
      <SocialIcon button type="medium" />
      <SocialIcon button light type="instagram" />
    </Example>
  )
}

const TooltipExample = () => {
  return (
    <Example title="Tooltip">
      <Tooltip popover={<Text>Info here</Text>}>
        <Text>Press me</Text>
      </Tooltip>
    </Example>
  )
}

/*
const SliderExample = () => {
  const [value, setValue] = useState(0.35)
  return (
    <Example title="HeartRatingExample">
      <Slider value={value} onValueChange={setValue} />
      <Text>Value: {value}</Text>
    </Example>
  )
}
*/

const Elements = () => (
  <ThemeProvider>
    <Layout title={'react-native-elements examples'}>
      <SearchBarExample />
      <AirbnbRatingExample />
      <HeartRatingExample />
      <PricingCardExample />
      <SocialIconExample />
      <TooltipExample />
    </Layout>
  </ThemeProvider>
)

export default Elements
