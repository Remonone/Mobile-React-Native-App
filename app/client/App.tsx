
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Preview from './pages/Preview';
import { RootStackParamList } from './types/Navigation';

export default function App() {
  const Stack = createNativeStackNavigator<RootStackParamList>()
  
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
    headerShown: false
  }} initialRouteName='Preview'>
        <Stack.Screen name="Preview" component={Preview}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

