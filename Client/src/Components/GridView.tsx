import React from "react"
import { View, StyleSheet } from "react-native"


interface GridViewProps<T> {
    data: T[];
    renderItem: (item: T) => JSX.Element;
    cols?: number
}

export const GridView = <T extends any>(props: GridViewProps<T>) => {

    const {data, renderItem, cols = 2} = props

    return (
        <View style={styles.container}>
            {
                data.map((item, index) => {
                    console.log(index)
                    return (
                        <View key={index} style={{width: 100 / cols + '%'}} >
                            <View className={`${index % cols === 0 ? 'ml-2' : index % cols === cols - 1 ? 'mr-2' : 'mx-2'} bg-red-500`}>
                                {renderItem(item)}
                            </View>
                        </ View>
                    )})
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
    }
})