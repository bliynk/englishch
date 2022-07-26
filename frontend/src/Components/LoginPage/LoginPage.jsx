import React, {useEffect, useState} from "react";
import "./LoginPage.css";
import MainLogo from "../assets/images/logo/main_logo.png";
import Api from "../../apis/apis";
import Notifications from "../../notifications/notifications";
import { useNavigate } from 'react-router-dom';
export default function LoginPage() {

  let navigate = useNavigate();


  let [email,setEmail]=useState(null);
  let [password,setPassword]=useState(null);


  useEffect(() => {
    document.title = "Login Page";
  }, []);



  function resetForm() {
    setEmail("");
    setPassword("");
  }


  async function submitForm(e) {
    e.preventDefault();

    let data={
      email: email,
      password: password
    }

    let res= await Api.adminSignIn(data);

    if (res.status == 200)
    {
      sessionStorage.setItem('authData',JSON.stringify(res.user));
      sessionStorage.setItem('token',res.accessToken);
      resetForm();
      navigate('/dashboard');
      await Notifications.successMsg(res.message);
    }
    else
    {
      await Notifications.errorMsg(res.message);
    }

  }



  return (
      <div>
        <main className="login_header">
          <nav className="flex items-center pl-10">
            <div className="logo">
              <img src={MainLogo} width="80" height="30" alt="" />
            </div>
            <div className="flex items-center">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="#cbcbcb"
              >
                <path d="m21.743 12.331-9-10c-.379-.422-1.107-.422-1.486 0l-9 10a.998.998 0 0 0-.17 1.076c.16.361.518.593.913.593h2v7a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-4h4v4a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-7h2a.998.998 0 0 0 .743-1.669z"></path>
              </svg>
              <span className="text-gray-200 ml-2">Brochure Managment</span>
            </div>
          </nav>
        </main>

        <div>
          <div className="flex justify-around items-center relative top-20">
            <div>
              <div className="w-96 border-2 border-solid border-gray-800 rounded h-96"></div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">Welcome</h2>
              <div className="flex flex-col pt-5">
                <form className="flex flex-col" onSubmit={submitForm}>
                  <div className="flex">
                    <label>Email</label>
                    <input
                        onChange={(e)=>{setEmail(e.target.value)}}
                        required
                        type="email"
                        className="border-2 w-60 pl-2 ml-10 rounded text-sm border-solid border-gray-600"
                    />
                  </div>
                  <div className="flex mt-5">
                    <label>Password</label>
                    <input
                        onChange={(e)=>{setPassword(e.target.value)}}
                        required
                        minLength={8}
                        type="password"
                        className="border-2 w-60 pl-2 ml-3 rounded text-sm border-solid border-gray-600"
                    />
                  </div>
                  <div className="flex justify-end">
                    <button type={'submit'}>Login</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
