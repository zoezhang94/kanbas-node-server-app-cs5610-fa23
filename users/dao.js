import model from "./model.js";    

export const updateUser = (id, user) => 
    model.updateOne({_id:id},{$set:user});

export const findAllUsers = () => model.find();
export const findUserById = (id) => model.findById(id);
export const findUserByUsername = (username) =>model.findOne({username:username});
export const findUserByCredentials = (username, password) => model.findOne({username:username,password:password});
export const findUserByRole = (role) => model.find({role:role});
export const createUser = (user) => model.create(user);
export const deleteUser = (id) => model.deleteOne({_id:id});
