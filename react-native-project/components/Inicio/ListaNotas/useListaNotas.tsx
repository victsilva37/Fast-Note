import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Nota } from "@/navigation/types";

export function useListaNotas(navigation: any) {
  const [notas, setNotas] = useState<Nota[]>([]);

  /*TEXT: TITULO*/

    /*Sin contenido*/


  /*SCROLLVIEW: LISTA DE NOTAS*/

    useEffect(() => {
      const cargarNotas = async () => {
        const data = await AsyncStorage.getItem("notas");
        if (data) setNotas(JSON.parse(data));
      };
      const unsubscribe = navigation.addListener("focus", cargarNotas);
      return unsubscribe;
    }, [navigation]);

    //Eliminar nota al mantener pulsado
    const eliminarNota = async (id: number) => {
      const nuevasNotas = notas.filter(n => n.id !== id);
      setNotas(nuevasNotas);
      await AsyncStorage.setItem("notas", JSON.stringify(nuevasNotas));
    };


  /*TOUCHABLE: AÑADIR NOTA*/

    /*Sin contenido*/

  return { notas, eliminarNota };
}
