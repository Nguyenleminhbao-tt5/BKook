import React from "react"
import { ImageBackground, View, Text, StyleSheet, Image } from "react-native"
import { ImageComponent } from "./Image"
import { IngredientTag } from "./IngredientTag"
import { GridView } from "./GridView"
import { RecipeType } from "../Screens/Home/type"

const testData = [
    {
        name: 'Mon 1'
    },
    {
        name: 'Mon 1'
    },
    {
        name: 'Mon 1'
    }
]

const dataType3 = [
    {
        name: 'Mon 1'
    },
    {
        name: 'Mon 1'
    },
    {
        name: 'Mon 1'
    },
    {
        name: 'Mon 1'
    }
]

type FoodBoxProps = {
    recip: RecipeType
}

export const FoodBoxType1: React.FC<FoodBoxProps> = (props) => {

    const recipe = props.recip

    return (
        <View className="h-80 flex-column"
            style={{
                borderWidth: 1,
                borderRadius: 8,
                borderColor: 'white',
                backgroundColor: '#2f2f2f'
            }}
        >
            <ImageBackground 
                source={{uri: recipe.imgUrl}} 
                resizeMode="cover"
                style={{
                    width: '100%',
                }} 
                className="relative h-64"
                imageStyle={{ borderTopLeftRadius: 8, borderTopRightRadius: 8}}
            >
                <View className="absolute bottom-5 left-3 flex-column">
                    <View className="flex-row items-center"> 
                        <ImageComponent source={{uri: "https://plus.unsplash.com/premium_photo-1700175395626-360f76faa0c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwMTk1Nzk2MQ&ixlib=rb-4.0.3&q=80&w=1080"}} variant="circle" size="xs"/>
                        <Text style={styles.owner}>
                            {'Arany Green'}
                        </Text>
                    </View>
                    <View className="flex-row items-center"> 
                        <Text style={styles.title}>
                            {props.recip.name}
                        </Text>
                    </View>
                </View>
            </ImageBackground>
            <View className="flex-row flex-1 items-center justify-between">
                <View className="flex-row flex-1 items-center pl-3">
                    <IngredientTag name={'4'} iconUrl={''}/>
                    <IngredientTag name={'4'} iconUrl={''}/>
                    <IngredientTag name={'4'} iconUrl={''}/>
                </View>
                <View className="pr-1">
                    <IngredientTag name={'4'} iconUrl={''}/>
                </View>
            </View>
        </View>
    )
}

export const FoodBoxType2 = () => {
    return (
        <View className="h-80 flex-column items-center"
            style={{
                borderWidth: 1,
                borderRadius: 8,
                borderColor: 'white',
                backgroundColor: '#2f2f2f'
            }}
        >
            <ImageBackground 
                source={{uri: "https://source.unsplash.com/random"}} 
                resizeMode="cover"
                style={{
                    width: '100%',
                    height: '100%'
                }} 
                className="relative flex-1"
                imageStyle={{ borderTopLeftRadius: 8, borderTopRightRadius: 8}}
            >
                <View className="absolute bottom-5 left-3 flex-column">
                    <View className="flex-row items-center"> 
                        <Text style={styles.owner}>
                            {'Ruoi'}
                        </Text>
                    </View>
                    <View className="flex-row items-center"> 
                        <Text style={styles.owner}>
                            {'69 Mon'}
                        </Text>
                    </View>
                </View>
            </ImageBackground>
            <View className="w-full h-full flex-1">
                <GridView data={testData} cols={3} renderItem={(item) =>
                    <View className='w-full h-full'>
                        <View className='flex-1 w-full'>
                            <Image
                                source={{uri: "https://source.unsplash.com/random"}}
                                style={{width: '100%', height: '100%', borderTopLeftRadius: 8, borderTopRightRadius: 8}}
                            />
                        </View>
                        <View className='flex-1'>
                            <Text>{item.name}</Text>
                        </View>

                    </View>
                
                } />
            </View>
        </View>
    )
}

