import React, { useEffect, useState } from "react";
import { https } from "../../service/config";
import { useParams } from "react-router";
import { Rate } from "antd";

export default function DetailPage() {
  const [detail, setDetail] = useState({});
  // Lấy tham số từ thanh URL
  let { idPhim } = useParams();
  useEffect(() => {
    // gọi api lấy chi tiết phim
    https
      .get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${idPhim}`)
      .then((result) => {
        setDetail(result.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <div className="container flex items-center">
      <img src={detail.hinhAnh} alt="Picture" className="w-96" />
      <div className="text-center space-y-10 flex-grow">
        <h2 className="text-4xl text-blue-600 font-bold animate-pulse">{detail.tenPhim}</h2>
        <Rate
          style={{ fontSize: 40, color: "red" }}
          allowHalf
          value={detail.danhGia}
          count={10}
        />
      </div>
    </div>
  );
}
