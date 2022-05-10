import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.containerImg}>
        <Image source={require('./assets/rover.jpg')} style={styles.image} />
        <Text style={styles.text}>Le rover Opportunity</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  containerImg: {
    flex: 3,
    alignItems: 'center',
    flexDirection: 'row',
  },
  image: {
    width: '75%',
    height: 200,
    borderRadius: 15,
    borderWidth: 5,
    borderColor: 'black'
  },
  text: {
    flex: 1,
    textAlign: 'center',
    color: 'red',
    fontSize: 20
  }
});
