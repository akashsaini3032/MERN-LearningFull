require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('./config/db');
const checkoutRoutes = require('./routes/checkoutRoutes');
const logger = require('./utils/logger');

const app = express();

// For general JSON endpoints
app.use(cors({ origin: process.env.CLIENT_URL || '*' }));

// parse JSON for normal routes
app.use(express.json());

// routes
app.use('/api/checkout', checkoutRoutes);

// Stripe webhook endpoint must use raw body - define it before any bodyParser middleware that changes body
// (we will handle raw body inside the route file using body-parser.raw)

// health
app.get('/health', (req, res) => res.json({ status: 'ok' }));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  logger(`Server listening on port ${PORT}`);
});
