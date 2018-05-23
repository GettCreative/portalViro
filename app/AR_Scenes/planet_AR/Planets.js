'use strict';

import React, { Component } from 'react';

import {StyleSheet,View} from 'react-native';

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
  ViroARPlaneSelector,
  ViroAnimations,
  ViroButton
} from 'react-viro';
import {Actions} from 'react-native-router-flux';

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
onTap (){
  Actions.gal()
}
  render() {
    return (
    <ViroARScene>
      <ViroARPlaneSelector />
        <ViroAmbientLight color="#ffffff" intensity={200}/>
          <ViroPortalScene passable={true} dragType="FixedDistance" >
            <ViroPortal position={[0, 0, -1]} scale={[0.1, 0.1, 0.1]}>

              <Viro3DObject source={require('../../AR_objects/earth/earth.obj')}
                resources={[require('../../AR_objects/earth/Earth_Diffuse.jpg'),
                            require('../../AR_objects/earth/EarthAna.jpg')]}
                    type="OBJ"/>

            </ViroPortal>
              </ViroPortalScene>
              <ViroButton
              source={require("../../images/button.png")}
              height={2}
              width={3}
              position={[1, 3, -5]}
              onClick={this.onTap}
              />
            </ViroARScene>

    );
  }

  _onInitialized(state, reason) {
    if (state == ViroConstants.TRACKING_NORMAL) {
      this.setState({
        text : "Weclome To Portal"
      });
    } else if (state == ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  }
}

var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: 'black',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});
ViroAnimations.registerAnimations({
  loopRotate:{properties:{rotateY:"+=45"}, duration:1000},
});


module.exports = HelloWorldSceneAR;
