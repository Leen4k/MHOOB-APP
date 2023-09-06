import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { Bars2Icon, Bars3Icon, BellIcon, MagnifyingGlassIcon } from 'react-native-heroicons/solid';
import { LinearTextGradient } from "react-native-text-gradient";

const Nav = () => {
    const navigation = useNavigation();
  return (
    <View className="items-center justify-between flex-row mx-8 mt-20">
        <TouchableOpacity onPress={()=> navigation.navigate("Home")}><Bars3Icon className="" /></TouchableOpacity>
        <Text>dsad</Text>
        <View className="flex-row"> 
            <MagnifyingGlassIcon />
            <BellIcon />
        </View>
    </View>
  )
}

export default Nav