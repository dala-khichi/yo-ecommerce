import MultiInput from '../components/InputsX/MultiInput';
import Update from '../pages/Update';
import Page_ from '../pages/Page';
import Create from '../pages/Create';
import DataDisplay from '../pages/DataDisplay';
import SelectRoleParmitions from '../components/PartX/SelectRoleParmitions';

const CategoriesDisplay = [
{
       path: "/categories/display/:id",
      pageName: "_",
      page: <DataDisplay
        pageName=""
        url={"/api/categories/"}
        title={"eCommerce Dashboard | create item-variants "}
        


      />,



    }
];

const Categories = [
  [
    {
      path: "/categories",
      pageName: "Rolls",
      title:"Rolls",
      page: <Page_
        pageName={"Rolls"}
        url={"/api/categories/"}
        title={"eCommerce Dashboard | create categories "}
        felds={[{ inputTypy: "text" }]}


      />,


    },
    {
      path: "/categories/create",
      pageName: "Rolls",
      url: "/api/categories/",
      title: "eCommerce Dashboard | create categories ",
      felds: [{ inputTypy: "text" }],
      page: <Create
      
           children={<SelectRoleParmitions onPermissionChange={(permissions) => handleMulti("permissions", permissions)} />}

      
      
        pageName={"Rolls"}
        url="/api/categories/"
        inputs={[
          { type: "text", name: "role_name" },
//          { type: "number", name: "created_by" },
          { type: "option", name: "status", url: "/api/helper/statusOption", valueBy: "value", optionBy: "status" },
        ]}

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
        inputs={[
          { type: "text", name: "role_name" },
          //    {type:"file",  name:"role_name"},
          { type: "option", name: "status", url: "/api/helper/statusOption/", valueBy: "value", optionBy: "status" },
        ]}

      />,
    },
...CategoriesDisplay
  ],
  ///DataDisplay user
];




export {Categories}




//docs
/*






*/