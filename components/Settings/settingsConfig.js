import { StyleSheet } from 'react-native';
var HashMap = require('hashmap');
global.profile = new HashMap();
global.image;

export function saveProfile(name, last, /*age, gender,*/ email) {
  profile.set("name", name);
  profile.set("last", last);
 // profile.set("age", age);
  //profile.set("gender", gender);
  profile.set("email", email);
  console.log(profile);
}

export function deleteProfile(navigation) {
  profile.clear();
  navigation.reset({
    index: 0,
    routes: [
      {
        name: 'Settings',
      },
    ],
  })

}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#2D187E'
    //paddingTop: StatusBar.currentHeight,
  },
  // scrollView: {
  // backgroundColor: 'pink',
  //marginHorizontal: 20,
  //},
  row: {
    flexDirection: 'row',
    // justifyContent: 'space-around'
  },
  input: {
    //justifyContent: 'flex-end',
    // height: 40,
    margin: 12,
    width: 200,
    //marginLeft:20,
    borderWidth: 1,
    backgroundColor: 'white',
    borderRadius: 10,
    color: 'black',

  },
  text: {
    textAlign: 'center',
    padding: 20,
    fontFamily: "monospace",
    color: "#F8FFE5",
    fontSize: 15,
    fontWeight: "bold",
    //textAlign: "center",
    // backgroundColor: "#000000a0"
  },


});