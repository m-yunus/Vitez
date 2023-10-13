import axios from "axios";
import React, { useEffect, useState } from "react";

const ListTable = () => {
  const [data, setData] = useState([]);
  const fetchdata = async () => {
    const headers = {
      "Content-Type": "application/json",
    };
    try {
      const res = await axios.get(
        `https://pranavam-api.foxa.in/api/v2/patient/patients`,
        { headers }
      );
      setData(res.data.data);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchdata();
  }, []);
  const formatDate = (dateString) => {
    if (!dateString) {
      return "";
    }
    const dateObject = new Date(dateString);
    const formattedDate = dateObject.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
    return formattedDate;
  };
  return (
    <div className="h-screen w-full bg-gray-200 p-4 overflow-x-auto ">
      <div className="bg-white lg:p-6 shadow-inner rounded-md">
        <table className="w-full bg-white rounded-lg ">
          <thead>
            <tr className="border-b-2 border-gray-500">
              <th className="py-2 px-4 font-medium">Patient ID</th>
              <th className="py-2 px-4 font-medium">Name</th>
              <th className="py-2 px-4 font-medium">Phone No</th>
              <th className="py-2 px-4 font-medium">Registered Date</th>
              <th className="py-2 px-4 font-medium">Last Visit</th>
              <th className="py-2 px-4 font-medium">File Number</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((items) => (
              <tr
                className=" transition duration-300 mb-3  bg-[#f0ecec] py-4 rounded-full"
                key={items?.id}
              >
               
                <td className="py-2 px-4 text-center ">{items?.patient_id}</td>
                <td className="py-2 px-4 text-center">{items?.full_name}</td>
                <td className="py-2 px-4 text-center">{items?.mobile}</td>
                <td className="py-2 px-4 text-center">
                  {formatDate(items?.medical_record?.admission_date)}
                </td>
                <td className="py-2 px-4 text-center">
                  {formatDate(items?.medical_record?.updated_at)}
                </td>
                <td className="py-2 px-4 text-center">
                  {items?.medical_record?.file_no}
                </td>
              
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListTable;
