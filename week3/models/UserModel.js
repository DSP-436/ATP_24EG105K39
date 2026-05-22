import { Schema,model,Types } from "mongoose";

//create cart schema{product,count}
const cartSchema=new Schema({
    product:{
        type:Types.ObjectId,
        ref:"product"//name of product model
    },
    count:{
        type:Number,
        default:1
    }
})
//Create User Schema(username,password,email,age)  ==> defines the structure of documents
const userSchema = new Schema({
    //structure of User resource
    username:{
        type:String,
        required:[true,"Username is required"],
        minLength:[4,"Min length of username is 4 chars"],
        maxLength:[6,"Username size exceed 6 chars"]
        //pattern
    },
    password:{
        type:String,
        required:[true,"Password Required"]

    },
    email:{
        type:String,
        required:[true,"email Required"],
        unique:[true,"Email already existed"]//unique is not a validator it is a option
    },
    age:{
        type:Number
    },
    cart:[cartSchema]//{product:"",count:2}

},{
    versionKey:false,
    timestamps:true,
})

//Generate UserModel ==>  creates object based on that schema 
export const UserModel = model("user",userSchema)  //"user" -> creates users collection
