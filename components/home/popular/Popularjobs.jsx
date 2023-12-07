import React from 'react'
import { useState } from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router'

import styles from './popularjobs.style'

import { COLORS, SIZES } from '../../../constants'
import PopularJobCard from '../../common/cards/popular/PopularJobCard'
import useFetch from '../../../hook/useFetch'


const Popularjobs = () => {
  const router = useRouter()
  const {data, isLoading, error} = useFetch(
    'leis', {
      query: 'popular',
      num_pages: 1
    }
  )
  
  const [selectedJob, setSelectedJob] = useState()

  const handleCardPress = (item) => {
    router.push(`/job-details/${item.id}`)
    setSelectedJob(item.id)
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Mais visualizadas</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? 
        ( <ActivityIndicator size="large" color={COLORS.primary} />) : error ?
         (<Text>Sommethint went wrong</Text>) : 
         (
            <FlatList 
              data={data}
              renderItem={({item})=>(
                <PopularJobCard 
                  item={item}
                  selectedJob={selectedJob}
                  handleCardPress={()=> handleCardPress(item)}
                />
              )}
              keyExtractor={item => item?.id}
              contentContainerStyle= {{columnGap: SIZES.medium}}
              horizontal
            />
         )}

      </View>
    </View>
  )
}

export default Popularjobs