export const FoodBoxType3 = () => {
    return (
        <View className="h-60 flex-column items-center"
            style={{
                borderWidth: 1,
                borderRadius: 8,
                borderColor: 'white',
                backgroundColor: '#2f2f2f'
            }}
        >
            <View>
                <GridView data={dataType3} cols={2} renderItem={(item) =>
                    <View className='w-full h-full'>
                        <ImageBackground 
                            source={{uri: "https://source.unsplash.com/random"}} 
                            resizeMode="cover"
                            style={{
                                width: '100%',
                                height: '100%'
                            }} 
                            className="relative flex-1"
                            imageStyle={{ borderRadius: 8}}
                        >
                            <View className="absolute bottom-5 left-3 flex-column">
                                <View className="flex-row items-center"> 
                                    <Text style={styles.owner}>
                                        {'Ruoi'}
                                    </Text>
                                </View>
                                <View className="flex-row items-center"> 
                                    <Text style={styles.owner}>
                                        {'69 Mon'}
                                    </Text>
                                </View>
                            </View>
                        </ImageBackground>

                    </View>
                
                } />
            </View>
        </View>
    )
}

export const FoodBoxType4 = () => {
    return (
        <View className="h-60 flex-column items-center"
            style={{
                borderWidth: 1,
                borderRadius: 8,
                borderColor: 'white',
                backgroundColor: '#2f2f2f'
            }}
        >
            <View className="w-full h-full flex-1">
                <View className='w-full h-full'>
                    <View className='h-3/5 w-full'>
                        <Image
                            source={{uri: "https://source.unsplash.com/random"}}
                            style={{width: '100%', height: '100%', borderTopLeftRadius: 8, borderTopRightRadius: 8}}
                        />
                    </View>
                    <View className='flex-1'>
                        <View className="flex-column m-2">
                            <View className="flex-row items-center"> 
                                <ImageComponent source={{uri: "https://plus.unsplash.com/premium_photo-1700175395626-360f76faa0c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwMTk1Nzk2MQ&ixlib=rb-4.0.3&q=80&w=1080"}} variant="circle" size="xxs"/>
                                <Text style={styles.owner}>
                                    {'Arany Green'}
                                </Text>
                            </View>
                            <View className="flex-row items-center"> 
                                <Text style={styles.subTitle}>
                                    {'Cơm chiên thịt bò'}
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export const FoodBoxType5 = () => {
    return (
        <View className="h-80 flex-column w-full"
            style={{
                borderWidth: 1,
                borderRadius: 8,
                borderColor: 'white',
                backgroundColor: '#2f2f2f'
            }}
        >
            <View className='h-4/5'>
            <View className="flex-column m-3">
                <View className="flex-row items-center"> 
                        <ImageComponent 
                            source={{uri: "https://source.unsplash.com/random"}} 
                            variant="circle" 
                            size="xs"
                        />
                        <Text style={styles.owner}>
                            {'Arany Green'}
                        </Text>
                    </View>
                    <View className="flex-row items-center pt-3"> 
                        <Text style={styles.subTitle}>
                            {'Cách loại bỏ độc tố trong măng trước khi nấu'}
                        </Text>
                    </View>
                    <View className="flex-row items-center pt-3"> 
                        <Text style={{color: 'white'}}>
                            {'Măng là một nguyên liệu quen thuộc trong các bữa ăn gia đình. Có nhiều loại măng bán sẵn như măng tươi, măng chua, măng...'}
                        </Text>
                    </View>
                    <View className='h-14 w-20 mt-5'>
                        <Image
                            source={{uri: "https://source.unsplash.com/random"}}
                            style={{width: '100%', height: '100%', borderRadius: 6}}
                        />
                    </View>
                </View>
            </View>
            <View className="flex-row flex-1 items-center justify-between">
                <View className="flex-row flex-1 items-center pl-3">
                    <IngredientTag name={'4'} iconUrl={''}/>
                    <IngredientTag name={'4'} iconUrl={''}/>
                    <IngredientTag name={'4'} iconUrl={''}/>
                </View>
                <View className="pr-1">
                    <IngredientTag name={'4'} iconUrl={''}/>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    owner: {
        color: 'white',
        paddingLeft: 8
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
    image: {}
})