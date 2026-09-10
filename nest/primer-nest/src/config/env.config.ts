export const envConfig = () => ({
    app: {
        port: process.env.APP_PORT,
        environment: process.env.APP_ENVIRONMENT || 'development'
    },
    observe: {
        appkey: process.env.APP_KEY,
        appsecret: process.env.APP_SECRET,
        serviceid: process.env.SERVICE_ID
    }
});