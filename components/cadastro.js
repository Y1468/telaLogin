import { useState } from "react";
import { Button, TextInput, View ,Text,StyleSheet, TouchableHighlight} from "react-native";
import firebase from "../config/firebaseConfig"
import { useNavigation } from "@react-navigation/native";


export function Cadastro() {

    const navigation=useNavigation()
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const[user,setUser]=useState('')
    

    async function cadastroUser() {
        
        await firebase.auth().createUserWithEmailAndPassword(email,password)
            .then((value)=>{
                alert(' Usuario criado com sucesso ' + value.user.email)
                navigation.navigate('Header', {user:value.user.email})
            })

            .catch((erro)=>{

                if (erro.code==='auth/weak-password') {
                    alert(' Sua senha deve ter pelo menos 6 caracteres ')
                    return
                }

                if (erro.code==='auth/invalid-email') {
                    alert('E-mail invalido')
                    return

                }else{
                    alert('Algo dêu errado')
                    return
                }
            })

            setEmail('')
            setPassword('')
            
    }

    return(
        <View style={st.container}>
            <Text style={st.txt}>Cadastre-se</Text>

            <View style={st.viewInput}>

                <Text>Digite sêu email</Text>
                <TextInput
                    placeholder="E-mail"
                    underlineColorAndroid="transparent"
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
                    title="Cadastrar"
                    onPress={()=>cadastroUser()}
                />
                <TouchableHighlight 
                    style={st.btn}
                    onPress={()=>navigation.navigate('Login')}
                    >
                    <Text style={st.txtBtn}>FAÇA LOGIN</Text>
                </TouchableHighlight>
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
    },

    btn:{
       backgroundColor:'blue', 
       marginTop:15,
       padding:6,

    },

    txtBtn:{
        textAlign:'center',
        fontSize:15,
        color:'#FFF'
    }
})