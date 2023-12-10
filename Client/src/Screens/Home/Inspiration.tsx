

import React from "react"
import { Text,View, StyleSheet, ScrollView, Image, ImageBackground } from "react-native"
import { Ingredients, recipe } from "./data"
import { MagnifyingGlassIcon } from "react-native-heroicons/solid"
import { ButtonComponent } from "../../Components/Button"
// import { CarouselCards } from "../../Components/Carousel"
import { GridView } from "../../Components/GridView"
import { FoodBoxType1, FoodBoxType2, FoodBoxType3, FoodBoxType4, FoodBoxType5 } from "../../Components/FoodBox"
import { IngredientTag } from "../../Components/IngredientTag"
import {CarouselCards} from '../../Components/Carousel'

const data = [
    {
        name: 'Son1',
        id: 1
    },
    {
        name: 'Son2',
        id: 2
    },
    {
        name: 'Son3',
        id: 3
    },
    {
        name: 'Son4',
        id: 4
    },
]

const slider: dataType[] = [
    {
      title: "Aenean leo",
      body: "Ut tincidunt tincidunt erat. Sed cursus turpis vitae tortor. Quisque malesuada placerat nisl. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
      imgUrl: "https://picsum.photos/id/11/200/300",
    },
    {
      title: "In turpis",
      body: "Aenean ut eros et nisl sagittis vestibulum. Donec posuere vulputate arcu. Proin faucibus arcu quis ante. Curabitur at lacus ac velit ornare lobortis. ",
      imgUrl: "https://picsum.photos/id/10/200/300",
    },
    {
      title: "Lorem Ipsum",
      body: "Phasellus ullamcorper ipsum rutrum nunc. Nullam quis ante. Etiam ultricies nisi vel augue. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.",
      imgUrl: "https://picsum.photos/id/12/200/300",
    },
  ];

export const Inspiration = () => {


    return (
        <ScrollView
            className="bg-[#242424]"
        >
            <View className="flex-column justify-start items-start">
                <View className="pt-2 m-3">
                    <Text style={styles.title}>Trong tủ lạnh nhà bạn có gì</Text>
                    <Text style={styles.subTitle}>Chọn đến 2 nguyên liệu</Text>
                    <View className="flex-row flex-wrap pt-4">
                        {
                            Ingredients.map((ingredient, index) => (
                                <IngredientTag name={ingredient.name} iconUrl={ingredient.iconUrl} key={index}/>
                            ))
                        }
                    </View>    
                </View>
                <View className='flex-row w-full'>
                    <CarouselCards 
                        data={recipe} 
                        renderItem={(item) => <FoodBoxType1 recip={item} />}
                    />
                </View>
                <View>
                    <ButtonComponent
                        title={"Gợi ý khác"}
                        icon={<MagnifyingGlassIcon size={26} color={'white'}/>}
                        bgColor="#8C8C8C"
                        width="w-full"
                        height="h-10"
                    />
                </View>
            </View>
            <View className="flex-1 justify-start items-start">
                <View className="pt-2 m-3">
                    <Text style={styles.title}>Khám phá xem thứ gì đang trong mùa nào</Text>
                </View>
                <View className='w-full'>
                    <CarouselCards 
                        data={recipe} 
                        renderItem={(item) => <FoodBoxType2 />}
                    />
                </View>
                <ButtonComponent title={"Gợi ý khác"} icon={<MagnifyingGlassIcon size={26} color={'white'}/>} bgColor="#8C8C8C" width="w-full" height="h-10"/>
            </View>
            <View className="flex-column justify-start items-start">
                <View className="pt-2 m-3">
                    <Text style={styles.title}>Bạn đang thèm món gì?</Text>
                    <Text style={styles.subTitle}>Không chắc? tiếp tục tạo bất ngờ</Text> 
                </View>
                <View className='mx-3'>
                    <FoodBoxType3 />
                </View>
                <ButtonComponent 
                    title={"Gợi ý khác"} 
                    icon={<MagnifyingGlassIcon size={26} color={'white'}/>}
                    bgColor="#8C8C8C"
                    width="w-full" 
                    height="h-10"
                />
            </View>
            <View className="flex-1 justify-start items-start">
                <View className='mx-3 mb-3'>
                    <View className="py-3">
                        <Text style={styles.title}>Món mới nhất</Text>
                    </View>
                    <View className='w-full'>
                        <GridView data={data} cols={2} renderItem={(item) =>
                            <FoodBoxType4 />
                        } />
                    </View>
                </View>
            </View>
            <View className="flex-column justify-start items-start mb-3">
                <View className="pt-2 m-3">
                    <Text style={styles.title}>Bí quyết nấu ăn</Text>
                </View>
                <View className='w-full'>
                    <CarouselCards 
                        data={recipe} 
                        renderItem={(item) => <FoodBoxType5 />}
                    />
                </View>
            </View>
            <View className="flex-1 justify-start items-start">
                <View className='mx-3 mb-3'>
                    <View className="py-3">
                        <Text style={styles.title}>Món mới nhất</Text>
                    </View>
                    <View className='w-full'>
                        <GridView data={data} cols={2} renderItem={(item) =>
                            <FoodBoxType4 />
                        } />
                    </View>
                </View>
            </View>
        </ScrollView>

    )
}



const styles = StyleSheet.create({
    title: {
      color: 'white',
      fontSize: 16,
      fontWeight: '600',
      paddingBottom: 4
    },
    subTitle: {
        color: 'white',
        fontSize: 14,
        fontWeight: '500'
    },
    container: {
        paddingTop: 40
    },
    itemContainer: {
        height: 230,
        justifyContent: 'center',
        alignItems: 'center',
    },
    boxTitle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 25
    }
  });

//   <View className="flex-column justify-start items-start m-3">
//   <View className="pt-2">
//       <Text style={styles.title}>Trong tủ lạnh nhà bạn có gì</Text>
//       <Text style={styles.subTitle}>Chọn đến 2 nguyên liệu</Text>
//       <View className="flex-row flex-wrap pt-4">
//           {
//               Ingredients.map((ingredient, index) => (
//                   <IngredientTag name={ingredient.name} iconUrl={ingredient.iconUrl} key={index}/>
//               ))
//           }
//       </View>
  

    
//   </View>
//   

// </View>
// <View className="justify-start items-start mx-3 mb-3">
//   <View className="pt-2">
//       <Text style={styles.title}>Bạn đang thèm món gì?</Text>
//       <Text style={styles.subTitle}>Không chắc? tiếp tục tạo bất ngờ</Text>
//   </View>
//   <View className="flex-row justify-center mt-4 mb-2">
//       <GridView data={data} renderItem={(item) =>
//           <ImageBackground source={{uri: "https://source.unsplash.com/random"}} resizeMode="cover" style={styles.itemContainer} imageStyle={{ borderRadius: 8}}>
//               <Text style={styles.boxTitle}>
//                   {item.name}
//               </Text>
//           </ImageBackground>
//       } />
//   </View>
//   <ButtonComponent title={"Tạo bất ngờ cho tôi"} icon={<MagnifyingGlassIcon size={26} color={'white'}/>} bgColor="#8C8C8C" width="w-full" height="h-10"/>
// </View>
// 
// <View>
//   <CarouselCards data={slider}>
//       <FoodBoxType1 />
//   </CarouselCards>
// </View>