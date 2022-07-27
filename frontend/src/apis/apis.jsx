import axios from "axios";
import Notifications from "../notifications/notifications";



let live_url='';
let local_url='http://localhost:8000/';

let api_url=local_url;

let token="";



async function checkLogin() {
    let authToken=await sessionStorage.getItem('token')

    if (authToken)
    {
        token = { headers: { 'Authorization': `Bearer ${authToken}` } }
    }
    else
    {
        window.location.href='/loginpage';
        await Notifications.errorMsg("You are not seem to be Login, Login First");
    }
}


export default class Api {

    // Admin SignIn
    static adminSignIn = async (data) => {
        try {
            const res = await axios.post(api_url+`api/login`,data);
            return res.data;
        } catch (error) {
            return error.data;
        }
    }


    // Admin Logout
    static adminSignOut = async () => {
        await checkLogin();
        try {
            let data={};
            const res = await axios.post(api_url+`api/logout-user`,data,token);
            sessionStorage.removeItem('authData');
            sessionStorage.removeItem('token');
            return res.data;
        } catch (error) {
            return error.data;
        }
    }


    // get all admin
    static getAllAdmin = async () => {
        await checkLogin();
        try {
            let data={};
            const res = await axios.post(api_url+`api/fetch-admin`,data,token);
            return res.data;
        } catch (error) {
            return error.data;
        }
    }


    // add admin
    static adminAdd = async (data) => {
        await checkLogin();
        try {
            const res = await axios.post(api_url+`api/add-admin`,data,token);
            return res.data;
        } catch (error) {
            return error.data;
        }
    }


    // edit admin
    static adminEdit = async (data,index) => {
        await checkLogin();
        try {
            const res = await axios.post(api_url+`api/edit-admin/`+index,data,token);
            return res.data;
        } catch (error) {
            return error.data;
        }
    }


    // search admin
    static searchAdmin = async (data) => {
        await checkLogin();
        try {
            const res = await axios.post(api_url+`api/search-admin`,data,token);
            return res.data;
        } catch (error) {
            return error.data;
        }
    }

}