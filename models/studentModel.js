import mongoose from "mongoose";
import studentSchema from "../schemas/studentSchema.js";

 const studentModel = mongoose.model("student", studentSchema)

 export default studentModel;