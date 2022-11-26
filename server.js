const mongoose = require('mongoose');
const routes = require('./routes');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(require('./routes'));

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb+srv://user:PaSSWoRd@cluster0.ogkz6cn.mongodb.net/socialmedia',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
  
  // Use this to log mongo queries being executed!
mongoose.set('debug', true);
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
    
  app.use(require('./routes'));
  
  app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));