import { Components} from '@formio/angular';

// const Base = (Formio as any).Components.components.component;
// const editForm = (Formio as any).Components.components.table.editForm;
// const Components = (Formio as any).Components;

export class RatingField extends Components.components.htmlelement{
    static override schema(...extend: any[]) {
        return super.schema({
            label: 'syncfusion Data Grid',
            type: 'htmlelement',
            tag: 'ejs-grid',
            attrs: ['dataSource'],
            // attributes: [{
            //           OrderID: 10248, CustomerID: 'VINET', EmployeeID: 5, OrderDate: new Date(8364186e5),
            //           ShipName: 'Vins et alcools Chevalier', ShipCity: 'Reims', ShipAddress: '59 rue de l Abbaye',
            //           ShipRegion: 'CJ', ShipPostalCode: '51100', ShipCountry: 'France', Freight: 32.38, Verified: !0
            //       },
            //       {
            //           OrderID: 10249, CustomerID: 'TOMSP', EmployeeID: 6, OrderDate: new Date(836505e6),
            //           ShipName: 'Toms Spezialitäten', ShipCity: 'Münster', ShipAddress: 'Luisenstr. 48',
            //           ShipRegion: 'CJ', ShipPostalCode: '44087', ShipCountry: 'Germany', Freight: 11.61, Verified: !1
            //       }],
            // defaultValue: '<ejs-grid [dataSource]='+[
            //     {
            //       OrderID: 10248, CustomerID: 'VINET', EmployeeID: 5, OrderDate: new Date(8364186e5),
            //       ShipName: 'Vins et alcools Chevalier', ShipCity: 'Reims', ShipAddress: '59 rue de l Abbaye',
            //       ShipRegion: 'CJ', ShipPostalCode: '51100', ShipCountry: 'France', Freight: 32.38, Verified: !0
            //   },
            //   {
            //       OrderID: 10249, CustomerID: 'TOMSP', EmployeeID: 6, OrderDate: new Date(836505e6),
            //       ShipName: 'Toms Spezialitäten', ShipCity: 'Münster', ShipAddress: 'Luisenstr. 48',
            //       ShipRegion: 'CJ', ShipPostalCode: '44087', ShipCountry: 'Germany', Freight: 11.61, Verified: !1
            //   },]+'></ejs-grid>',
            content: '',
            input: false,
            persistent: false
        });
    }

    static get builderInfo() {
        return {
            title: 'ddData Grid',
            icon: 'fa fa-star',
            group: '_custom',
            weight: 0,
            schema: this.schema(),
        };
    }
    
   override render() {

    // return `<div>sss</div>`
    return `<ejs-grid [dataSource]=${[
        {
          OrderID: 10248, CustomerID: 'VINET', EmployeeID: 5, OrderDate: new Date(8364186e5),
          ShipName: 'Vins et alcools Chevalier', ShipCity: 'Reims', ShipAddress: '59 rue de l Abbaye',
          ShipRegion: 'CJ', ShipPostalCode: '51100', ShipCountry: 'France', Freight: 32.38, Verified: !0
      },
      {
          OrderID: 10249, CustomerID: 'TOMSP', EmployeeID: 6, OrderDate: new Date(836505e6),
          ShipName: 'Toms Spezialitäten', ShipCity: 'Münster', ShipAddress: 'Luisenstr. 48',
          ShipRegion: 'CJ', ShipPostalCode: '44087', ShipCountry: 'Germany', Freight: 11.61, Verified: !1
      },]}></ejs-grid>`

    }

}

// import { Formio} from '@formio/angular';
// const Base = (Formio as any).Components.components.component;
// const editForm = (Formio as any).Components.components.table.editForm;
// const Components = (Formio as any).Components;

// export class RatingField extends Components.components.htmlelement{
//     static schema() {
//     return super.schema({
//       type: 'customrating',
//       label: 'Customer Rating',
//       key: 'customerRating',
//       input: true,
//       defaultValue: 3, // Default rating
//     });
//   }

//   static get builderInfo() {
//     return {
//       title: 'Customer Rating',
//       group: 'syncfusion',
//       icon: 'star',
//       weight: 100,
//       documentation: 'http://help.form.io/userguide/',
//       schema: this.schema(),
//     };
//   }

//   // render() {
//     // Here's where you add your HTML to get put up.
//     // 
//     // let tpl = "<div ref='myref'>Hi there!</div>";
//     // Note the use of the 'ref' tag, which is used later to find 
//     // parts of your rendered element.
    
//     // If you need to render the superclass,
//     // you can do that with 
//     // tpl+=super.render(element);

//     // This wraps your template to give it the standard label and bulider decorations         
//     // return Formio.Components.components.component.prototype.render.call(this,tpl);
//   //   return super.render(`<div ref='myref'>Hi there!</div>`);

//   // }

//   // attach(element: any) {
//     // This code is called after rendering, when the DOM has been created.
//     // You can find your elements above like this:
//     // this.loadRefs(element, {myref: 'single'});

//     // var superattach = super.attach(element);
//      // Here do whatever you need to attach event handlers to the dom.
//     // this.refs.myref.on('click',()=>{alert("hi!");});                    

//   //   return superattach;
//   // }
  
//   // getvalue() {
//   //   return 3; // the value this element puts into the form
//   // }
//   // OR, depending on which component type you're basing on:
//   // getValueAt(index,value,flags) {}

//   // setValue(value) {
//     // modify your DOM here to reflect that the value should be 'value'.
//   // };
//   // OR, depending on what component type:
//   // getValueAt(index) {}

// }
// //   get rating() {
// //     return parseInt(this.dataValue, 10) || 0;
// //   }

// //   override render() {
// //     return super.render(this.renderTemplate('customrating', {
// //       input: this.getInputMask(),
// //       rating: this.rating,
// //     }));
// //   }

//   /**
//    * Attach events to the component elements after rendering.
//    *
  
//    */
// //   async attach(element) {
// //     this.loadRefs(element, {
// //       ratingInput: 'single',
// //     });

// //     this.addEventListener(this.refs.ratingInput, 'input', () => {
// //       const value = this.refs.ratingInput.value;
// //       this.setValue(value);
// //       this.emit('input', value);
// //     });

// //     await super.attach(element);
// //   }

//   /**
//    * Set the value of the component.
//    *
//    * @param {*} value - The value to set.
//    * @param {Object} flags - Flags to control behavior.
//    * @returns {boolean} - True if the value changed, false otherwise.
//    */
// //   setValue(value, flags = {}) {
// //     const changed = super.setValue(value, flags);
// //     this.refs.ratingInput.value = this.rating;
// //     return changed;
// //   }



// Formio.use({
//     components: {
//       name: RatingField,
//     },
// });