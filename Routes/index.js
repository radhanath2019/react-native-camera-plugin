import React from 'react';

import {createStackNavigator,createAppContainer} from 'react-navigation';

import Cart from '../Pages/Cart';

import Home from '../Pages/Home';

import Invoice from  '../Pages/Invoice';

import Product from '../Pages/Product';

//Route will act as entry point for application

const Route = createStackNavigator(
    {
        Product:{
            screen:Product
        },
        Home:{
            screen:Home
        },
        Invoice:{  
            screen:Invoice
        },
        Cart:{
            screen:Cart
        }
        // Home:Home,
        // Product:Product,
        // Cart:Cart,
        // Invoice:Invoice
    },
    {
        initialRouteName:"Home"
    },
    // {
    //     navigationOptions: {
    //       headerStyle: {
    //         backgroundColor: themes.BACKGROUND_COLOR,
    //         paddingHorizontal: 10
    //       },
    //       headerTintColor: "#fff"
    //     }
    //   },
)
const RouterConfig = createAppContainer(Route);
//exporting this features to another components through app

export default RouterConfig;