import React, { useContext, useState } from "react";
import useFormFields from "../../../Hooks/useFormFields";
import Notify from "../../../Utils/Notify";
import { AuthContext } from "../../../Context/AuthContext";
import {PulseLoader} from 'react-spinners'

export default function Login({handlePage}) {
  const [fields, handleChange] = useFormFields({ username: "", password: "" });
  const { handleToken } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const handlesubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(fields),
      });
      const data = await res.json();
      handleToken(data.token);
      Notify('success','Wellcome to My Blog')
      if (!data?.token) {
        throw Error("The username or password is incorrect!");
      }
    } catch (error) {
      Notify('error','Try again')
    }
    setLoading(false);
  };
  return (
    <div className="min-h-screen flex flex-col gap-3 items-center justify-center bg-gradient-to-br to-purple-100 p-5">
      <h2 className="text-white text-[24px]">Welcome</h2>
      <form
        onSubmit={handlesubmit}
        className="flex flex-col justify-center gap-2 max-w-sm p-5 w-[400px] h-80 bg-gradient-to-br from-indigo-100 to-purple-80 shadow-md rounded-lg space-y-4"
      >
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Username:
          </label>
          <input
            type="text"
            value={fields.username}
            onChange={handleChange}
            name="username"
            className="w-full px-4 py-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Password:
          </label>
          <input
            name="password"
            type="password"
            value={fields.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`flex items-center justify-center cursor-pointer w-full py-2 px-4 rounded-md text-white font-semibold transition-colors duration-300 ${
            loading
              ? "bg-blue-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {loading ? <PulseLoader size={10} color="#fff"/> : "Sign in"}
        </button>
        <p className="text-sm text-center text-gray-600">
            Don't have an account?{' '}
            <span
              onClick={handlePage}
              className="text-blue-600 hover:underline cursor-pointer">
              Register
            </span>
          </p>
      </form>
    </div>
  );
}
