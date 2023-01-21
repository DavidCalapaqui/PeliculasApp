import React, { useContext } from 'react'
import { View, ActivityIndicator, Dimensions, ScrollView } from 'react-native'
import Carousel from 'react-native-snap-carousel';
import ImageColors from 'react-native-image-colors'

import { useMovies } from '../hooks/useMovies';
import { MoviePoster } from '../components/MoviePoster';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { GradientBackgound } from '../components/GradientBackgound';
import { getImageColors } from '../helpers/getColors';
import { GradientContext } from '../context/GradientContext';
import { useEffect } from 'react';


const {width: windowWidth} = Dimensions.get('window');


export const HomeScreen = () => {

  const {nowPlaying, popular, topRated, upcoming, isLoading} = useMovies();
  // const  { top } = useSafeAreaInsets(); le quito porque con este top queda muy arriba

  const {setMainColors} = useContext(GradientContext)

  const getPosterColors = async (index:number) => {
    const movie = nowPlaying[index];
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    
    const [primary='green', secondary='orange'] = await  getImageColors(uri);
    setMainColors({primary, secondary})

  }

  useEffect(() => {
    if(nowPlaying.length>0){
      getPosterColors(0)
    }
  }, [nowPlaying])
  
  
  if(isLoading){

    return (
      <View style={{flex:1, justifyContent: 'center', alignContent:'center'}}>
        <ActivityIndicator 
          color="red"
          size={100}
        />
      </View>  
    )
  }
  
  // console.log(peliculasEnCine[5]?.title);
  // console.log(peliculasPopulares[5]?.title);

  

  return (

    <GradientBackgound >
      <ScrollView>
        <View style={{marginTop:30}} >
          {/* <MoviePoster 
            movie={peliculasEnCine[1]}
          /> */}
          <View  style={{ height: 440 ,  }}>
            <Carousel 
              data={nowPlaying}
              renderItem={({item}:any) => <MoviePoster  movie={item} />}
              sliderWidth={windowWidth}
              itemWidth={300}
              inactiveSlideOpacity={0.9}
              onSnapToItem={ (index) =>  getPosterColors(index) }
            />
          </View>
        
        {/* PELICULAS POPULARES */}
          <HorizontalSlider title="Popular"  movies={popular}/>
          <HorizontalSlider title="Top rated"  movies={topRated}/>
          <HorizontalSlider title="Upcoming"  movies={upcoming}/>
      
        </View>

      </ScrollView>
    </GradientBackgound>

    
  )
}
