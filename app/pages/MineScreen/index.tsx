
import * as React from 'react';
import {View, Text} from 'react-native';
import {List, DatePicker} from '@ant-design/react-native'

function MineScreen() {
  return (
    <View>
      <Text>我的!</Text>
      <List>
        <DatePicker mode="datetime">
          <List.Item arrow="horizontal">
            选择时间
          </List.Item>
        </DatePicker>
      </List>
    </View>
  );
}

export default MineScreen