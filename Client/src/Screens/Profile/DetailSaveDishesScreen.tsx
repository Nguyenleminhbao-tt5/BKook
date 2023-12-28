import { View, Text, Image, ScrollView, Animated } from 'react-native'
import React, { useRef, useState } from 'react'
import { IntroduceImage } from '../../../constant'
import { MagnifyingGlassIcon, CameraIcon, EllipsisVerticalIcon } from 'react-native-heroicons/solid'
import { Cog6ToothIcon, HeartIcon, ArrowSmallLeftIcon, BookmarkIcon } from 'react-native-heroicons/outline'
const Header_Max_Height = 240;
const Header_Min_Height = 120;
const Scroll_Distance = Header_Max_Height - Header_Min_Height;
const DynamicHeader = ({ value }) => {
  const animatedHeaderHeight = value.interpolate({
    inputRange: [0, Scroll_Distance],
    outputRange: [Header_Max_Height, Header_Min_Height],
    extrapolate: 'clamp',
  });

  const animatedHeaderColor = value.interpolate({
    inputRange: [0, Scroll_Distance],
    outputRange: ['#181D31', '#678983'],
    extrapolate: 'clamp',
  });

  return (
    <Animated.View
      style={[
        {
          position: 'relative',
          height: animatedHeaderHeight,
          backgroundColor: animatedHeaderColor,
        },

      ]}>

      <Image
        style={{
          position: 'absolute',
          resizeMode: 'cover',
          height: '100%',
          width: '100%',
          backgroundColor: 'red'
        }}
        source={IntroduceImage[0]}
      />
      <View style={{
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <ArrowSmallLeftIcon size="35" color="white" />
        <View
          style={{
            flexDirection: 'row',
          }}
        >
          <BookmarkIcon size="35" color="white" style={{ marginRight: 20 }} />
          <HeartIcon size="35" color="white" style={{ marginRight: 20 }} />
          <EllipsisVerticalIcon size={35} color={'white'} />
        </View>
      </View>

    </Animated.View>
  );
};


export default function DetailSaveDishesScreen() {
  const scrollOffsetY = useRef(new Animated.Value(0)).current;

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#262222",
      }}
    >
      {/* <View style={{
        position: 'relative',
        flex: 1

      }}>
        <Image
          style={{
            position: 'absolute',
            resizeMode: 'cover',
            height: '100%',
            width: '100%',
            backgroundColor: 'red'
          }}
          source={IntroduceImage[0]}
        />
        <View style={{
          padding: 15,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <ArrowSmallLeftIcon size="35" color="white" />
          <View
            style={{
              flexDirection: 'row',
            }}
          >
            <BookmarkIcon size="35" color="white" style={{ marginRight: 20 }} />
            <HeartIcon size="35" color="white" style={{ marginRight: 20 }} />
            <EllipsisVerticalIcon size={35} color={'white'} />
          </View>
        </View>


      </View> */}
      <DynamicHeader value={scrollOffsetY} />
      <ScrollView
        style={{
          flex: 1,
          padding: 10
        }}
      >
        <Text style={{
          fontSize: 32,
          color: 'white',
          fontWeight: 'bold',
        }}>SP.0770 - Chân gà lạnh</Text>
        <View style={{
          flexDirection: 'row',

        }}>
          <Image
            style={{
              width: 80,
              height: 80,
              resizeMode: 'contain',
              borderRadius: 100,
            }}
            source={IntroduceImage[1]}
          />
          <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 10,
            marginBottom: 10,
          }}>
            <Text style={{
              color: 'white',
              fontSize: 20
            }}>Annie Vo</Text>
            <Text style={{
              color: 'white',
              fontSize: 14
            }}>@AnnieVo</Text>
          </View>
        </View>
        <Text style={{
          color: 'white',
          fontSize: 20,
        }}>Cơm nhà 3 món đậm đà thật ngon miệng</Text>
        <View style={{
          width: '95%',
          height: 1,
          backgroundColor: 'white',
          marginTop: 20,
        }}></View>
        <View style={{
          marginTop: 20,
        }}>
          <Text style={{
            color: 'white',
            fontSize: 24,
            fontWeight: 'bold'
          }}>Nguyên liệu</Text>
          <View style={{
            marginTop: 10,
          }}>
            <Text style={{
              color: 'white',
              fontSize: 16,
            }}>15 cái chân gà rút xương</Text>
            <Text style={{
              color: 'white',
              fontSize: 16,
            }}>1/2 củ gừng</Text>
            <Text style={{
              color: 'white',
              fontSize: 16,
            }}>3 nhánh gốc ngò tàu</Text>
            <Text style={{
              color: 'white',
              fontSize: 16,
            }}>2 nhánh dầu hành lá </Text>
            <Text style={{
              color: 'white',
              fontSize: 16,
            }}>150g nước tương</Text>
            <Text style={{
              color: 'white',
              fontSize: 16,
            }}>25g xì dầu</Text>
          </View>

        </View>
        <View style={{
          marginTop: 10
        }}>
          <Text style={{
            color: 'white',
            fontSize: 24,
            fontWeight: 'bold'
          }}>Cách làm</Text>
          <View style={{
            marginTop: 10,
            flexDirection: 'row'
          }}>
            <View style={{
              width: 50,
              height: 50,
              backgroundColor: 'white',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 50,
            }}>
              <Text style={{
                fontSize: 20,
                color: 'black',
              }}>1</Text>
            </View>
            <Text
              style={{
                color: 'white',
                // backgroundColor: 'black',
                width: '80%',
                height: 80,
                marginLeft: 10,
                fontSize: 20,
              }}
            >Chân gà chà muối, rửa sạch để ráo, Gừng cạo vỏ nướng sơ xắt nhỏ hành tím nướng sơ lột vỏ</Text>
          </View>
          <View style={{
            marginTop: 10,
            flexDirection: 'row'
          }}>
            <View style={{
              width: 50,
              height: 50,
              backgroundColor: 'white',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 50,
            }}>
              <Text style={{
                fontSize: 20,
                color: 'black',
              }}>2</Text>
            </View>
            <Text
              style={{
                color: 'white',
                // backgroundColor: 'black',
                width: '80%',
                height: 80,
                marginLeft: 10,
                fontSize: 20,
              }}
            >Chân gà chà muối, rửa sạch để ráo, Gừng cạo vỏ nướng sơ xắt nhỏ hành tím nướng sơ lột vỏ</Text>
          </View>
          

        </View>
        


      </ScrollView>
    </View>
  )
}