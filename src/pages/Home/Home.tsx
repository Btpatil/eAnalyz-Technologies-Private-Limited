
const ticketDetails = [
    {
        name: "Total Tickets",
        num: 12,
        bg: "bg-[#2F82FF]",
        textColor: "text-[#05386B]"
    },
    {
        name: "Total Solved",
        num: 8,
        bg: "bg-[#0BFF68]",
        textColor: "text-[#000000]"
    },
    {
        name: "Total Awaiting Approval",
        num: 2,
        bg: "bg-[#FE594E]",
        textColor: "text-[#000000]"
    },
    {
        name: "Total in Progress",
        num: 2,
        bg: "bg-[#FCFF6C]",
        textColor: "text-[#000000]"
    }
]

export const Home = () => {
    return (
        <div className='p-4 h-full w-full flex-grow'>
            <div className="flex flex-col gap-10 w-full h-full">
                <div className=" text-5xl w-full text-center">
                    Dashboard
                </div>

                <div className="flex gap-8 flex-wrap">
                    {
                        ticketDetails.map((tickket) => (
                            <div key={tickket.name} className={`flex-1 flex flex-col ${tickket.bg} ${tickket.textColor} p-5 h-[300px] rounded-2xl items-center shadow-md`}>
                                <div className=" text-2xl flex-grow">
                                    {tickket.name}
                                </div>
                                <div className=" text-8xl flex-grow">
                                    {tickket.num}
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
