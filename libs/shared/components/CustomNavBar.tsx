// CustomNavBar.tsx

import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export interface NavItem {
  label: string;
  route?: string;
}

interface CustomNavBarProps {
  items: NavItem[];
  onClick: (item: NavItem) => void;
}

const CustomNavBar: React.FC<CustomNavBarProps> = ({items, onClick}) => {
  return (
    <View style={styles.navBar}>
      {items.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => onClick(item)}
          style={styles.navButton}>
          <Text>{item.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    backgroundColor: '#3498db',
    paddingHorizontal: 10,
  },
  navButton: {
    padding: 10,
  },
});

export default CustomNavBar;
