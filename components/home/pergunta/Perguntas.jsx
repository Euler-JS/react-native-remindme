import React from 'react'
import { View, Text, TouchableOpacity, ActivityIndicator, Modal } from 'react-native'
import { useRouter } from 'expo-router'

import styles from '../nearby/nearbyjobs.style'

import { COLORS } from '../../../constants'
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard'
import useFetch from '../../../hook/useFetch'
import PerguntasCard from '../../common/cards/perguntas/PerguntasCard'


const Perguntas = ({categoria, setActiveModalView, modalView, activeModalView, cat}) => {
  const router = useRouter()
  const {data, isLoading, error} = useFetch(
    'perguntas', {
      query: 'perguntas',
      num_pages: 1,
      categoria: cat
    }
  )


  

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* <Text style={styles.headerTitle}>{lei}</Text> */}
        {/* <TouchableOpacity>
          <Text style={styles.headerBtn}>Show All</Text>
        </TouchableOpacity> */}
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? 
        ( <ActivityIndicator size="large" color={COLORS.primary} />) : error ?
         (<Text>Sommethint went wrong</Text>) : 
         (
            data?.map((pergunta)=> (
              <PerguntasCard
              pergunta={pergunta}
              key={`nearby-job-${pergunta?.id}`}
              handleNavigate={()=> router.push(`/resposta/${pergunta.id}`)}
              // handleNavigate={setActiveModalView}
              modalView={modalView}
              activeModalView={activeModalView}
              />
            ))
         )}

      </View>
    </View>
  )
}
//http://bit.ly/climademudancas
export default Perguntas