import React from 'react'
import { useState } from 'react'
import {useRouter} from 'expo-router'
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native'

import { icons, SIZES } from '../../../constants'

import styles from './welcome.style'

const jobTypes = ["Todos" , "Leis" , "C.Estrada", "C.República"]

const Welcome = ({searchTerm, setSearchTerm, handleClick}) => {
  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState('Todos')
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Bem vindo ao Juris</Text>
        <Text style={styles.welcomeMessage}>Tire dúvidas sobre teus direitos</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput 
            style={styles.searchInput}
            value={searchTerm}
            onChangeText={(text)=> setSearchTerm(text)}
            placeholder='O que você está procurando?'
          />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
          <Image 
            source={icons.search}
            resizeMode='contain'
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.tabsContainer}>
          <FlatList data={jobTypes}
          renderItem={({item})=>(
            <TouchableOpacity 
            style={styles.tab(activeJobType)}
            onPress={()=>{
              setActiveJobType(item)
              router.push(`/search/${item}`)
            }}
            >
              <Text style={styles.tabText(activeJobType, item)}>
                {item}
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item}
          contentContainerStyle={{columnGap: SIZES.small}}
          horizontal/>
      </View>
    </View>
  )
}

export default Welcome