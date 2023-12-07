import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './nearbyjobcard.style'

import { checkImageURL } from '../../../../utils'

const NearbyJobCard = ({job, handleNavigate, setLei}) => {
  return (
    <TouchableOpacity 
      style={styles.container}
      onPress={()=>{
        handleNavigate();
        setLei(job.nome)
      }}>

        <TouchableOpacity style={styles.logoContainer}>
            <Image 
              source={{uri: `${job.ilustracao}`}}
              resizeMode='contain'
              style={styles.logoImage}
            />
        </TouchableOpacity>
        <View style={styles.textContainer}>
          <Text style={styles.jobName} numberOfLines={1}>
            {job.nome}
          </Text>
          <Text style={styles.jobType}>{job.tag}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default NearbyJobCard