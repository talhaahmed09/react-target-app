import React, { useEffect, useState } from "react";
import "antd/dist/antd.min.css";
import "./index.css";
import { MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Drawer, Layout, Space } from "antd";
import ChartDisplay from "./components/ChartDisplay";
import ContactForm from "./components/ContactForm";
import { getCurrentTarget } from "./services/http-service";

const { Header, Content } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [chartData, setChartData] = useState({});
  const [form, setForm] = useState({
    name: "",
    contact: "",
    target: "",
  });

  const onClose = () => {
    setCollapsed(false);
  };

  const getData = () => {
    getCurrentTarget().then((res) => {
      setChartData(res);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const onChange = (e, type = "") => {
    if (type === "slider") {
      return setForm({ ...form, target: e });
    }
    console.log(e.target.name, e.target.value);
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleForm = () => {
    console.log(form);
  };

  return (
    <Layout className="container">
      <Drawer
        title="Contact Information"
        width={"300px"}
        placement="left"
        closable={false}
        onClose={onClose}
        visible={collapsed}
        footer={
          <Space className="footer">
            <Button onClick={onClose}>Cancel</Button>
            <Button onClick={handleForm} type="primary">
              Submit
            </Button>
          </Space>
        }
      >
        <ContactForm form={form} onChange={onChange} />
      </Drawer>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        >
          <MenuUnfoldOutlined
            className="trigger"
            onClick={() => setCollapsed(!collapsed)}
          />

          <h1 className={collapsed ? "target" : ""}>
            Target: {chartData.target}
          </h1>
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {chartData && <ChartDisplay chartData={chartData} />}
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
