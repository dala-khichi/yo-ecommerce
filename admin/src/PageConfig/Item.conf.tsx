import MultiInput from '../components/InputsX/MultiInput';
import Update from '../pages/Update';
import Page_ from '../pages/Page';
import Create from '../pages/Create';
import DataDisplay from '../pages/DataDisplay';

const ItemDisplay = [
{
      path: "/item/display/:id",
      pageName: "_",
      page: <DataDisplay
        pageName=""
        deleteImgUrl="/api/item-images/"
        url={"/api/items/"}
        title={"eCommerce Dashboard | create items "}
        
      />,


    }
];

const Item = [
  [
    {
      path: "/item",
      pageName: "items",
      page: <Page_
        pageName="items"
        url={"/api/items/"}
        title={"eCommerce Dashboard | create item "}
        felds={[{ inputTypy: "text" }]}


      />,


    },
    {
      path: "/item/create",
      pageName: "Rolls",
      title: "eCommerce Dashboard | create item ",
      felds: [{ inputTypy: "text" }],
      page: <Create
        name="Rolls"
        url="/api/items/"
        inputs={
          [
            { type: "text", name: "name" },
            { type: "text", name: "created_by" },
            { type: "text", name: "description" },
            { type: "option", name: "category_id", url: "/api/categories", valueBy: "id", optionBy: "name" },
            { type: "option", name: "subcategory_id", url: "/api/sub-categories/by-category", valueBy: "id", optionBy: "name", toLink: "category_id" },
            { type: "option", name: "status", url: "/api/helper/statusOption", valueBy: "value", optionBy: "status" },
            {
              type: "multiInputs", name: "itemVariantData",
              inputs:
                [
                  { type: "option", name: "color_id", url: "/api/colors", valueBy: "id", optionBy: "color" },
                  { type: "option", name: "size_id", url: "/api/sizes", valueBy: "id", optionBy: "size" },
                  { type: "number", name: "price" },
                  { type: "number", name: "stock" },
                  { type: "number", name: "low_stock_threshold" },
                  { type: "option", name: "status", url: "/api/helper/statusOption", valueBy: "value", optionBy: "status" },
                ],
            },
            { type: "file", name: "img", multiple: true },
          ]


        }
      />,
    },
    {

      path: "/item/update/:id",
      pageName: "Rolls",
      //  url: "/api/items/",
      title: "eCommerce Dashboard | create item ",
      felds: [{ inputTypy: "text" }],
      page: <Update

        name="Rolls"
        url="/api/items/"
        inputs={
          [
            { type: "text", name: "name" },
            { type: "text", name: "created_by" },
            { type: "text", name: "description" },
            { type: "option", name: "category_id", url: "/api/categories", valueBy: "id", optionBy: "name" },
            { type: "option", name: "subcategory_id", url: "/api/sub-categories", valueBy: "id", optionBy: "name", toLink: "category_id" },
            { type: "option", name: "status", url: "/api/helper/statusOption", valueBy: "value", optionBy: "status" },
            {
              type: "multiInputs", name: "itemVariantData",
              inputs:
                [
                  { type: "option", name: "color_id", url: "/api/colors", valueBy: "id", optionBy: "color" },
                  { type: "option", name: "size_id", url: "/api/sizes", valueBy: "id", optionBy: "size" },
                  { type: "number", name: "price" },
                  { type: "number", name: "stock" },
                  { type: "number", name: "low_stock_threshold" },
                  { type: "option", name: "status", url: "/api/helper/statusOption", valueBy: "value", optionBy: "status" },
                ],

            },
            { type: "file", name: "img", multiple: true },
          ]


        }

      />,
    },
 ... ItemDisplay,
  ],
  
  ///DataDisplay user
];




export {Item}




//docs
/*






*/