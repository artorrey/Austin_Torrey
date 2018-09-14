/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  Platform, StyleSheet, Text, View, ImageBackground, Image, Button, TouchableOpacity
} from 'react-native';
import {createStackNavigator} from 'react-navigation';

const scorecard = "https://2810661608.site.internapcdn.net/wp-content/uploads/article_images/batch6/score-1.jpg"
const holes = [
  {
    uri: "https://sports.cbsimg.net/images/golf/masters/15course_1.jpg",

    holeNumber: 1,
    nickname: "Tea Olive",
    par: 4,
    yardage: "445 Yards"
  },
  {
    uri: "https://sports.cbsimg.net/images/golf/masters/15course_2.jpg",
    holeNumber: 2,
    nickname: "Pink Dogwood",
    par: 5,
    yardage: "575 Yards"
  },
  {
    uri: "https://sports.cbsimg.net/images/golf/masters/15course_3.jpg",
    holeNumber: 3,
    nickname: "Flowering Peach",
    par: 4,
    yardage: "350 Yards"
  },
  {
    uri: "https://sports.cbsimg.net/images/golf/masters/15course_4.jpg",
    holeNumber: 4,
    nickname: "Flowering Crab Apple",
    par: 3,
    yardage: "240 Yards"
  },
  {
    uri: "https://sports.cbsimg.net/images/golf/masters/15course_5.jpg",
    holeNumber: 5,
    nickname: "Magnolia",
    par: 4,
    yardage: "455 Yards"
  },
  {
    uri: "https://sports.cbsimg.net/images/golf/masters/15course_6.jpg",
    holeNumber: 6,
    nickname: "Juniper",
    par: 3,
    yardage: "180 Yards"
  },
  {
    uri: "https://sports.cbsimg.net/images/golf/masters/15course_7.jpg",
    holeNumber: 7,
    nickname: "Pampas",
    par: 4,
    yardage: "450 Yards"
  },
  {
    uri: "https://sports.cbsimg.net/images/golf/masters/15course_8.jpg",
    holeNumber: 8,
    nickname: "Yellow Jasmine",
    par: 5,
    yardage: "570 Yards"
  },
  {
    uri: "https://sports.cbsimg.net/images/golf/masters/15course_9.jpg",
    holeNumber: 9,
    nickname: "Carolina Cherry",
    par: 4,
    yardage: "460 Yards"
  },
  {
    uri: "https://sports.cbsimg.net/images/golf/masters/15course_10.jpg",
    holeNumber: 10,
    nickname: "Camellia",
    par: 4,
    yardage: "495 Yards"
  },
  {
    uri: "https://sports.cbsimg.net/images/golf/masters/15course_11.jpg",
    holeNumber: 11,
    nickname: "White Dogwood",
    par: 4,
    yardage: "505 Yards"
  },
  {
    uri: "https://sports.cbsimg.net/images/golf/masters/15course_12.jpg",
    holeNumber: 12,
    nickname: "Golden Bell",
    par: 3,
    yardage: "155 Yards"
  },
  {
    uri: "https://sports.cbsimg.net/images/golf/masters/15course_13.jpg",
    holeNumber: 13,
    nickname: "Azalea",
    par: 5,
    yardage: "510 Yards"
  },
  {
    uri: "https://sports.cbsimg.net/images/golf/masters/15course_14.jpg",
    holeNumber: 14,
    nickname: "Chinese Fir",
    par: 4,
    yardage: "440 Yards"
  },
  {
    uri: "https://sports.cbsimg.net/images/golf/masters/15course_15.jpg",
    holeNumber: 15,
    nickname: "Firethorn",
    par: 5,
    yardage: "530 Yards"
  },
  {
    uri: "https://sports.cbsimg.net/images/golf/masters/15course_16.jpg",
    holeNumber: 16,
    nickname: "Redbud",
    par: 3,
    yardage: "170 Yards"
  },
  {
    uri: "https://sports.cbsimg.net/images/golf/masters/15course_17.jpg",
    holeNumber: 17,
    nickname: "Nandina",
    par: 4,
    yardage: "440 Yards"
  },
  {
    uri: "https://sports.cbsimg.net/images/golf/masters/15course_18.jpg",
    holeNumber: 18,
    nickname: "Holly",
    par: 4,
    yardage: "465 Yards"
  },
]

