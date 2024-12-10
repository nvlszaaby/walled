import { useState } from "react";
import icy from "../assets/icy bear.png"
import avatarImg from "../assets/avatar.png";

function Avatar() {
  const [isAvatarActive, setIsAvatarActive] = useState(false);

  // const border = ctxValue === "dark"? "black" "[#178F8D] "
  const[users,setUsers] = useState ([])
  return (
    <div className="flex items-center gap-x-4 ml-auto">
      <span className="text-right">
        <p className="text-black font-bold"> Gebby
        </p>
        <p className="text-black">Personal Account</p>
      </span>
      <div
        className={`rounded-full border-[6px] hover:border-[6px] hover:border-[#178F8D] cursor-pointer transition-all ${
          isAvatarActive ? "border-[#178F8D]" : "border-[#fafbfd]"
        }`}
        onClick={() => setIsAvatarActive((prev) => !prev)}
      >
        <img src={users.avatar} alt="avatar" className="rounded-full" />
      </div>
    </div>
  );
}

export default Avatar;
