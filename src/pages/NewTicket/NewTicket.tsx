import { useEffect, useState } from "react"
import { useForm, Resolver } from "react-hook-form"

type FormValues = {
    ticketNo: number,
    date: Date | undefined,
    name: string,
    department: string,
    subject: string,
    category: string,
    type: string,
    priority: string,
    description: string
}

const resolver: Resolver<FormValues> = async (values) => {
    return {
        values: values.ticketNo && values.date && values.name && values.category && values.department && values.description && values.priority && values.subject && values.type ? values : {},
        errors:
            !values.ticketNo
                ? {
                    ticketNo: {
                        type: "required",
                        message: "This is required.",
                    },
                }
                :
                !values.date
                    ? {
                        date: {
                            type: "required",
                            message: "This is required.",
                        },
                    }
                    :
                    !values.name
                        ? {
                            name: {
                                type: "required",
                                message: "This is required.",
                            },
                        }
                        :
                        !values.department
                            ? {
                                department: {
                                    type: "required",
                                    message: "This is required.",
                                },
                            }
                            :
                            !values.subject
                                ? {
                                    subject: {
                                        type: "required",
                                        message: "This is required.",
                                    },
                                }
                                :
                                !values.category
                                    ? {
                                        category: {
                                            type: "required",
                                            message: "This is required.",
                                        },
                                    }
                                    :
                                    !values.description
                                        ? {
                                            description: {
                                                type: "required",
                                                message: "This is required.",
                                            },
                                        }
                                        :
                                        !values.priority
                                            ? {
                                                priority: {
                                                    type: "required",
                                                    message: "This is required.",
                                                },
                                            }
                                            :
                                            !values.type
                                                ? {
                                                    type: {
                                                        type: "required",
                                                        message: "This is required.",
                                                    },
                                                }
                                                :
                                                {},
    }
}

export const NewTicket = () => {
    const [isSubmitted, setIsSubmitted] = useState(false)
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitSuccessful },
        reset,
    } = useForm<FormValues>({ resolver })
    const onSubmit = handleSubmit((_) => {
        setIsSubmitted(true)

        setTimeout(() => {
            setIsSubmitted(false)
        }, 5000);
    })

    useEffect(() => {
        if (isSubmitSuccessful) {
            reset({
                category: "",
                date: undefined,
                department: "",
                description: "",
                name: "",
                priority: "",
                subject: "",
                ticketNo: 0,
                type: ""
            })
        }
    }, [isSubmitted])


    return (
        <div className='py-4 px-16 h-full w-full'>
            <div className="flex flex-col gap-10 w-full h-full">
                <div className=" text-5xl w-full text-center">
                    Create New Ticket
                </div>

                <form onSubmit={onSubmit}>
                    <div className="flex flex-col gap-8">
                        <div className="flex gap-16 justify-stretch">
                            <div className=" flex flex-1">
                                <div className="flex-1 text-2xl">
                                    Ticket No.
                                </div>
                                <div className="flex-1">
                                    <input type="number" className='bg-[#C4C4C4A1] rounded-md shadow-sm h-11 w-full flex-1 px-2' {...register("ticketNo")}
                                        aria-invalid={errors.ticketNo ? "true" : "false"} />
                                    {errors?.ticketNo && <p role="alert" className=" text-red-500">{errors.ticketNo.message}</p>}
                                </div>
                            </div>

                            <div className=" flex flex-1">
                                <div className="flex-1 text-2xl">
                                    Date
                                </div>
                                <div className="flex-1">
                                    <input type="date" className='bg-[#C4C4C4A1] rounded-md shadow-sm h-11 w-full px-2 flex-1' {...register("date")} />
                                    {errors?.date && <p className=" text-red-500">{errors.date.message}</p>}
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-16 justify-stretch">
                            <div className=" flex flex-1">
                                <div className="flex-1 text-2xl">
                                    Name
                                </div>
                                <div className="flex-1">
                                    <input type="text" className='bg-[#C4C4C4A1] rounded-md shadow-sm h-11 w-full flex-1' {...register("name")} />
                                    {errors?.name && <p className=" text-red-500">{errors.name.message}</p>}
                                </div>
                            </div>

                            <div className=" flex flex-1">
                                <div className="flex-1 text-2xl">
                                    Department
                                </div>
                                <div className="flex-1">
                                    <input type="text" className='bg-[#C4C4C4A1] rounded-md shadow-sm h-11 w-full flex-1' {...register("department")} />
                                    {errors?.department && <p className=" text-red-500">{errors.department.message}</p>}
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-6">
                            <div className="flex-1 text-2xl">
                                Subject
                            </div>
                            <div className="flex-1">
                                <input type="text" className='bg-[#C4C4C4A1] rounded-md shadow-sm h-11 w-full flex-1' {...register("subject")} />
                                {errors?.subject && <p className=" text-red-500">{errors.subject.message}</p>}
                            </div>
                        </div>

                        <div className="flex gap-8">
                            <div className="flex-1 flex flex-col gap-6">
                                <div className="flex flex-col gap-6">
                                    <div className="flex-1 text-2xl">
                                        Category
                                    </div>
                                    <div className="flex-grow">
                                        <input type="text" className='bg-[#C4C4C4A1] rounded-md shadow-sm h-11 w-full flex-grow' {...register("category")} />
                                        {errors?.category && <p className=" text-red-500">{errors.category.message}</p>}
                                    </div>
                                </div>

                                <div className="flex flex-col gap-6">
                                    <div className="flex-1 text-2xl">
                                        Type
                                    </div>
                                    <div className="flex-grow">
                                        <input type="text" className='bg-[#C4C4C4A1] rounded-md shadow-sm h-11 w-full flex-grow' {...register("type")} />
                                        {errors?.type && <p className=" text-red-500">{errors.type.message}</p>}
                                    </div>
                                </div>

                                <div className="flex flex-col gap-6">
                                    <div className="flex-1 text-2xl">
                                        Priority
                                    </div>
                                    <div className="flex-grow">
                                        <input type="text" className='bg-[#C4C4C4A1] rounded-md shadow-sm h-11 w-full flex-grow' {...register("priority")} />
                                        {errors?.priority && <p className=" text-red-500">{errors.priority.message}</p>}
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1">
                                <div className="flex h-full flex-col gap-6">
                                    <div className="flex-1 text-2xl">
                                        Description
                                    </div>
                                    <textarea className='bg-[#C4C4C4A1] rounded-md shadow-sm h-full w-full flex-grow' {...register("description")} />
                                    {errors?.description && <p className=" text-red-500">{errors.description.message}</p>}
                                </div>
                            </div>
                        </div>


                    </div>

                    <div className="flex justify-between items-end">
                        <img src="/captcha.png" alt="" />

                        {
                            isSubmitted &&
                            <div className="text-green-900 p-4 bg-green-400">
                                Form Submitted Succesfully
                            </div>
                        }

                        <button className='p-4 w-[300px] h-16 text-3xl bg-[#55D6C2] rounded-xl' type="submit">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
