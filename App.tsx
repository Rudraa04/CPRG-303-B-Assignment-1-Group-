import { StatusBar } from 'expo-status-bar';
import { Alert,StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <View style={styles.bottom}>
        <Text style={styles.headText1}>HARSHIL_GJ07</Text>
          <Text style={styles.headText}>Posts</Text>
          
        </View>
      </View>
      <ScrollView>
        <View style={styles.main}>
        <Image
            source={require('./assets/Cover photo.jpeg')}
            style={styles.image3}
          />
          <Text style={styles.Text1}>harshil_gj07</Text>
          <Text style={styles.Text2}>Calgary, AB</Text>
          
          <Image
            source={require('./assets/image.jpeg')}
            style={styles.image}
          />
          <Image
            source={require('./assets/heart.png')}
            style={styles.image1}
          />
          
          <Text style={styles.Text1}>175</Text>
          
          <Text style={styles.text}>Liked by bhaumikgohil and others</Text>
          <Text style={styles.text}>
            harshil_gj07 Let's end this year with some memories...
         </Text>

          <View style={styles.Row1}>
          <Text style={styles.footText}>View all comments</Text> 
            <Text style={styles.footText}>December 31,2024</Text>
            <TouchableOpacity style={styles.Row2} onPress={alertButton}>
          <Text style={styles.alertText}>Alert</Text>
        </TouchableOpacity>
          </View>
        </View>

      </ScrollView> 
      
    </View>
  );
}
const alertButton = () => {
  Alert.alert('Alert Button Pressed')
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  head: {
    position: 'absolute',
    top: 30,
    backgroundColor: 'white',
    width: 400,
    height: 100,
  },
  main: {
    marginTop: 140,
    width:500,
    backgroundColor: 'white',
  },
  text: {
    color: 'black',
    marginTop: 10,
  },
  Text1: {
    fontWeight: 'bold',
    color: 'black',
  },
  Text2: {
    color: 'grey'
  },
  image: {
    width: 400,
    height: 400,
    marginTop: 10,
    marginBottom: 10
  },
  image1: {
    width: 30,
    height: 30,
    flexDirection: 'column',
  },
  image2: {
    width: 30,
    height: 30, 
    flexDirection: 'column',
  },
  image3: {
    width: 30,
    height: 30, 
    flexDirection: 'column',
  },
  footText: {
    color: 'grey',
  },
  bottom: {
    alignItems: 'center',
    marginTop: 20,
  },
  headText: {
    marginTop:10,
    fontWeight: 'bold',
    color: 'black',
    fontSize: 20,
  },
  headText1: {
    marginTop:20,
    fontWeight: 'bold',
    color: 'grey',
    fontSize: 15,
  },
  Row1: {
    flexDirection: 'column',
    gap: 5,
  },
  Row2:{ 
  backgroundColor: 'white',
  },
  alertText: {
    color: 'black',
    fontWeight:'bold',
    fontSize: 20,
  }
});
