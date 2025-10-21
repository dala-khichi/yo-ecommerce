import MultiInput from '../components/InputsX/MultiInput';
import Update from '../pages/Update';
import Page_ from '../pages/Page';
import Create from '../pages/Create';
import DataDisplay from '../pages/DataDisplay';

const ShippingDetailDisplay = [
{
      path: "/shipping-details/display/:id",
      pageName: "_",
      page: <DataDisplay
        pageName=""
        url={"/api/shipping-details/"}
        title={"eCommerce Dashboard | create shipping-details "}
        
      />,


    }
];

const ShippingDetail = [
  [
    {
      path: "/shipping-details",
      pageName: "shipping-details",
      title:"shipping-details",
      page: <Page_
        pageName={"shipping-details"}
        url={"/api/shipping-details/"}
        title={"eCommerce Dashboard | create shipping-details "}
        felds={[{ inputTypy: "text" }]}


      />,


    },
    {
      path: "/shipping-details/create",
      pageName: "Rolls",
      url: "/api/shipping-details/",
      title: "eCommerce Dashboard | create shipping-details ",
      felds: [{ inputTypy: "text" }],
      page: <Create
        pageName={"shipping-details"}
        
        url="/api/shipping-details/"
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

      path: "/shipping-details/update/:id",
      pageName: "shipping-details",
      url: "/api/shipping-details/",
      title: "eCommerce Dashboard | create shipping-details ",
      felds: [{ inputTypy: "text" }],
      page: <Update

        name="shipping-details"
        url="/api/shipping-details/"
        inputs={[
          { type: "text", name: "name" },
          { type: "text", name: "password" },
          { type: "text", name: "email" },
          { type: "number", name: "phone" },
          { type: "option", name: "status", url: "/api/helper/statusOption", valueBy: "value", optionBy: "status" },

        ]}

      />,
    },
...ShippingDetailDisplay
  ],
  ///DataDisplay user
];




export {ShippingDetail}




//docs
/*






*/