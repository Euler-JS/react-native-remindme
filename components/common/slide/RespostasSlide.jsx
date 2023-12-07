import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';

const RespostasSlide = ({ respostas }) => {
  return (
    <Swiper loop={false} showsPagination={true} showsButtons={true}
        paginationStyle={styles.pagination}
    >
      {respostas.map((resposta, index) => (
        <View key={index} style={styles.slide}>
          <Text>{resposta.descricao}</Text>
          {/* Outros elementos ou estilos para exibir a resposta */}
        </View>
      ))}
    </Swiper>
  );
};

const styles = StyleSheet.create({
    slide: {
    //   flex: 1,
    //   justifyContent: 'center',
    //   alignItems: 'center',
    },
    pagination: {
      bottom: 10,
    },
  });
  

export default RespostasSlide;
