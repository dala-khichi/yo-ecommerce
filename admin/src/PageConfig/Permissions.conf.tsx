import MultiInput from '../components/InputsX/MultiInput';
import Update from '../pages/Update';
import Page_ from '../pages/Page';
import Create from '../pages/Create';
import DataDisplay from '../pages/DataDisplay';

const PermissionDisplay = [
{
      path: "/permissions/display/:id",
      pageName: "_",
      page: <DataDisplay
        pageName=""
        url={"/api/permissions/"}
        title={"eCommerce Dashboard | create permissions "}
        
      />,


    }
];

const Permission = [
  [
    {
      path: "/permissions",
      pageName: "permissions",
      title:"permissions",
      page: <Page_
        pageName={"permissions"}
        url={"/api/permissions/"}
        title={"eCommerce Dashboard | create permissions "}
        felds={[{ inputTypy: "text" }]}


      />,


    },
    {
      path: "/permissions/create",
      pageName: "Rolls",
      url: "/api/permissions/",
      title: "eCommerce Dashboard | create permissions ",
      felds: [{ inputTypy: "text" }],
      page: <Create
        pageName={"permissions"}
        
        url="/api/permissions/"
        inputs={[
          { type: "text", name: "name" },
          { type: "text", name: "password" },
          { type: "text", name: "email" },
          { type: "number", name: "phone" },
          { type: "option", name: "status", url: "/api/helper/statusOption", valueBy: "value", optionBy: "status" },

        ]}

      />,
    },
    {

      path: "/permissions/update/:id",
      pageName: "permissions",
      url: "/api/permissions/",
      title: "eCommerce Dashboard | create permissions ",
      felds: [{ inputTypy: "text" }],
      page: <Update

        name="permissions"
        url="/api/permissions/"
        inputs={[
          { type: "text", name: "name" },
          { type: "text", name: "password" },
          { type: "text", name: "email" },
          { type: "number", name: "phone" },
          { type: "option", name: "status", url: "/api/helper/statusOption", valueBy: "value", optionBy: "status" },

        ]}

      />,
    },
...PermissionDisplay
  ],
  ///DataDisplay user
];




export {Permission}




//docs
/*






*/