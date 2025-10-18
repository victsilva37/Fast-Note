import React from "react";
import { View, TextInput, Button } from "react-native";
import { useRoute, useNavigation, RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList, Nota, FormNotaRouteProp, FormNotaNavProp } from "@/navigation/types";

//Importar estilos
import { stylesFormNota as styles } from "./stylesFormNota";

//Importar hook
import { useFormNota } from "./useFormNota";




export default function FormNota() {
  const navigation = useNavigation<FormNotaNavProp>();
  const route = useRoute<FormNotaRouteProp>();
  const nota = route.params?.nota;

  // Usar Hook
  const { titulo, setTitulo, contenido, setContenido, guardarNota, eliminarNota } =
    useFormNota(navigation, nota);

  return (
    <View style={styles.container}>

      {/*TEXTINPUT: TÍTULO DE LA NOTA */}

        <TextInput
          placeholder="Título"
          style={styles.input_title}
          value={titulo}
          onChangeText={setTitulo}
        />


      {/*TEXTINPUT: CONTENIDO DE LA NOTA */}

        <TextInput
          placeholder="Contenido"
          style={styles.textArea}
          value={contenido}
          onChangeText={setContenido}
          multiline
        />


      {/*BUTTON: GUARDAR NOTA */}

        <Button title="Guardar" onPress={guardarNota} />


      {/*BUTTON: ELIMINAR NOTA */}

        {nota && <Button title="Eliminar" color="red" onPress={eliminarNota} />}

    </View>
  );
}
