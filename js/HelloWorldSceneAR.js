'use strict';

import React, { Component } from 'react';

import {StyleSheet} from 'react-native';
import ARSCENE2 from './ARscene2'
import {
  ViroSceneNavigator,
  ViroScene,
  ViroARScene,
  ViroAmbientLight,
  Viro360Video,
  Viro360Image,
  ViroUtils,
  ViroPortal,
  ViroPortalScene,
  Viro3DObject,
} from 'react-viro';
export default class HelloWorldSceneAR extends Component {
  constructor() {
    super();

    // Set initial state here
    this.state = {
      text : "initializing AR..."
    };

    // bind 'this' to functions
    this._onInitialized = this._onInitialized.bind(this);
  }

  render() {
    return (
      <ViroARScene>
      <ViroAmbientLight color="#ffffff" intensity={200}/>
        <ViroPortalScene passable={true} dragType="FixedDistance" >
          <ViroPortal position={[0, 0, -1]} scale={[.1, .1, .1]}>
            <Viro3DObject source={require('./portal_res/portal_ship/portal_ship.vrx')}
              resources={[require('./portal_res/portal_ship/portal_ship_diffuse.png'),
                          require('./portal_res/portal_ship/portal_ship_normal.png'),
                          require('./portal_res/portal_ship/portal_ship_specular.png')]}
              type="VRX"/>
          </ViroPortal>
          <Viro360Image source={require("./portal_res/360_island.jpg")} />
        </ViroPortalScene>
        <ARSCENE2/>
      </ViroARScene>

    );
  }

  _onInitialized(state, reason) {
    if (state == ViroConstants.TRACKING_NORMAL) {
      this.setState({
        text : "HEY RBK!"
      });
    } else if (state == ViroConstants.TRACKING_NONE) {
      // alert('reload the app')
    }
  }
}
// ViroAnimations.registerAnimtions({

//   rotate:{
//     properties:{
//       rotateY : "+90"
//     },
//     duration:250
    
//   },
  
// })
// ViroMaterials.createMaterials({
//   test:{
//     diffuseTexture:require('./portal_res/360_island.jpg')
//   }
// })
var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: 'black',
    textAlignVertical: 'center',
    textAlign: 'center',  
  },
});



module.exports = HelloWorldSceneAR;



      // <ViroARScene>
      // <ViroAmbientLight color="#ffffff" intensity={200}/>
      //   <ViroPortalScene passable={true} dragType="FixedDistance" >
      //     <ViroPortal position={[0, 0, -1]} scale={[.1, .1, .1]}>
      //       <Viro3DObject source={require('./portal_res/portal_ship/portal_ship.vrx')}
      //         resources={[require('./portal_res/portal_ship/portal_ship_diffuse.png'),
      //                     require('./portal_res/portal_ship/portal_ship_normal.png'),
      //                     require('./portal_res/portal_ship/portal_ship_specular.png')]}
      //         type="VRX"/>
      //     </ViroPortal>
      //     <Viro360Image source={require("./portal_res/360_island.jpg")} />
      //   </ViroPortalScene>
      // </ViroARScene>


      // <Viro3DObject
      //   source={require("./portal_res/Heart.obj")}
      //   position={[1, 3, -5]}
      //   type="OBJ"
      // />
