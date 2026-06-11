import "./App.css";
import Member from "./components/Member";

const App = () => {
  return (
    <>
      <Member
        name="Hoàng IT"
        age={29}
        address={"Hưng Yên"}
        comment={"Đây là comment 1"}
      />
      <hr />
      <Member
        name="Trang Trang"
        age={23}
        address={"Hưng Yên"}
        comment={"Đây là comment 2"}
      />
    </>
  );
};

export default App;
