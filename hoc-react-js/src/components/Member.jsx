const Member = ({ name, age, address, comment }) => {
  return (
    <div className="member-box">
      <h2>Tên: {name}</h2>
      <p>Tuổi: {age}</p>
      <p>Địa chỉ: {address}</p>
      <p>Bình luận: {comment}</p>
    </div>
  );
};

export default Member;
