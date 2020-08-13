import React from 'react';
import {FaHome} from "react-icons/fa";
import lang from '../lang';
import { IconType } from "react-icons/lib";



//'({ header: string; } | { text: any; icon: IconType; submenu: { url: string; text: any; icon: IconType; }[]; })[]'

export const menu =  [

    {
        text: lang.menu.home,
        icon: FaHome,
        url: "/#",
        submenu: [
            {
                url: "/dashboard",
                text: lang.menu.home,
                icon: FaHome
            }
        ]

    },


    {
        url: "/",
        text: lang.menu.home,
        icon: FaHome
    }
]
