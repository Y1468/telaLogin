import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Header } from "./components/header";
import { Login } from "./components/login";
import { Cadastro } from "./components/cadastro";

const Stack=createNativeStackNavigator()

export default function Routes() {
    return(
        <NavigationContainer>
            <Stack.Navigator 
             initialRouteName="Cadastro"
             >
                <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
                <Stack.Screen name="Header" component={Header} options={{headerShown: false}}/>
                <Stack.Screen name="Cadastro" component={Cadastro}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}