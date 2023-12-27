import { View, Text, StyleSheet, Dimensions, Image } from "react-native"
import React from "react"
import Carousel from 'react-native-snap-carousel'


const SLIDER_WIDTH = Dimensions.get('window').width
const ITEM_WIDTH = Dimensions.get('window').width

type dataType = {
  title: string,
  body: string,
  imgUrl: string
}
type CarouselCardItemProps = {
  item: dataType,
  index: any
}



type CarouselCardsProps = {
  children: React.ReactElement
  data: any
}

export const CarouselCards: React.FC<CarouselCardsProps> = ({children, data}) => {

    const isCarousel = React.useRef(null)

    const CarouselCardItem = () => {
      return (
        <View className='mx-3'>
            {
              children
            }
        </View>
      )
    }
    

    return (
      <View>
        <Carousel
          layout='default'
          vertical={false}
          layoutCardOffset={1}
          ref={isCarousel}
          data={data}
          renderItem={CarouselCardItem}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          inactiveSlideShift={0}
          useScrollView={false}
        />
    </View>
    )
}