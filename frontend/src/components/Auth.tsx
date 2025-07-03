import { SignUpInput } from "@slayer1371/medium-common";
import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../config";

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const navigate = useNavigate();
  const [postInputs, setpostInputs] = useState<SignUpInput>({
    name: "",
    email: "",
    password: "",
  });

  async function sendRequest() {
    try{
      const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`, postInputs);
      const jwt = response.data.jwt;
      localStorage.setItem("token", jwt);
      navigate("/blogs");
    }catch(e)
    {
      alert("An error occurred. Please try again.");
    console.error(e);
      //alert if error
    }
  }
  return (
    <div className="h-screen flex justify-center flex-col">
      <div className="flex justify-center">
        <div>
          <div className="px-10">
            <div className="text-4xl font-extrabold mt-4">{type === "signup" ? "Create an account" : "Login" }</div>
            <div className="text-slate-500 pb-3 text-center">
              {type === "signup" ? "Don't have an account?": "Already have an account?" }
              <Link to={type === "signup" ? "/signin" : "/signup"} className="pl-1">
                {" "}
                <u>{type === "signin" ? "Sign Up": "Login"}</u>{" "}
              </Link>
            </div>
          </div>
          <div>
            {type === "signup" ? <LabelledInput
              label="Username"
              placeholder="Enter your username"
              onChange={(e) => {
                setpostInputs({
                  ...postInputs,
                  name: e.target.value,
                });
              }}
            /> : null }
            <LabelledInput
              label="Email"
              placeholder="m@example.com"
              onChange={(e) => {
                setpostInputs({
                  ...postInputs,
                  email: e.target.value,
                });
              }}
            />
            <LabelledInput
              label="Password"
              type={"password"}
              placeholder="123456"
              onChange={(e) => {
                setpostInputs({
                  ...postInputs,
                  password: e.target.value,
                });
              }}
            />

            <button onClick={sendRequest} className="w-full cursor-pointer bg-black hover:bg-gray-700 text-white font-bold py-2.5 px-4 rounded mt-4">
                {type === "signup"? "Sign Up" : "Sign In"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

interface LabeledInputtype {
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

function LabelledInput({
  label,
  placeholder,
  onChange,
  type,
}: LabeledInputtype) {
  return (
    <div>
      <label className="block text-sm font-semibold text-black mb-1 mt-2.5">
        {label}
      </label>
      <input
        onChange={onChange}
        type={type || "text"}
        className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder={placeholder}
        required
      />
    </div>
  );
}
