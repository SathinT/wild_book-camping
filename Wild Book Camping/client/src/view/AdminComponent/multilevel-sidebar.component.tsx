import React from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Navigate, useNavigate } from "react-router";
import logo from "../../assests/Wild Book Logo.png"

export default function MultiLevelSidebar() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value: any) => {
    setOpen(open === value ? 0 : value);
  };

  const navigate = useNavigate();


  return (
    <Card className="bg-black bg-opacity-50 relative h-screen rounded-none w-full max-w-[22rem] p-1 shadow-xl shadow-blue-gray-900/5" placeholder={undefined}>
      <div className="mb-2 p-4 border-b-0">
        {/* <Typography variant="h5" color="blue-gray">
          Sidebar
        </Typography> */}
        <div className="flex justify-between items-center">

          <div className=" flex">
            <img className="w-10 h-14 pt-3" src={logo}/>
            <h1 className="pl-2 pt-3 text-white font-semibold">WILD BOOK <br/> CAMPING</h1>
          </div>

        </div>
      </div>
      <List className="text-[1rem]" placeholder={undefined}>
        <Accordion
            open={open === 1} placeholder={undefined}
        >
          <ListItem className="p-0" selected={open === 1} onClick={() => { navigate("/adminDashboard"); }} placeholder={undefined}>
            <AccordionHeader onClick={() => handleOpen(1)} className="border-b-0 p-3" placeholder={undefined}>
              <ListItemPrefix placeholder={undefined}>
                <PresentationChartBarIcon className="h-5 w-5 text-white" />
              </ListItemPrefix>
              <Typography className="text-[1rem] mr-auto font-normal text-white" placeholder={undefined}>
                Dashboard
              </Typography>
            </AccordionHeader>
          </ListItem>
        </Accordion>
        <ListItem className="text-white" selected={open === 1} onClick={() => { navigate("/adminCustomer"); }} placeholder={undefined}>
          <ListItemPrefix placeholder={undefined}>
            <UserCircleIcon className="h-5 w-5 text-white" />
          </ListItemPrefix>
          Customers
        </ListItem>
        <ListItem className="text-white" selected={open === 1} onClick={() => { navigate("/adminProducts"); }} placeholder={undefined}>
          <ListItemPrefix placeholder={undefined}>
            <ShoppingBagIcon className="h-5 w-5 text-white" />
          </ListItemPrefix>
          Products
        </ListItem>

        <ListItem className="text-white" placeholder={undefined}>
          <ListItemPrefix placeholder={undefined}>
            <InboxIcon className="h-5 w-5 text-white" />
          </ListItemPrefix>
          Orders
        </ListItem>

      </List>
    </Card>
  );
}