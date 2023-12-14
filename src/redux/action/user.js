import { message } from "antd";
import { https } from "../../service/config";
import { SET_INFO } from "../constant/user";
import { TURN_OFF, TURN_ON } from "../constant/spinner";

export let loginAction = (values, navigate) => {
  return (dispatch) => {
    dispatch({
      type: TURN_ON,
    });
    https
      .post("/api/QuanLyNguoiDung/DangNhap", values)
      .then((result) => {
        console.log(result);
        let dataJson = JSON.stringify(result.data.content);
        localStorage.setItem("USER_ITEM", dataJson);
        message.success("Đăng nhập thành công");
        // Đẩy thông tin user lên redux
        dispatch({ type: TURN_OFF });
        dispatch({
          type: SET_INFO,
          payload: result.data.content,
        });
        navigate("/");
      })
      .catch((err) => {
        dispatch({ type: TURN_OFF });
        message.error("Login redux thất bại");
      });
  };
};
