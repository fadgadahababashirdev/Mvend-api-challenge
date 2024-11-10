const bcrypt = require('bcryptjs');
const users = require('../db/models/users');

// registering user
const signup = async (req, res) => {
  const { email, password, username } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const existingUser = await users.findOne({ where: { email } });
    if (!existingUser) {
      const newUser = await users.create({
        email,
        username,
        password: hashedPassword,
      });
      res.status(201).json({
        status: 'success',
        message: 'account created successfully',
        user: newUser,
      });
    } else {
      res.status(400).json({ status: 'failed', message: 'email not found' });
    }
  } catch (error) {}
};
// get all users

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await users.findAll();
    res.status(201).json({ status: 'success', users: allUsers });
  } catch (error) {
    res.status(500).json({ status: 'failed', message: error.message });
  }
};

// get  single user
const getSingleUser = async (req, res) => {
  const { id } = req.params;
  try {
    if (!id) {
      res
        .status(400)
        .json({ status: 'failed', message: 'Please provide an id ' });
    } else {
      const singleUser = await users.findByPk(id);
      if (!singleUser) {
        res
          .status(400)
          .json({ status: 'failed', message: 'user id not found' });
      } else {
        res
          .status(200)
          .json({ status: 'failed', message: 'user found ', user: singleUser });
      }
    }
  } catch (error) {
    res.status(500).json({ status: 'failed', message: error.message });
  }
};
// update the user
const updateTheUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { email, username } = req.body;
    const userExist = await users.findByPk(id);
    if (!userExist) {
      res
        .status(400)
        .json({ status: 'failed', message: 'user does not exist' });
    } else {
      const updateUser = await users.update(
        {
          email,
          username,
        },
        { where: { id: id } }
      );
      res
        .status(200)
        .json({ status: 'succes', message: 'user updated successfully' });
    }
  } catch (error) {
    res.status(200).json({ status: 'failed', message: error.message });
  }
}; 

// delete the user  
const deleteTheUser = async(req,res)=>{
    try {
        const {id} = req.params 
        const userId = await users.findByPk(id)
        if(!userId){
            res.status(400).json({status:"failed" , message:"user id not found"})
        }else{
            const deleteUser = await users.destroy({where:{id:id}})
            res.status(200).json({status:'sucess' , message:"user deleted successfully"})
        }
    } catch (error) {
        res.status(500).json({status:"failed" , message:error.message})
    }
}
module.exports = { signup, getAllUsers, getSingleUser, updateTheUser  , deleteTheUser};
