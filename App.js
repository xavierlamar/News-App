import { StyleSheet, Text, View ,StatusBar} from 'react-native';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import Context from './API/Context';
import InshortScreens from './components/InshortScreens';
function App() {
  return (
    <View style={{...styles.container,backgroundColor:"#282c35" }}>
      <InshortScreens />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:StatusBar.currentHeight,
  },
});

export default ()=>{
return ( 
   <Context>
    <App />
  </Context>);
}