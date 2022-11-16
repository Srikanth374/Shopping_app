import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  Pressable,
  Image,
  ScrollView,
  Modal,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import SimpleModal from './src/components/SimpleModal';

const App = () => {
  const [data, setData] = useState();
  const [isModalVisible, setisModalVisible] = useState(false);
  const [items, setItems] = useState();
  const [itemdescription, setItemDescription] = useState();
  const [productimage, setProductImage] = useState();
  const [chooseData, setchooseData] = useState();

  const changeModalVisible = bool => {
    setisModalVisible(bool);
  };

  const setClose = data => {
    setchooseData(data);
  };
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => {
        res.json().then(response => {
          // console.log('shopping id', response);
          setData(response);
        });
      })
      .catch(e => {
        console.log('Somthing Went Wrong', e);
      });
  }, []);
  return (
    <View
      style={{
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <FlatList
        style={{margin: '2%'}}
        data={data}
        renderItem={({item}) => (
          <ScrollView>
            <Pressable
              onPress={() => {
                changeModalVisible(true);
                setItems(item.id);
                setItemDescription(item.description);
                setProductImage(item.image);
              }}>
              <View
                style={{
                  borderWidth: 2,
                  flexDirection: 'row',
                  padding: '5%',
                  borderColor: 'white',
                  borderRadius: 10,
                  backgroundColor: 'white',
                  marginTop: '1.5%',
                }}>
                <View>
                  <Image
                    source={{
                      uri: item.image,
                    }}
                    style={{height: 60, width: 60, marginRight: '2%'}}
                    resizeMode="contain"
                  />
                </View>
                <View style={{paddingRight: '18%'}}>
                  <View style={{flexDirection: 'row', marginBottom: '2%'}}>
                    <Text style={{fontWeight: 'bold', fontSize: 18}}>
                      {' '}
                      Title:
                    </Text>
                    <Text style={{paddingRight: '22%'}}> {item.title}</Text>
                  </View>
                  <View style={{flexDirection: 'row', marginBottom: '2%'}}>
                    <Text style={{fontWeight: 'bold', fontSize: 18}}>
                      {' '}
                      category:
                    </Text>
                    <Text> {item.category}</Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={{fontWeight: 'bold', fontSize: 18}}> Rs.</Text>
                    <Text style={{fontSize: 20}}> {item.price}</Text>
                  </View>
                </View>
              </View>
            </Pressable>
            <Modal
              transparent={true}
              animationType="fade"
              visible={isModalVisible}
              onRequestClose={() => changeModalVisible(false)}>
              <SimpleModal
                id={items}
                description={itemdescription}
                image={productimage}
                changeModalVisible={changeModalVisible}
                setClose={setClose}
              />
            </Modal>
          </ScrollView>
        )}
      />
    </View>
  );
};

export default App;
