import { View, Text, SafeAreaView, TouchableOpacity, Image, TextInput } from 'react-native'
import React,{useState} from 'react'
import { useNavigation } from '@react-navigation/native'
import { SparklesIcon,ArrowLeftIcon } from "react-native-heroicons/solid";
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';



export default function SignUpScreen() {
    const navigation = useNavigation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async () => {
      if(email && password) {
        try{
          await createUserWithEmailAndPassword(auth, email ,password);
          console.log("created successfully");
        }catch(e){
          console.log(e.message); 
        }
      }
    }
    
  return (
    <View className="flex-1">
      <SafeAreaView>
        <View>
            <TouchableOpacity className="p-2 ml-4" onPress={() => navigation.navigate("Welcome")}>
                <ArrowLeftIcon color="black"/>
            </TouchableOpacity>
        </View>
        <View className="flex-row justify-center items-center">
            <Image className="w-[200px] h-[200px]" source={require("../assets/jiomoney_qrpayment-01.png")}></Image>
        </View>
        <View><Text className="text-center text-2xl font-bold my-8">Sign Up For <Text className="text-indigo-500">Paylify</Text></Text></View>
      </SafeAreaView>
      <View className="flex-1 bg-white px-8 pt-8" style={{borderTopLeftRadius: 50, borderTopRightRadius: 50}}>
        <View className="space-y-2" >
          <Text>Email Address</Text> 
          <TextInput value={email} onChangeText={text => setEmail(text)} className="p-4 bg-gray-100 text-slate-500 rounded-2xl" placeholder="Email"></TextInput>
          <Text className="">Password</Text>
          <TextInput className="p-4 bg-gray-100 text-slate-500 rounded-2xl" value={password} onChangeText={value => setPassword(value)} secureTextEntry placeholder="password"></TextInput>
          <TouchableOpacity className="items-end"><Text className="text-indigo-500 mb-4">Forget Password?</Text></TouchableOpacity>
          <TouchableOpacity onPress={handleSubmit} className="bg-indigo-500 p-4 rounded-lg items-center font-bold"><Text className="text-white">Sign Up</Text></TouchableOpacity>
          <View className="flex-row justify-center gap-2 mt-2">
            <Text className="font-semibold">Already have an account?</Text>
            <TouchableOpacity onPress={()=> navigation.navigate("Login")}><Text className="text-indigo-500">Login</Text></TouchableOpacity>
          </View>
        </View>
      </View> 
    </View>
  )
}