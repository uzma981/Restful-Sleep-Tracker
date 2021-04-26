import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Button,FlatList,TouchableWithoutFeedback,Keyboard} from 'react-native';
import Header from './header';
import ActivityItem from './activityItem';
import AddActivity from './addActivity';
import {LinearGradient} from 'expo-linear-gradient';



export default function ActivityScreen ({navigation}){
  const [selectedOptions, setSelectedOptions] = useState([
    { text: 'Drank coffee', key: '1' },
    { text: 'Went for a walk', key: '2' },
    { text: 'Played on the switch', key: '3' },
    { text: 'Attended meeting', key: '4' },
    


  ]);
  const pressHandler = (key) => {
    setSelectedOptions(prevTodos => {
      return prevTodos.filter(todo => todo.key != key);
    });
  }
  const submitHandler =(text)=>{
    if(text.length>3){
      setSelectedOptions(prevTodos => {
        return [
          { text, key: Math.random().toString() },
          ...prevTodos
        ];
      })
    
    }
    else {
      Alert.alert('OOPS', 'Todo must be over 3 characters long', [
        {text: 'Understood', onPress: () => console.log('alert closed') }
      ]);
    }
      //can change the submit handler, where we can store the activity in a database
    }



    return (

      <TouchableWithoutFeedback onPress={() => {
        Keyboard.dismiss();
        console.log('dismissed');
      }}>
   
    <View style={styles.container}>

    
      <LinearGradient colors={['#2d187e','#003049']} style={{flex:1}}>
      <Header/><TouchableOpacity onPress={()=>navigation.navigate('Home')} 
    style={[styles.signIn,{
        marginTop: 50,
        left: 1,
        position: 'absolute'
    }]}>
    
    <Text style={[styles.textSign,
            {
                color:'white'

            }]}> {'<'} Back </Text>
            

        </TouchableOpacity>
      <View style={styles.content}>
          
          <AddActivity submitHandler={submitHandler}/>
            <View style={styles.list}>
              <FlatList
                data={selectedOptions}
                renderItem={({ item }) => (
                  <ActivityItem item={item} pressHandler={pressHandler} />
                )}
              />
            </View>
 
      </View>
     </LinearGradient>
    </View> 
    </TouchableWithoutFeedback>
    );






}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
    flex: 1,
    
  },
  list: {
    flex: 1,
    marginTop: 20,
    
  }

});


// let options = ['Caffeine', 'Exercise', 'Shower']

// export default function ActivityScreen() {
//   const [text, onChangeText] = React.useState("Other");
//   const [selectedOptions, setSelectedOptions] = useState([]);

//   onSelectionsChange = (selectedOptions) => {
//     setSelectedOptions(selectedOptions);
//   }

//   return (
//     <View style={styles.container}>
//       <LinearGradient colors={['#00008b', '#9370DB']} style={{flex:1}}>
//         <View>
//           <SelectMultiple
//             items={options}
//             renderLabel={renderLabel}
//             selectedItems={selectedOptions}
//             onSelectionsChange={onSelectionsChange} />
//         </View>
//         <View>
//           <TextInput
//             style={styles.input}
//             onChangeText={onChangeText}
//             value={text}
//           />
//         </View>
//         <View style={styles.button}>
//           <Button
//             onPress={() => console.log("hi")}
//             title="Submit"
//             color="#841584"
//           />
//         </View>
//       </LinearGradient>
//     </View>
//   );
// }

// const renderLabel = (label, style) => {
//   return (
//     <View style={styles.renderLabel}>
//       <Image style={{width: 42, height: 42}} source={{uri: 'https://dummyimage.com/100x100/52c25a/fff&text=S'}} />
//       <View style={{marginLeft: 10}}>
//         <Text style={style}>{label}</Text>
//       </View>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   renderLabel: {
//     flexDirection: 'row',
//     alignItems: 'center'
//   },
//   text: {
//     fontSize: 20,
//   },
//   input: {
//     marginTop: 20,
//     margin: 12,
//     borderWidth: 1,
//     padding: 8,
//     fontSize: 20
//   },
//   button: {
//   }
// });

