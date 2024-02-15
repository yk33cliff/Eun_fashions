import React, {useEffect} from 'react';
import {View, StatusBar, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Profile from './src/screens/Profile';
import OrderPage from './src/screens/OrderPage';
import Products from './src/screens/Products';
import ProductDetails from './src/screens/ProductDetails';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="OrderPage" component={OrderPage} />
      <Tab.Screen name="Products" component={Products} />
      <Tab.Screen name="ProductDetails" component={ProductDetails} />
    </Tab.Navigator>
  );
}

function DrawerNavigator({navigation}) {
  useEffect(() => {
    const parent = navigation.dangerouslyGetParent();
    if (parent) {
      parent.setOptions({
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <MaterialIcons
              name="menu"
              size={24}
              color="black"
              style={{marginLeft: 10}}
            />
          </TouchableOpacity>
        ),
      });
    }
  }, [navigation]);

  return (
    <Drawer.Navigator
      drawerType="slide"
      gestureEnabled={true}
      drawerStyle={{width: '80%'}}
      drawerContentOptions={{
        activeTintColor: '#FFA726',
        itemStyle: {marginVertical: 10},
      }}>
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Tabs" component={BottomTabNavigator} />
    </Drawer.Navigator>
  );
}

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  }, []);

  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor="#FFA726" barStyle="light-content" />
      <DrawerNavigator />
    </View>
  );
};

export default App;
