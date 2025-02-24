let mongoose = require("mongoose")


const userSchema =new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true,
        unique:true
    },
    role:{
        type:String,
        default:"student",
        require:true
    },
    country:{
        type:String,
        require:true

    },
    dateOfBirth:{
        type:Date
        // require:true
    },

});
    const teacherSchema=new mongoose.Schema({
        subject:{
            type:String,
            require:true
        },
        classes:{
            type:Array,
            require:true
        },
        enrolledCourses:{
            type:Array,
            require:true
        },
    
        
        children:{
            type:Array,
            require:true
        },
    
        
        permissions:{
            type:Array,
            require:true
        },
    
        
    
        
        systemAdmin:{
            type:Boolean,
            default:false
        },
    
        
        verified:{
            type:Boolean,
            default:false
        },
    
        
        registrationDate:{
            type:Date,
            default:Date.now
        }

    });



    





const UserModel = mongoose.model("user", userSchema);
const TeacherModel = mongoose.model("product", teacherSchema);