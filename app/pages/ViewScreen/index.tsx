
import * as React from 'react';
import {View, Text} from 'react-native';
import {Button, SearchBar} from 'antd-mobile-rn';
function ViewScreen({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>看点!</Text>
      <Button onClick={()=>navigation.navigate('Details')}>
        详情
      </Button>
    </View>
  );
}

export default ViewScreen