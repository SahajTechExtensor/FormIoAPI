import { Formio } from "formiojs";

export const FormFieldsTab = {
  sanitize:true,
  sanitizeConfig: {
    allowedTags: ['sync-grid','emp-tab'],
    addTags: ['sync-grid','emp-tab']
  },
  builder: {
 
    basic: {
      default: false,
      weight: 1,
    },

    _custom: {
      title: ' Default Tab',
      weight: -1,
      default: false,
      components: {
      
      },
    },
  


    // TAb -2

    syncfusion: {
      title: 'syncfusion Grid',
      weight: 0,
      components: {
        DataGrid: {
          title: 'Fomio Grid ',
          key: 'Data Grid',
          icon: 'th',
          schema: {
            label: 'Custom Data Grid',
            key: 'dataGrid',
            type: 'datagrid',
            clearOnHide: true,
            input: true,
            tree: true,
            defaultValue: "defValuekey1Saved",            
            dataSrc: 'custom',
            data: {
              custom:"values = Mansuri "
            },
            components: []

          }
      },
        firstName: {
          title: 'First Name',
          key: 'firstName',
          icon: 'terminal',
          schema: {
            label: 'First Name',
            type: 'textfield',
            key: 'firstName',
            input: true,
            defaultValue: "defValuekey1Saved",
            dataSrc: 'custom',
              data: {
                custom:"values = Mansuri "
              },
             // url: 'https://dummyjson.com/products'
         
          }
        },
      }
    },

  }
}


// "dataSrc": "custom",
//             "data": {
//               "custom": "values = getCars();"
//             },

// "dataSrc": "custom",
            // "data": {              
            //   "custom": "values = angularComponent.getGenderValues() "
            // },