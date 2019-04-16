import React,{Component} from 'react';
import {Text,View,Button} from 'react-native'
import {Icon,Header} from 'react-native-elements'

export default class Logo extends Component{
   

    render(){

        return(
<Header
  placement="left"
  leftComponent={{ icon: 'menu', color: '#fff' }}
  centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
  rightComponent={{ icon: 'home', color: '#fff' }}
/>

            // <View>
            //     <Button 
            //       title="Go Invoice"
            //       onPress={()=>
            //          this.props.navigation.navigate('Invoice')
            //       }/>
            // </View>
        )
    }

}