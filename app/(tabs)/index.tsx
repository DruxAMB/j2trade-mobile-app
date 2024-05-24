import { SafeAreaView, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { styled } from 'nativewind'


const Sview = styled(View)

const index = () => {
  return (
    <Sview className='flex-1 bg-red-500 pt-8'>
       <Text>J2trade</Text>
       <Link href="/profile" >Go to profile</Link>
      <StatusBar style="auto" />
      <SafeAreaView />
    </Sview>
    // <View>
    // </View>
  )
}

export default index
