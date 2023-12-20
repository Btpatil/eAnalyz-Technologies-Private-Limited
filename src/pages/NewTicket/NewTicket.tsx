
export const NewTicket = () => {
    return (
        <div className='py-4 px-16 h-full w-full'>
            <div className="flex flex-col gap-10 w-full h-full">
                <div className=" text-5xl w-full text-center">
                    Create New Ticket
                </div>

                <div className="flex flex-col gap-8">
                    <div className="flex gap-16 justify-stretch">
                        <div className=" flex flex-1">
                            <div className="flex-1 text-2xl">
                                Ticket No.
                            </div>
                            <input type="text" className='bg-[#C4C4C4A1] rounded-md shadow-sm h-11 flex-1' />
                        </div>

                        <div className=" flex flex-1">
                            <div className="flex-1 text-2xl">
                                Date
                            </div>
                            <input type="text" className='bg-[#C4C4C4A1] rounded-md shadow-sm h-11 flex-1' />
                        </div>
                    </div>

                    <div className="flex gap-16 justify-stretch">
                        <div className=" flex flex-1">
                            <div className="flex-1 text-2xl">
                                Name
                            </div>
                            <input type="text" className='bg-[#C4C4C4A1] rounded-md shadow-sm h-11 flex-1' />
                        </div>

                        <div className=" flex flex-1">
                            <div className="flex-1 text-2xl">
                                Department
                            </div>
                            <input type="text" className='bg-[#C4C4C4A1] rounded-md shadow-sm h-11 flex-1' />
                        </div>
                    </div>

                    <div className="flex flex-col gap-6">
                        <div className="flex-1 text-2xl">
                            Subject
                        </div>

                        <input type="text" className='bg-[#C4C4C4A1] rounded-md shadow-sm h-11 flex-grow' />
                    </div>

                    <div className="flex gap-8">
                        <div className="flex-1 flex flex-col gap-6">
                            <div className="flex flex-col gap-6">
                                <div className="flex-1 text-2xl">
                                    Category
                                </div>

                                <input type="text" className='bg-[#C4C4C4A1] rounded-md shadow-sm h-11 flex-grow' />
                            </div>

                            <div className="flex flex-col gap-6">
                                <div className="flex-1 text-2xl">
                                    Type
                                </div>

                                <input type="text" className='bg-[#C4C4C4A1] rounded-md shadow-sm h-11 flex-grow' />
                            </div>

                            <div className="flex flex-col gap-6">
                                <div className="flex-1 text-2xl">
                                    Priority
                                </div>

                                <input type="text" className='bg-[#C4C4C4A1] rounded-md shadow-sm h-11 flex-grow' />
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="flex h-full flex-col gap-6">
                                <div className="flex-1 text-2xl">
                                    Description
                                </div>

                                <textarea className='bg-[#C4C4C4A1] rounded-md shadow-sm h-full' />
                            </div>
                        </div>
                    </div>


                </div>

                <div className="flex justify-between items-end">
                    <img src="/captcha.png" alt="" />

                    <button className='p-4 w-[300px] h-16 text-3xl bg-[#55D6C2] rounded-xl'>
                        Submit
                    </button>
                </div>
            </div>
        </div>
    )
}
