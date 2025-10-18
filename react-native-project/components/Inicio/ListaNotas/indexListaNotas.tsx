import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { ListaNotasNavProp, Nota} from "@/navigation/types";

//Importar estilos
import { useListaNotas } from "./useListaNotas";

//Importar hook
import { stylesListaNotas as styles } from "./stylesListaNotas";

export default function ListaNotas() {
  const navigation = useNavigation<ListaNotasNavProp>();
  const { notas, eliminarNota } = useListaNotas(navigation);

  return (
    <View style={styles.container}>

      {/*TEXT: TITULO*/}

        <Text style={styles.title}>Tus Notas</Text>


      {/*SCROLLVIEW: LISTA DE NOTAS*/}

        <ScrollView>
          {notas.length === 0 ? (

            //Texto cuando no hay notas
            <Text style={styles.empty}>No hay notas todavía</Text>
          ) : (

            //Tarjeta con las notas
            notas.map((nota: Nota) => (
              <TouchableOpacity
                key={nota.id}
                style={styles.card}
                onPress={() => navigation.navigate("FormNota", { nota })}
                //Eliminar nota al mantener pulsado
                onLongPress={() => eliminarNota(nota.id)}
              >
                {/* Título de la nota */}
                <Text style={styles.cardTitle}>{nota.titulo}</Text>

                {/* Contenido de la nota */}
                <Text numberOfLines={2} style={styles.cardContent}>
                  {nota.contenido}
                </Text>

              </TouchableOpacity>
            ))
          )}
        </ScrollView>


      {/*TOUCHABLE: AÑADIR NOTA*/}

        <TouchableOpacity
          style={styles.addButton}
          onPress={() => navigation.navigate("FormNota", { nota: undefined })}
        >
          {/* Text: Añadir nota */}
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>

    </View>
  );
}
