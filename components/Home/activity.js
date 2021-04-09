import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, TextInput, Button} from 'react-native';
import SelectMultiple from 'react-native-select-multiple'
import {LinearGradient} from 'expo-linear-gradient';

let options = ['Caffeine', 'Exercise', 'Shower']

export default function ActivityScreen() {
  const [text, onChangeText] = React.useState("Other");
  const [selectedOptions, setSelectedOptions] = useState([]);

  onSelectionsChange = (selectedOptions) => {
    setSelectedOptions(selectedOptions);
  }

  return (
    <View style={styles.container}>
      <LinearGradient colors={['#00008b', '#9370DB']} style={{flex:1}}>
        <View>
          <SelectMultiple
            items={options}
            renderLabel={renderLabel}
            selectedItems={selectedOptions}
            onSelectionsChange={onSelectionsChange} />
        </View>
        <View>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
          />
        </View>
        <View style={styles.button}>
          <Button
            onPress={() => console.log("hi")}
            title="Submit"
            color="#841584"
          />
        </View>
      </LinearGradient>
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
  },
  renderLabel: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    fontSize: 20,
  },
  input: {
    marginTop: 20,
    margin: 12,
    borderWidth: 1,
    padding: 8,
    fontSize: 20
  },
  button: {
  }
});

