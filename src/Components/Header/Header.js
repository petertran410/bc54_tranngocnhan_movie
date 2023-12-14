import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  // useNavigate dùng để điều hướng trang không gây reload
  let navigate = useNavigate();

  // lấy dữ liệu từ redux về
  let user = useSelector((state) => state.userReducer.user);
  console.log(user);

  let renderMenu = () => {
    if (user) {
      return (
        <>
          <span>{user.hoTen}</span>
          <button
            className="btn-theme"
            onClick={() => {
              window.location.href = "/";
              localStorage.removeItem("USER_ITEM");
            }}>
            Log out
          </button>
        </>
      );
    } else {
      return (
        <button
          className="btn-theme"
          onClick={() => {
            navigate("/login");
          }}>
          Log in
        </button>
      );
    }
  };

  return (
    <div className="container h-20 flex items-center justify-between">
      <span
        onClick={() => {
          navigate("/");
        }}
        className="font-medium text-red-500 text-3xl animate-bounce">
        CyberFlix
      </span>
      <div className="space-x-5">{renderMenu()}</div>
    </div>
  );
}
