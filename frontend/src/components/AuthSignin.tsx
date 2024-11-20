import { Link, useNavigate } from "react-router-dom"
import { Input } from "./Input"
import { useState } from "react"
import { SigninInput } from "@yoii18/validation";
import axios from "axios";
import { BACKEND_URL } from "../config";

export const AuthSignin = () => {
    const navigate = useNavigate();

    const [postInput, setPostInput] = useState <SigninInput> ({
        email: "",
        password: ""
    });

    async function sendRequest () {
        try{
          const response = await axios.post(`${BACKEND_URL}/api/v1/user/signin`, postInput);
          const jwt = response.data;
          localStorage.setItem("token", jwt);
          navigate("/blogs")
        } catch (e){
          alert("Error while signing in")
        }
      }

    return (
        <div className="h-screen flex justify-center items-center">
            {/* {JSON.stringify(postInput)} */}
            <div className="min-w-[75%] min-h-[60%] flex justify-center flex-col bg-slate-100 p-6">
                <div className="text-center text-3xl font-bold">
                    Log In
                </div>
                <div className="text-center text-slate-500 pr-1 ">
                    Don't have an account yet? <Link to={'/signup'} className="text-black underline"> Sign Up </Link>
                </div>
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

                <button onClick={sendRequest} type="button" className="ml-[10%] w-[75%] mt-7 text-white bg-black hover:bg-gray-500 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Sign In</button>

            </div>

        </div>
    )
}