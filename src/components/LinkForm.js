import React from 'react';
import {Text} from 'react-native-elements';
import {TouchableOpacity,StyleSheet} from 'react-native';
import {withNavigation} from 'react-navigation';
const LinkForm =({message1,message2,route,navigation})=>{
    return(
        <TouchableOpacity onPress={()=>{
            navigation.navigate(route);
            console.log("Pressed");
            }}>
            <Text style ={styles.link}>{message1}</Text> 
            <Text style ={styles.link}>{message2}</Text>        
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    link :{
        color : 'blue',
        marginLeft: 16
    }
})
export default withNavigation(LinkForm);
