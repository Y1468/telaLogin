import { View,Text, TouchableHighlight ,StyleSheet} from "react-native";
import firebase from '../config/firebaseConfig'
import { useNavigation } from "@react-navigation/native";



export function Header({route}) {
    
    const navigation=useNavigation()

    async function logout(params) {
        await firebase.auth().signOut()
        navigation.navigate('Cadastro')
        alert('Deslogado com sucesso')
    }
    return(
        <View style={st.container}>
            <Text style={st.txt1}>
                Ôlá:
                {route.params?.user}
                </Text>
            <View>
                <TouchableHighlight style={st.btn} onPress={()=>logout()}>
                    <Text style={st.txtBtn}>
                      SAIR
                    </Text>
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

   txt1:{
    textAlign:'center',
    fontSize:20,
    marginTop:15
   },

   btn:{
     backgroundColor:'blue',
     padding:10,
     marginTop:50
   },

   txtBtn:{
     color:'#FFF',
     fontSize:18,
     textAlign:'center',
   }
})