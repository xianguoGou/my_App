
import * as React from 'react';
import {View, Text} from 'react-native';
import {Button, SearchBar} from '@ant-design/react-native';
function ViewScreen({navigation} :any) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>看点!</Text>
      <Button onPress={()=>navigation.navigate('Details')}>
        详情
      </Button>
    </View>
  );
}

export default ViewScreen