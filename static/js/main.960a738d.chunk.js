(this["webpackJsonpstar-db"]=this["webpackJsonpstar-db"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,n){},,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(10),s=n.n(c),i=n(3),o=n(5),l=n(7),u=n(6),d=(n(15),n(0)),j=function(e){var t=e.onServiceChange;return Object(d.jsxs)("div",{className:"header d-flex",children:[Object(d.jsx)("h3",{children:Object(d.jsx)("a",{href:"asdadd",children:"Star DB"})}),Object(d.jsxs)("ul",{className:"d-flex",children:[Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"asdadd",children:"People"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"asdadd",children:"Planets"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"asdadd",children:"Starships"})})]}),Object(d.jsx)("button",{className:"btn btn-primary btn-sm",onClick:t,children:"Change Service"})]})},h=n(2),p=n.n(h),m=n(8),b=function e(){var t=this;Object(i.a)(this,e),this._apiBase="https://swapi.dev/api",this._imageBase="https://starwars-visualguide.com/assets/img",this.getResource=function(){var e=Object(m.a)(p.a.mark((function e(n){var r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t._apiBase).concat(n));case 2:if((r=e.sent).ok){e.next=5;break}throw new Error("Could not fetch ".concat(n)+", received ".concat(r.status));case 5:return e.next=7,r.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getAllPeople=Object(m.a)(p.a.mark((function e(){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/people/");case 2:return n=e.sent,e.abrupt("return",n.results.map(t._transformPerson).slice(0,5));case 4:case"end":return e.stop()}}),e)}))),this.getPerson=function(){var e=Object(m.a)(p.a.mark((function e(n){var r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/people/".concat(n,"/"));case 2:return r=e.sent,e.abrupt("return",t._transformPerson(r));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getAllPlanets=Object(m.a)(p.a.mark((function e(){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/planets/");case 2:return n=e.sent,e.abrupt("return",n.results.map(t._transformPlanet).slice(0,5));case 4:case"end":return e.stop()}}),e)}))),this.getPlanet=function(){var e=Object(m.a)(p.a.mark((function e(n){var r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/planets/".concat(n,"/"));case 2:return r=e.sent,e.abrupt("return",t._transformPlanet(r));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getAllStarships=Object(m.a)(p.a.mark((function e(){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/starships/");case 2:return n=e.sent,e.abrupt("return",n.results.map(t._transformStarship).slice(5,11));case 4:case"end":return e.stop()}}),e)}))),this.getStarship=function(){var e=Object(m.a)(p.a.mark((function e(n){var r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/starships/".concat(n,"/"));case 2:return r=e.sent,e.abrupt("return",t._transformStarship(r));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getPersonImage=function(e){var n=e.id;return"".concat(t._imageBase,"/characters/").concat(n,".jpg")},this.getStarshipImage=function(e){var n=e.id;return"".concat(t._imageBase,"/starships/").concat(n,".jpg")},this.getPlanetImage=function(e){var n=e.id;return"".concat(t._imageBase,"/planets/").concat(n,".jpg")},this._extractId=function(e){return e.url.match(/\/([0-9]*)\/$/)[1]},this._transformPlanet=function(e){return{id:t._extractId(e),name:e.name,population:e.population,rotationPeriod:e.rotation_period,diameter:e.diameter}},this._transformStarship=function(e){return{id:t._extractId(e),name:e.name,model:e.model,manufacturer:e.manufacturer,costInCredits:e.cost_in_credits,length:e.length,crew:e.crew,passengers:e.passengers,cargoCapacity:e.cargo_capacity}},this._transformPerson=function(e){return{id:t._extractId(e),name:e.name,gender:e.gender,birthYear:e.birth_year,eyeColor:e.eye_color}}},f=(n(18),function(){return Object(d.jsx)("div",{className:"loadingio-spinner-double-ring-oit85yrbbw",children:Object(d.jsxs)("div",{className:"ldio-3i960n33pov",children:[Object(d.jsx)("div",{}),Object(d.jsx)("div",{}),Object(d.jsx)("div",{children:Object(d.jsx)("div",{})}),Object(d.jsx)("div",{children:Object(d.jsx)("div",{})})]})})}),g=(n(19),function(){return Object(d.jsxs)("div",{className:"error-indicator",children:[Object(d.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABcVBMVEUAAACUMUKVNESUNUaTNEWTNEWTNUWUNEWUNEWUNEWTNEWUNEWUNEWVNEWVNESUNUeWMkOUNUWVNEWUNEWTM0aVNUSSN0mVNUaUNEWUNEWUNEWVNESSNESWLUuUNESUNEWUNEafQECUNEaUNUWXNEaUMkaUNEWVNUaVM0SUNEWUM0WdO06UM0SVM0WSNkeVNUCUNEWUNEWVNEaUNESTMUWVMkSXOEiUNEWUNUSVNUSVK0CUNEWVNEWQN0OUNEaVNESUNEWAQED/AACUNEWZM02UNEaTNUaVM0SVNUaUNEaTNESSN0mUNEWUNUaZMzOUNEWVM0WUNEWTNkWUNEWVNEaXLkaUNEWUNEWXOUKUNEWVM0WUNkWSMkeUNEWUNUWUNEWUNEWVNUSUM0aTNUaTMkSUNEaUNESUNEWUNESPMECUNEWUNkOUNEWTNESUNUaTNEWZM0CUNEWVNEaUNUWVNUWSNUSUNEWUNEWTNESUNEUAAAAeSPByAAAAeXRSTlMAH155k63H4fjr07qiiWwrLn7O45pSDh2N3vuvMRGK97AIde4sTOJqeP2pDaTaLxjIwYRPGikg7FZlDNK2F8aoegQB2wpYhzxbko4c9j4Fnn3zNNS7FsuyG/FzUT3+jF3lwm5XR2Lya3AQ+ibqU6WmFNZx6TBESqdASVNu+gAAAAFiS0dEAIgFHUgAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfiCRwPAQ3scZC+AAACoUlEQVRYw6WX+WPSMBTH6z11OhXva4hnFR0MdBsymGzshLmjKEMZG7svd3jmv7fJo23SJDQl35+S9/I+TV7SHIYh16nTZ86eO3+h6+Kly91XrvYY4XTt+g3EKnLz1m3V6Dt37yGR7j94qBL+6HEvkioaiHgSe4raKvqsbfzzFyhIXS/bxL8yA+NtvX4j635cJdzW23fC+L6E1yTZn0qnU/1JCaH3vSD+Q8T1Dww6xsEBMWGIj898dL3ZYc88nOWjc/mRT1x8Ier6R8dox9goByiKEjDuus0J1jNhqgAmPfcUWFLT0ykoTSkAZkqeu4wNs2To2VlcLisAPnteM4MNc1CZI+k1AwE9dpP5Bfu7MYQWiWURmnoVq0KKC/Me50vGBXzFc4MLVbvbxLIEbZZIBQ+n1mqao3ryzYn/jmv15WKxYSG0Qkyr0GSVVFbsUqS5hrVcFw2FXbBpbFqH8joupyXr2QXM1BkzTN7GJkKbGzChQYAt1pwswNIulyFJhWQQwPLZt9kp2pbFO0nc2fXZS3t0/F5JFu9M4yTn2T/w4g/2hcH0J34I/IdH4Ds6lHydBiREDczj+MlJ/NhECoDgfbg9oLCrCah0Ev+TAvyy5yMfUt2/KcAfhBqGjrQBYYfQ9APCJjHvB4SdRg4QdiHxAFjKrS0L1LDkgL8cAH6mGmOrhukB/M6tbRuEt3d1wI5KFmP4jKqwI3PPBUsBUCUta6zRORe2FABWw85tM8Ia11oA37auLsnB0gHAPdps+bupBPAOVz5RagDneOenShFAXzA6yQF7xVHXP249KyoHW0utQC/o8RAA4T2Rumh2BqCvusFDEFx1mct2sIZEfehLKMcLr/v6Dw5D+8lj6D+69J99hvbDE0vz6Uuk9/gGKT3//wOKqXrHYMfrIgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0wOS0yOFQxNTowMToxMyswMjowMIL/AEkAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMDktMjhUMTU6MDE6MTMrMDI6MDDzorj1AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg==",alt:"error icon"}),Object(d.jsx)("span",{className:"boom",children:"BOOM!"}),Object(d.jsx)("span",{children:"something has gone terribly wrong"}),Object(d.jsx)("span",{children:"(but we already sent droids to fix it)"})]})}),O=(n(20),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).swapiService=new b,e.state={planet:{},loading:!0,error:!1},e.onPlanetLoaded=function(t){e.setState({planet:t,loading:!1,error:!1})},e.onError=function(t){e.setState({error:!0,loading:!1})},e.updatePlanet=function(){var t=Math.floor(17*Math.random())+2;e.swapiService.getPlanet(t).then(e.onPlanetLoaded).catch(e.onError)},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.updatePlanet(),this.interval=setInterval(this.updatePlanet,1e5)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){var e=this.state,t=e.planet,n=e.loading,r=e.error,a=!(n||r),c=r?Object(d.jsx)(g,{}):null,s=n?Object(d.jsx)(f,{}):null,i=a?Object(d.jsx)(A,{planet:t}):null;return Object(d.jsxs)("div",{className:"random-planet jumbotron rounded",children:[c,s,i]})}}]),n}(r.Component)),A=function(e){var t=e.planet,n=t.id,r=t.name,c=t.population,s=t.rotationPeriod,i=t.diameter;return Object(d.jsxs)(a.a.Fragment,{children:[Object(d.jsx)("img",{className:"planet-image",alt:"planet",src:"https://starwars-visualguide.com/assets/img/planets/".concat(n,".jpg")}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h4",{children:r}),Object(d.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(d.jsxs)("li",{className:"list-group-item",children:[Object(d.jsx)("span",{className:"term",children:"Population:"}),Object(d.jsx)("span",{children:c})]}),Object(d.jsxs)("li",{className:"list-group-item",children:[Object(d.jsx)("span",{className:"term",children:"Rotation Period:"}),Object(d.jsx)("span",{children:s})]}),Object(d.jsxs)("li",{className:"list-group-item",children:[Object(d.jsx)("span",{className:"term",children:"Diameter:"}),Object(d.jsx)("span",{children:i})]})]})]})]})},v=(n(21),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={hasError:!1},e}return Object(o.a)(n,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(d.jsx)(g,{}):this.props.children}}]),n}(r.Component)),x=function e(){var t=this;Object(i.a)(this,e),this._people=[{id:1,name:"Bilbo Baggins [TEST DATA]",gender:"male",birthYear:"long ago",eyeColor:"dark brown"},{id:2,name:"Frodo Baggins [TEST DATA]",gender:"male",birthYear:"long ago",eyeColor:"dark brown"},{id:3,name:"Legolas [TEST DATA]",gender:"male",birthYear:"long ago",eyeColor:"dark brown"}],this._planets=[{id:1,name:"Earth [TEST DATA]",population:"7.530.000.000",rotationPeriod:"23 hours 56 seconds",diameter:"12.742 km"},{id:2,name:"Venus [TEST DATA]",population:"not known",rotationPeriod:"243 days",diameter:"12.104 km"}],this._starships=[{id:1,name:"USS Enterprise [TEST DATA]",model:"NCC-1701-C",manufacturer:"Northrop Grumman Shipbuilding",costInCredits:"not known",length:"approx 300 meters",crew:1e3,passengers:50,cargoCapacity:100}],this.getAllPeople=Object(m.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t._people);case 1:case"end":return e.stop()}}),e)}))),this.getPerson=Object(m.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t._people[1]);case 1:case"end":return e.stop()}}),e)}))),this.getAllPlanets=Object(m.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t._planets);case 1:case"end":return e.stop()}}),e)}))),this.getPlanet=Object(m.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t._planets[0]);case 1:case"end":return e.stop()}}),e)}))),this.getAllStarships=Object(m.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t._starships);case 1:case"end":return e.stop()}}),e)}))),this.getStarship=Object(m.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t._starships[0]);case 1:case"end":return e.stop()}}),e)}))),this.getPersonImage=function(){return"https://placeimg.com/400/500/people"},this.getStarshipImage=function(){return"https://placeimg.com/600/400/tech"},this.getPlanetImage=function(){return"https://placeimg.com/400/400/nature"}},N=n(4),U=(n(22),function(e){var t=e.item,n=e.field,r=e.label;return Object(d.jsxs)("li",{className:"list-group-item",children:[Object(d.jsx)("span",{className:"term",children:r}),Object(d.jsx)("span",{children:t[n]})]})}),E=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={item:null,image:null},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.updateItem()}},{key:"componentDidUpdate",value:function(e){this.props.itemId===e.itemId&&this.props.getData===e.getData&&this.props.getImageUrl===e.getImageUrl||this.updateItem()}},{key:"updateItem",value:function(){var e=this,t=this.props,n=t.itemId,r=t.getData,a=t.getImageUrl;n&&r(n).then((function(t){e.setState({item:t,image:a(t)})}))}},{key:"render",value:function(){var e=this.state,t=e.item,n=e.image;if(!t)return Object(d.jsx)("span",{children:"Select a item from a list"});var r=t.name;return Object(d.jsxs)("div",{className:"item-details card",children:[Object(d.jsx)("img",{className:"item-image",src:n,alt:"item"}),Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsx)("h4",{children:r}),Object(d.jsx)("ul",{className:"list-group list-group-flush",children:a.a.Children.map(this.props.children,(function(e){return a.a.cloneElement(e,{item:t})}))})]})]})}}]),n}(r.Component),S=function(e){return function(t){Object(l.a)(r,t);var n=Object(u.a)(r);function r(){var e;Object(i.a)(this,r);for(var t=arguments.length,a=new Array(t),c=0;c<t;c++)a[c]=arguments[c];return(e=n.call.apply(n,[this].concat(a))).state={data:null,loading:!0,error:!1},e}return Object(o.a)(r,[{key:"componentDidUpdate",value:function(e){this.props.getData!==e.getData&&this.update()}},{key:"componentDidMount",value:function(){this.update()}},{key:"update",value:function(){var e=this;this.setState({loading:!0,error:!1}),this.props.getData().then((function(t){e.setState({data:t,loading:!1})})).catch((function(){e.setState({error:!0,loading:!1})}))}},{key:"render",value:function(){var t=this.state,n=t.data,r=t.loading,a=t.error;return r?Object(d.jsx)(f,{}):a?Object(d.jsx)(g,{}):Object(d.jsx)(e,Object(N.a)(Object(N.a)({},this.props),{},{data:n}))}}]),r}(r.Component)},w=a.a.createContext(),y=w.Provider,I=w.Consumer,W=function(e,t){return function(n){return Object(d.jsx)(I,{children:function(r){var a=t(r);return Object(d.jsx)(e,Object(N.a)(Object(N.a)({},n),a))}})}},k=W((function(e){return Object(d.jsxs)(E,Object(N.a)(Object(N.a)({},e),{},{children:[Object(d.jsx)(U,{field:"gender",label:"Gender:"}),Object(d.jsx)(U,{field:"eyeColor",label:"Eye Color:"}),Object(d.jsx)(U,{field:"birthYear",label:"birth Year:"})]}))}),(function(e){return{getData:e.getPerson,getImageUrl:e.getPersonImage}})),C=W((function(e){return Object(d.jsxs)(E,Object(N.a)(Object(N.a)({},e),{},{children:[Object(d.jsx)(U,{field:"population",label:"Population:"}),Object(d.jsx)(U,{field:"rotationPeriod",label:"Roration Period:"}),Object(d.jsx)(U,{field:"diameter",label:"Diameter:"})]}))}),(function(e){return{getData:e.getPlanet,getImageUrl:e.getPlanetImage}})),M=W((function(e){return Object(d.jsxs)(E,Object(N.a)(Object(N.a)({},e),{},{children:[Object(d.jsx)(U,{field:"model",label:"Model:"}),Object(d.jsx)(U,{field:"length",label:"Length:"}),Object(d.jsx)(U,{field:"costInCredits",label:"Cost:"})]}))}),(function(e){return{getData:e.getStarship,getImageUrl:e.getStarshipImage}})),T=(n(23),function(e){var t=e.data,n=e.onItemSelected,r=e.children,a=t.map((function(e){var t=e.id,a=r(e);return Object(d.jsx)("li",{className:"list-group-item",onClick:function(){return n(t)},children:a},t)}));return Object(d.jsx)("ul",{className:"item-list list-group",children:a})}),P=function(e,t){return function(n){return Object(d.jsx)(e,Object(N.a)(Object(N.a)({},n),{},{children:t}))}},D=function(e){var t=e.name;return Object(d.jsx)("span",{children:t})};P(T,D);var B=W(S(P(T,D)),(function(e){return{getData:e.getAllPeople}})),V=W(S(P(T,D)),(function(e){return{getData:e.getAllPlanets}})),F=W(S(P(T,(function(e){var t=e.model,n=e.name;return Object(d.jsxs)("span",{children:[n,"(",t,")"]})}))),(function(e){return{getData:e.getAllStarships}})),R=(n(24),function(e){var t=e.left,n=e.right;return Object(d.jsxs)("div",{className:"row mb2",children:[Object(d.jsx)("div",{className:"col-md-6",children:t}),Object(d.jsx)("div",{className:"col-md-6",children:n})]})}),_=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={selectedItem:null},e.onItemSelected=function(t){e.setState({selectedItem:t})},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this.state.selectedItem;return Object(d.jsx)(R,{left:Object(d.jsx)(B,{onItemSelected:this.onItemSelected}),right:Object(d.jsx)(k,{itemId:e})})}}]),n}(a.a.Component),L=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={selectedItem:null},e.onItemSelected=function(t){e.setState({selectedItem:t})},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this.state.selectedItem;return Object(d.jsx)(R,{left:Object(d.jsx)(V,{onItemSelected:this.onItemSelected}),right:Object(d.jsx)(C,{itemId:e})})}}]),n}(a.a.Component),G=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={selectedItem:null},e.onItemSelected=function(t){e.setState({selectedItem:t})},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this.state.selectedItem;return Object(d.jsx)(R,{left:Object(d.jsx)(F,{onItemSelected:this.onItemSelected}),right:Object(d.jsx)(M,{itemId:e})})}}]),n}(a.a.Component),Q=(n(25),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={swapiService:new b},e.onServiceChange=function(){e.setState((function(e){return{swapiService:new(e.swapiService instanceof b?x:b)}}))},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(d.jsx)(v,{children:Object(d.jsx)(y,{value:this.state.swapiService,children:Object(d.jsxs)("div",{className:"stardb-app",children:[Object(d.jsx)(j,{onServiceChange:this.onServiceChange}),Object(d.jsx)(O,{}),Object(d.jsx)(_,{}),Object(d.jsx)(L,{}),Object(d.jsx)(G,{})]})})})}}]),n}(r.Component));s.a.render(Object(d.jsx)(Q,{}),document.getElementById("root"))}],[[26,1,2]]]);
//# sourceMappingURL=main.960a738d.chunk.js.map