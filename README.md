# API - GraphQL

## Node

https://nodejs.org/en/

### Instalar Yarn

```bash
npm install --global yarn
```

### Levantar este proyecto

Instalar

```bash
yarn
```

Iniciar

```bash
yarn dev
```

### Iniciar Proyecto desde cero

```bash
yarn init
```

### Instalar dependencias

```bash
yarn add cors express graphql express-graphql
```

### Instalar dependencias de desarrollo

```bash
yarn add -D typescript nodemon webpack webpack-cli webpack-node-externals tsconfig-paths-webpack-plugin ts-node ts-loader prettier eslint eslint-config-prettier eslint-config-standard-with-typescript @types/node @types/express @types/cors
```

## Docker

### Crear imagen docker para el proyecto

```bash
docker build -t coagus/api-graphql:1.0 .
```

### Levantar un contenedor

```bash
docker run -p 3001:3001 -dit --name=api coagus/api-graphql:1.0
```

### Subir imagen a repositorio

```bash
docker push coagus/api-graphql:1.1
```

### Eliminar container y la imagen local

```bash
docker stop api && docker rm api && docker rmi coagus/api-graphql:1.0
```

### Entrar al container

```bash
docker exec -it api ash
```

## Instalar docker en Lightsail

```bash
sudo apt update
sudo apt install docker.io -y
sudo snap install docker
```
