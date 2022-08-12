import { View, Text, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { Auth } from 'aws-amplify';

async function signOut() {
  try {
    await Auth.signOut();
  } catch (error) {
    console.log('Error signing out: ', error);
  }
}

const CustomDrawer = (props) => {
  return (
    <DrawerContentScrollView {...props}>
        <View style={{ backgroundColor: '#212121', padding: 15 }}>

            {/* User Row */}
            <View style={{
                flexDirection: 'row',
                alignItems: 'center'
            }}>
                <View style={{
                    backgroundColor: '#cacaca',
                    width: 50,
                    height: 50,
                    borderRadius: 25,
                    marginRight: 10
                }} />
                <View>
                    <Text style={{ color: 'white', fontSize: 24 }}>Manjil Ghale</Text>
                    <Text style={{ color: 'lightgrey' }}>5.00 <AntDesign name='star' color={'#fff'} /></Text>
                </View>
            </View>
            {/* Messages Row */}
            <View style={{ 
                borderBottomWidth: 1, 
                borderTopWidth: 1, 
                borderColor: '#919191', 
                paddingVertical: 5, 
                marginVertical: 10,
            }}>
                <Pressable onPress={() => { console.log('Make money dirving') }} style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <Text style={{ color: '#dddddd', paddingVertical: 5 }}>Messages</Text>
                    <AntDesign name='right' color={'#fff'} style={{ marginRight: 5 }}/>
                </Pressable>
            </View>
            {/* Do more */}
            <Pressable onPress={() => { console.log('Make money dirving') }}>
                <Text style={{ color: '#dddddd', paddingVertical: 5 }}>Do more with your account</Text>
            </Pressable>
            {/* Make money */}
            <Pressable onPress={() => { console.log('Make money dirving') }}>
                <Text style={{ color: 'white', paddingVertical: 5 }}>Make money driving</Text>
            </Pressable>
        </View>
        <DrawerItemList {...props} />
        <View style={{ 
            margin: 10,
            backgroundColor: '#212121',
            marginVertical: 250
         }}>
            <TouchableOpacity onPress={() => { signOut() }} style={{ padding: 20 }}>
                <Text style={{ color: '#fff' }}>Sign Out</Text>
            </TouchableOpacity>
        </View>
    </DrawerContentScrollView>
  )
}

export default CustomDrawer;