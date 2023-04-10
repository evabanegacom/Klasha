import React, { useState, useEffect } from 'react';
import {  FaSignOutAlt, FaBars } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import './Sidebar.css';
import { FiHelpCircle } from 'react-icons/fi';
// import logo from '@/assets/images/chisquares-logo.svg';
// import chrisIcon from '@/assets/images/chis-icon.svg';
import { BiHomeAlt } from 'react-icons/bi';
import { BsFolder2Open, BsArrowLeftCircle } from 'react-icons/bs';
import { TbFiles } from 'react-icons/tb';

import { HiOutlineTrash, HiOutlineUser } from 'react-icons/hi';
import {
    IoIosNotificationsOutline,
} from 'react-icons/io';


const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true);

    const handleToggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const handleHideSidebar = () => {
        setIsOpen(false);
    };

    interface Props {
        path: string,
        icon: any,
        text: string
    }

    interface LinkProps {
        path: string,
        icon: any,
    }

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsOpen(true);
            } else {
                setIsOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [window.innerWidth]);


    const Links: React.FC<Props> = ({ path, icon, text }) => {
        return (
            <li className="sidebar-menu-item">
                {/* conditionally apply onClick prop */}
                {window.innerWidth < 768 === true ? (
                    <NavLink className='sidelinks' to={path} onClick={handleHideSidebar}>
                        {icon}
                        {text}
                    </NavLink>
                ) : (
                    <NavLink className='sidelinks'
                        to={path}
                    // onClick={handleHideSidebar}
                    // isActive={() => path === location.pathname}
                    >
                        {icon}
                        {text}
                    </NavLink>
                )}
            </li>
        )
    }

    const SideIcons: React.FC<LinkProps> = ({ path, icon }) => {
        return (
            <Link to={path}>{icon}</Link>
        )
    }

    return (
            <div  className={`sidebar ${isOpen ? 'open' : ''}`}>
                {/* <div className='sidebar__logo'><img src={logo} alt="logo" /></div> */}
                <div className="sidebar-header">
                <div><i>Klasha</i></div>
                    <div className="sidebar-toggle" onClick={handleToggleSidebar}>
                        <span>{isOpen ? <BsArrowLeftCircle size={20} /> : <FaBars size={20} />}</span>
                    </div>
                    {isOpen === false && (
                        <div className="sidebar-toggle-icons">
                            {/* <img className='sidebar-toggle-icons-img' src={chrisIcon} alt="chris" /> */}
                            <span onClick={handleToggleSidebar}>{isOpen ? <BsArrowLeftCircle size={20} /> : <FaBars size={20} />}</span>
                            <SideIcons path='/productEdit' icon={<BiHomeAlt className="sidebar-icon" />} />
                            <SideIcons path='/productTable' icon={<HiOutlineUser className="sidebar-icon" />} />
                            <SideIcons path='documentation' icon={<BsFolder2Open className="sidebar-icon" />} />
                            <SideIcons path='/study-design' icon={<TbFiles className="sidebar-icon" />} />
                            <SideIcons path='/notification' icon={<IoIosNotificationsOutline className="sidebar-icon" />} />
                            <SideIcons path='/trashed-files' icon={<HiOutlineTrash className="sidebar-icon" />} />
                        </div>
                    )
                    }
                </div>
                <ul className="sidebar-menu ">
                    <li className='labels'>Main Pages</li>
                    <Links path="/productEDit" icon={<BiHomeAlt className="sidebar-menu-icon" />} text='Dashboard' />
                    <Links path="/productTable" icon={<HiOutlineUser className="sidebar-menu-icon" />} text='Balances' />
                    <Links path="/collabowrite/data-analysis" icon={<BsFolder2Open className="sidebar-menu-icon" />} text='Transactions' />
                    <Links path="/study-design" icon={<TbFiles className="sidebar-menu-icon" />} text='Study Design' />
                    <Links path="/notification" icon={<IoIosNotificationsOutline className="sidebar-menu-icon" />} text='Analytics' />
                    <Links path="/trashed-file" icon={<HiOutlineTrash className="sidebar-menu-icon" />} text='Marketing' />
                    <Links path="/trashed-fil" icon={<HiOutlineTrash className="sidebar-menu-icon" />} text='Exchange rates' />
                    <br />
                    <li className='labels'>Accept Payments</li>
                    <Links path="/trashed-fi" icon={<HiOutlineTrash className="sidebar-menu-icon" />} text='Checkout' />
                    <Links path="/trashed-f" icon={<HiOutlineTrash className="sidebar-menu-icon" />} text='Payment Links' />
                    <br />
                    <li className='labels'>Send Payments</li>
                    <Links path="/trashed-" icon={<HiOutlineTrash className="sidebar-menu-icon" />} text='Wire' />
                </ul>
                <div className="sidebar-footer">
                    <button className='sidebar-footer-button'><FiHelpCircle />Support</button>
                    <button className='sidebar-last-button'>
                        Hide panel
                    </button>
                </div>
            </div>
    );
}

export default Sidebar;