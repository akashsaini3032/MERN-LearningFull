const jwt = require("jsonwebtoken");

// Secret key (you should store this in .env)
const secret = process.env.JWT_SECRET || "mysecretkey";

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  // Check if header exists and starts with "Bearer"
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ msg: "Unauthorized: No token provided" });
  }

  const token = authHeader.split(" ")[1]; // Get token after "Bearer"

  try {
    const decoded = jwt.verify(token, secret);
    req.user = decoded; // Store decoded data in request
    next();
  } catch (error) {
    console.error("Token verification failed:", error);
    return res.status(403).json({ msg: "Forbidden: Invalid or expired token" });
  }
};

module.exports = authMiddleware;
