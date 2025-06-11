# Rico Tours Backend

## Requisitos

- Node.js
- PostgreSQL
- Prisma CLI (`npm install -g prisma`)

## Instalación

```bash
npm install
npx prisma generate
npx prisma migrate deploy
npm start
```

## Variables de entorno

Crea un archivo `.env`:

```env
DATABASE_URL=postgresql://adminreservas:z8S1sBewWfcXc9hGTL2tOzbxdq6fCoq8@dpg-d14h7geuk2gs73ashc0g-a/ricotoursreservas
JWT_SECRET=supersecreto123
```

## Endpoints

- `POST /api/auth/login` - Login de usuario.
- `GET /api/boletos` - Obtener boletos (protegido por token).