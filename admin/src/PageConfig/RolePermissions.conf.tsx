import MultiInput from '../components/InputsX/MultiInput';
import Update from '../pages/Update';
import Page_ from '../pages/Page';
import Create from '../pages/Create';
import DataDisplay from '../pages/DataDisplay';

const RolePermissionDisplay = [
{
      path: "/role-permissions/display/:id",
      pageName: "_",
      page: <DataDisplay
        pageName=""
        url={"/api/role-permissions/"}
        title={"eCommerce Dashboard | create role-permissions "}
        
      />,


    }
];

const RolePermission = [
  [
    {
      path: "/role-permissions",
      pageName: "role-permissions",
      title:"role-permissions",
      page: <Page_
        pageName={"role-permissions"}
        url={"/api/role-permissions/"}
        title={"eCommerce Dashboard | create role-permissions "}
        felds={[{ inputTypy: "text" }]}


      />,


    },
    {
      path: "/role-permissions/create",
      pageName: "Rolls",
      url: "/api/role-permissions/",
      title: "eCommerce Dashboard | create role-permissions ",
      felds: [{ inputTypy: "text" }],
      page: <Create
        pageName={"role-permissions"}
        
        url="/api/role-permissions/"
        inputs={[
//           { type: "number", name: "role_id" },
          { type: "option", name: "role_id", url: "/api/roles/for_selecter", valueBy: "id", optionBy: "role_name" },
         //  { type: "number", name: "permission_id" },
           {
              type: "multiInputs", name: "permissions_id",
              inputs:
                [
                  { type: "option", name: "permissionId"  ,url: "/api/permissions/", valueBy: "id", optionBy: "name" },
                ],
            },
          { type: "number", name: "created_by" },

        ]}

      />,
    },
    {

      path: "/role-permissions/update/:id",
      pageName: "role-permissions",
      url: "/api/role-permissions/",
      title: "eCommerce Dashboard | create role-permissions ",
      felds: [{ inputTypy: "text" }],
      page: <Update

        name="role-permissions"
        url="/api/role-permissions/"
        inputs={[
          { type: "number", name: "role_id" },
          { type: "number", name: "permission_id" },
          { type: "number", name: "created_by" },

        ]}

      />,
    },
...RolePermissionDisplay
  ],
  ///DataDisplay user
];




export {RolePermission}




//docs
/*






*/