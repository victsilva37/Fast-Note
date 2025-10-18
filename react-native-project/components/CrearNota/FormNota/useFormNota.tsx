import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Nota } from "@/navigation/types";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "@/navigation/types";

type FormNotaNavProp = StackNavigationProp<RootStackParamList, "FormNota">;

export function useFormNota(navigation: FormNotaNavProp, nota?: Nota) {
  const [titulo, setTitulo] = useState("");
  const [contenido, setContenido] = useState("");


  /*TEXTINPUT: TÍTULO DE LA NOTA */

    useEffect(() => {
            if (nota) {
            setTitulo(nota.titulo);
            setContenido(nota.contenido);
            } else {
            setTitulo("");
            setContenido("");
            }
        }, [nota]);

        
  /*TEXTINPUT: CONTENIDO DE LA NOTA */

    /*mismo contenido que TÍTULO DE LA NOTA*/


 /*BUTTON: GUARDAR NOTA */

    const guardarNota = async () => {
        const data = await AsyncStorage.getItem("notas");
        const notas: Nota[] = data ? JSON.parse(data) : [];

        if (nota) {
        const actualizadas = notas.map((n) =>
            n.id === nota.id ? { ...n, titulo, contenido } : n
        );
        await AsyncStorage.setItem("notas", JSON.stringify(actualizadas));
        } else {
        const nueva: Nota = { id: Date.now(), titulo, contenido };
        await AsyncStorage.setItem("notas", JSON.stringify([...notas, nueva]));
        }

        navigation.goBack();
    };


 /*BUTTON: ELIMINAR NOTA */

    const eliminarNota = async () => {
        if (!nota) return;
        const data = await AsyncStorage.getItem("notas");
        const notas: Nota[] = data ? JSON.parse(data) : [];
        const actualizadas = notas.filter((n) => n.id !== nota.id);
        await AsyncStorage.setItem("notas", JSON.stringify(actualizadas));
        navigation.goBack();
    };

  return { titulo, setTitulo, contenido, setContenido, guardarNota, eliminarNota };
}
