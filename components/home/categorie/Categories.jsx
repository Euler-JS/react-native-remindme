import React from 'react'
import { View, Text, TouchableOpacity, ActivityIndicator, Modal } from 'react-native'
import { useRouter } from 'expo-router'

import styles from '../nearby/nearbyjobs.style'

import { COLORS } from '../../../constants'
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard'
import useFetch from '../../../hook/useFetch'
import CategoriesCard from '../../common/cards/categories/CategoriesCard'


const Categories = ({lei, setActiveModalView, modalView, activeModalView, setCat}) => {
  const router = useRouter()
  const {data, isLoading, error} = useFetch(
    'categorias', {
      query: 'categorias',
      num_pages: 1,
      lei: lei
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
            data?.map((categoria)=> (
              <CategoriesCard
              categoria={categoria}
              key={`nearby-job-${categoria?.id}`}
              // handleNavigate={()=> router.push(`/job-details/${categoria.id}`)}
              handleNavigate={setActiveModalView}
              modalView={modalView}
              activeModalView={activeModalView}
              idCategoria={categoria.id}
              setCat={()=>{setCat(categoria.id)}}
              />
            ))
         )}

      </View>
    </View>
  )
}
//http://bit.ly/climademudancas
export default Categories