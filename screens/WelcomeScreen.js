import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'



export default function WelcomeScreen() {
    const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1 justify-center items-center">
       <Text className="font-bold text-4xl "><Text className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500 uppercase">MHOOB APP</Text></Text> 
       <View className="flex-row justify-center mt-12">
            <Image className="w-[350] h-[350px]" source={require("../assets/jiomoney_qrpayment-01.png")}></Image>
       </View>
       <View className="flex-row mt-12">
            <TouchableOpacity onPress={()=> navigation.navigate("SignUp")} className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  cursor-pointer justify-center flex-row w-[85%] rounded-lg">
                <Text className="text-xl font-bold text-center text-slate-300 py-3">Sign up</Text>
            </TouchableOpacity>
       </View>
       <View className="flex-row justify-center gap-2 mt-2">
            <Text className="font-semibold">Already have an account?</Text>
            <TouchableOpacity onPress={()=> navigation.navigate("Login")}><Text className="text-indigo-500">Log In</Text></TouchableOpacity>
       </View>
    </SafeAreaView>
  )
}