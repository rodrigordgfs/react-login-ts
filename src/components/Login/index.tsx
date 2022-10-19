import { message, Row } from "antd";
import Button from "antd/lib/button";
import Form from "antd/lib/form";
import { Col } from "antd/lib/grid";
import Input from "antd/lib/input";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider/useAuth";

export default function Login() {
  const auth = useAuth();
  const navigate = useNavigate();

  async function handleOnFinish(values: { email: string; password: string }) {
    try {
      await auth.authenticate(values.email, values.password);
      navigate("/");
    } catch (error) {
      message.error("Invalid email or password");
    }
  }

  return (
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      <Col span={12}>
        <Form name="basic" labelCol={{ span: 8 }} onFinish={handleOnFinish}>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Sign In
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
}
