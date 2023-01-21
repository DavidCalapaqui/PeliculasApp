import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Text, View, StyleSheet, Image, Dimensions, ScrollView, ActivityIndicator } from 'react-native';
// import { Movie } from '../interfaces/movieInterface';
import { RootStackParams } from '../navigation/Navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useMovieDetails } from '../hooks/useMovieDetails';
import { MovieDetails } from '../components/MovieDetails';
import { TouchableOpacity } from 'react-native-gesture-handler';


const screenHeight = Dimensions.get('screen').height;

interface Props extends StackScreenProps<RootStackParams, 'Detail'>{};


export const DetailScreen = ({ route, navigation }: Props) => {
  
  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
 
  const {isLoading, cast, movieFull} = useMovieDetails(movie.id)
  
  return (

    <ScrollView>

      <View style={styles.imageBorder} >
        <View style={styles.imageContainer}>
          <Image 
            source={{uri}}
            style={styles.posterImage}
          />
            
        </View>
      
      </View>

      <View style={styles.marginContainer} >
        <Text style={styles.subTitle} >{movie.original_title} </Text>
        <Text style={styles.title} >{movie.title} </Text>
      </View>

     
        {
          isLoading
          ?<ActivityIndicator 
              size={30}
              color='grey'
              style={{marginTop: 20}}
            />
          : <MovieDetails movieFull={movieFull!} cast={cast} /> 
          
        }

        {/* boton para cerrar */}
        <View style={styles.backBotton}>
          <TouchableOpacity 
            onPress={ () => navigation.pop() }
          >
            <Icon 
                color={'white'}
                name="arrow-left"
                size={50}
            />
          </TouchableOpacity>

        </View>

     
    </ScrollView>

  )
}
 
const styles =  StyleSheet.create({

  imageBorder:{
    flex:1,
    overflow: 'hidden',
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
 
  imageContainer:{
    width: '100%',
    // backgroundColor: 'red',
    height: screenHeight * 0.7,
    
    shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 10,
      },
      shadowOpacity: 0.24,
      shadowRadius: 7,

      elevation: 9,
      borderBottomEndRadius: 25,
      borderBottomStartRadius: 25,

  },
  posterImage:{
    flex: 1,
    
  },
  marginContainer:{
    marginHorizontal: 20,
    marginTop:20,
  },
  subTitle:{
    fontSize: 18,
    color:'black',
    opacity: 0.8
  },
  title:{
    fontSize: 20,
    fontWeight: 'bold',
    color:'black'
  },

  backBotton:{
    position: 'absolute',
    zIndex:99,
    top:20,
    left:10
  }

  
})