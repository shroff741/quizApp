import React,{useEffect,useContext} from 'react';
import {Context as AuthContext} from '../context/AuthContext';
import { View,ActivityIndicator,StyleSheet } from 'react-native';

const LoadingScreen =()=>{
    const{tryLocalSignin} =useContext(AuthContext);
    useEffect(()=>{
        tryLocalSignin();
    },[]);
    return(
        <View style ={styles.container}>
            <ActivityIndicator
                size= 'large'
                color='blue'
            />
        </View>
    )
};
const styles =StyleSheet.create({
    container:
    {
        flex: 1,
        justifyContent: 'center'
    
    }
});
export default LoadingScreen;