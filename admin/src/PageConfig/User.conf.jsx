import MultiInput from '../components/InputsX/MultiInput';
import Update from '../pages/Update';
import Page_ from '../pages/Page';
import Create from '../pages/Create';
import DataDisplay from '../pages/DataDisplay';

const UserDisplay = [
{
      path: "/users/display/:id",
      pageName: "_",
      page: <DataDisplay
        pageName=""
        url={"/api/users/"}
        title={"eCommerce Dashboard | create users "}
        
      />,


    }
];

const User = [
  [
    {
      path: "/users",
      pageName: "users",
      title:"users",
      page: <Page_
        pageName={"users"}
        url={"/api/users/"}
        title={"eCommerce Dashboard | create users "}
        felds={[{ inputTypy: "text" }]}


      />,


    },
    {
      path: "/users/create",
      pageName: "Rolls",
      url: "/api/users/",
      title: "eCommerce Dashboard | create users ",
      felds: [{ inputTypy: "text" }],
      page: <Create
        pageName={"users"}
        
        url="/api/users/"
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

      path: "/users/update/:id",
      pageName: "users",
      url: "/api/users/",
      title: "eCommerce Dashboard | create users ",
      felds: [{ inputTypy: "text" }],
      page: <Update

        name="users"
        url="/api/users/"
        inputs={[
          { type: "text", name: "name" },
          { type: "text", name: "password" },
          { type: "text", name: "email" },
          { type: "number", name: "phone" },
          { type: "option", name: "status", url: "/api/helper/statusOption", valueBy: "value", optionBy: "status" },

        ]}

      />,
    },
...UserDisplay
  ],
  ///DataDisplay user
];




export {User}




//docs
/*






*/