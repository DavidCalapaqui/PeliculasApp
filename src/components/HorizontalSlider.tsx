import React from 'react'
import { Movie } from '../interfaces/movieInterface';
import { Text, View, FlatList } from 'react-native'

import { MoviePoster } from '../components/MoviePoster';


interface Props {
    title?: string;
    movies: Movie[]
}

export const HorizontalSlider = ( {title, movies}:Props ) => {
  return (
    <View 
        style={{
           
            height: (title) ? 260 :220
        }}> 
        {
            title &&  <Text style={{fontSize:30, marginLeft:10}}> {title} </Text>
        }

        <FlatList 
        data={movies}
        renderItem={({item}:any) =>(
            
            <MoviePoster  movie={item} width={140} height={200}  />
            
            )}
        keyExtractor={ (item) => item.id.toString()  }
        horizontal={true}
        showsVerticalScrollIndicator={false}
        />

    </View>
  )
}
