import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from '../nearby/nearbyjobcard.style'

import { checkImageURL } from '../../../../utils'

const PerguntasCard = ({pergunta, handleNavigate, modalView, activeModalView}) => {
  // console.log("pergunta ", pergunta[0]);
  const [showIt, setShowIt] = useState(false)
  return (
    <TouchableOpacity 
      style={styles.container}
      onPress={()=>{
        // if(showIt)
        // handleNavigate(modalView[0])
        // else if(!showIt) setShowIt(!setShowIt)
        console.log("Pergunta ", pergunta.id)
        handleNavigate()

      }}
      // onPress={()=>}
      >

        {/* <TouchableOpacity style={styles.logoContainer}>
            <Image 
              source={{uri: `${pergunta.ilustracao}`}}
              resizeMode='contain'
              style={styles.logoImage}
            />
        </TouchableOpacity> */}
        <View style={styles.textContainer}>
          <Text style={styles.jobName} numberOfLines={1}>
            {pergunta.pergunta}
          </Text>
          <Text style={styles.jobType}>{pergunta.pergunta}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default PerguntasCard