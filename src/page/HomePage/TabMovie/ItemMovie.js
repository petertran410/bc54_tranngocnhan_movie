import React from "react";
import moment from "moment";

export default function ItemMovie({ phim }) {
  return (
    <div className="flex space-x-5">
      <img className="w-32 h-48 object-cover" src={phim.hinhAnh} alt="" />
      <div>
        <h2 className="text-2xl">{phim.tenPhim}</h2>
        <div className="grid grid-cols-4 gap-5">
          {phim.lstLichChieuTheoPhim.slice(0, 16).map((lichChieu) => {
            return (
              <span
                key={lichChieu.maLichChieu}
                className="text-red-600 font-medium border border-red-600 rounded">
                {moment(lichChieu.ngayChieuGioChieu).format("DD-MM-YYYY ~ hh:mm")}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
