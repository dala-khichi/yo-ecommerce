import MultiInput from '../components/InputsX/MultiInput';
import Update from '../pages/Update';
import Page_ from '../pages/Page';
import Create from '../pages/Create';
import DataDisplay from '../pages/DataDisplay';

const CouponDisplay = [
{
      path: "/coupons/display/:id",
      pageName: "_",
      page: <DataDisplay
        pageName=""
        url={"/api/coupons/"}
        title={"eCommerce Dashboard | create coupons "}
        
      />,


    }
];

const Coupon = [
  [
    {
      path: "/coupons",
      pageName: "coupons",
      title:"coupons",
      page: <Page_
        pageName={"coupons"}
        url={"/api/coupons/"}
        title={"eCommerce Dashboard | create coupons "}
        felds={[{ inputTypy: "text" }]}


      />,


    },
    {
      path: "/coupons/create",
      pageName: "Rolls",
      url: "/api/coupons/",
      title: "eCommerce Dashboard | create coupons ",
      felds: [{ inputTypy: "text" }],
      page: <Create
        pageName={"coupons"}
        
        url="/api/coupons/"
        inputs={
          [
            { type: "text", name: "code" },
            { type: "number", name: "discount_percentage" },
            { type: "number", name: "max_discount_amount" },
            { type: "number", name: "min_order_amount" },
            { type: "text", name: "valid_from" },
            { type: "text", name: "valid_to" },
            { type: "option", name: "status", url: "/api/helper/statusOption", valueBy: "value", optionBy: "status" },
          ]
        }

      />,
    },
    {

      path: "/coupons/update/:id",
      pageName: "coupons",
      url: "/api/coupons/",
      title: "eCommerce Dashboard | create coupons ",
      felds: [{ inputTypy: "text" }],
      page: <Update

        name="coupons"
        url="/api/coupons/"
        inputs={
          [
            { type: "text", name: "code" },
            { type: "number", name: "discount_percentage" },
            { type: "number", name: "max_discount_amount" },
            { type: "number", name: "min_order_amount" },
            { type: "text", name: "valid_from" },
            { type: "text", name: "valid_to" },
            { type: "option", name: "status", url: "/api/helper/statusOption", valueBy: "value", optionBy: "status" },
          ]
        }

      />,
    },
...CouponDisplay
  ],
  ///DataDisplay user
];




export {Coupon}




//docs
/*






*/