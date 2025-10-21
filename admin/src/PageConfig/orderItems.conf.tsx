
import MultiInput from '../components/InputsX/MultiInput';
import Update from '../pages/Update';
import Page_ from '../pages/Page';
import Create from '../pages/Create';
import DataDisplay from '../pages/DataDisplay';
import SelectRoleParmitions from '../components/PartX/SelectRoleParmitions';

const OrderItemsDisplay = [
{
      path: "/order-items/display/:id",
      pageName: "_",
      page: <DataDisplay
        pageName=""
        url={"/api/order-items/"}
        title={"eCommerce Dashboard | create order-items "}
        
      />,


    }
];

const OrderItems = [
  [
    {
      path: "/order-items",
      pageName: "order-items",
      title:"order-items",
      page: <Page_
        pageName={"order-items"}
        url={"/api/order-items/"}
        title={"eCommerce Dashboard | create order-items "}
        felds={[{ inputTypy: "text" }]}


      />,


    },
    {
      path: "/order-items/create",
      pageName: "Rolls",
      url: "/api/order-items/",
      title: "eCommerce Dashboard | create order-items ",
      felds: [{ inputTypy: "text" }],
      page: <Create
          
      
      /// children={<SelectRoleParmitions onPermissionChange={(permissions) => handleMulti("permissions", permissions)} />}
      
        pageName={"order-items"}
       // url="/api/order-items/"
       url="/api/order-items"
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
    
    
    
    {

      path: "/order-items/update/:id",
      pageName: "order-items",
      url: "/api/order-items/",
      title: "eCommerce Dashboard | create order-items ",
      felds: [{ inputTypy: "text" }],
      page: <Update

        name="order-items"
        url="/api/order-items/"
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
...OrderItemsDisplay
  ],
  ///DataDisplay user
];




export {OrderItems}




//docs
/*






*/