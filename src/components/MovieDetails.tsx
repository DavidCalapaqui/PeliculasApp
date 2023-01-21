import React from 'react'
import { View, Text, FlatList } from 'react-native';
import { MovieFull } from '../interfaces/movieInterface';
import { Cast } from '../interfaces/creditsInterface';
import Icon from 'react-native-vector-icons/MaterialIcons';
import currencyFormatter from 'currency-formatter';
import { CastItem } from './CastItem';


interface Props {
    movieFull: MovieFull;
    cast: Cast[];
}

export const MovieDetails = ( {movieFull, cast}:Props ) => {
  return (
    <>
        <View style={{marginHorizontal:20}} >

            <View style={{flexDirection: 'row'}}>
                <Icon 
                    name='star-outline'
                    color={'gold'}
                    size={16}
                />

                <Text>{movieFull.vote_average} </Text>

                <Text style={{marginLeft:5}}>
                    - {movieFull.genres.map( g =>  g.name).join(', ') }
                </Text>
                


            </View>

            <Text style={{fontSize: 20, marginTop: 10, fontWeight: 'bold', color:'black'}}>
                Historia
            </Text>

            <Text style={{fontSize:16}} >
                {movieFull.overview}
            </Text>

            
            <Text style={{fontSize: 20, marginTop: 10, fontWeight: 'bold', color:'black'}}>
                Presupuesto
            </Text>

            <Text style={{fontSize:18}} >{currencyFormatter.format(movieFull.budget, {code:'USD'})} </Text>

            <View style={{marginTop:10, marginBottom: 100}}>
                <Text style={{fontSize: 20, marginTop: 10, fontWeight: 'bold', color:'black'}} >Actores</Text>
                
                <FlatList 
                    data={cast}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={ ({item}) => <CastItem actor={item}></CastItem>  }
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{marginTop:10, height:70}}
                />

            </View>

        </View>

    </>
  )
}
