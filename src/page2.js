import React from 'react';

import { View, Text, Button } from 'react-native';

const Page2 = ({ navigation }) => (
  <View>
    <Text> Pagina de Teste 2 </Text>
    <Button title="Proxima pagina" onPress={ () => navigation.navigate('Home') } />
  </View>
);

Page2.navigationOptions = {
  title: 'About'
};

export default Page2;