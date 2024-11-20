import { Link, useNavigate } from "react-router-dom"
import { Input } from "./Input"
import { useState } from "react"
import { SignupInput } from "@yoii18/validation";
import axios from "axios";
import { BACKEND_URL } from "../config";

export const Auth = () => {
    const navigate = useNavigate();

    const [postInput, setPostInput] = useState <SignupInput> ({
        email: "",
        password: "",
        name: ""
    });

    async function sendRequest () {
        try{
          const response = await axios.post(`${BACKEND_URL}/api/v1/user/signup`, postInput);
          const jwt = response.data;
          localStorage.setItem("token", jwt);
          navigate("/blogs")
        } catch (e){
          alert("Error while signing up")
        }
      }

    return (
        <div className="h-screen flex justify-center items-center">
            {/* {JSON.stringify(postInput)} */}
            <div className="min-w-[75%] min-h-[60%] flex justify-center flex-col bg-slate-100 p-6">
                <div className="text-center text-3xl font-bold">
                    Create an Account
                </div>
                <div className="text-center text-slate-500 pr-1 ">
                    Already a member? <Link to={'/signin'} className="text-black underline"> Login </Link>
                </div>
                <Input label="Name" placeholder="John" onChange={(e) => {
                    setPostInput({
                        ...postInput,
                        name: e.target.value
                    })
                }} type="text"/>
                <Input label="Username" placeholder="example@xyz.com" onChange={(e) => {
                    setPostInput({
                        ...postInput,
                        email: e.target.value
                    })
                }} type="text"/>
                <Input label="Password" placeholder="" onChange={(e) => {
                    setPostInput({
                        ...postInput,
                        password: e.target.value
                    })
                }} type="password"/>

                <button onClick={sendRequest} type="button" className="ml-[10%] w-[75%] mt-7 text-white bg-black hover:bg-gray-500 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Sign Up</button>

            </div>

        </div>
    )
}