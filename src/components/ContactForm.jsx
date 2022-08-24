import { Button, Form, Input, Radio, Slider } from "antd";

const ContactForm = ({ form, onChange }) => {
  const validateInput = (event) => {
    if (event.keyCode === 8) {
      return;
    }
    if (!/^[0-9]{1,}$/.test(event.key)) {
      debugger;
      event.preventDefault();
    }
  };
  return (
    <div className="form">
      <Form
        layout={"vertical"}
        initialValues={{ remember: true }}
        autoComplete="off"
      >
        <Form.Item
          label="Name"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Input name="name" onChange={onChange} />
        </Form.Item>

        <Form.Item
          label="Contact#"
          style={{ color: "#ffff" }}
          rules={[{ required: true, message: "Please input your contact!" }]}
        >
          <Input name="contact" onChange={onChange} onKeyDown={validateInput} />
        </Form.Item>

        <Form.Item name="slider" label="Slider">
          <Slider
            onChange={(e) => onChange(e, "slider")}
            marks={{
              0: "0",
              20: "20",
              40: "40",
              60: "60",
              80: "80",
              100: "100",
            }}
          />
        </Form.Item>
      </Form>
    </div>
  );
};

export default ContactForm;
