import React, {useState} from 'react';
import { Text, View, StyleSheet, Image, Button } from 'react-native';

function Kucing(prpos) {
 const [lapar, setLapar] = useState(true);
  //let lapar = true;
  return(
    <View>
    <Text>Hi, namaku {prpos.nama} dan sekarang aku {lapar ? "LAPAR" : "KENYANG"} 
    </Text>
    <Button title={lapar ? 'Beri saya ikan' : "makasi ya kakak"}
    onPress=  {() =>{ 
      //lapar = false;
      setLapar(false);
    }} 
    disabled = {!lapar}
    />
    </View>
  );
}

function App () {
  return(
    <View style={ styleku.container}>
      <Image source={{uri: "https://reactnative.dev/docs/assets/p_cat1.png"}} style={{width: 200, height: 200}}/>
      <Kucing nama = "Kitty"/>
      <Kucing nama = "Meong"/>
    </View>
  );
}
export default App;

const styleku = StyleSheet.create ({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems:"center",
  }
});