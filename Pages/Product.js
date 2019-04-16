import React,{Component} from 'react';
import {Text,View,Button,Image} from 'react-native';

import { Card,Icon} from 'react-native-elements';





export default class Product extends Component{
   

    render(){

        return(
            <View>
   
 <Card
  title='HELLO WORLD'>
  <View style={{width:30,height:30}}>
   
  <Image
          
          source={require('../images/product.png')}
         />
  </View>
  <Text style={{marginBottom: 10}}>
    The idea with React Native Elements is more about component structure than actual design.
  </Text>
  <Button
    icon={<Icon name='code' color='#ffffff' />}
    backgroundColor='#03A9F4'
    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title='VIEW NOW' />
</Card>



                {/* <Button 
                  title="Go Card"
                  onPress={()=>
                     this.props.navigation.navigate('Cart')
                  }/> */}
            </View>
        )
    }

}