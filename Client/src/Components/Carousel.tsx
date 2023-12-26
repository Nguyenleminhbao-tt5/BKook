// import { View, Text, StyleSheet, Dimensions, Image } from "react-native"
// import React from "react"
// import Carousel from 'react-native-snap-carousel'




// type dataType = {
//   title: string,
//   body: string,
//   imgUrl: string
// }
// type CarouselCardItemProps = {
//   item: dataType,
//   index: any
// }



// type CarouselCardsProps = {
//   children: React.ReactElement
//   data: any
// }

// export const CarouselCards: React.FC<CarouselCardsProps> = ({children, data}) => {

//     const isCarousel = React.useRef(null)

//     const CarouselCardItem = () => {
//       return (
//         <View className='mx-3'>
//             {
//               children
//             }
//         </View>
//       )
//     }
    

//     return (
//       <View>
//         <Carousel
//           layout='default'
//           vertical={false}
//           layoutCardOffset={1}
//           ref={isCarousel}
//           data={data}
//           renderItem={CarouselCardItem}
//           sliderWidth={SLIDER_WIDTH}
//           itemWidth={ITEM_WIDTH}
//           inactiveSlideShift={0}
//           useScrollView={false}
//         />
//     </View>
//     )
// }

import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { RecipeType } from '../Screens/Home/type';

const SLIDER_WIDTH = Dimensions.get('window').width
const ITEM_WIDTH = Dimensions.get('window').width

// Define the component props
interface CarouselProps {
  data: any[];
  renderItem: (item: any) => React.ReactNode;
}

export const CarouselCards: React.FC<CarouselProps> = ({ data, renderItem  }) => {
  const [activeSlide, setActiveSlide] = React.useState(0);

  const renderCarouselItem  = ({ item }: { item: RecipeType }) => (
      <View className='mx-3'>
          {renderItem(item)}
      </View>
  );

  return (
    <View>
      <Carousel
        vertical={false}
        data={data}
        renderItem={renderCarouselItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={(index) => setActiveSlide(index)}
      />
    </View>
  );
};

