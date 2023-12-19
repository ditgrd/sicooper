import * as React from "react";
import {View, Text, Image, StatusBar, TouchableOpacity, ScrollView} from 'react-native';
import TextInputEmail from './TextInputEmail';
import LoginButton from "./LoginButton";
import env from "../system/env";
import func from "../system/func";

export default function Login({navigation, route}) {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [errMsg, setErrMsg] = React.useState(null);

    async function masuk() {
        var req = await fetch(env.base_url+'/api/mobile/login', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: email,
                password: password,
            }),
        });

        var response = await req.json();
        if (response.status == 'fail') {
            setErrMsg(response.msg);
        } else {
            await func.SesStore('login', JSON.stringify(response.data));
            navigation.navigate('Drawer');
        }

        return;
    }

    return (
        <ScrollView style={{flex: 1, backgroundColor: '#DAFFFB'}}>
            <StatusBar backgroundColor={'#DAFFFB'} barStyle={'dark-content'}/>
            <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 75}}>
                <Image 
                    source={require('../img/logo.png')}
                    style={{width: 150, height: 150, marginTop: 20, borderRadius: 75}}
                />
                <Text style={{fontSize: 25, fontWeight: 'bold', marginTop: 10 }}>
                        SI<Text style={{color: '#8DDFCB'}}>COOPER</Text>
                </Text>
                <Text style={{fontSize: 20, fontWeight: 'bold', marginTop: 50, marginBottom: 15}}>
                    Login
                </Text>
            </View>

            <TextInputEmail 
                state={email} 
                set={setEmail} 
                icon='envelope' 
                placeholder='Masukan Email'
                secureTextEntry={false}
            />
            <TextInputEmail 
                state={password} 
                set={setPassword} 
                icon='lock'
                placeholder='Masukan Password'
                secureTextEntry={true}
            />
            <View
                style={{marginTop: 15}}
            >
                <LoginButton onPress={masuk}>Login</LoginButton>
            </View>
            {errMsg && (
                <Text style={{textAlign: 'center', color: 'red', marginTop: 20}}>{errMsg}</Text>
            )}
            <View style={{marginTop: 20, flexDirection: 'row', marginHorizontal: 20}}>
                <TouchableOpacity style={{flex: 1, alignItems: 'center'}}>
                    <Text>SingUp</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flex: 1, alignItems: 'center'}}>
                    <Text>Forgot Password</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}