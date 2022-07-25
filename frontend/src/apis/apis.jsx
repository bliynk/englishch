import axios from "axios";
import Notifications from "../notifications/notifications";

let live_url='';
let local_url='http://localhost:8000/';

let api_url=local_url;

let token=null;



async function checkLogin() {
    let authToken=sessionStorage.getItem('token')
    if (authToken)
    {
        token = { headers: { 'Authorization': `Bearer ${authToken}` } }
    }
    else
    {
        window.location.href='/sign-in';
        await Notifications.errorMsg("You are not seem to be Login, Login First");
    }
}


export default class Api {

    // Admin SignIn
    static adminSignIn = async (data) => {
        try {
            const res = await axios.post(api_url+`admin-login`, data);
            return res.data;
        } catch (error) {
            return error.data;
        }
    }


    // Admin Change Profile
    static adminUpdateProfile = async (data) => {
        await checkLogin();
        try {
            const res = await axios.post(api_url+`admin-update-profile`, data,token);
            return res.data;
        } catch (error) {
            return error.data;
        }
    }
}