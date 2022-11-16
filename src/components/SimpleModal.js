import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Pressable,
  Image,
} from 'react-native';
import React from 'react';

const WIDTH = Dimensions.get('window').width;
const HEIGHT_MODE = 360;

const SimpleModal = props => {
  closeModal = (bool, datas) => {
    props.changeModalVisible(bool);
    props.setClose(datas);
  };

  return (
    <View style={styles.container}>
      <View disabled={true}>
        <View style={styles.modal}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '2%',
            }}>
            <View>
              <Image
                source={{
                  uri: props.image,
                }}
                style={{height: 80, width: 80}}
                resizeMode="contain"
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              paddingLeft: '5%',
              paddingRight: '5%',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 15}}>Description:</Text>
            <View style={{paddingRight: '30%'}}>
              <Text style={{fontSize: 12.5}}>{props.description} </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              padding: '10%',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
            }}>
            <Pressable onPress={() => closeModal(false, 'Cancle')}>
              <View
                style={{
                  flexDirection: 'row',
                  padding: '10%',
                  backgroundColor: '#ff3300',
                  justifyContent: 'space-evenly',
                  borderRadius: 10,
                }}>
                <Image
                  source={require('../assets/shopping_cart.png')}
                  style={{height: 20, width: 20, MarginRight: '5%'}}
                />
                <Text style={{fontSize: 16, fontWeight: '900'}}>
                  Add to Cart
                </Text>
              </View>
            </Pressable>
            <Pressable onPress={() => closeModal(false, 'Cancle')}>
              <View
                style={{
                  flexDirection: 'row',
                  padding: '10%',
                  backgroundColor: 'white',
                  borderRadius: 10,
                  justifyContent: 'center',
                }}>
                <Text style={{fontSize: 20, fontWeight: '800'}}>close</Text>
              </View>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    height: HEIGHT_MODE,
    width: WIDTH - 15,
    paddingTop: 10,

    borderRadius: 20,
    backgroundColor: '#f9df76',
    // margin:'10%'
  },
});

export default SimpleModal;
