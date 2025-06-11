# Rico Tours Backend (Prisma + Render Ready)

Este es el backend del sistema de reservas **Rico Tours**, migrado completamente de Sequelize a **Prisma ORM** y listo para ser desplegado en **Render**.

## 🚀 Despliegue en Render

### 1. Crear un nuevo repositorio en GitHub
Sube el contenido de este proyecto (`rico_tours_backend_render_verified.zip`) a un nuevo repositorio en tu cuenta de GitHub.

### 2. Conectar Render con GitHub
- Ve a [https://render.com](https://render.com)
- Crea un **nuevo Web Service**
- Selecciona tu repositorio
- Render detectará automáticamente el archivo `render.yaml`

### 3. Variables de Entorno
Agrega estas variables en el panel de Render:

| Variable        | Valor                                              |
|-----------------|----------------------------------------------------|
| `DATABASE_URL`  | URL de conexión a tu base de datos PostgreSQL     |
| `JWT_SECRET`    | Una clave secreta segura para tokens JWT          |
| `PORT`          | `3000` o dejar en blanco (Render la gestiona sola) |

### 4. Comandos de Render
- `Build command`: `npm install`
- `Start command`: `npm start`

---

## 🛠️ Uso local (desarrollo)

### 1. Clonar y configurar

```bash
git clone https://github.com/tuusuario/rico-tours-backend.git
cd rico-tours-backend
npm install
cp .env.example .env
```

Edita `.env` con tus credenciales.

### 2. Migrar la base de datos

```bash
npx prisma migrate deploy
```

### 3. Iniciar el servidor

```bash
npm start
```

---

## 📂 Estructura

- `src/controllers/` → Lógica de rutas
- `src/routes/` → Endpoints API
- `src/config/prisma.js` → Cliente Prisma
- `prisma/schema.prisma` → Definición del modelo de base de datos

---

## 🧾 Licencia
MIT