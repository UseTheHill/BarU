import React from "react";
import { Link } from "react-router-dom";


export default function Blog({ fixed }) {
    return (

        <div className="blogs__wraper bg-gray-200  py-20 px-20" >
            <div className="blogs bg-white mr-5">
                <img
                    src="https://images.unsplash.com/photo-1591243315780-978fd00ff9db?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                    className=""
                />
                <div className="p-5">
                    <h1 className="text-2xl font-bold text-green-800 py-2">
                        Name:  Bar:
                    </h1>
                    <p className="bg-white text-sm text-black">

                    </p>
                    <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 mx-8 my-4 rounded space-x-2 md:space-x-8">
                        Edit
                    </button>

                    <button className="bg-red-400 hover:bg-red-500 text-gray-800 font-bold py-2 px-4 mx-8 my-4 rounded space-x-2 md:space-x-8">
                        Delete
                    </button>
                </div>
            </div>
        </div>
    )
}