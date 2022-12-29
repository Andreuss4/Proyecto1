import { useState } from "react";
import {ProSidebar, menu, MenuItem} from "react-pro-sidebar";
import 'react-pro-sidebar/dist/css/styles.css';
import { Box,IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../Theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlinedIcon";
import PeopleOutLinedIcon from "@mui/icons-material/PeopleOutLinedIcon";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlinedIcon";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlinedIcon";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlinedIcon";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlinedIcon";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlinedIcon";
import BarCharOutlinedIcon from "@mui/icons-material/BarCharOutlinedIcon";
import PieChartOutlinedIcon from "@mui/icons-material/PieChartOutlinedIcon";
import TimeLineOutlinedIcon from "@mui/icons-material/TimeLineOutlinedIcon";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlinedIcon";
import MapOutlinedIcon from "@mui/icons-material/MapOutlinedIcon";


const Sidebar =() =>{
    const theme =useTheme();
    const colors=tokens(theme.palette.mode);
    const [isCollapsed,setIsCollapsed]=useState(false);
    const [selected, setSelected] = useState("Dashboard");

    return (
        <Box 
            sx={{
                "& .pro-sidebar-inner" : {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
        }}>
            
        </Box>
    )
}
export default Sidebar;