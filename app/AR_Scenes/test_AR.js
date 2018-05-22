'use strict';

import React, { Component } from 'react';

// import {StyleSheet} from 'react-native';

import {
  ViroARScene,
  ViroText,
  Viro,
  ViroAmbientLight,
  Viro3DObject
} from 'react-viro';

export default class AR extends Component {

  constructor() {
    super();

    this.state = {} // Set initial state here
  }

  render() {
    return (
      <ViroARScene>
      <ViroAmbientLight color="#FFFFFF" />
      <Viro3DObject
          source={require("../AR_objects/skeleton/Skeleton.obj")}
          highAccuracyGaze={true}
          position={[0, 0, 0]}
          scale={[2, 2, 2]}
          rotation={[45, 0, 0]}
          type="OBJ"
        /*  transformBehaviors={["billboard"]}*//>
      </ViroARScene>
    );
  }

}

// var styles = StyleSheet.create({
//   helloWorldTextStyle: {
//     // fontFamily: 'Arial',
//     fontSize: 60,
//     color: '#ffffff',
//     textAlignVertical: 'center',
//     textAlign: 'center',
//   },
// });
