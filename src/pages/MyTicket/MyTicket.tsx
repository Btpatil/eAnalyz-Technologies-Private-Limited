import React, { useEffect, useState } from "react"
import "./myticket.css"

type TOC = {
    no: number,
    sub: string,
    status: JSX.Element,
    support: string
    date: string
    rate: JSX.Element
}[]

const tableContents: TOC = [
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

    {
        no: 14234,
        sub: "Login issue",
        status: <div className=" bg-[#5CDB95] text-center">
            In Progress
        </div>,
        support: "Tech support",
        date: "13/08/21",
        rate: <div className="flex gap-1">
            <img src="/starfull.png" alt="" />
            <img src="/starfull.png" alt="" />
            <img src="/starfull.png" alt="" />
            <img src="/starfull.png" alt="" />
            <img src="/starhalf.png" alt="" />
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

    {
        no: 14234,
        sub: "Login issue",
        status: <div className=" bg-[#5CDB95] text-center">
            In Progress
        </div>,
        support: "Tech support",
        date: "13/08/21",
        rate: <div className="flex gap-1">
            <img src="/starfull.png" alt="" />
            <img src="/starfull.png" alt="" />
            <img src="/starfull.png" alt="" />
            <img src="/starfull.png" alt="" />
            <img src="/starhalf.png" alt="" />
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


    {
        no: 14234,
        sub: "Login issue",
        status: <div className=" bg-[#5CDB95] text-center">
            In Progress
        </div>,
        support: "Tech support",
        date: "13/08/21",
        rate: <div className="flex gap-1">
            <img src="/starfull.png" alt="" />
            <img src="/starfull.png" alt="" />
            <img src="/starfull.png" alt="" />
            <img src="/starfull.png" alt="" />
            <img src="/starhalf.png" alt="" />
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
    {
        no: 14234,
        sub: "Login issue",
        status: <div className=" bg-[#5CDB95] text-center">
            In Progress
        </div>,
        support: "Tech support",
        date: "13/08/21",
        rate: <div className="flex gap-1">
            <img src="/starfull.png" alt="" />
            <img src="/starfull.png" alt="" />
            <img src="/starfull.png" alt="" />
            <img src="/starfull.png" alt="" />
            <img src="/starhalf.png" alt="" />
        </div>
    },


    {
        no: 14234,
        sub: "Login issue",
        status: <div className=" bg-[#5CDB95] text-center">
            In Progress
        </div>,
        support: "Tech support",
        date: "13/08/21",
        rate: <div className="flex gap-1">
            <img src="/starfull.png" alt="" />
            <img src="/starfull.png" alt="" />
            <img src="/starfull.png" alt="" />
            <img src="/starfull.png" alt="" />
            <img src="/starhalf.png" alt="" />
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
    const [perPage, setPerPage] = useState<number>(5)
    const [pageNumber, setPageNumber] = useState<number>(0)
    const [tablePerPageContent, setTablePerPageContent] = useState<TOC | null>(null)

    useEffect(() => {
        const copyOfTableOfContents = tableContents 
setTablePerPageContent(copyOfTableOfContents.slice(pageNumber * perPage, pageNumber * perPage + perPage))
    }, [perPage, pageNumber])

    // console.log(tablePerPageContent)

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
                        <input type="number" value={perPage} className='w-12 p-1 outline-none bg-[#C4C4C4A1]' onChange={(e) => setPerPage(parseInt(e.target.value) ? parseInt(e.target.value) : 0)} />
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
                            tablePerPageContent?.map((data, index) => (
                                <tr key={index}>
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
                            Showing {pageNumber * perPage} to {pageNumber * perPage + perPage} of {tableContents.length} entries
                        </div>
                        <div className="flex gap-2">
                            <button onClick={() => setPageNumber(0)}>
                                <img src="/first.png" alt="" />
                            </button>

                            <button onClick={() => setPageNumber(prev => {
                                if (prev > 0) {
                                    return prev = prev - 1
                                }
                                return prev
                            })}>
                                <img src="/prev.png" alt="" />
                            </button>

                            {pageNumber + 1}

                            <button onClick={() => setPageNumber(prev => {
                                // if (prev > 0) {
                                //     return prev = prev - 1
                                // }
                                return prev + 1
                            })}>
                                <img src="/next.png" alt="" />
                            </button>

                            <button onClick={() => setPageNumber(_ => {
                                // if (prev > 0) {
                                //     return prev = prev - 1
                                // }
                                return Math.floor(tableContents.length / perPage)
                            })}>
                                <img src="/last.png" alt="" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
