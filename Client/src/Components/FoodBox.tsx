import React from "react"
import { ImageBackground, View, Text, StyleSheet, Image } from "react-native"
import { ImageComponent } from "./Image"
import { IngredientTag } from "./IngredientTag"
import { GridView } from "./GridView"

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

export const FoodBoxType1 = () => {
    return (
        <View className="h-80 flex-column w-full"
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
                }} 
                className="relative h-64"
                imageStyle={{ borderTopLeftRadius: 8, borderTopRightRadius: 8}}
            >
                <View className="absolute bottom-12 left-3 flex-column">
                    <View className="flex-row items-center"> 
                        <ImageComponent source={{uri: "https://plus.unsplash.com/premium_photo-1700175395626-360f76faa0c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwMTk1Nzk2MQ&ixlib=rb-4.0.3&q=80&w=1080"}} variant="circle" size="xs"/>
                        <Text style={styles.owner}>
                            {'Arany Green'}
                        </Text>
                    </View>
                    <View className="flex-row items-center"> 
                        <Text style={styles.title}>
                            {'Cơm chiên thịt bò'}
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
            <View className="flex-1 w-full m-2">
                <GridView data={testData} cols={3} renderItem={(item) =>
                    <View style={styles.itemContainer}>
                        <View className='flex-1'>
                            <Image
                                source={{uri: "https://source.unsplash.com/random"}}
                                className='h-100'
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

const styles = StyleSheet.create({
    owner: {
        color: 'white',
        paddingLeft: 3
    },
    title: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },
    itemContainer: {
        marginHorizontal: 4,
        height: 150,
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderRadius: 8,
        display: 'flex',
        flexDirection: 'column'
    },
    image: {}
})