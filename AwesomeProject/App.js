import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

function Login(props){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return(
    <View style={styles.container}>
 

    <View style={styles.inputView}>
      <TextInput
        style={styles.TextInput}
        placeholder="Email."
        placeholderTextColor="#003f5c"
        onChangeText={(email) => setEmail(email)}
      />
    </View>

    <View style={styles.inputView}>
      <TextInput
        style={styles.TextInput}
        placeholder="Password."
        placeholderTextColor="#003f5c"
        secureTextEntry={true}
        onChangeText={(password) => setPassword(password)}
      />
    </View>

    <TouchableOpacity>
      <Text style={styles.forgot_button}>Forgot Password?</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.loginBtn}>
      <Text style={styles.loginText}>LOGIN</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.SignUpBtn}  onPress={() =>{props.setShow(!props.show)}}>
      <Text style={styles.loginText}>SignUP</Text>
    </TouchableOpacity>
  </View>

  )

}


function SignUp(props){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setname] = useState("");
  return(
    <View style={styles.container}>
 
    <View style={styles.inputView}>
      <TextInput
        style={styles.TextInput}
        placeholder="Name"
        placeholderTextColor="#003f5c"
        onChangeText={(name) => setname(email)}
      />
    </View>
    
    <View style={styles.inputView}>
      <TextInput
        style={styles.TextInput}
        placeholder="Email."
        placeholderTextColor="#003f5c"
        onChangeText={(email) => setEmail(email)}
      />
    </View>

    <View style={styles.inputView}>
      <TextInput
        style={styles.TextInput}
        placeholder="Password."
        placeholderTextColor="#003f5c"
        secureTextEntry={true}
        onChangeText={(password) => setPassword(password)}
      />
    </View>

    
    <TouchableOpacity style={styles.loginBtn}>
      <Text style={styles.loginText}>SignUp</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.SignUpBtn} onPress={() =>{props.setShow(!props.show)}}>
      <Text style={styles.loginText}>Login</Text>
    </TouchableOpacity>
  </View>

  )

} 

 
export default function App() {
  const [show, setShow] = useState(false);
 
  return (
    <View style={styles.parentcontainer} >
    <Text style={styles.text}>ToDo App</Text>
    {show?<Login show={show} setShow={setShow} />:<SignUp show={show} setShow={setShow} />}
    </View>
   
  );
}
 
const styles = StyleSheet.create({
  text:{
    flex:1,
    marginLeft:70,
    fontSize: 50,
    color:'#ff1493'
  }, 
  parentcontainer: {
    flex:1,
    flexDirection:'column',
    backgroundColor: "#fff",   
  },
  container: {
    flex: 2,
    height:20,
    backgroundColor: "#dcdcdc",
    alignItems: "center",
    justifyContent: "center",
    
  },
  inputView: {
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    color:"#000000"
  },
 
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
 
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#1e90ff",
  },
  SignUpBtn:{
    width: "20%",
    borderRadius: 25,
    height: 25,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#1e90ff",

  }
});