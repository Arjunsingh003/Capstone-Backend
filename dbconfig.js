const mongoose = require('mongoose');

// mongoose.connect(`mongodb+srv://get2arjunsingh:<password>@cluster0.o3mheyk.mongodb.net/?retryWrites=true&w=majority`, {useNewUrlParser: true,useUnifiedTopology: true} )

mongoose.connect(
    `mongodb+srv://${process.env.DATABASE_USER_NAME}:${process.env.DATABASE_PASSWORD}@cluster0.o3mheyk.mongodb.net/${process.env.DATABASE_NAME}?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  );