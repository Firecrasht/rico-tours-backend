# Rico Tours - Backend API

Este proyecto es el backend de la aplicación de reservación de autobuses para Rico Tour Vallarta. Usa Node.js, Express y Prisma ORM con PostgreSQL.

## 🚀 Cómo ejecutar localmente

### 1. Clona el repositorio
```bash
git clone https://github.com/tu-usuario/rico-tours-backend.git
cd rico-tours-backend
```

### 2. Instala dependencias
```bash
npm install
```

### 3. Crea un archivo `.env` y configura variables
Ver `.env.example` para referencia.

### 4. Ejecuta Prisma (si usas base de datos local o has hecho cambios en modelos)
```bash
npx prisma generate
npx prisma migrate dev --name init
```

### 5. Inicia el servidor
```bash
npm start
```

## 🌐 Despliegue en Render

Este proyecto incluye un archivo `render.yaml` para automatizar el despliegue.

1. Sube este repositorio a GitHub.
2. Ve a [Render](https://render.com) > "New Web Service".
3. Conecta tu repo y Render lo configurará automáticamente.
