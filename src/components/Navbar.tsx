import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <div className=" w-full h-20 bg-[#55D6C2] px-5 flex items-center justify-between">
      <div className="text-5xl text-white italic font-bold">
        Helpdesk
      </div>
      <div className="flex gap-4">
        <img src="/bmbi.png" alt="bm bi" />
        <img src="/noti.png" alt="bm bi" />
        <img src="/profile.png" alt="bm bi" />
        <Link to={"/signin"}>
          <img src="/logout.png" alt="bm bi" />
        </Link>
      </div>
    </div>
  )
}
