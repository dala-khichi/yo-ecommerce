import MultiInput from '../components/InputsX/MultiInput';
import Update from '../pages/Update';
import Page_ from '../pages/Page';
import Create from '../pages/Create';
import DataDisplay from '../pages/DataDisplay';
import SelectRoleParmitions from '../components/PartX/SelectRoleParmitions';

const AdminDisplay = [
{
      path: "/admins/display/:id",
      pageName: "_",
      page: <DataDisplay
        pageName=""
        url={"/api/admins/"}
        title={"eCommerce Dashboard | create admins "}
        
      />,


    }
];

const Admin = [
  [
    {
      path: "/admins",
      pageName: "admins",
      title:"admins",
      page: <Page_
        pageName={"admins"}
        url={"/api/admins/"}
        title={"eCommerce Dashboard | create admins "}
        felds={[{ inputTypy: "text" }]}


      />,


    },
    {
      path: "/admins/create",
      pageName: "Rolls",
      url: "/api/admins/",
      title: "eCommerce Dashboard | create admins ",
      felds: [{ inputTypy: "text" }],
      page: <Create
          
      
      /// children={<SelectRoleParmitions onPermissionChange={(permissions) => handleMulti("permissions", permissions)} />}
      
        pageName={"admins"}
       // url="/api/admins/"
       url="/api/admin-auth/register/"
        inputs={[
          { type: "text", name: "name" },
          { type: "number", name: "created_by" },
          { type: "text", name: "password" },
          { type: "text", name: "email" },
          { type: "number", name: "phone" },
          { type: "number", name: "role_id" },
          { type: "file", name: "img", multiple: false },
          { type: "option", name: "status", url: "/api/helper/statusOption", valueBy: "value", optionBy: "status" },

        ]}

      />,
    },
    
    {
      path: "/admins/login",
      pageName: "Rolls",
      url: "/api/admins/",
      title: "eCommerce Dashboard | create admins ",
      felds: [{ inputTypy: "text" }],
      page: <Create
          
      
      /// children={<SelectRoleParmitions onPermissionChange={(permissions) => handleMulti("permissions", permissions)} />}
      
        pageName={"admins"}
        url="/api/admin-auth/login/"
      // url="/api/admin-auth/register/"
        inputs={[
          { type: "text", name: "phoneOrEmail" },
          { type: "number", name: "password" },

        ]}

      />,
    },
    
    
    
    {

      path: "/admins/update/:id",
      pageName: "admins",
      url: "/api/admins/",
      title: "eCommerce Dashboard | create admins ",
      felds: [{ inputTypy: "text" }],
      page: <Update

        name="admins"
        url="/api/admins/"
                inputs={[
          { type: "text", name: "name" },
          { type: "text", name: "password" },
          { type: "text", name: "email" },
          { type: "number", name: "phone" },
          { type: "number", name: "role_id" },
          { type: "file", name: "img", multiple: false },
          { type: "option", name: "status", url: "/api/helper/statusOption", valueBy: "value", optionBy: "status" },

        ]}

      />,
    },
...AdminDisplay
  ],
  ///DataDisplay user
];




export {Admin}




//docs
/*






*/