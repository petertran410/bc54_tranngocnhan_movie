import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "antd";
import { https } from "../../service/config";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { TURN_OFF, TURN_ON } from "../../redux/constant/spinner";

export default function ListMovie() {
  const [movieArr, setMovieArr] = useState([]);
  const { Meta } = Card;
  let dispatch = useDispatch();

  useEffect(() => {

    dispatch({
      type: TURN_ON,
    });

    https
      .get("/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP09")
      .then((result) => {
        dispatch({
          type: TURN_OFF,
        });
        setMovieArr(result.data.content);
      })
      .catch((err) => {
        dispatch({
          type: TURN_OFF,
        });
      });
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 container">
      {movieArr.map((item, index) => {
        return (
          <Card
            key={index}
            hoverable
            style={{
              width: "100%",
            }}
            cover={<img alt="example" src={item.hinhAnh} />}>
            <Meta title={item.tenPhim} description={item.moTa} />
            <NavLink
              to={`/detail/${item.maPhim}`}
              className=" my-5 px-5 py-2 rounded border-2 border-reed-500 block text-center">
              Xem chi tiết
            </NavLink>
          </Card>
        );
      })}
    </div>
  );
}
