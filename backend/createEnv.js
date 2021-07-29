const fs = require('fs');
const crypto = require('crypto');
const path = require('path');

const createEnv = () => {
  if (!fs.existsSync(path.join(__dirname, '/.env'))) {
    const secretKey = crypto.randomBytes(32).toString('hex');
    const content = `JWT_SECRET=${secretKey}
NODE_ENV=${process.argv[2] === 'production' ? 'production' : 'develop'}
PORT=5000`;
    fs.writeFileSync(path.join(__dirname, '/.env'), content);
  }
  const envContent = fs.readFileSync(path.join(__dirname, '/.env'), { encoding: 'utf8' });
  fs.writeFileSync(path.join(__dirname, '/.env'), envContent.replace(/NODE_ENV=[a-z]{0,10}/g, `NODE_ENV=${process.argv[2]}`));
};

createEnv();
