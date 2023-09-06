import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native'
import useAuth from '../hooks/useAuth'
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient'
import { LinearTextGradient } from "react-native-text-gradient";
import Nav from './Nav';
import { SparklesIcon,ArrowLeftIcon } from "react-native-heroicons/solid";


export default function HomeScreen() {
  const navigation = useNavigation();
  // const {user} = useAuth();
  // console.log(user.email +"hello")
  // const handleLogout = async () => {
  //   await signOut(auth);
  // }
  return (
    <View className="flex-1 bg-slate-200">
      <Nav />
      <View className="flex flex-row justify-center gap-x-4 gap-y-12 flex-wrap absolute top-36 z-[1000]" >
        <View className="shadow-xl space-y-1 bg-slate-100 rounded-lg basis-[40%] h-[200px] aspect-square">
          <View >
            <Image className="w-full h-full object-cover" source={require("../assets/jiomoney_qrpayment-01.png")}></Image>
          </View>
          <Text className="text-white text-lg text-center">Khmer Food</Text>
        </View>
        <View className="shadow-xl space-y-1 bg-slate-100 rounded-lg basis-[40%] h-[200px] aspect-square">
          <View >
            <Image className="w-full h-full object-cover" source={require("../assets/jiomoney_qrpayment-01.png")}></Image>
          </View>
          <Text className="text-white text-lg text-center">Khmer Food</Text>
        </View>
        <View className="shadow-xl space-y-1 bg-slate-100 rounded-lg basis-[40%] h-[200px] aspect-square">
          <View >
            <Image className="w-full h-full object-cover" source={require("../assets/jiomoney_qrpayment-01.png")}></Image>
          </View>
          <Text className="text-white text-lg text-center">Khmer Food</Text>
        </View>
        <View className="shadow-xl space-y-1 bg-slate-100 rounded-lg basis-[40%] h-[200px] aspect-square">
          <View >
            <Image className="w-full h-full object-cover" source={require("../assets/jiomoney_qrpayment-01.png")}></Image>
          </View>
          <Text className="text-white text-lg text-center">Khmer Food</Text>
        </View>
      </View>
      <LinearGradient
      colors={['rgb(99,102,241)', 'rgb(17,166,229)', 'rgb(14,185,129)']}
      className="w-full flex-1 mt-32 overflow-y-visible" style={{borderTopLeftRadius: 50, borderTopRightRadius: 50}}>

    </LinearGradient> 
    </View>

  )
}