import { Box, NativeBaseProvider } from 'native-base';
import React from 'react';
import LoginScreen from './app/Screens/LoginScreen';

function App(props) {
  return (
    <NativeBaseProvider>
      <Box justifyContent={'center'} alignItems={'center'} flex={1}>
   <LoginScreen/>
   </Box>
   </NativeBaseProvider>
  );
}

export default App;