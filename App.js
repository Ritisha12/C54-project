import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';


class SoundButtons extends Component {
  render(){
    return(
      <View style={{ justifyContent:"center", alignItems:"center"}}>
     
      <Button color= {this.props.mycolor} title={this.props.mytitle}/>
      </View>
    )
  }
}

export default class App extends Component {
displayAlert1=()=>{
alert("Play Sound 1")}
displayAlert2=()=>{
alert("Play sound 2")}
displayAlert3=()=>{
alert("Play sound 3")}
  render() {
    return (

<View style={{marginTop: 80,width:330,height:80}}>
              <Text>............................................................................................................</Text>
         <Button color="pink" title="Sound 1" onPress={()=>this.displayAlert1()}/>
  
<Text>............................................................................................................</Text>
         <Button color="lightblue" title="Sound 2" onPress={()=>this.displayAlert2()}/>

<Text>............................................................................................................</Text>
         <Button color="lightgreen" title="Sound 3" onPress={()=>this.displayAlert3()}/>

<Text>............................................................................................................</Text>
         <Button color="lavender" title="Sound 4" onPress={()=>this.displayAlert4()}/>
    <Text>............................................................................................................</Text>

</View>

    );
  }
}