import React from "react";
import "./Customers.css";
import MainLogo from "../assets/images/logo/main_logo.png";
export default function Customers() {
  return (
    <div>
      <header className="customers_header p-0 z-100">
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
      </header>

      <div className="flex flex-row z-10 overflow-hidden">
        <div>
          <aside className="customer_aside w-60 fixed top-12 bottom-0 left-0 min-h-screen">
            <button className="bg-gray-50 p-3 w-full flex items-center relative top-40">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#ddd"
                className="bi bi-file-earmark-fill mr-2"
                viewBox="0 0 16 16"
              >
                <path d="M4 0h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm5.5 1.5v2a1 1 0 0 0 1 1h2l-3-3z" />
              </svg>
              Brochure
            </button>
          </aside>
        </div>
        <div className="pt-6 relative left-60 right_side">
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
            <h2 className="text-xl font-medium mt-3 ml-4 mb-5">
              Brochure Admin
            </h2>
          </div>
          <div className="_gray_bg"></div>

          <div>
            <div className="flex flex-row pl-6">
              <select className="border-2 h-6 text-sm rounded border-solid mt-4 border-black">
                <option>Sort By</option>
              </select>
              <form className="relative ml-3 mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="#ddd"
                  className="absolute ml-2 mt-4"
                >
                  <path d="M19.023 16.977a35.13 35.13 0 0 1-1.367-1.384c-.372-.378-.596-.653-.596-.653l-2.8-1.337A6.962 6.962 0 0 0 16 9c0-3.859-3.14-7-7-7S2 5.141 2 9s3.14 7 7 7c1.763 0 3.37-.66 4.603-1.739l1.337 2.8s.275.224.653.596c.387.363.896.854 1.384 1.367l1.358 1.392.604.646 2.121-2.121-.646-.604c-.379-.372-.885-.866-1.391-1.36zM9 14c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"></path>
                </svg>
                <input
                  type="text"
                  placeholder="Number, Name or Publisher"
                  className="border-2 w-96 text-sm pl-8 rounded-full py-1 border-solid border-black"
                />
                <button className="ml-4">Search</button>
              </form>
            </div>
          </div>
          <div className="ml-0 mt-4">
            <h3 className="text-xl ml-6">Last Added brochure</h3>
            <table className="mt-4 customer_table">
              <tr>
                <th>Brochure Number</th>
                <th>Category</th>
                <th>Name</th>
                <th>Date Received</th>
                <th>In Showroom?</th>
                <th>Publisher</th>
                <th>PDF</th>
                <th>QR-Code</th>
              </tr>
              <tr>
                <td>02-01.008</td>
                <td>2</td>
                <td>Elac Cross 6 Massblatt</td>
                <td>08.04,2022</td>
                <td>0</td>
                <td>PromediTec SA</td>
                <td className="text-blue-800 underline cursor-pointer">PDF</td>
                <td className="text-blue-800 underline cursor-pointer">open</td>
              </tr>
              <tr>
                <td>02-01.008</td>
                <td>1</td>
                <td>Slip Splat</td>
                <td>08.04,2022</td>
                <td>0</td>
                <td>PromediTec SA</td>
                <td className="text-blue-800 underline cursor-pointer">PDF</td>
                <td className="text-blue-800 underline cursor-pointer">open</td>
              </tr>
              <tr>
                <td>06-00.004</td>
                <td>6</td>
                <td>ALS Sofortversorgung</td>
                <td>08.00.2021</td>
                <td>1</td>
                <td>Active Communication AG</td>
                <td className="text-blue-800 underline cursor-pointer">PDF</td>
                <td className="text-blue-800 underline cursor-pointer">open</td>
              </tr>
              <tr>
                <td>06-00.006</td>
                <td>4</td>
                <td>ALS Sofortversorgung</td>
                <td>08.00.2022</td>
                <td>1</td>
                <td>Active Communication GA</td>
                <td className="text-blue-800 underline cursor-pointer">PDF</td>
                <td className="text-blue-800 underline cursor-pointer">open</td>
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
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
