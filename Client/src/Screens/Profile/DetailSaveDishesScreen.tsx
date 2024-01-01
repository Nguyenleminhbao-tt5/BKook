
import React from 'react';
import { View, Text, FlatList, StyleSheet, ImageBackground } from 'react-native';
import {ArrowLeftIcon} from 'react-native-heroicons/solid'
import {EllipsisVerticalIcon} from 'react-native-heroicons/solid'
import {BookmarkIcon} from 'react-native-heroicons/outline'
import { useScrollToTop } from '@react-navigation/native';


import { useNavigation } from '@react-navigation/native';

import { LinearGradient } from 'expo-linear-gradient'
import { tags } from '../Home/data';
import { GridView } from '@/Components/GridView';
import { ImageComponent } from '@/Components/Image';
import { ButtonComponent } from '@/Components/Button';
import { Divider } from 'native-base';
import { FoodBoxType4 } from '@/Components/FoodBox';
import { useRoute } from "@react-navigation/native";
import { useUser } from '@/Components/Context/UserContext';
import { RecipeType } from '../Home/type';



export const DetailSaveDishesScreen = () => {


    const test = ['test']

    const navigation = useNavigation()
    const route = useRoute()
    const { userInfo, onAddSaveDishes} = useUser()
    const {name, owner, ownerAvatar, like, heart, clap, imgUrl, ingredient, ingredientDetail, stepList} = route.params.recipe

    const checkSave = () => {
      if (userInfo.saveDishes.filter(i => i.name === name)) {
        return "Đã lưu"
      }
      else return "Lưu món"
    }

    const renderItem = () => (
      <View >
        <View>
          <ImageBackground 
            source={{uri: `${imgUrl}`}} 
            resizeMode="cover"
            style={{
                width: '100%',
            }} 
            className="h-64"
            imageStyle={{ borderTopLeftRadius: 8, borderTopRightRadius: 8}}
        >   

        </ImageBackground>
        </View>
        <View>
          <View className="flex-column m-4">
              <View className="flex-row items-center"> 
                  <Text style={styles.title}>
                    {name}
                  </Text>
              </View>
              <View className="flex-row items-center my-4"> 
                  <ImageComponent source={{uri: "https://plus.unsplash.com/premium_photo-1700175395626-360f76faa0c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwMTk1Nzk2MQ&ixlib=rb-4.0.3&q=80&w=1080"}} variant="circle" size="xs"/>
                  <View className="flex flex-cols justify-center pl-3">
                    <Text style={styles.owner}>
                      {owner}
                    </Text>
                    <Text style={styles.ownerId}>
                      @cook_1911975
                    </Text>
                  </View>
                  
              </View>
              <ButtonComponent 
                title={checkSave()} 
                icon={<BookmarkIcon size={26} 
                color={'white'}/>} 
                bgColor="orange" 
                width="w-full" 
                height="h-10"
                onPress={() => onAddSaveDishes(route.params.recipe as RecipeType)}
              />
              <View className='mx-1 my-2'>
                <Divider/>
              </View>
          </View>
        </View>
        <View className='m-4'>
          <Text style={styles.title} className='pb-6'>Nguyên liệu</Text>
          {
            ingredientDetail.map((ingredient: string, key: number) => (
              <View key={key}>
                <Text style={styles.owner} className='py-3'>{ingredient}</Text>
                {
                  key === ingredientDetail.length - 1 ? <View className='pt-8'><Divider /></View> : <Divider />
                }
              </View>
            ))
          }
        </View>
        <View className='m-4'>
          <Text style={styles.title} className='pb-6'>Cách làm</Text>
          {
            stepList.map((buoc:any, key:any) => (
              <View key={key} className='flex flex-row items-start'>
                <View className='bg-white w-6 h-6 rounded-full flex justify-center items-center mr-6 mt-4'><Text>{key + 1}</Text></View>
                <View className='flex-1 flex flex-cols'>
                  <Text style={styles.owner} className='py-3 flex-1'>{buoc.describe}</Text>
                  <View className='flex flex-row flex-wrap'>
                    {
                      buoc.image.map((img:any, key:any) => (
                        <View className='p-1' key={key}>
                          <ImageComponent source={{uri: `${img}`}} variant='rounded'/>
                        </View>
                      ))
                    }
                  </View>
                </View>
              </View>
            ))
          }
        </View>
        <View className='mx-4 my-2'>
          <Divider/>
        </View>
        <View className='m-4'>
          <Text style={styles.title} className='pb-6'>Món mới</Text>
          <View className="flex-1 justify-start items-start">
            <View>
                <View className='w-full'>
                    <GridView data={tags.flatMap(tag => tag.recipeList)} cols={2} renderItem={(item) =>
                        <FoodBoxType4 recip={item}/>
                    } />
                </View>
              </View>
          </View>
        </View>
      </View>
    );

    const renderHeader = () => (
        <View style={styles.header}>
            <ArrowLeftIcon color={'white'} onPress={() => navigation.goBack()}/>
            <View className="flex flex-row items-center">
              <View className="px-4">
                <BookmarkIcon color={'white'} />
              </View>
              <EllipsisVerticalIcon color={'white'} />
            </View>
        </View>
    );

    return (
        <FlatList
          data={test}
          renderItem={renderItem}
          keyExtractor={(item) => item}
          ListHeaderComponent={renderHeader}
          stickyHeaderIndices={[0]}
          className="bg-[#1b1b1b]"
        />
    );
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    borderBottomColor: '#ccc',
  },
  header: {
    backgroundColor: 'black',
    padding: 20,
    borderBottomColor: '#ccc',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 18,    
    color: 'white',
    paddingLeft: 12
  },
  owner: {
      color: 'white',
  },
  title: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold'
  },
  subTitle: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
  },
  ownerId: {
    color: "#848484"
  }
});