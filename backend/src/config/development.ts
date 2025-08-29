export const developmentConfig = {
  port: process.env.PORT || 3001,
  corsOrigin: process.env.CORS_ORIGIN || 'http://localhost:5173',
  email: {
    host: process.env.MAILTRAP_HOST || 'smtp.mailtrap.io',
    port: parseInt(process.env.MAILTRAP_PORT || '2525'),
    secure: false,
    user: process.env.MAILTRAP_USER,
    pass: process.env.MAILTRAP_PASS,
  },
  security: {
    rateLimitWindowMs: 900000, // 15 minutos
    rateLimitMaxRequests: 5,
    helmet: {
      contentSecurityPolicy: {
        directives: {
          defaultSrc: ["'self'"],
          styleSrc: ["'self'", "'unsafe-inline'"],
          scriptSrc: ["'self'"],
          imgSrc: ["'self'", "data:", "https:"],
        },
      },
    }
  }
};
