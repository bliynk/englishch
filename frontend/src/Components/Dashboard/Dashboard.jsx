import React, {useEffect, useState} from "react";
import "./Dashboard.css";
import MainLogo from "../assets/images/logo/main_logo.png";
import {useNavigate} from "react-router-dom";
import Api from "../../apis/apis";
import Notifications from "../../notifications/notifications";


export default function Dashboard() {

  let navigate=useNavigate();

  useEffect(()=>{
    let checkAuth=sessionStorage.getItem('token');

    if (checkAuth)
    {}
    else
    {
      navigate('/loginpage')
    }
  },[])



  const [showHideFirstTab, HideShowFirstTab] = useState(true);
  const [showHideSecondTab, HideShowSecondTab] = useState(false);
  const [showHideThirdTab, HideShowThirdTab] = useState(false);
  const [ShowHideFourthTab, HideShowFourthTab] = useState(false);

  function displayHideFirstTab() {
    HideShowFirstTab(true);
    HideShowSecondTab(false);
    HideShowThirdTab(false);
    HideShowFourthTab(false);
  }

  function displayHideSecondTab() {
    HideShowSecondTab(true);
    HideShowThirdTab(false);
    HideShowFirstTab(false);
    HideShowFourthTab(false);
  }

  function displayHideThirdTab() {
    HideShowThirdTab(true);
    HideShowSecondTab(false);
    HideShowFirstTab(false);
    HideShowFourthTab(false);
  }

  function displayHideFourthTab() {
    HideShowFourthTab(true);
    HideShowThirdTab(false);
    HideShowSecondTab(false);
    HideShowFirstTab(false);
  }


  async function logout(e) {
    e.preventDefault();

    sessionStorage.removeItem('authData');
    sessionStorage.removeItem('token');

    let res= await Api.adminSignOut();

    if (res.status == 200)
    {
      navigate('/loginpage');
      await Notifications.successMsg(res.message);
    }
    else
    {
      await Notifications.errorMsg(res.message);
    }
  }



  return (
    <div>
      {/* Header */}
      <header className="dashboard_header">
        <div className="flex justify-between items-center pl-4 pr-4">
          <div>
            <div className="flex items-center">
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
            </div>
          </div>
          <div>
            <div className="flex items-center">
              <span className="text-gray-200 mr-2">Hello Bejhon</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#ddd"
                class="bi bi-person-square"
                viewBox="0 0 16 16"
              >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12z" />
              </svg>
            </div>
          </div>
        </div>
      </header>

      <section>
        <div className="tab">
          <div className="flex items-center ml-3 mb-6 mt-6">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="#fff"
                class="bi bi-person-circle"
                viewBox="0 0 16 16"
              >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path
                  fill-rule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                />
              </svg>
            </div>
            <div>
              <div className="flex flex-col">
                <h3 className="text-white ml-3 text-xl">Bejhon Pacadzioski</h3>
                <div className="flex items-center justify-around mt-2">
                  <h6 className="text-blue-800 underline cursor-pointer">
                    Profile
                  </h6>
                  <h6 className="text-blue-800 underline cursor-pointer" onClick={logout}>
                    Logout
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <button
            className={showHideFirstTab ? "secondButton" : ""}
            id="defaultOpen"
            onClick={displayHideFirstTab}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="#ddd"
              className="bi bi-speedometer2 mr-2"
              viewBox="0 0 16 16"
            >
              <path d="M8 4a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 8 4zM3.732 5.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 10a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 10zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 9.31a.91.91 0 1 0 1.302 1.258l3.434-4.297a.389.389 0 0 0-.029-.518z" />
              <path
                fill-rule="evenodd"
                d="M0 10a8 8 0 1 1 15.547 2.661c-.442 1.253-1.845 1.602-2.932 1.25C11.309 13.488 9.475 13 8 13c-1.474 0-3.31.488-4.615.911-1.087.352-2.49.003-2.932-1.25A7.988 7.988 0 0 1 0 10zm8-7a7 7 0 0 0-6.603 9.329c.203.575.923.876 1.68.63C4.397 12.533 6.358 12 8 12s3.604.532 4.923.96c.757.245 1.477-.056 1.68-.631A7 7 0 0 0 8 3z"
              />
            </svg>
            Dashboard
          </button>
          <button
            className={showHideSecondTab ? "secondButton" : ""}
            onClick={displayHideSecondTab}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="#ddd"
              className="mr-2"
            >
              <path d="M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6H6zm8 7h-1V4l5 5h-4z"></path>
            </svg>
            Broucher
          </button>
          <button
            className={showHideThirdTab ? "thirdButton" : ""}
            onClick={displayHideThirdTab}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="#ddd"
              className="mr-2"
            >
              <path d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2 7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h17z"></path>
            </svg>
            Users
          </button>
          <button
            onClick={displayHideFourthTab}
            className={ShowHideFourthTab ? "thirdButton" : ""}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="#ddd"
              className="mr-2"
            >
              <path d="m2.344 15.271 2 3.46a1 1 0 0 0 1.366.365l1.396-.806c.58.457 1.221.832 1.895 1.112V21a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1.598a8.094 8.094 0 0 0 1.895-1.112l1.396.806c.477.275 1.091.11 1.366-.365l2-3.46a1.004 1.004 0 0 0-.365-1.366l-1.372-.793a7.683 7.683 0 0 0-.002-2.224l1.372-.793c.476-.275.641-.89.365-1.366l-2-3.46a1 1 0 0 0-1.366-.365l-1.396.806A8.034 8.034 0 0 0 15 4.598V3a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1.598A8.094 8.094 0 0 0 7.105 5.71L5.71 4.904a.999.999 0 0 0-1.366.365l-2 3.46a1.004 1.004 0 0 0 .365 1.366l1.372.793a7.683 7.683 0 0 0 0 2.224l-1.372.793c-.476.275-.641.89-.365 1.366zM12 8c2.206 0 4 1.794 4 4s-1.794 4-4 4-4-1.794-4-4 1.794-4 4-4z"></path>
            </svg>
            Categories Settings
          </button>
        </div>
        {showHideFirstTab && (
          <div id="London" className="tabcontent">
            <div className="flex items-center mt-2 ml-4">
              <a href="!#" className="text-blue-800 underline">
                Home
              </a>
              <div className="w-1 h-6  bg-gray-900 ml-2 mr-2"></div>
              <a href="!#" className="text-blue-800 underline">
                Dashboard
              </a>
            </div>
            <div>
              <h2 className="text-xl font-medium mt-8 ml-4 mb-8">
                Dashboard Admin
              </h2>
            </div>
            <div className="_gray_bg"></div>

            <div className="flex justify-around mt-10">
              <div>
                <div className="box_one relative">
                  <div className="flex items-center">
                    <div className="flex flex-col">
                      <div className="flex justify-between">
                        <h3 className="text-white text-2xl">5</h3>
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="40"
                            height="40"
                            fill="#fff"
                            className="bi bi-person-fill absolute right-6"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                          </svg>
                        </div>
                      </div>
                      <h2 className="text-white text-xl mt-4">
                        Registered Admin
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="box_two relative">
                  <div className="flex items-center">
                    <div className="flex flex-col">
                      <div className="flex justify-between">
                        <h3 className="text-white text-2xl">1489</h3>
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="40"
                            height="40"
                            fill="#fff"
                            className="bi bi-file-earmark-text absolute right-6"
                            viewBox="0 0 16 16"
                          >
                            <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
                            <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
                          </svg>
                        </div>
                      </div>
                      <h2 className="text-white text-xl mt-4">
                        Total Brochure
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="box_three relative">
                  <div className="flex items-center">
                    <div className="flex flex-col">
                      <div className="flex justify-between">
                        <h3 className="text-white text-2xl">124</h3>
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="40"
                            height="40"
                            fill="#fff"
                            className="bi bi-house-door-fill absolute right-6"
                            viewBox="0 0 16 16"
                          >
                            <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z" />
                          </svg>
                        </div>
                      </div>
                      <h2 className="text-white text-lg mt-4">
                        Brochure in Showroom
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="box_four relative">
                  <div className="flex items-center">
                    <div className="flex flex-col">
                      <div className="flex justify-between">
                        <h3 className="text-white text-2xl">24</h3>
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="40"
                            height="40"
                            fill="#fff"
                            className="bi bi-check2-square absolute right-6"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z" />
                            <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z" />
                          </svg>
                        </div>
                      </div>
                      <h2 className="text-white text-xl mt-4">
                        Old Brochure to Check
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ml-4 mt-4">
              <h3 className="text-xl">Last Added brochure</h3>
              <table className="mt-4">
                <tr>
                  <th>Brochure Number</th>
                  <th>Name</th>
                  <th>Date Received</th>
                  <th>In Showroom?</th>
                  <th>Publisher</th>
                </tr>
                <tr>
                  <td>02-01.008</td>
                  <td>Elac Cross 6 Massblatt</td>
                  <td>08.04,2022</td>
                  <td>0</td>
                  <td>PromediTec SA</td>
                </tr>
                <tr>
                  <td>01-01.002</td>
                  <td>Slip stop</td>
                  <td>20.10.2021</td>
                  <td>1</td>
                  <td>Novomed GmbH</td>
                </tr>
                <tr>
                  <td>06-00.004</td>
                  <td>ALS Sofortversorgung</td>
                  <td>08.00.2021</td>
                  <td>1</td>
                  <td>Active Communication AG</td>
                </tr>
                <tr>
                  <td>06-00.006</td>
                  <td>ALS Sofortversorgung</td>
                  <td>08.00.2022</td>
                  <td>1</td>
                  <td>Active Communication GA</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </table>
            </div>
          </div>
        )}
        {showHideSecondTab && (
          <div id="Paris" className="tabcontent">
            <div className="flex items-center mt-2 ml-4">
              <a href="!#" className="text-blue-800 underline">
                Home
              </a>
              <div className="w-1 h-6  bg-gray-900 ml-2 mr-2"></div>
              <a href="!#" className="text-blue-800 underline">
                Brochure
              </a>
            </div>
            <div>
              <h2 className="text-xl font-medium mt-8 ml-4 mb-8">
                Brochure Admin
              </h2>
            </div>
            <div className="_gray_bg"></div>

            <div className="flex justify-between pr-6 pt-12">
              <div>
                <div className="flex items-center relative left-16">
                  <select className="border-2 border-solid border-gray-900 rounded">
                    <option>Sort By</option>
                  </select>
                  <form className="relative ml-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="#ddd"
                      className="absolute z-10 ml-3 mt-1"
                    >
                      <path d="M19.023 16.977a35.13 35.13 0 0 1-1.367-1.384c-.372-.378-.596-.653-.596-.653l-2.8-1.337A6.962 6.962 0 0 0 16 9c0-3.859-3.14-7-7-7S2 5.141 2 9s3.14 7 7 7c1.763 0 3.37-.66 4.603-1.739l1.337 2.8s.275.224.653.596c.387.363.896.854 1.384 1.367l1.358 1.392.604.646 2.121-2.121-.646-.604c-.379-.372-.885-.866-1.391-1.36zM9 14c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"></path>
                    </svg>
                    <input
                      type="text"
                      placeholder="Number, Name or Publisher"
                      className="w-96 border-2 border-solid border-gray-900 py-1 text-sm rounded-full outline-none pl-8 relative"
                    />
                  </form>
                  <div>
                    <button className="search_btn_submit ml-5">Search</button>
                  </div>
                </div>
              </div>
              <div>
                <button className="search_btn_submit ml-5">Export</button>
              </div>
            </div>

            <div className="flex justify-between relative pl-20 pt-6 pr-6">
              <div>
                <div className="flex items-center">
                  <h2 className="text-xl font-medium">Filter</h2>
                  <select className="border-2 border-solid border-gray-900 rounded ml-3 px-3 py-1">
                    <option>Publisher</option>
                  </select>
                  <select className="border-2 border-solid border-gray-900 rounded ml-3 px-3 py-1">
                    <option>Category</option>
                  </select>
                  <select className="border-2 border-solid border-gray-900 rounded ml-3 px-3 py-1">
                    <option>Subcategory</option>
                  </select>
                  <input
                    type="checkbox"
                    id="showroom"
                    name="showroom"
                    value="showroom"
                    className="ml-2"
                  />
                  <label for="showroom" className="ml-2">
                    {" "}
                    In Showroom
                  </label>
                </div>
              </div>
              <div>
                <button className="search_btn_submit ml-5">Delete</button>
              </div>
            </div>
            <div className="flex justify-between pr-6 pl-8 pt-4">
              <div>
                <h2 className="text-xl font-medium">List</h2>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                />
                <label for="vehicle1"> Select all</label>
              </div>
            </div>

            {/* Table Sorting */}
            <table className="mt-4">
              <tr>
                <th>Brochure Number</th>
                <th>Category</th>
                <th>Subcategory</th>
                <th>Name</th>
                <th>Date received</th>
                <th>Showroom?</th>
                <th>Publisher</th>
                <th>PDF</th>
                <th>QR-Code</th>
                <th>Edit</th>
                <th>Select</th>
              </tr>
              <tr>
                <td>02-01.008</td>
                <td>2</td>
                <td>01</td>
                <td>Etac Cross</td>
                <td>08.04.2022</td>
                <td>0</td>
                <td>PromediTec</td>
                <td className="text-blue-600 underline cursor-pointer">PDF</td>
                <td className="text-blue-600 underline cursor-pointer">open</td>
                <td className="text-blue-600 underline cursor-pointer">Edit</td>
                <td>
                  <input
                    type="checkbox"
                    id="select"
                    name="select"
                    value="select"
                  />
                </td>
              </tr>
              <tr>
                <td>01-01.002</td>
                <td>1</td>
                <td>01</td>
                <td>Slip stop</td>
                <td>20.10.2021</td>
                <td>1</td>
                <td>Novomed GmbH</td>
                <td className="text-blue-600 underline cursor-pointer">PDF</td>
                <td className="text-blue-600 underline cursor-pointer">open</td>
                <td className="text-blue-600 underline cursor-pointer">Edit</td>
                <td>
                  <input
                    type="checkbox"
                    id="select"
                    name="select"
                    value="select"
                  />
                </td>
              </tr>
              <tr>
                <td>06-00.004</td>
                <td>6</td>
                <td>00</td>
                <td>ALS</td>
                <td>08.00.2021</td>
                <td>1</td>
                <td>Communication</td>
                <td className="text-blue-600 underline cursor-pointer">PDF</td>
                <td className="text-blue-600 underline cursor-pointer">open</td>
                <td className="text-blue-600 underline cursor-pointer">Edit</td>
                <td>
                  <input
                    type="checkbox"
                    id="select"
                    name="select"
                    value="select"
                  />
                </td>
              </tr>
              <tr>
                <td>06-00.006</td>
                <td>1</td>
                <td>04</td>
                <td>ALS Sofortversorgung</td>
                <td>08.00.2022</td>
                <td>04</td>
                <td>Active Communication GA</td>
                <td className="text-blue-600 underline cursor-pointer">PDF</td>
                <td className="text-blue-600 underline cursor-pointer">open</td>
                <td className="text-blue-600 underline cursor-pointer">Edit</td>
                <td>
                  <input
                    type="checkbox"
                    id="select"
                    name="select"
                    value="select"
                  />
                </td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </table>
          </div>
        )}

        {showHideThirdTab && (
          <div id="Tokyo" className="tabcontent">
            <div className="flex items-center mt-2 ml-4">
              <a href="!#" className="text-blue-800 underline">
                Home
              </a>
              <div className="w-1 h-6  bg-gray-900 ml-2 mr-2"></div>
              <a href="!#" className="text-blue-800 underline">
                Users
              </a>
            </div>
            <div>
              <h2 className="text-xl font-medium mt-8 ml-4 mb-8">
                Users Admin
              </h2>
            </div>
            <div className="_gray_bg"></div>

            <div>
              <div className="flex items-center pt-4 pl-4">
                <div>
                  <form className="relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="#ddd"
                      className="absolute z-10 ml-3 mt-2"
                    >
                      <path d="M19.023 16.977a35.13 35.13 0 0 1-1.367-1.384c-.372-.378-.596-.653-.596-.653l-2.8-1.337A6.962 6.962 0 0 0 16 9c0-3.859-3.14-7-7-7S2 5.141 2 9s3.14 7 7 7c1.763 0 3.37-.66 4.603-1.739l1.337 2.8s.275.224.653.596c.387.363.896.854 1.384 1.367l1.358 1.392.604.646 2.121-2.121-.646-.604c-.379-.372-.885-.866-1.391-1.36zM9 14c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"></path>
                    </svg>
                    <input
                      type="text"
                      placeholder="Enter Name"
                      className="border-2 border-solid border-gray-900 rounded-full w-96 pl-8 py-1 outline-none"
                    />
                  </form>
                </div>
                <div>
                  <button className="search_btn_submit ml-3">Search</button>
                </div>
              </div>

              {/* Table Code Start Here */}
              <div className="flex justify-between">
                <div>
                  <h2 className="text-xl ml-4 font-medium mt-3">Users</h2>
                  <table className="mt-4 ml-4">
                    <tr>
                      <th>Firstname</th>
                      <th>Lastname</th>
                      <th>Email</th>
                      <th>Password</th>
                      <th>Edit</th>
                    </tr>
                    <tr>
                      <td>Bejhan</td>
                      <td>Pacadzioski</td>
                      <td>bejhan.pacadziosku@student</td>
                      <td>**************</td>
                      <td className="text-blue-800 underline cursor-pointer">
                        Edit
                      </td>
                    </tr>
                    <tr>
                      <td>Brent</td>
                      <td>Anderson</td>
                      <td>brent.anderson@outlook.com</td>
                      <td>**************</td>
                      <td className="text-blue-800 underline cursor-pointer">
                        Edit
                      </td>
                    </tr>
                    <tr>
                      <td>Tina</td>
                      <td>Ryan</td>
                      <td>tina.ryan@outlook.com</td>
                      <td>**************</td>
                      <td className="text-blue-800 underline cursor-pointer">
                        Edit
                      </td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </table>
                </div>

                {/* Add New User */}
                <div className="relative right-20 top-20">
                  <h2 className="text-xl font-medium text-gray-900 mb-3">
                    Add new User
                  </h2>
                  <form className="flex flex-col">
                    <div className="flex items-center mb-6">
                      <label for="fname" className="font-medium">
                        First Name:{" "}
                      </label>
                      <input
                        type="text"
                        id="fname"
                        name="fname"
                        className="border-2 border-solid border-gray-900 rounded outline-none pl-2 ml-5"
                        placeholder="Max"
                      />
                    </div>
                    <div className="flex items-center mb-6">
                      <label for="lname" className="font-medium">
                        Last Name:{" "}
                      </label>
                      <input
                        type="text"
                        id="lname"
                        name="lname"
                        className="border-2 text-sm w-48 border-solid border-gray-900 rounded outline-none pl-2 ml-5"
                        placeholder="Musterman"
                      />
                    </div>
                    <div className="flex items-center mb-6">
                      <label for="email" className="font-medium">
                        Email:{" "}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="border-2 text-sm w-48 border-solid border-gray-900 rounded outline-none pl-2 ml-14"
                        placeholder="Max.musterman@gmail.com"
                      />
                    </div>
                    <div className="flex items-center mb-6">
                      <label for="email" className="font-medium">
                        Password:{" "}
                      </label>
                      <button className="border-2 border-solid border-gray-900 bg-white shadow px-4 py-2 font-medium ml-8">
                        Generate Password
                      </button>
                    </div>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      className="border-2 text-sm w-48 border-solid border-gray-900 rounded outline-none pl-2 ml-24"
                      placeholder="W?JKHAISUA@K"
                    />

                    <button className="border-2 new_user border-solid border-gray-900 bg-white shadow w-40 mt-6 py-2 font-medium ml-0">
                      Add new User
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}

        {ShowHideFourthTab && (
          <div className="">
            <div className="flex items-center mt-0 ml-4">
              <a href="!#" className="text-blue-800 underline mt-2 ml-4">
                Home
              </a>
              <div className="w-1 h-6  bg-gray-900 ml-2 mr-2 mt-2"></div>
              <a href="!#" className="text-blue-800 underline mt-2">
                Category Settings
              </a>
            </div>
            <div className="pl-4">
              <h2 className="text-xl font-medium mt-8 mb-8">
                Category Settings
              </h2>
            </div>
            <div className="_gray_bg"></div>
            <div className="flex">
              <div className="ml-4 mt-4">
                <h3 className="text-xl font-medium">Main Category</h3>
                <table className="mt-2 cate_table">
                  <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Edit</th>
                  </tr>
                  <tr>
                    <td>01</td>
                    <td>Gehen/Stehen / Aufricten/ Sutzan</td>
                    <td className="text-blue-800 underline cursor-pointer">
                      Edit
                    </td>
                  </tr>
                  <tr>
                    <td>02</td>
                    <td>Gehen / Stehen / Aufricten/ Sutzan</td>
                    <td className="text-blue-800 underline cursor-pointer">
                      Edit
                    </td>
                  </tr>
                  <tr>
                    <td>03</td>
                    <td>Gehen / Stehen / Aufricten/ Sutzan</td>
                    <td className="text-blue-800 underline cursor-pointer">
                      Edit
                    </td>
                  </tr>

                  <tr>
                    <td>04</td>
                    <td></td>
                    <td className="text-blue-800 underline cursor-pointer">
                      Edit
                    </td>
                  </tr>
                  <tr>
                    <td>05</td>
                    <td></td>
                    <td className="text-blue-800 underline cursor-pointer">
                      Edit
                    </td>
                  </tr>
                  <tr>
                    <td>06</td>
                    <td></td>
                    <td className="text-blue-800 underline cursor-pointer">
                      Edit
                    </td>
                  </tr>
                  <tr>
                    <td>07</td>
                    <td></td>
                    <td className="text-blue-800 underline cursor-pointer">
                      Edit
                    </td>
                  </tr>
                  <tr>
                    <td>08</td>
                    <td></td>
                    <td className="text-blue-800 underline cursor-pointer">
                      Edit
                    </td>
                  </tr>
                  <tr>
                    <td>50</td>
                    <td></td>
                    <td className="text-blue-800 underline cursor-pointer">
                      Edit
                    </td>
                  </tr>
                  <tr>
                    <td>60</td>
                    <td></td>
                    <td className="text-blue-800 underline cursor-pointer">
                      Edit
                    </td>
                  </tr>
                  <tr>
                    <td>70</td>
                    <td>Orthopadische Spezialschuhe und Fussbettungen</td>
                    <td className="text-blue-800 underline cursor-pointer">
                      Edit
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </table>
              </div>
              <div className="ml-4 mt-4">
                <h3 className="text-xl font-medium">Sub Category</h3>
                <table className="mt-2 cate_table">
                  <tr>
                    <th>Main Category</th>
                    <th>Number</th>
                    <th>Description</th>
                    <th>Edit</th>
                  </tr>
                  <tr>
                    <td>01</td>
                    <td>00</td>
                    <td>Gehen/Stehen / Aufricten/ Sutzan</td>
                    <td className="text-blue-800 underline cursor-pointer">
                      Edit
                    </td>
                  </tr>
                  <tr>
                    <td>02</td>
                    <td>01</td>
                    <td>Gehen / Stehen / Aufricten/ Sutzan</td>
                    <td className="text-blue-800 underline cursor-pointer">
                      Edit
                    </td>
                  </tr>
                  <tr>
                    <td>03</td>
                    <td>02</td>
                    <td>Gehen / Stehen / Aufricten/ Sutzan</td>
                    <td className="text-blue-800 underline cursor-pointer">
                      Edit
                    </td>
                  </tr>

                  <tr>
                    <td>04</td>
                    <td>03</td>
                    <td></td>
                    <td className="text-blue-800 underline cursor-pointer">
                      Edit
                    </td>
                  </tr>
                  <tr>
                    <td>05</td>
                    <td>04</td>
                    <td></td>
                    <td className="text-blue-800 underline cursor-pointer">
                      Edit
                    </td>
                  </tr>
                  <tr>
                    <td>06</td>
                    <td>05</td>
                    <td></td>
                    <td className="text-blue-800 underline cursor-pointer">
                      Edit
                    </td>
                  </tr>
                  <tr>
                    <td>07</td>
                    <td>06</td>
                    <td>Stuhle / Fauteutils (Toilettensthule Siehe)</td>
                    <td className="text-blue-800 underline cursor-pointer">
                      Edit
                    </td>
                  </tr>
                  <tr>
                    <td>08</td>
                    <td>07</td>
                    <td></td>
                    <td className="text-blue-800 underline cursor-pointer">
                      Edit
                    </td>
                  </tr>
                  <tr>
                    <td>50</td>
                    <td>08</td>
                    <td></td>
                    <td className="text-blue-800 underline cursor-pointer">
                      Edit
                    </td>
                  </tr>
                  <tr>
                    <td>60</td>
                    <td>09</td>
                    <td></td>
                    <td className="text-blue-800 underline cursor-pointer">
                      Edit
                    </td>
                  </tr>
                  <tr>
                    <td>70</td>
                    <td>10</td>
                    <td></td>
                    <td className="text-blue-800 underline cursor-pointer">
                      Edit
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>11</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>12</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>03</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>00</td>
                    <td></td>
                    <td></td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
