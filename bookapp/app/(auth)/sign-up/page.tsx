"use client"
import React from 'react'
import AuthForm
import {signUpSchema} from '@/lib/validations';
const page = () => {

  (
     <AuthForm
     type = "SIGN_UP"
     schema = {signUpSchema}
     defaultValues = {{
       email: "",
       password:"",
       fullName:'',
       universityId: '',
     }}
     onSubmit{()=>{}}
     />
   )
 }
export default page