import { useDispatch } from "react-redux"
import { logout } from "../features/auth/authSlice"

export const Navbar = () => {
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <div className=" w-full h-20 bg-[#55D6C2] px-5 flex items-center justify-between">
      <div className="text-5xl text-white italic font-bold">
        Helpdesk
      </div>
      <div className="flex gap-4">
        <img className=" cursor-pointer" src="/bmbi.png" alt="bm bi" />
        <img className=" cursor-pointer" src="/noti.png" alt="bm bi" />
        <img className=" cursor-pointer" src="/profile.png" alt="bm bi" />
        {/* <Link to={"/signin"}> */}
          <img className=" cursor-pointer" src="/logout.png" alt="bm bi" onClick={handleLogout} />
        {/* </Link> */}
      </div>
    </div>
  )
}