class GolfApp extends Component {
  render() {
    return (
      <View style={styles.container}>

        <ImageBackground
          source={{uri: "https://image.nj.com/home/njo-media/width620/img/realtimesports_impact/photo/0406foundercircle2-2jpg-334fa8fee85ef328.jpg"}}
          style={styles.image}>
          <Text style={styles.welcome}>Augusta National Golf Course</Text>
          <View style={styles.buttonView}>

          <TouchableOpacity style={styles.button}
            onPress={() => {this.props.navigation.navigate('Hole', {holeNumber: 1});}}>
            <Text>1</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button}
            onPress={() => {this.props.navigation.navigate('Hole', {holeNumber: 2});}}>
            <Text>2</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button}
            onPress={() => {this.props.navigation.navigate('Hole', {holeNumber: 3});}}>
            <Text>3</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button}
              onPress={() => {this.props.navigation.navigate('Hole', {holeNumber: 4});}}>
              <Text>4</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button}
              onPress={() => {this.props.navigation.navigate('Hole', {holeNumber: 5});}}>
              <Text>5</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button}
              onPress={() => {this.props.navigation.navigate('Hole', {holeNumber: 6});}}>
              <Text>6</Text></TouchableOpacity>
              <TouchableOpacity style={styles.button}
                onPress={() => {this.props.navigation.navigate('Hole', {holeNumber: 7});}}>
                <Text>7</Text></TouchableOpacity>
              <TouchableOpacity style={styles.button}
                onPress={() => {this.props.navigation.navigate('Hole', {holeNumber: 8});}}>
                <Text>8</Text></TouchableOpacity>
              <TouchableOpacity style={styles.button}
                onPress={() => {this.props.navigation.navigate('Hole', {holeNumber: 9});}}>
                <Text>9</Text></TouchableOpacity>

          </View>
          <View style={styles.buttonView}>
          <TouchableOpacity style={styles.button}
            onPress={() => {this.props.navigation.navigate('Hole', {holeNumber: 10});}}>
            <Text>10</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button}
            onPress={() => {this.props.navigation.navigate('Hole', {holeNumber: 11});}}>
            <Text>11</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button}
            onPress={() => {this.props.navigation.navigate('Hole', {holeNumber: 12});}}>
            <Text>12</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button}
              onPress={() => {this.props.navigation.navigate('Hole', {holeNumber: 13});}}>
              <Text>13</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button}
              onPress={() => {this.props.navigation.navigate('Hole', {holeNumber: 14});}}>
              <Text>14</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button}
              onPress={() => {this.props.navigation.navigate('Hole', {holeNumber: 15});}}>
              <Text>15</Text></TouchableOpacity>
              <TouchableOpacity style={styles.button}
                onPress={() => {this.props.navigation.navigate('Hole', {holeNumber: 16});}}>
                <Text>16</Text></TouchableOpacity>
              <TouchableOpacity style={styles.button}
                onPress={() => {this.props.navigation.navigate('Hole', {holeNumber: 17});}}>
                <Text>17</Text></TouchableOpacity>
              <TouchableOpacity style={styles.button}
                onPress={() => {this.props.navigation.navigate('Hole', {holeNumber: 18});}}>
                <Text>18</Text></TouchableOpacity>

          </View>
        
          </ImageBackground>

      </View>
    );
  }
}

class GolfHole extends Component {


  render() {

    const {navigation} = this.props;
    const holeNo = navigation.getParam('holeNumber', 'NO-ID');
    const newIndex = Number(holeNo-1);
    const hole = holes[newIndex];

    return (
      <View style={styles.container}>
        <Image
          source={{uri: hole.uri}}
          style={styles.hole}
          >
        </Image>
        <Text style={styles.holeText}>No.{hole.holeNumber}  {hole.nickname}  Par {hole.par}  Dist. {hole.yardage}</Text>
      </View>
    )
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  holeText: {
    justifyContent: 'center',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#fff',
   borderWidth: 1,
   borderColor: '#000000',
    backgroundColor: 'white',
    borderWidth: 3,
    height: 30,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 4,
  },
  buttonView: {
    flexDirection: 'row',
    marginTop: 25,

  },
  image: {
    flexGrow: 1,
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center'
  },
  hole: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcome: {
    textAlign: 'center',
    color: '#f5d224',
    fontFamily: 'SnellRoundhand-Bold',
    fontWeight: '500',
    fontSize: 42,
    // flex: 0,
    textDecorationStyle: 'solid',
    textDecorationColor: '#000000',
    textShadowOffset: {width: 10, height: 10},
    textShadowRadius: 10,
    marginBottom: 100,
  },

});

const RootStack = createStackNavigator(
  {
  Home: GolfApp,
  Hole: GolfHole,

},
{
    initialRouteName: 'Home',
}

);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
