import React from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';

import Login from './components/Login.js'
import Signup from './components/Signup.js'
import Planet_Scene from './VR_Scenes/planet_VRScene.js'
import Dino_Scene from './VR_Scenes/diono_VRScene.js'
// import heart_Scene from './VR_Scenes/heart_VRScene.js'
import shark_Scene from './VR_Scenes/shark_VRScene .js'
import skeleton_Scene from './VR_Scenes/skeleton_VRScene.js'
import Gallery from './components/Gallery'
import Test_AR from './AR_Scenes/test_ARScene.js'

export default class Routes extends React.Component {
  render(){
    return(
    <Router>

    <Stack key = "root" hideNavBar = {true}>
    <Scene key = "login" component = {Login} title="Login" />
    <Scene key = "gal" component = {Gallery} title="gal" />
    <Scene key = "signup" component = {Signup} title="Signup" initial = {true}/>
    <Scene key = "planet" component = {Planet_Scene} title = "planet"/>
    <Scene key = "dino" component = {Dino_Scene} title = "dino"/>
    <Scene key = "shark" component = {shark_Scene} title = "shark"/>
    <Scene key = "test" component = {Test_AR} title = "test"/>
    <Scene key = "skeleton" component = {skeleton_Scene} title = "skeleton"/>
    </Stack>
    </Router>
    )
  }
}
