# Fast Note

Prototipo de aplicación móvil desarrollada con **React Native (Expo)** que permite crear y gestionar notas de forma rápida, simple y moderna.  
 
Su objetivo es ofrecer una experiencia fluida y accesible, ideal para usuarios que buscan una herramienta ligera para tomar apuntes o ideas rápidas.

---


### Detalles técnicos

| Característica | Descripción |
|----------------|-------------|
| **Framework** | React Native con Expo |
| **Lenguaje** | TypeScript |
| **Navegación** | React Navigation (Stack + Bottom Tabs) |
| **Almacenamiento local** | AsyncStorage |
| **Estilos** | StyleSheet nativo de React Native |
| **Construcción de APK** | Expo Application Services (EAS Build) |

---

### Estructura del proyecto

```bash
react-native-project/
│
├── assets/                # Imágenes y recursos gráficos
│
├── components/            # Componentes principales
│   ├── Inicio/
│   │   └── ListaNotas/
│   └── CrearNota/
│       └── FormNota/
│
├── layout/
│   ├── indexLayout.tsx    # Navegación principal (Tabs + Stack)
│   └── stylesLayout.tsx   # Estilos del layout
│
├── navigation/
│   └── types.ts           # Tipado de rutas y parámetros del Stack/Tab
│
├── App.tsx                # Punto de entrada de la app
└── package.json

```
---
### Funcionalidades principales

* Crear nota con título y contenido.
* Guardar notas.
* Visualizar notas existentes.
* Editar y eliminar una nota.

Cada nota se guarda automáticamente en AsyncStorage (almacenamiento local) y se muestran todas las notas guardadas en la pantalla principal.

---

### Demostración

* [Vídeo demo](https://drive.google.com/file/d/1yQzjLQJLH7dZVAtAWB_04CfOAMzOrCWW/view?usp=sharing). 
* [APK](https://drive.google.com/file/d/1kf1jn6Kx71snCpfMV5s4HMy8lCprJeHl/view?usp=sharing).





