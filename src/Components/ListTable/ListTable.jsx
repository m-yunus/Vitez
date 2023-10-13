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
                className=" transition duration-300 mb-3   py-4 rounded-full"
                key={items?.id}
              >
                <td className="py-1  text-center ">
                  <div
                    className="bg-[#f0ecec] rounded py-1 "
                    style={{ borderRadius: "10px 0 0 10px" }}
                  >
                    {items?.patient_id}
                  </div>
                </td>
                <td className="py-1 text-center">
                  <div className="bg-[#f0ecec] py-1">{items?.full_name}</div>
                </td>
                <td className="py-1  text-center">
                  <div className="bg-[#f0ecec] py-1">{items?.mobile}</div>
                </td>
                <td className="py-1  text-center">
                  <div className="bg-[#f0ecec] py-1">
                    {" "}
                    {formatDate(items?.medical_record?.admission_date)}
                  </div>
                </td>
                <td className="py-1  text-center">
                  <div className="bg-[#f0ecec] py-1">
                    {" "}
                    {formatDate(items?.medical_record?.updated_at)}
                  </div>
                </td>
                <td className="py-1  text-center">
                  <div
                    className="bg-[#f0ecec] py-1"
                    style={{ borderRadius: "0px 10px 10px 0px" }}
                  >
                    {items?.medical_record?.file_no}
                  </div>
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
