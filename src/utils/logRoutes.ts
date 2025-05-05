import express from 'express';
import listEndpoints from 'express-list-endpoints';
import app from '../app.ts';

function logRoutes(app: express.Application) {
  const endpoints = listEndpoints(app);

  const formattedRoutes = endpoints.map((endpoint) => ({
    Path: endpoint.path,
    Methods: endpoint.methods.join(', '),
  }));

  console.log('\n📜 Registered Routes:\n');
  console.table(formattedRoutes);
}

// Run only when executed directly
if (require.main === module) {
  logRoutes(app);
}
