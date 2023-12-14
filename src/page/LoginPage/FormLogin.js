import React from "react";
import { Button, Checkbox, Form, Input, message } from "antd";
import { https } from "../../service/config";
import { useDispatch } from "react-redux";
import { SET_INFO } from "../../redux/constant/user";
import { useNavigate } from "react-router-dom";
import { loginAction } from "../../redux/action/user";

const FormLogin = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();

  // const onFinishV2 = (values) => {
  //   https
  //     .post("/api/QuanLyNguoiDung/DangNhap", values)
  //     .then((result) => {
  //       // đẩy data xuống localStorage để khi user load trang thì thông tin đăng nhập vẫn còn
  //       let dataJson = JSON.stringify(result.data.content);
  //       localStorage.setItem("USER_ITEM", dataJson);
  //       console.log(result);
  //       message.success("Đăng nhập thành công");
  //       // Đẩy thông tin user lên redux
  //       dispatch({
  //         type: SET_INFO,
  //         payload: result.data.content,
  //       });
  //       navigate("/");
  //       // chuyển về trang chủ
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       message.error("Đăng nhập thất bại");
  //     });
  //   console.log("Success:", values);
  // };
  const onFinish = (values) => {
    dispatch(loginAction(values, navigate));
  };

  // const onFinishV3 = values => async dispatch => {
  //   const response = await client.get(``)
  // }
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        maxWidth: 600,
      }}
      initialValues={{
        remember: true,
      }}
      className="w-1/2"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off">
      <Form.Item
        label="Username"
        name="taiKhoan"
        rules={[
          {
            required: true,
            message: "Tài khoản không được bỏ trống!!",
          },
        ]}>
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="matKhau"
        rules={[
          {
            required: true,
            message: "Mật khẩu không được bỏ trống!!",
          },
        ]}>
        <Input.Password />
      </Form.Item>

      {/* <Form.Item
      name="remember"
      valuePropName="checked"
      wrapperCol={{
        offset: 8,
        span: 16,
      }}>
      <Checkbox>Remember me</Checkbox>
    </Form.Item> */}

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}>
        <Button
          className="bg-orange-600 hover:text-white hover:border-transparent"
          htmlType="submit">
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};
export default FormLogin;
