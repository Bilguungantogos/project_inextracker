import { FaUserEdit, FaUser } from "react-icons/fa";
import { MdOutlineLockReset } from "react-icons/md";
import { RxActivityLog } from "react-icons/rx";

import Header from "@/components/Header";

export default function Records() {
  return (
    <div>
      <Header />
      <main className="h-screen px-[120px] pt-8 bg-[#F3F4F6] flex justify-center items-start">
        <div className="flex justify-between w-[600px]">
          <div className="flex items-center gap-2">
            <FaUser />
            <h2>Profile</h2>
          </div>
          <div className="flex items-center gap-2">
            <FaUserEdit />
            <h2>Edit Profile</h2>
          </div>
          <div className="flex items-center gap-2">
            <MdOutlineLockReset />
            <h2>Reset Password</h2>
          </div>
          <div className="flex items-center gap-2">
            <RxActivityLog />
            <h2>Activity Log</h2>
          </div>
        </div>
      </main>
    </div>
  );
}
