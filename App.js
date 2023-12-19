import * as React from 'react';
import 'react-native-gesture-handler'; 
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './components/Login';
import Drawer from './components/MyDrawer';
import Simpanan from './components/Simpanan';
import Pembiayaan from './components/Pembiayaan';
import Transaksi from './components/Transaksi';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            {func.SesGet('login') != null ? (
                <>
                    <Stack.Screen name="Drawer" component={Drawer} options={{
                        headerShown: false
                    }} />
                    <Stack.Screen name="Simpanan" component={Simpanan} options={{
                        headerShown: false
                    }} />
                    <Stack.Screen name="Pembiayaan" component={Pembiayaan} options={{
                        headerShown: false
                    }} />
                    <Stack.Screen name="Transaksi" component={Transaksi} options={{
                        headerShown: false
                    }} />
                    <Stack.Screen name="Login" component={Login} options={{
                    headerShown: false
                }} />
                </>
            ) : (
                <Stack.Screen name="Login" component={Login} options={{
                    headerShown: false
                }} />
            )}
        </Stack.Navigator>
    </NavigationContainer>
  );
}