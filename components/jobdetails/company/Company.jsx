import React from 'react'
import { View, Text, Image } from 'react-native'

import styles from './company.style'
import { icons, images } from '../../../constants'
import { checkImageURL } from '../../../utils'

const Company = ({companyLogo, jobTitle, companyName, location}) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image
          source={{uri: checkImageURL(companyLogo) 
            ? companyLogo : 
            images.juris_icon}}
          resizeMode='auto'
          style={styles.logoImage}
        />

      </View>

      <View style={styles.jobTitleBox}>
        <Text style={styles.jobTitle}>{jobTitle}</Text>
      </View>

      <View style={styles.companyInfoBox}>
        <Text>
          {companyName} /
        </Text>
        <View style={styles.locationBox}>
            <Image 
              source={icons.location}
              resizeMode='contain'
              style={styles.locationImage}
            />
            <Text>{location}</Text>
        </View>
      </View>

     
    </View>
  )
}

export default Company