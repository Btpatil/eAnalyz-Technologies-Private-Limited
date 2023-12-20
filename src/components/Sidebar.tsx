import { NavLink } from "react-router-dom"

const navlinks = [
    {
        path: "/",
        name: "Dashboard",
        icon: "/Dashboard.png"
    },
    {
        path: "/new-ticket",
        name: "New Ticket",
        icon: "/New Ticket.png"
    }, {
        path: "/my-ticket",
        name: "My Ticket",
        icon: "/my ticket.png"
    },
]

export const Sidebar = () => {
    return (
        <div className='w-[250px] flex flex-col gap-8 flex-grow-0 flex-shrink-0 bg-[#6A676736] px-4 py-5'>
            {
                navlinks.map((link) => (
                    <NavLink key={link.name} to={link.path}>
                        <div className="flex gap-4 justify-between items-center">

                            <NavLink to={link.path} style={({ isActive }) =>
                                isActive
                                    ? {
                                        opacity: 1
                                    }
                                    : { opacity: 0 }}>
                                <img src="/active.png" alt="" />
                            </NavLink>
                            <div className="flex gap-4 flex-grow">
                                <img src={link.icon} alt="" />
                                <div className=" text-2xl">
                                    {link.name}
                                </div>
                            </div>
                        </div>
                    </NavLink>
                )
                )
            }
        </div>
    )
}
