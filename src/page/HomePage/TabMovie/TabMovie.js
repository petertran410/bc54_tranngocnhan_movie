import React, { useEffect, useState } from "react";
import { https } from "../../../service/config";
import { Tabs, Tooltip } from "antd";
import ItemMovie from "./ItemMovie";

export default function TabMovie() {
  const [heThongRap, setHeThongRap] = useState([]);

  useEffect(() => {
    https
      .get("/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01")
      .then((result) => {
        console.log(result);
        setHeThongRap(result.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const onChange = (key) => {
    console.log(key);
  };
  const items = heThongRap.map((heThong, index) => {
    return {
      key: index,
      label: <img className="w-16" src={heThong.logo} alt="Hinh Anh" />,
      children: (
        <Tabs
          style={{ height: 600 }}
          className="space-y-5 overflow-y-scroll"
          tabPosition="left"
          items={heThong.lstCumRap.map((cumRap) => {
            return {
              key: cumRap.diaChi,
              label: (
                <div className="w-60 truncate text-left">
                  <p>{cumRap.tenCumRap}</p>
                  <Tooltip title={cumRap.diaChi}>
                    <p>{cumRap.diaChi}</p>
                  </Tooltip>
                </div>
              ),
              children: (
                <div className="space-y-3">
                  {cumRap.danhSachPhim.map((phim) => {
                    return <ItemMovie phim={phim} key={phim.maPhims} />;
                  })}
                </div>
              ),
            };
          })}
        />
      ),
    };
  });

  return (
    <div className="container pb-96">
      <Tabs
        tabPosition="left"
        defaultActiveKey="1"
        items={items}
        onChange={onChange}
      />
    </div>
  );
}
