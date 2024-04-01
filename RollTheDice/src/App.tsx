/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  ImageSourcePropType,
  View,
  Image,
  Pressable,
} from 'react-native';

import oneDice from '../assets/oneDice.png'
import twoDice from '../assets/twoDice.png'
import threeDice from '../assets/threeDice.png'
import fourDice from '../assets/fourDice.png'
import fiveDice from '../assets/fiveDice.png'
import sixDice from '../assets/sixDice.png'

type DiceProps = PropsWithChildren<{
  imageUrl : ImageSourcePropType
}>


const DiceComponent=({imageUrl}:DiceProps):React.JSX.Element=>{
return(
  <View>
    <Image source={imageUrl}  style={styles.image}/>
  </View>
)
}


type SectionProps = PropsWithChildren<{
  title: string;
}>;

{/*function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}*/}

function App():JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [diceImage,setDiceImage]=useState<ImageSourcePropType>(threeDice)
  const [isPressed, setIsPressed]=useState(false)

  const generateImage=()=>{
    setIsPressed(true)
    let image=Math.floor(Math.random()*6)+1
    switch (image){
      case 1:
        setDiceImage(oneDice)
        break;
        case 2:
          setDiceImage(twoDice)
          break ;
        case 3:
          setDiceImage(threeDice)
          break ;
        case 4 :
          setDiceImage(fourDice)
          break;
        case 5:
          setDiceImage(threeDice)
        break ;
        case 6:
          setDiceImage(sixDice)
          break;
        default :
          setDiceImage(twoDice)
        break ;

    }
    setTimeout(() => {
      setIsPressed(false);
    }, 1000); 
  }


  return (
    <SafeAreaView style={styles.sectionTitle} >
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />
      <View  style={styles.container}>
        { isPressed ?<Text>Pressed</Text>:<DiceComponent imageUrl={diceImage} /> }
        <Pressable onPress={generateImage} style={styles.button}>
          <Text>Play</Text>
        </Pressable>
      </View>
      
      
    </SafeAreaView>
  ); 
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    width:"100%",
    justifyContent:"center",
    alignItems:"center"
  },
  sectionTitle: {
    flex:1,
    width:"100%",
    
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  image:{
    height:200,
    width:200
  },
  button:{
    width:150,
    padding:10,
    backgroundColor:"green",
    borderRadius:10,
    marginTop:30,
    justifyContent:"center",
    alignItems:"center"
  }
});

export default App;
