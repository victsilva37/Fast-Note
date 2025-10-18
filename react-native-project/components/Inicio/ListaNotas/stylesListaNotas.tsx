import { StyleSheet } from "react-native";

export const stylesListaNotas = StyleSheet.create({

  container: { 
    flex: 1, 
    padding: 20, 
    backgroundColor: "#fff" 
  },

  /*TEXT: TITULO*/

    title: { 
      fontSize: 22, 
      fontWeight: "bold", 
      marginBottom: 15
    },

    
  /*SCROLLVIEW: LISTA DE NOTAS*/

    //Texto cuando no hay notas
    empty: { 
      textAlign: "center", 
      color: "#888", 
      marginTop: 50 
    },

    //Tarjeta con las notas
    card: {
      backgroundColor: "#f9f9f9",
      borderRadius: 10,
      padding: 15,
      marginBottom: 10,
    },

      /* Título de la nota */
      cardTitle: { 
        fontSize: 18, 
        fontWeight: "bold" 
      },

      /* Contenido de la nota */
      cardContent: { 
        color: "#555", 
        marginTop: 5 
      },


  /*TOUCHABLE: AÑADIR NOTA*/

    addButton: {
      position: "absolute",
      bottom: 30,
      right: 30,
      backgroundColor: "#4CAF50",
      width: 60,
      height: 60,
      borderRadius: 30,
      justifyContent: "center",
      alignItems: "center",
      elevation: 5,
    },

    /* Text: Añadir nota */
    addButtonText: { 
      fontSize: 30, 
      color: "#fff" 
    },

});
