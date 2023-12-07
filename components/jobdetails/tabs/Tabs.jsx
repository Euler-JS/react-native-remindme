import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

import styles from './tabs.style';
import { SIZES } from '../../../constants';

const TabButton = ({ name, activeTab, onHandleSearchType }) => {
  return (
    <TouchableOpacity onPress={onHandleSearchType} style={styles.btn(name, activeTab)}>
      <Text>{name}</Text>
    </TouchableOpacity>
  );
};

const Tabs = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{columnGap: SIZES.small / 2}}>
        {tabs.map((item, index) => (
          <TabButton
            key={index}
            name={item}
            activeTab={activeTab}
            onHandleSearchType={() => setActiveTab(item)}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default Tabs;
