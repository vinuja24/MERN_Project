const express=require('express');
const cors=require('cors');
const mongoose= require('mongoose');

const app=express();
app.use(cors());
app.use(express.json());
mongoose.connect('mongodb+srv://vinumsvk24:vinu@cluster0.9rq6hhc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>console.log('Mongodb connect'))
.catch(err => console.log('Error in connection',err));

const UserSchema=new mongoose.Schema({
    username:String,
    email:String,
    password:String
});

const User=mongoose.model('User',UserSchema);

//Signup route
app.post('/register',async(req,res)=>{
    const {username,email,password}=req.body;
    try{
    const newUser=new User({username,email,password});
    await newUser.save();
    res.json({message:'data saved'});
    }catch(err){
    res.json({error:'error in saving data'});
    }
})

// Signin route
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username, password });
    if (user) {
      res.json({ message: 'Login successful', username: user.username });
    } else {
      res.status(401).json({ message: 'Invalid username or password' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Server error during login' });
  }
});

app.listen(5000,()=>console.log('server is runing on the post 5000'));


