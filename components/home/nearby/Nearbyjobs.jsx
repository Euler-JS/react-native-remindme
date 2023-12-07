import React from 'react'
import { View, Text, TouchableOpacity, ActivityIndicator, Modal } from 'react-native'
import { useRouter } from 'expo-router'

import styles from './nearbyjobs.style'

import { COLORS } from '../../../constants'
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard'
import useFetch from '../../../hook/useFetch'


const Nearbyjobs = ({handleModal, setLei}) => {
  const router = useRouter()
  const {data, isLoading, error} = useFetch(
    'leis', {
      query: 'React developer',
      num_pages: 1
    }
  )
  

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Respostas sobre</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? 
        ( <ActivityIndicator size="large" color={COLORS.primary} />) : error ?
         (<Text>Sommethint went wrong</Text>) : 
         (
            data?.map((lei)=> (
              <NearbyJobCard 
              job={lei}
              key={`nearby-job-${lei?.id}`}
              // handleNavigate={()=> router.push(`/job-details/${lei.id}`)}
              handleNavigate={handleModal}
              setLei={setLei}
              />
            ))
         )}

      </View>
    </View>
  )
}

export default Nearbyjobs