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
      posts: [
        {
          title: "Post 01",
          content: "Conent01",
        },
        {
          title: "Post 02",
          content: "Conent02",
        },
        {
          title: "Post 03",
          content: "Conent03",
        },
      ],
    },
    {
      id: 2,
      name: "Trang Trang",
      age: 23,
      shippingAddress: "Hưng Yên",
      posts: [
        {
          title: "Post 01",
          content: "Conent01",
        },
        {
          title: "Post 02",
          content: "Conent02",
        },
        {
          title: "Post 03",
          content: "Conent03",
        },
      ],
    },
    {
      id: 3,
      name: "Trinh ",
      age: 29,
      shippingAddress: "Hồ Chí Minh",
      posts: [
        {
          title: "Post 01",
          content: "Conent01",
        },
        {
          title: "Post 02",
          content: "Conent02",
        },
        {
          title: "Post 03",
          content: "Conent03",
        },
      ],
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
        posts={member.posts}
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
