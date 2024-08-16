import { useState } from "react";
import { Button, TextInput, View ,Text,StyleSheet} from "react-native";
import firebase from "../config/firebaseConfig"
import { useNavigation } from "@react-navigation/native";

export function Login() {

    const navigation=useNavigation()
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const[user,setUser]=useState('')

    async function loginUser() {
        
        await firebase.auth().signInWithEmailAndPassword(email,password)
            .then((value)=>{
                alert(' Logado com sucesso ' + value.user.email)
                navigation.navigate('Header', {user:value.user.email})
            })

            .catch((erro)=>{
                alert('Algo dêu errado')
                return
            })

            setEmail('')
            setPassword('')
    }

    return(
        <View style={st.container}>
            <Text style={st.txt}>Faça login</Text>

            <View style={st.viewInput}>
                <Text>Digite sêu email</Text>
                <TextInput
                    placeholder="E-mail"
                    underlineColorAndroid="transparent"
                    autoFocus={true}
                    value={email}
                    onChangeText={(texto)=>setEmail(texto)}
                    style={st.input}
                />

                <Text>Digite sua senha</Text>
                <TextInput
                    placeholder="Password"
                    underlineColorAndroid="transparent"
                    value={password}
                    onChangeText={(texto)=>setPassword(texto)}
                    style={st.input}
                />
            </View>
            <View>
                <Button
                    title="Acessar"
                    onPress={()=>loginUser()}
                />
            </View>
        
        </View>
    )
}

const st=StyleSheet.create({
    container:{
        flex:1,
        margin:20
    },

    txt:{
        textAlign:'center',
        fontSize:30,
        fontWeight:'bold'
    },

    input:{
        borderColor:'#121212',
        borderWidth:2,
        borderRadius:5,
        padding:10,
        marginBottom:15,
        fontSize:18

    },

    viewInput:{
        marginTop:25
    }
})