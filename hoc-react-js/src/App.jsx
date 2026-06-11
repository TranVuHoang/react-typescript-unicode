import "./App.css";
import Member from "./components/Member";

const App = () => {
  // data
  const info = {
    name: "Hoàng Trần",
    age: 29,
    shippingAddress: "Hà Nội",
  };

  const comment = {
    title: "Tiêu đề comment 01",
    content: "Nội dung comment 01",
  };

  const members = [
    {
      id: 1,
      name: "Hoàng Trần",
      age: 29,
      shippingAddress: "Hà Nội",
      comment: "Tôi là lập trình viên",
    },
    {
      id: 2,
      name: "Trang Trang",
      age: 23,
      shippingAddress: "Hưng Yên",
    },
    {
      id: 3,
      name: "Trinh ",
      age: 29,
      shippingAddress: "Hồ Chí Minh",
    },
  ];

  const memberList = members.map((member) => {
    return (
      <Member
        key={member.id}
        name={member.name}
        age={member.age}
        address={member.shippingAddress}
        comment={member.comment}
      />
    );
  });

  return (
    <>
      <Member
        name={info.name}
        age={info.age}
        address={info.shippingAddress}
        comment={comment.content}
      />
      <hr />
      <Member
        name="Trang Trang"
        age={23}
        address={"Hưng Yên"}
        comment={"Đây là comment 2"}
      />
      <hr />
      <p>Render bằng hàm map():</p>
      <hr />
      {memberList}
    </>
  );
};

export default App;
