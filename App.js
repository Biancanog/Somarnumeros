import React, { useState } from 'react';
import { StyleSheet, Text, View, Button,TextInput } from 'react-native';

const App = ()=> {
   const [inputValues, setInputValues] = useState({
   input1: '',  
   input2: '',
   input3: '',
   
   });

   const[sum, setsum] = useState(0);  

   const handleInputChange = (inputName, value) => {
    setInputValues({...inputValues, [inputName]: value
    }); 
   };
   const handleSum = () => {
    const {input1, input2} = inputValues; 
    
     const result = parseInt(input1) + parseInt(input2); 
    setsum(result); 
   }; 

  return (
   <View style={styles.container}> 
   <Text style={styles.label}>Input1:</Text> 
   <TextInput
   style={styles.input1}
   onChangeText={(value) => handleInputChange('input1', value)}
   value={inputValues.input1}


   keyboardType="numeric"
   />

    <Text style={styles.label}>Input2:</Text> 
   <TextInput
   style={styles.input2}
   onChangeText={(value) => handleInputChange('input2', value)}
   value={inputValues.input2}
   keyboardType="numeric"
   />  



   <Button title="Somar" onPress={handleSum}/> 
   <Text style={styles.result}>Resultado: {sum}</Text>
   </View>
  );

  }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B0E0E6',
    padding: 20, 
   
  },
}); 

export default App;
