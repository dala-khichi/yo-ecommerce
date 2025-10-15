import MultiInput from './components/InputsX/MultiInput';
import Update from './pages/Update';
import Page_ from './pages/Page';
import Create from './pages/Create';
import DataDisplay from './pages/DataDisplay';
import {User} from './PageConfig/User.conf';
import {Admin} from './PageConfig/Admin.conf';
import {Permission} from './PageConfig/Permissions.conf';
import {RolePermission} from './PageConfig/RolePermissions.conf';
import {Role} from './PageConfig/Role.conf';
import {Item} from './PageConfig/Item.conf';
import {OrderItems} from './PageConfig/orderItems.conf';
import {Coupon} from './PageConfig/Coupon.conf';
import {Order} from './PageConfig/Orders.conf';



const Page = [
  //User
 ...User,
 ...Admin,
 ...Permission,
 ...RolePermission,
...Role,
...Item,
...OrderItems,
...Order,
//...Coupon,
 
  ///roles
  
//   [
//     {
//       path: "/roles",
//       pageName: "Rolls",
//       title:"Rolls",
//       page: <Page_
//         pageName={"Rolls"}
//         url={"/api/roles/"}
//         title={"eCommerce Dashboard | create roles "}
//         felds={[{ inputTypy: "text" }]}
// 
// 
//       />,
// 
// 
//     },
//     {
//       path: "/roles/create",
//       pageName: "Rolls",
//       url: "/api/roles/",
//       title: "eCommerce Dashboard | create roles ",
//       felds: [{ inputTypy: "text" }],
//       page: <Create
//         pageName={"Rolls"}
//         
//         url="/api/roles/"
//         inputs={[
//           { type: "text", name: "role_name" },
//           { type: "text-area", name: "Number" },
//           { type: "option", name: "status", url: "/api/helper/statusOption", valueBy: "value", optionBy: "status" },
//           {
//             type: "multiInputs", name: "item", inputs:
//               [
//                 { type: "text", name: "role_name" },
//                 { type: "option", name: "status", url: "/api/helper/statusOption", valueBy: "value", optionBy: "status" },
//                 { type: "option", name: "status", url: "/api/helper/statusOption", valueBy: "value", optionBy: "status" },
//               ],
// 
//           },
// 
// 
//         ]}
// 
//       />,
//     },
//     {
// 
//       path: "/roles/update/:id",
//       pageName: "Rolls",
//       url: "/api/roles/",
//       title: "eCommerce Dashboard | create roles ",
//       felds: [{ inputTypy: "text" }],
//       page: <Update
// 
//         name="Rolls"
//         url="/api/roles/"
//         inputs={[
//           { type: "text", name: "role_name" },
//           //    {type:"file",  name:"role_name"},
//           { type: "option", name: "status", url: "/api/helper/statusOption/", valueBy: "value", optionBy: "status" },
//         ]}
// 
//       />,
//     },
//   ],
  //categories
  [
    {
      path: "/categories",
      pageName: "categories",
      page: <Page_
        pageName="categories"
        url={"/api/categories/"}
        title={"eCommerce Dashboard | create categories "}
        felds={[{ inputTypy: "text" }]}
        


      />,


    },
    {
      path: "/categories/create",
      pageName: "Rolls",
      title: "eCommerce Dashboard | create categories ",
      felds: [{ inputTypy: "text" }],
      page: <Create
        name="categories"
        url="/api/categories/"
        inputs={
          [
            { type: "text", name: "name" },
            { type: "text", name: "slug" },
            { type: "file", name: "img", multiple: false },
            { type: "text", name: "created_by" },
            { type: "option", name: "status", url: "/api/helper/statusOption", valueBy: "value", optionBy: "status" },
          ]

        }
      />,
    },
    {

      path: "/categories/update/:id",
      pageName: "Rolls",
      url: "/api/categories/",
      title: "eCommerce Dashboard | create categories ",
      felds: [{ inputTypy: "text" }],
      page: <Update

        name="Rolls"
        url="/api/categories/"
        inputs={
          [
            { type: "text", name: "name" },
            { type: "text", name: "slug" },
            { type: "file", name: "img", multiple: false },
            { type: "text", name: "updated_by" },
            { type: "option", name: "status", url: "/api/helper/statusOption", valueBy: "value", optionBy: "status" },
          ]

        }

      />,
    },
  ],
  //sub-categories
  [
    {
      path: "/sub-categories",
      pageName: "sub-categories",
      page: <Page_
        pageName="sub-categories"
        url={"/api/sub-categories/"}
        title={"eCommerce Dashboard | create sub-categories "}
        felds={[{ inputTypy: "text" }]}


      />,


    },
    {
      path: "/sub-categories/create",
      pageName: "Rolls",
      title: "eCommerce Dashboard | create sub-categories ",
      felds: [{ inputTypy: "text" }],
      page: <Create
        name="Rolls"
        url="/api/sub-categories/"
        inputs={
          [
            { type: "text", name: "name" },
            { type: "text", name: "slug" },
            { type: "file", name: "img" },
            { type: "text", name: "created_by" },
            { type: "option", name: "category_id", url: "/api/categories", valueBy: "id", optionBy: "name" },
            { type: "option", name: "status", url: "/api/helper/statusOption", valueBy: "value", optionBy: "status" },
          ]

        }
      />,
    },
    {

      path: "/sub-categories/update/:id",
      pageName: "Rolls",
      url: "/api/sub-categories/",
      title: "eCommerce Dashboard | create sub-categories ",
      felds: [{ inputTypy: "text" }],
      page: <Update

        name="Rolls"
        url="/api/sub-categories/"
        inputs={
          [
            { type: "text", name: "name" },
            { type: "text", name: "slug" },
            { type: "file", name: "img" },
            { type: "text", name: "updated_by" },
            { type: "option", name: "category_id", url: "/api/categories", valueBy: "id", optionBy: "name" },
            { type: "option", name: "status", url: "/api/helper/statusOption", valueBy: "value", optionBy: "status" },
          ]

        }

      />,
    },
  ],
  //size
  [
    {
      path: "/size",
      pageName: "size",
      page: <Page_
        pageName="size"
        url={"/api/sizes/"}
        title={"eCommerce Dashboard | create size "}
        felds={[{ inputTypy: "text" }]}


      />,


    },
    {
      path: "/size/create",
      pageName: "Rolls",
      title: "eCommerce Dashboard | create size ",
      felds: [{ inputTypy: "text" }],
      page: <Create
        name="Rolls"
        url="/api/sizes/"
        inputs={
          [
            { type: "text", name: "size" },
            { type: "text", name: "created_by" },
            { type: "option", name: "status", url: "/api/helper/statusOption", valueBy: "value", optionBy: "status" },
          ]

        }
      />,
    },
    {

      path: "/size/update/:id",
      pageName: "Rolls",
      url: "/api/sizes/",
      title: "eCommerce Dashboard | create size ",
      felds: [{ inputTypy: "text" }],
      page: <Update

        name="Rolls"
        url="/api/colors/"
        inputs={
          [
            { type: "text", name: "size" },
            { type: "text", name: "created_by" },
            { type: "option", name: "status", url: "/api/helper/statusOption", valueBy: "value", optionBy: "status" },
          ]

        }

      />,
    },
  ],
  // color
  [
    {
      path: "/color",
      pageName: "color",
      page: <Page_
        pageName="color"
        url={"/api/colors/"}
        title={"eCommerce Dashboard | create color "}
        felds={[{ inputTypy: "text" }]}


      />,


    },
    {
      path: "/color/create",
      pageName: "Rolls",
      title: "eCommerce Dashboard | create color ",
      felds: [{ inputTypy: "text" }],
      page: <Create
        name="Rolls"
        url="/api/colors/"
        inputs={
          [
            { type: "text", name: "color" },
            { type: "text", name: "created_by" },
            { type: "option", name: "status", url: "/api/helper/statusOption", valueBy: "value", optionBy: "status" },
          ]

        }
      />,
    },
    {

      path: "/color/update/:id",
      pageName: "Rolls",
      url: "/api/colors/",
      title: "eCommerce Dashboard | create color ",
      felds: [{ inputTypy: "text" }],
      page: <Update

        name="Rolls"
        url="/api/colors/"
        inputs={
          [
            { type: "text", name: "color" },
            { type: "text", name: "created_by" },
            { type: "option", name: "status", url: "/api/helper/statusOption", valueBy: "value", optionBy: "status" },
          ]


        }

      />,
    },
  ],
  //item
//   [
//     {
//       path: "/item",
//       pageName: "item",
//       page: <Page_
//         pageName="item"
//         url={"/api/items/"}
//         title={"eCommerce Dashboard | create item "}
//         felds={[{ inputTypy: "text" }]}
// 
// 
//       />,
// 
// 
//     },
//     {
//       path: "/item/create",
//       pageName: "Rolls",
//       title: "eCommerce Dashboard | create item ",
//       felds: [{ inputTypy: "text" }],
//       page: <Create
//         name="Rolls"
//         url="/api/items/"
//         inputs={
//           [
//             { type: "text", name: "name" },
//             { type: "text", name: "created_by" },
//             { type: "text", name: "description" },
//             { type: "option", name: "category_id", url: "/api/categories", valueBy: "id", optionBy: "name" },
//             { type: "option", name: "subcategory_id", url: "/api/sub-categories/by-category", valueBy: "id", optionBy: "name", toLink: "category_id" },
//             { type: "option", name: "status", url: "/api/helper/statusOption", valueBy: "value", optionBy: "status" },
//             {
//               type: "multiInputs", name: "itemVariantData",
//               inputs:
//                 [
//                   { type: "option", name: "color_id", url: "/api/colors", valueBy: "id", optionBy: "color" },
//                   { type: "option", name: "size_id", url: "/api/sizes", valueBy: "id", optionBy: "size" },
//                   { type: "number", name: "price" },
//                   { type: "number", name: "stock" },
//                   { type: "number", name: "low_stock_threshold" },
//                   { type: "option", name: "status", url: "/api/helper/statusOption", valueBy: "value", optionBy: "status" },
//                 ],
// 
//             },
//             { type: "file", name: "img", multiple: true },
//           ]
// 
// 
//         }
//       />,
//     },
//     {
// 
//       path: "/item/update/:id",
//       pageName: "Rolls",
//       //  url: "/api/items/",
//       title: "eCommerce Dashboard | create item ",
//       felds: [{ inputTypy: "text" }],
//       page: <Update
// 
//         name="Rolls"
//         url="/api/items/"
//         inputs={
//           [
//             { type: "text", name: "name" },
//             { type: "text", name: "created_by" },
//             { type: "text", name: "description" },
//             { type: "option", name: "category_id", url: "/api/categories", valueBy: "id", optionBy: "name" },
//             { type: "option", name: "subcategory_id", url: "/api/sub-categories", valueBy: "id", optionBy: "name", toLink: "category_id" },
//             { type: "option", name: "status", url: "/api/helper/statusOption", valueBy: "value", optionBy: "status" },
//             {
//               type: "multiInputs", name: "itemVariantData",
//               inputs:
//                 [
//                   { type: "option", name: "color_id", url: "/api/colors", valueBy: "id", optionBy: "color" },
//                   { type: "option", name: "size_id", url: "/api/sizes", valueBy: "id", optionBy: "size" },
//                   { type: "number", name: "price" },
//                   { type: "number", name: "stock" },
//                   { type: "number", name: "low_stock_threshold" },
//                   { type: "option", name: "status", url: "/api/helper/statusOption", valueBy: "value", optionBy: "status" },
//                 ],
// 
//             },
//             { type: "file", name: "img", multiple: true },
//           ]
// 
// 
//         }
// 
//       />,
//     },
//   ],
// //item-variants
  [
    {
      path: "/item-variants",
      pageName: "item-variants",
      page: <Page_
        pageName="item-variants"
        url={"/api/item-variants/"}
        title={"eCommerce Dashboard | create item-variants "}
        felds={[{ inputTypy: "text" }]}


      />,


    },
    {
      path: "/item-variants/create",
      pageName: "Rolls",
      title: "eCommerce Dashboard | create item-variants ",
      felds: [{ inputTypy: "text" }],
      page: <Create
        name="Rolls"
        url="/api/item-variants/"
        inputs={
          [
            { type: "text", name: "color" },
            { type: "text", name: "created_by" },
            { type: "option", name: "status", url: "/api/helper/statusOption", valueBy: "value", optionBy: "status" },
          ]

        }
      />,
    },
    {

      path: "/item-variants/update/:id",
      pageName: "Rolls",
      url: "/api/item-variants/",
      title: "eCommerce Dashboard | create item-variants ",
      felds: [{ inputTypy: "text" }],
      page: <Update

        name="Rolls"
        url="/api/colors/"
        inputs={
          [
            { type: "text", name: "color" },
            { type: "text", name: "created_by" },
            { type: "option", name: "status", url: "/api/helper/statusOption", valueBy: "value", optionBy: "status" },
          ]


        }

      />,
    },
  ],
//coupons
  [
    {
      path: "/coupons",
      pageName: "coupons",
      page: <Page_
        pageName="item-variants"
        url={"/api/coupons/"}
        title={"eCommerce Dashboard | create item-variants "}
        felds={[{ inputTypy: "text" }]}


      />,


    },
    {
      path: "/coupons/create",
      pageName: "coupons",
      title: "eCommerce Dashboard | create item-variants ",
      felds: [{ inputTypy: "text" }],
      page: <Create
        name="Rolls"
        url="/api/coupons/"
        inputs={
          [
            { type: "text", name: "code" },
            { type: "number", name: "discount_percentage" },
            { type: "number", name: "max_discount_amount" },
            { type: "number", name: "min_order_amount" },
            { type: "date", name: "valid_from" },
            { type: "date", name: "valid_to" },
            { type: "number", name: "created_by" },
            { type: "option", name: "status", url: "/api/helper/statusOption", valueBy: "value", optionBy: "status" },
          ]

        }
      />,
    },
    {

      path: "/coupons/update/:id",
      pageName: "Rolls",
      url: "/api/coupons/",
      title: "eCommerce Dashboard | create item-variants ",
      felds: [{ inputTypy: "text" }],
      page: <Update

        name="Rolls"
        url="/api/colors/"
        inputs={
          [
            { type: "text", name: "code" },
            { type: "number", name: "discount_percentage" },
            { type: "number", name: "max_discount_amount" },
            { type: "number", name: "min_order_amount" },
            { type: "date", name: "valid_from" },
            { type: "date", name: "valid_to" },
            { type: "number", name: "created_by" },
            { type: "option", name: "status", url: "/api/helper/statusOption", valueBy: "value", optionBy: "status" },
          ]


        }

      />,
    },
  ],
  ///poster
  [
    {
      path: "/posters",
      pageName: "posters",
      page: <Page_
        pageName="posters"
        url={"/api/posters/"}
        title={"eCommerce Dashboard | create poster"}
        felds={[{ inputTypy: "text" }]}


      />,


    },
    {
      path: "/posters/create",
      pageName: "posters",
      title: "eCommerce Dashboard | create posters ",
      felds: [{ inputTypy: "text" }],
      page: <Create
        name="posters"
        url="/api/posters/"
        inputs={
          [
            { type: "number", name: "index_no" },
            { type: "file", name: "img", multiple: false },
            { type: "text", name: "title" },
            { type: "text", name: "heading" },
            { type: "text", name: "url" },
            { type: "number", name: "created_by" },
            { type: "option", name: "status", url: "/api/helper/statusOption", valueBy: "value", optionBy: "status" },
          ]

        }
      />,
    },
    {

      path: "/posters/update/:id",
      pageName: "posters",
      url: "/api/posters/",
      title: "eCommerce Dashboard | create posters",
      felds: [{ inputTypy: "text" }],
      page: <Update

        name="posters"
        url="/api/posters/"
        inputs={
          [
            { type: "number", name: "index_no" },
            { type: "file", name: "img", multiple: false },
            { type: "text", name: "title" },
            { type: "text", name: "heading" },
            { type: "text", name: "url" },
            { type: "number", name: "created_by" },
            { type: "option", name: "status", url: "/api/helper/statusOption", valueBy: "value", optionBy: "status" },
          ]

        }

      />,
    },
  ],
/////////////////////////////////////////////////////////////




  [
    {},
    {
      path: "/categories/display/:id",
      pageName: "dataDisplay",
      page: <DataDisplay
        pageName="dataDisplay"
        url={"/api/categories/"}
        title={"eCommerce Dashboard | create item-variants "}
        


      />,


    },
    {
      path: "/sub-categories/display/:id",
      pageName: "sub-categories",
      page: <DataDisplay
        pageName="sub-categories"
        url={"/api/sub-categories/"}
        title={"eCommerce Dashboard | create sub-categories "}
        


      />,


    },
    {
      path: "/item-variants/display/:id",
      pageName: "dataDisplay",
      page: <DataDisplay
        pageName="dataDisplay"
        url={"/api/item-variants/"}
        title={"eCommerce Dashboard | create item-variants "}
        


      />,


    },
    {
      path: "/size/display/:id",
      pageName: "dataDisplay",
      page: <DataDisplay
        pageName="dataDisplay"
        url={"/api/sizes/"}
        title={"eCommerce Dashboard | create item-variants "}
        


      />,


    },
//     {
//       path: "/items/display/:id",
//       pageName: "_",
//       page: <DataDisplay
//         pageName=""
//         url={"/api/items/"}
//         title={"eCommerce Dashboard | create item-variants "}
//         
// 
// 
//       />,
// 
// 
//     },
    {
      path: "/color/display/:id",
      pageName: "_",
      page: <DataDisplay
        pageName=""
        url={"/api/colors/"}
        title={"eCommerce Dashboard | create item-variants "}
        


      />,


    },
//     {
//       path: "/roles/display/:id",
//       pageName: "_",
//       page: <DataDisplay
//         pageName=""
//         url={"/api/roles/"}
//         title={"eCommerce Dashboard | create item-variants "}
//         
// 
// 
//       />,
// 
// 
//     },
    {
      path: "/posters/display/:id",
      pageName: "_",
      page: <DataDisplay
        pageName="posters"
        url={"/api/posters/"}
        title={"eCommerce Dashboard | create posters"}
        


      />,


    },
  ],
//coupons
];

export { Page }




//docs
/*






*/