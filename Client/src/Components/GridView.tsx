<<<<<<< HEAD
import React, { useRef } from "react"
=======
import React from "react"
>>>>>>> minhbao-dev
import { View, StyleSheet } from "react-native"


interface GridViewProps<T> {
    data: T[];
    renderItem: (item: T) => JSX.Element;
    cols?: number
}

export const GridView = <T extends any>(props: GridViewProps<T>) => {

    const {data, renderItem, cols = 2} = props

<<<<<<< HEAD
    const ref = useRef<any>()
    
    const rowCount = () => {
        const odds = data.length % cols;
        const row = (data.length - odds)/ cols;
        
        if (odds !== 0) {
            return row + 1
        }
        return row
    }

    return (
        <View style={styles.container} ref={ref}>
            {
                data.map((item, index) => {
                    return (
                        <View key={index} style={{width: 100 / cols + '%', height: 100 / rowCount() + '%'}} >
                            <View className={`bg-[#323232] mx-1 my-1`}
                                style={{borderRadius: 8}}
                            >
=======
    return (
        <View style={styles.container}>
            {
                data.map((item, index) => {
                    console.log(index)
                    return (
                        <View key={index} style={{width: 100 / cols + '%'}} >
                            <View className={`${index % cols === 0 ? 'ml-2' : index % cols === cols - 1 ? 'mr-2' : 'mx-2'} bg-red-500`}>
>>>>>>> minhbao-dev
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