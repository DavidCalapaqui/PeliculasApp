import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
// import { Text} from 'react-native'
import { Navigation } from './src/navigation/Navigation';
import { GradientProvider } from './src/context/GradientContext';
// import { FadeScreen } from './src/screens/FadeScreen';

const AppState = ({children}: any) => {
   return (
      <GradientProvider>
        {children}
      </GradientProvider>

   )
}


export const App = () => {
  return (
    <NavigationContainer>
      <AppState >
        <Navigation />
      </AppState>
      {/* <FadeScreen /> */}
    </NavigationContainer>
  )
}
