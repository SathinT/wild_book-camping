import { Fragment, useEffect, useRef, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import date from "date-and-time"

const user = {
    name: 'Tom Cook',
    email: 'tom@example.com',
    imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
    { name: 'Dashboard', href: '#', current: true },
    { name: 'Team', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Calendar', href: '#', current: false },
    { name: 'Reports', href: '#', current: false },
]
const userNavigation = [
    { name: 'Sign out', href: '/adminlogin' },
]

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

export default function TopMenuBar() {

    useEffect(() => {

    });

    return (
        <>
            <div className=" bg-black bg-opacity-40 w-full border-b-2 p-5 left-0 flex items-center justify-between ">
                <div>
                    <DateAndTime/>
                </div>
                <div className="ml-4 flex items-center ">

                    {/* Profile dropdown */}
                    <Menu as="div" className="relative ml-3">
                        <div>
                            <Menu.Button className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                <span className="absolute -inset-1.5" />
                                <span className="sr-only">Open user menu</span>
                                <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
                            </Menu.Button>
                        </div>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                {userNavigation.map((item) => (
                                    <Menu.Item key={item.name}>
                                        {({ active }) => (
                                            <a
                                                href={item.href}
                                                className={classNames(
                                                    active ? 'bg-gray-100' : '',
                                                    'block px-4 py-2 text-sm text-gray-700'
                                                )}
                                            >
                                                {item.name}
                                            </a>
                                        )}
                                    </Menu.Item>
                                ))}
                            </Menu.Items>
                        </Transition>
                    </Menu>
                </div>
            </div>
        </>
    )
}

export function DateAndTime() {
    
    const now = new Date();
    const [time,setTime] = useState("");
    const [dates,setDate] = useState("");
    
    useEffect(()=>{
        setTimeout(() => {
            setTime(date.format(now, 'HH:mm:ss'))
        },1000);
    });


    useEffect(()=>{
        setDate(date.format(now, 'YYYY-MM-DD'))
        setTimeout(() => {
            setDate(date.format(now, 'YYYY-MM-DD'))
        },86400000);
    });


    return (
        <>
            <div className='flex gap-4'>
                <p  className='font-bold font-sans text-white'>{dates}</p>
            </div>
        </>
    )
}