import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
import { Home } from './pages/Home';
import { CreateRecord } from './pages/CreateRecord';

export function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator 
                screenOptions={{
                    headerShown: false,
                    cardStyle: {
                        backgroundColor: '#0B1F34'
                    }
                }}
            >
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='CreateRecord' component={CreateRecord} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}