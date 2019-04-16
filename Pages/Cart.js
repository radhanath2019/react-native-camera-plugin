import React,{Component} from 'react';
import {Text,View,Button} from 'react-native'


export default class Cart extends Component{
   

    render(){

        return(
            <View>
                <Button 
                  title="Go Invoice"
                  onPress={()=>
                     this.props.navigation.navigate('Invoice')
                  }/>
            </View>
        )
    }

}