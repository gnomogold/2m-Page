export const productionConfig = {
  port: process.env.PORT || 3001,
  corsOrigin: process.env.CORS_ORIGIN || 'https://seudominio.com',
  email: {
    host: process.env.HOSTGATOR_HOST || 'smtp.hostgator.com',
    port: parseInt(process.env.HOSTGATOR_PORT || '587'),
    secure: false,
    user: process.env.HOSTGATOR_USER,
    pass: process.env.HOSTGATOR_PASS,
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

