import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from '../nearby/nearbyjobcard.style'

import { checkImageURL } from '../../../../utils'

const CategoriesCard = ({categoria, handleNavigate, modalView, activeModalView, idCategoria, setCat}) => {
  // console.log("Categoria ", categoria[0]);
  const [showIt, setShowIt] = useState(false)
  return (
    <TouchableOpacity 
      style={styles.container}
      onPress={()=>{
        if(showIt)
        handleNavigate(modalView[0])
        else if(!showIt) setShowIt(!setShowIt)

        handleNavigate("P")
        setCat()
        // handleNavigate(modalView[1])

      }}
      // onPress={()=>}
      >

        <TouchableOpacity style={styles.logoContainer}>
            <Image 
              source={{uri: `${categoria.ilustracao}`}}
              resizeMode='contain'
              style={styles.logoImage}
            />
        </TouchableOpacity>
        <View style={styles.textContainer}>
          <Text style={styles.jobName} numberOfLines={1}>
            {categoria.categoria}
          </Text>
          <Text style={styles.jobType}>{categoria.lei}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default CategoriesCard