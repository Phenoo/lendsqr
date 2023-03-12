import { FaUsers, FaMoneyBillAlt, FaUserTimes, FaUserCheck, FaHandshake,
     FaHandHoldingUsd, FaBriefcase, FaCoins, FaUserCog, FaScroll, FaUserFriends } from "react-icons/fa"
import { AiFillBank } from "react-icons/ai"

import { GiGalaxy, GiSettingsKnobs} from 'react-icons/gi'
import { GoGraph} from 'react-icons/go'
import { TiClipboard } from "react-icons/ti";


export  const customerLinks = [
    {
        title: 'Users',
        icon: <FaUsers />,
    },
    {
        title: 'Guarantors',
        icon: <FaUserFriends />,
    },
    {
        title: 'Loans',
        icon: <FaMoneyBillAlt />,
    },
    {
        title: 'Decision models',
        icon: <FaHandshake />,
    },
    {
        title: 'savings',
        icon: <AiFillBank />,
    },
    {
        title: 'Loan requests',
        icon: <FaHandHoldingUsd />,
    },
     {
        title: 'whitelist',
        icon: <FaUserCheck />,
    },
    {
        title: 'karma',
        icon: <FaUserTimes />,
    },

]

export const businessLinks = [
    {
        title: 'Organization',
        icon: <FaBriefcase />,
    },
    {
        title: 'Loan Products',
        icon: <FaHandHoldingUsd />,
    },
    {
        title: 'Savings Products',
        icon: <AiFillBank />,
    },
    {
        title: 'Fees and Charges',
        icon: <FaCoins />,
    },
    {
        title: 'Transactions',
        icon: <AiFillBank/>,
    },
    {
        title: 'Services',
        icon: <GiGalaxy />,
    },
    {
        title: 'Service Account',
        icon: <FaUserCog />,
    },
    {
        title: 'Settlements',
        icon: <FaScroll />,
    },
    {
        title: 'Reports',
        icon: <GoGraph />,
    },
]

export const settingsLinks = [
    {
        title: 'preferences',
        icon: <GiSettingsKnobs />,
    },
    {
        title: 'Fees and pricing',
        icon: <FaMoneyBillAlt />,
    },
    {
        title: 'audit logs',
        icon: <TiClipboard />,
    },
]