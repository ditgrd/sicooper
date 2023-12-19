import * as React from 'react';
import { View, Text, Image } from "react-native";
import { SimpleLineIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
import Anggota from './Anggota';
import About from './About';
import User from '../img/logo.png';
import Home from './Home';
import { TouchableOpacity } from 'react-native';

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={
        (props) => {
          return (
            <SafeAreaView>
              <View
                style={{
                  height: 200,
                  width: '100%',
                  justifyContent: "center",
                  alignItems: "center",
                  borderBottomColor: "#f4f4f4",
                  borderBottomWidth: 1
                }}
              >
                <Image
                source={User}
                style={{
                  height: 130,
                  width: 130,
                  borderRadius: 65
                }}
                />
                <Text
                  style={{
                    fontSize: 20,
                    marginVertical: 6,
                    fontWeight: "bold",
                    color: "#111"
                  }}
                >SI<Text style={{color: '#8DDFCB'}}>COOPER</Text></Text>
                <Text
                  style={{
                    fontSize: 15,
                    color: "#111"
                  }}
                >Koperasi <Text style={{fontWeight: 'bold'}}>BUSRA</Text></Text>
              </View>
              <DrawerItemList {...props} />
            </SafeAreaView>
          )
        }
      }
      screenOptions={{
        drawerStyle:{
          // backgroundColor: "#",
          width: 250
        },
        headerStyle:{
          backgroundColor: "#DAFFFB",
        },
        headerTintColor: "black",
        headerTitleStyle:{
          fontWeight: "bold"
        },
        drawerActiveTintColor: "blue",
        drawerLabelStyle:{
          color: "#111"
        }
      }}
    >
      <Drawer.Screen
        name="Home"
        options={{
          drawerLabel: "Home",
          title: "Home",
          drawerIcon: () => (
            <SimpleLineIcons name="home" size={20} color="#808080"/>
          )
        }}
        component={Home}
      />
      <Drawer.Screen
        name="Anggota"
        options={{
          drawerLabel: "Anggota",
          title: "Anggota",
          drawerIcon: () => (
            <SimpleLineIcons name="people" size={20} color="#808080"/>
          )
        }}
        component={Anggota}
      />
      <Drawer.Screen
        name="About"
        options={{
          drawerLabel: "About",
          title: "About",
          drawerIcon: () => (
            <SimpleLineIcons name="book-open" size={20} color="#808080"/>
          )
        }}
        component={About}
      />
    </Drawer.Navigator>
  );
}
