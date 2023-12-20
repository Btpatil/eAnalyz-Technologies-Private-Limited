import React, { useState } from "react"
import "./myticket.css"

const tableContents = [
    {
        no: 1234,
        sub: "Login issue",
        status: <div className=" bg-[#5CDB95] text-center">
            In Progress
        </div>,
        support: "Tech support",
        date: "13/08/21",
        rate: <div className="flex gap-1">
            <img src="/star.png" alt="" />
            <img src="/star.png" alt="" />
            <img src="/star.png" alt="" />
            <img src="/star.png" alt="" />
            <img src="/star.png" alt="" />
        </div>
    },

    {
        no: 1124,
        sub: "New ticket issue",
        status: <div className=" bg-[#05386B] text-center">
            On Hold
        </div>,
        support: "Operation Team",
        date: "14/08/21",
        rate: <div className="flex gap-1">
            <img src="/star.png" alt="" />
            <img src="/star.png" alt="" />
            <img src="/star.png" alt="" />
            <img src="/star.png" alt="" />
            <img src="/star.png" alt="" />
        </div>
    },

    {
        no: 1244,
        sub: "Ticket submission",
        status: <div className=" bg-[#5CDB95] text-center">
            In Progress
        </div>,
        support: "Operation Team",
        date: "14/08/21",
        rate: <div className="flex gap-1">
            <img src="/star.png" alt="" />
            <img src="/star.png" alt="" />
            <img src="/star.png" alt="" />
            <img src="/star.png" alt="" />
            <img src="/star.png" alt="" />
        </div>
    },

    {
        no: 1114,
        sub: "Login Issue",
        status: <div className=" bg-[#5CDB95] text-center">
            In Progress
        </div>,
        support: "Tech Support",
        date: "3/08/21",
        rate: <div className="flex gap-1">
            <img src="/star.png" alt="" />
            <img src="/star.png" alt="" />
            <img src="/star.png" alt="" />
            <img src="/star.png" alt="" />
            <img src="/star.png" alt="" />
        </div>
    },
]

export const MyTicket = () => {
    const [isOpen, setIsOpen] = useState(false)

    const handleCloseModal = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.currentTarget == e.target) {
            setIsOpen(false)
        }
    }

    return (
        <div className='py-4 px-16 h-full w-full'>
            {
                isOpen && 
            <div className=" fixed left-0 right-0 bottom-0 top-0 bg-black/50 w-full h-full z-10" onClick={handleCloseModal}>
                <div className=" absolute bg-white w-[750px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-10">
                    <div className="flex flex-col gap-5">
                        <div className=" text-3xl text-center">
                            Ticket Details
                        </div>
                        <div className=" flex-1 flex flex-col">
                            <div className="">
                                Ticket No: 1234
                            </div>
                            <div className="">
                                Date:
                            </div>
                            <div className="">
                                Name:
                            </div>
                            <div className="">
                                Dept:
                            </div>
                            <div className="">
                                Title:
                            </div>
                            <div className="">
                                Description:
                            </div>
                            <div className="">
                                Category:
                            </div>
                            <div className="">
                                Type:
                            </div>
                            <div className="">
                                Priority:
                            </div>
                            <div className="">
                                Status:
                            </div>
                            <div className="">
                                Attachment:
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <button className='p-4 w-[300px] h-16 text-3xl bg-[#43D752] rounded-xl' onClick={() => setIsOpen(false)}>
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            }
            <div className="flex flex-col gap-10 w-full h-full">
                <div className=" text-5xl w-full text-center">
                    List of Ticket
                </div>

                <div className="flex flex-col gap-8">
                    <div className="flex">
                        <div className="w-[300px] bg-[#C4C4C4A1] flex p-4 rounded-md gap-3">
                            <input type="text" className='w-[90%] bg-transparent outline-none text-3xl' placeholder='Find Ticket' />
                            <img src="/search.png" alt="search" />
                        </div>
                    </div>

                    <div className="flex items-center">
                        Show:&nbsp;
                        <input type="number" value={10} className='w-12 p-1 outline-none bg-[#C4C4C4A1]' />
                        &nbsp;Entres
                    </div>

                    <table id="customers">
                        <tr>
                            <th>Ticket No.</th>
                            <th>Subject</th>
                            <th>Status</th>
                            <th>Support by</th>
                            <th>Date</th>
                            <th>Rate</th>
                        </tr>
                        {
                            tableContents.map((data) => (
                                <tr key={data.no}>
                                    <div className=" text-blue-600 underline cursor-pointer text-center" onClick={() => setIsOpen(true)}>
                                        {data.no}
                                    </div>
                                    <td>{data.sub}</td>
                                    <td>
                                        {data.status}
                                    </td>
                                    <td>{data.support}</td>
                                    <td>{data.date}</td>
                                    <td>{data.rate}</td>
                                </tr>
                            ))
                        }
                    </table>

                    <div className="flex justify-between">
                        <div className="">
                            Showing 1 to 5 of 5 entries
                        </div>
                        <div className="flex gap-2">
                            <button>
                                <img src="/first.png" alt="" />
                            </button>

                            <button>
                                <img src="/prev.png" alt="" />
                            </button>

                            1

                            <button>
                                <img src="/next.png" alt="" />
                            </button>
                            <button>
                                <img src="/last.png" alt="" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
