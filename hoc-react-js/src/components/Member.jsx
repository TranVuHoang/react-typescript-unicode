const Member = ({ name, age, address, comment }) => {
  return (
    <div className="member-box">
      <p>
        <strong>Tên: {name}</strong>
      </p>
      <p>Tuổi: {age}</p>
      <p>Địa chỉ: {address}</p>
      <p>Bình luận: {comment}</p>
    </div>
  );
};

export default Member;
