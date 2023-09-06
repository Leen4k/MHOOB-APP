import { View, Text, SafeAreaView, TouchableOpacity, Image, TextInput } from 'react-native'
import React, {useState} from 'react'
import { useNavigation } from '@react-navigation/native'
import { SparklesIcon,ArrowLeftIcon } from "react-native-heroicons/solid";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';



export default function LoginScreen() {
    const navigation = useNavigation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // const handleSubmit = async () => {
      
    //   if(email && password) {
    //     try{
    //       await signInWithEmailAndPassword(auth, email, password);
    //       console.log("Hello")
    //     }catch(err){
    //       console.log(err)
    //       console.log("hikik")
    //     }
    //   }
    // }


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
        <View><Text className="text-center text-2xl font-bold my-8">Login To <Text className="text-indigo-500">Paylify</Text></Text></View>
      </SafeAreaView>
      <View className="flex-1 bg-white px-8 pt-8" style={{borderTopLeftRadius: 50, borderTopRightRadius: 50}}>
        <View className="space-y-2" >
          <Text>Email Address</Text> 
          <TextInput className="p-4 bg-gray-100 text-slate-500 rounded-2xl" value={email} onChangeText={e => setEmail(e)} placeholder="Email"></TextInput>
          <Text className="">Password</Text>
          {/* use secure text entry for hiding the password */}
          <TextInput className="p-4 bg-gray-100 text-slate-500 rounded-2xl" value={password} onChangeText={e => setPassword(e)} secureTextEntry placeholder="password"></TextInput>
          <TouchableOpacity className="items-end"><Text className="text-indigo-500 mb-4">Forget Password?</Text></TouchableOpacity>
          <TouchableOpacity onPress={()=> navigation.navigate("Home")} className="bg-indigo-500 p-4 rounded-lg items-center font-bold"><Text className="text-white">Login</Text></TouchableOpacity>
          <View className="flex-row justify-center gap-2 mt-2">
            <Text className="font-semibold">Don't have an account yet?</Text>
            <TouchableOpacity onPress={()=> navigation.navigate("SignUp")}><Text className="text-indigo-500">Sign Up</Text></TouchableOpacity>
          </View>
        </View>
      </View> 
    </View>
  )
}