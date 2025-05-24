process.loadEnvFile("./.env")

export const config={
    PORT: process.env.PORT, 
    MODE: process.env.NODE_ENV
}