import React from 'react';

import { View, Text, Button } from 'react-native';

const Page1 = ({ navigation }) => (
  <View>
    <Text> Pagina de Teste </Text>
    <Button title="Proxima pagina" onPress={ () => navigation.navigate('About') } />
  </View>
);

Page1.navigationOptions = {
  title: 'Home'
};

export default Page1;