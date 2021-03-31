import React, {useState} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import SelectMultiple from 'react-native-select-multiple'

let options = ['Caffeine', 'Exercise', 'Shower']

export default function ActivityScreen() {
  const [selectedOptions, setSelectedOptions] = useState([]);

  onSelectionsChange = (selectedOptions) => {
    setSelectedOptions(selectedOptions);
  }

  return (
    <View>
      <SelectMultiple
        items={options}
        renderLabel={renderLabel}
        selectedItems={selectedOptions}
        onSelectionsChange={onSelectionsChange} />
    </View>
  );
}

const renderLabel = (label, style) => {
  return (
    <View style={styles.renderLabel}>
      <Image style={{width: 42, height: 42}} source={{uri: 'https://dummyimage.com/100x100/52c25a/fff&text=S'}} />
      <View style={{marginLeft: 10}}>
        <Text style={style}>{label}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
  },
  renderLabel: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});

