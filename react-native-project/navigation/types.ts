import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export type Nota = {
  id: number;
  titulo: string;
  contenido: string;
};

export type RootStackParamList = {
  ListaNotas: undefined;
  FormNota: { nota?: Nota };
};

export type ListaNotasNavProp = StackNavigationProp<RootStackParamList, "ListaNotas">;

export type FormNotaRouteProp = RouteProp<RootStackParamList, "FormNota">;
export type FormNotaNavProp = StackNavigationProp<RootStackParamList, "FormNota">;