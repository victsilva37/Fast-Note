import { StyleSheet } from "react-native";

export const stylesFormNota = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20 
    },
    
    /*TEXTINPUT: TÍTULO DE LA NOTA */

        input_title: { 
            backgroundColor: "#e6e5e5ff", 
            borderWidth: 1,
            borderColor: 'black',
            padding: 10, 
            borderRadius: 8, 
            marginBottom: 10,
            fontSize: 20
        },


    /*TEXTINPUT: CONTENIDO DE LA NOTA */

        textArea: { 
            backgroundColor: "#f3eeeeff",
            borderWidth: 1,
            borderColor: 'black',
            borderRadius: 8,
            height: 400, 
            textAlignVertical: "top",
            marginBottom: 10
        },


     /*BUTTON: GUARDAR NOTA */

        /*Sin contenido*/


    /*BUTTON: ELIMINAR NOTA */

        /*sin contenido*/

});

   

        