import React from "react";
import {Text, TouchableOpacity} from 'react-native';

const LoginButton = ({onPress = () => 0, ...props}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{backgroundColor: '#8DDFCB',
            paddingVertical: 12, 
            marginTop: 25, 
            marginHorizontal: 125, 
            borderRadius: 10, 
            elevation: 2
            }}
            {...props}
        >
            <Text style={{color: '#ffffff', textAlign: 'center', fontWeight: 'bold'}}>
                {props.children}
            </Text>
        </TouchableOpacity>
    );
}

export default LoginButton;