import Posts from "./Posts";

const Member = (props) => {
  const { name, age, address, comment, posts = [] } = props;

  return (
    <div className="member-box">
      <p>
        <strong>Tên: {name}</strong>
      </p>
      <p>Tuổi: {age}</p>
      <p>Địa chỉ: {address}</p>
      <p>Bình luận: {comment}</p>
      <Posts posts={posts} />
    </div>
  );
};

export default Member;
