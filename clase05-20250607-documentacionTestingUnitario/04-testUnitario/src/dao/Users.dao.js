import userModel from "./models/User.js";


export default class Users {
    
    get = (params) =>{
        // return [
        //     {
        //         _id:10, email:"j123123", first_name:"Juan"
        //     }
        // ]
        return userModel.find(params);
    }

    getBy = (params) =>{
        return userModel.findOne(params);
    }

    save = (doc) =>{
        // doc._id=1
        // return doc
        return userModel.create(doc);
    }

    update = (id,doc) =>{
        return userModel.findByIdAndUpdate(id,{$set:doc})
    }

    delete = (id) =>{
        return userModel.findByIdAndDelete(id);
    }
}