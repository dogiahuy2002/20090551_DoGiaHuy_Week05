import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Screen02 from './Screen02';
import Screen01 from './Screen01';
import Screen03 from './Screen03';
import Screen04 from './Screen04';

const Stack = createNativeStackNavigator();

export default function StackNavigator(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Screen01" component={Screen01} />
            <Stack.Screen name="Screen02" component={Screen02} />
            <Stack.Screen name="Screen03" component={Screen03} />
            <Stack.Screen name="Screen04" component={Screen04} />
        </Stack.Navigator>
    );
}