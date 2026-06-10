import Avatar from "./Avatar";
import Comment from "./Comment";
import MemberInfo from "./MemberInfo";

const Member = () => {
  return (
    <div className="member-box">
      <Avatar />
      <MemberInfo />
      <Comment />
    </div>
  );
};

export default Member;
