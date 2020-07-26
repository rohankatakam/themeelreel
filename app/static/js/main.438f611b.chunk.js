(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{31:function(e,t,n){e.exports=n(32)},32:function(e,t,n){"use strict";n.r(t);var a=n(10),r=n(11),i=n(2),s=n(13),o=n(12),l=n(0),c=n.n(l),u=n(29),d=n.n(u),h=n(15),m=n(1),g=(n(37),n(8)),p=n.n(g);var E=function(e){Object(s.a)(n,e);var t=Object(o.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).toListings=r.toListings.bind(Object(i.a)(r)),r.toMealPlanner=r.toMealPlanner.bind(Object(i.a)(r)),r.toAdminListings=r.toAdminListings.bind(Object(i.a)(r)),r.state={redirect:""},r}return Object(r.a)(n,[{key:"toListings",value:function(e){e.preventDefault(),this.followLink("/listings")}},{key:"toMealPlanner",value:function(e){e.preventDefault(),this.followLink("/")}},{key:"toAdminListings",value:function(e){e.preventDefault(),this.followLink("/adminlistings")}},{key:"followLink",value:function(e){console.log("redirecting to ".concat(e)),this.setState({redirect:e})}},{key:"render",value:function(){return this.state.redirect?c.a.createElement(m.a,{to:{pathname:this.state.redirect,state:{token:this.props.token}}}):c.a.createElement("nav",null,c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("a",{href:"/",onClick:this.toMealPlanner},"Meal Planner")),c.a.createElement("li",null,c.a.createElement("a",{href:"/listings",onClick:this.toListings},"Listings")),c.a.createElement("li",null,c.a.createElement("a",{href:"/adminlistings",onClick:this.toAdminListings},"Admin listings"))))}}]),n}(c.a.Component),f=function(e){Object(s.a)(n,e);var t=Object(o.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).state={username:"",password:"",redirect:"",token:""},r.props.location.state&&r.props.location.state.token&&(r.state.token=r.props.location.state.token),r.handleUsernameChange=r.handleUsernameChange.bind(Object(i.a)(r)),r.handlePasswordChange=r.handlePasswordChange.bind(Object(i.a)(r)),r.handleSubmit=r.handleSubmit.bind(Object(i.a)(r)),r}return Object(r.a)(n,[{key:"handleUsernameChange",value:function(e){this.setState({username:e.target.value})}},{key:"handlePasswordChange",value:function(e){this.setState({password:e.target.value})}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),p()({method:"get",url:"/api/login",auth:{username:this.state.username,password:this.state.password}}).then((function(e){console.log("logged in!"),t.setState({redirect:"/",token:e.data.token})})).catch((function(e){t.setState({error:e.statusText})}))}},{key:"render",value:function(){if(this.state.redirect)return console.log("redirecting to ".concat(this.state.redirect)),c.a.createElement(m.a,{to:{pathname:this.state.redirect,state:{token:this.state.token}}});var e=this.state.error?c.a.createElement("p",null,this.state.error):c.a.createElement("p",null);return c.a.createElement("div",null,c.a.createElement("p",null,"Don't have an account? ",c.a.createElement(h.b,{to:"/newaccount"},"Sign up")),e,c.a.createElement("form",{onSubmit:this.handleSubmit},c.a.createElement("label",{htmlFor:"username"},"Username"),c.a.createElement("input",{type:"text",id:"username",value:this.state.username,onChange:this.handleUsernameChange}),c.a.createElement("label",{htmlFor:"password"},"Password"),c.a.createElement("input",{type:"password",id:"password",value:this.state.password,onChange:this.handlePasswordChange}),c.a.createElement("input",{type:"submit",value:"Log in"})))}}]),n}(c.a.Component),v=function(e){Object(s.a)(n,e);var t=Object(o.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).state={username:"",password1:"",password2:"",redirect:""},r.handleUsernameChange=r.handleUsernameChange.bind(Object(i.a)(r)),r.handlePassword1Change=r.handlePassword1Change.bind(Object(i.a)(r)),r.handlePassword2Change=r.handlePassword2Change.bind(Object(i.a)(r)),r.handleSubmit=r.handleSubmit.bind(Object(i.a)(r)),r}return Object(r.a)(n,[{key:"handleUsernameChange",value:function(e){this.setState({username:e.target.value})}},{key:"handlePassword1Change",value:function(e){this.setState({password1:e.target.value})}},{key:"handlePassword2Change",value:function(e){this.setState({password2:e.target.value}),this.state.password1!==this.state.password2?this.setState({smallError:"Passwords must match"}):this.setState({smallError:""})}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),this.state.username?this.state.password1===this.state.password2?this.state.password1?p()({method:"get",url:"/api/createaccount",auth:{username:this.state.username,password:this.state.password1}}).then((function(e){console.log("redirecting to /"),t.setState({redirect:"/",token:e.data.token})})).catch((function(e){t.setState({error:e.statusText})})):this.setState({smallError:"No password provided"}):this.setState({smallError:"Passwords must match"}):this.setState({smallError:"No username provided"})}},{key:"render",value:function(){if(this.state.redirect)return c.a.createElement(m.a,{to:{pathname:this.state.redirect,state:{token:this.state.token}}});var e=this.state.error?c.a.createElement("p",null,this.state.error):c.a.createElement("p",null),t=this.state.smallError?c.a.createElement("p",null,this.state.smallError):c.a.createElement("p",null);return c.a.createElement("div",null,c.a.createElement("p",null,"Already have an account? ",c.a.createElement(h.b,{to:"/login"},"Log in")),e,c.a.createElement("form",{onSubmit:this.handleSubmit},c.a.createElement("label",{htmlFor:"username"},"Username"),c.a.createElement("input",{type:"text",id:"username",value:this.state.username,onChange:this.handleUsernameChange}),c.a.createElement("label",{htmlFor:"password1"},"Password"),c.a.createElement("input",{type:"password",id:"password1",value:this.state.password1,onChange:this.handlePassword1Change}),c.a.createElement("label",{htmlFor:"password2"},"Retype Password"),c.a.createElement("input",{type:"password",id:"password2",value:this.state.password2,onChange:this.handlePassword2Change}),c.a.createElement("input",{type:"submit",value:"Create account"})),t)}}]),n}(c.a.Component),b=function(e){Object(s.a)(n,e);var t=Object(o.a)(n);function n(e){var r;return Object(a.a)(this,n),console.log("constructing plan meal page"),(r=t.call(this,e)).state={token:"",redirect:""},r.props.location.state&&r.props.location.state.token?r.state.token=r.props.location.state.token:r.state.redirect="/login",r}return Object(r.a)(n,[{key:"render",value:function(){return console.log("rendering plan meal page"),this.state.redirect?c.a.createElement(m.a,{to:{pathname:this.state.redirect,state:{token:this.state.token}}}):c.a.createElement("div",null,c.a.createElement(E,{token:this.state.token}),c.a.createElement("p",null,"NOTHING TO SEE HERE"))}}]),n}(c.a.Component),S=function(e){Object(s.a)(n,e);var t=Object(o.a)(n);function n(e){var r;return Object(a.a)(this,n),console.log("constructing price listings"),(r=t.call(this,e)).state={ingredientSuggestions:[],unitSuggestions:[],token:"",ingredientSearchTerm:"",unitSearchTerm:"",newIngredientName:"",newIngredientSource:"",newIngredientPrice:0,newIngredientUnits:"",redirect:""},r.props.location.state&&r.props.location.state.token?r.state.token=r.props.location.state.token:r.state.redirect="/login",r.searchIngredient=r.searchIngredient.bind(Object(i.a)(r)),r.searchUnit=r.searchUnit.bind(Object(i.a)(r)),r.fetchNeededPriceListing=r.fetchNeededPriceListing.bind(Object(i.a)(r)),r.setPrice=r.setPrice.bind(Object(i.a)(r)),r.setAmount=r.setAmount.bind(Object(i.a)(r)),r.selectUnits=r.selectUnits.bind(Object(i.a)(r)),r.selectIngredient=r.selectIngredient.bind(Object(i.a)(r)),r.selectSource=r.selectSource.bind(Object(i.a)(r)),r.addPriceListing=r.addPriceListing.bind(Object(i.a)(r)),r}return Object(r.a)(n,[{key:"searchIngredient",value:function(e){var t=this,n=e.target.value;this.setState({ingredientSearchTerm:n}),n?p()({method:"get",url:"/api/search/ingredient",headers:{Authorization:"Bearer ".concat(this.state.token)},params:{kw:n}}).then((function(e){console.log(e.data),t.setState({ingredientSuggestions:e.data.results})})).catch((function(e){401===e.status?t.setState({redirect:"/login"}):t.setState({error:e.data.error})})):this.setState({ingredientSuggestions:[]})}},{key:"searchUnit",value:function(e){var t=this,n=e.target.value;this.setState({unitSearchTerm:n}),n?p()({method:"get",url:"/api/search/unit",headers:{Authorization:"Bearer ".concat(this.state.token)},params:{kw:n}}).then((function(e){console.log(e.data),t.setState({unitSuggestions:e.data.results})})).catch((function(e){401===e.status?t.setState({redirect:"/login"}):t.setState({error:e.data.error})})):this.setState({unitSuggestions:[]})}},{key:"fetchNeededPriceListing",value:function(){var e=this;p()({method:"get",url:"/api/pricelistings",headers:{Authorization:"Bearer ".concat(this.state.token)}}).then((function(t){console.log(t.data),e.setState({newIngredientName:t.data.result,ingredientSuggestions:[]})})).catch((function(t){401===t.status?e.setState({redirect:"/login"}):e.setState({error:t.data.error})}))}},{key:"selectIngredient",value:function(e){this.setState({newIngredientName:e,ingredientSuggestions:[]})}},{key:"selectUnits",value:function(e){this.setState({newIngredientUnits:e,unitSuggestions:[]})}},{key:"selectSource",value:function(e){this.setState({newIngredientSource:e.target.value})}},{key:"setPrice",value:function(e){this.setState({newIngredientPrice:e.target.value})}},{key:"setAmount",value:function(e){this.setState({newIngredientAmount:e.target.value})}},{key:"addPriceListing",value:function(e){var t=this;e&&e.preventDefault();var n={ingredientName:this.state.newIngredientName,price:this.state.newIngredientPrice,amount:this.state.newIngredientAmount,source:this.state.newIngredientSource,units:this.state.newIngredientUnits};["ingredientName","source","units"].forEach((function(e){n[e]||t.setState({error:"Missing field: ".concat(e)})})),n.price<0?this.setState({error:"Price cannot be negative"}):n.amount&&n.amount<0?this.setState({error:"Amount cannot be negative"}):p()({method:"post",url:"/api/pricelistings",headers:{Authorization:"Bearer ".concat(this.state.token)},data:n}).then((function(e){t.setState({error:"",message:"Price for ".concat(n.ingredientName," successfully added!")})})).catch((function(e){401===e.status?t.setState({redirect:"/login"}):t.setState({error:e.data.error})}))}},{key:"render",value:function(){var e,t,n,a=this;return console.log("rendering price listing page"),this.state.redirect?(console.log("redirecting"),c.a.createElement(m.a,{to:{pathname:this.state.redirect,state:{token:this.state.token}}})):(this.state.ingredientSuggestions?e=c.a.createElement("ul",null,this.state.ingredientSuggestions.map((function(e){return c.a.createElement("li",null,c.a.createElement("button",{onClick:function(){return a.selectIngredient(e)}},e))}))):this.ingredientOptions=c.a.createElement("div",null),t=this.state.unitSuggestions?c.a.createElement("ul",null,this.state.unitSuggestions.map((function(e){return c.a.createElement("li",null,c.a.createElement("button",{onClick:function(){return a.selectUnits(e)}},e))}))):c.a.createElement("div",null),console.log(this.state),n=this.state.newIngredientName&&this.state.newIngredientUnits?c.a.createElement("div",null,c.a.createElement("form",{onSubmit:this.addPriceListing},c.a.createElement("p",null,this.state.newIngredientName),c.a.createElement("label",{htmlFor:"source"},"Source"),c.a.createElement("input",{type:"text",id:"source",value:this.state.newIngredientSource,onChange:this.selectSource}),c.a.createElement("label",{htmlFor:"price"},"Price"),"$",c.a.createElement("input",{type:"number",id:"price",min:"0",step:"0.01",value:this.state.newIngredientPrice,onChange:this.setPrice}),c.a.createElement("label",{htmlFor:"amount"},"Amount"),c.a.createElement("input",{type:"number",id:"amount",min:"0",value:this.state.newIngredientAmount,onChange:this.setAmount}),c.a.createElement("p",null,this.state.newIngredientUnits),c.a.createElement("input",{type:"submit",value:"Submit"}))):c.a.createElement("div",null),c.a.createElement("div",null,c.a.createElement(E,{token:this.state.token}),c.a.createElement("label",{htmlFor:"searchIngredient"},"Search for an ingredient to add a price listing for:"),c.a.createElement("input",{id:"searchIngredient",value:this.ingredientSearchTerm,onChange:this.searchIngredient}),e,c.a.createElement("button",{onClick:this.fetchNeededPriceListing},"Choose for me"),c.a.createElement("label",{htmlFor:"searchUnit"},"Select Units"),c.a.createElement("input",{id:"searchUnit",value:this.unitSearchTerm,onChange:this.searchUnit}),t,c.a.createElement("hr",null),n,this.state.error))}}]),n}(c.a.Component),k=function(e){Object(s.a)(n,e);var t=Object(o.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).state={priceListings:[],token:"",redirect:""},r.props.location.state&&r.props.location.state.token?r.state.token=r.props.location.state.token:r.state.redirect="/login",r.fetchListings(),r}return Object(r.a)(n,[{key:"fetchListings",value:function(){var e=this;p()({method:"get",url:"/api/adminpricelistings",headers:{Authorization:"Bearer ".concat(this.state.token)}}).then((function(t){e.setState({priceListings:t.data.results})})).catch((function(t){401===t.status?e.setState({redirect:"/login"}):403===t.status?e.setState({error:"Not an admin"}):e.setState({error:t.data.error})}))}},{key:"updateListing",value:function(e){var t=this;p()({method:"post",url:"/api/adminpricelistings/update",headers:{Authorization:"Bearer ".concat(this.state.token)},data:{ingredientName:e.ingredientName,source:e.source,timeCreated:e.timeCreated,price:e.price,units:e.units}}).then((function(e){t.fetchListings()})).catch((function(e){401===e.status?t.setState({redirect:"/login"}):403===e.status?t.setState({error:"Not an admin"}):t.setState({error:e.data.error})}))}},{key:"deleteListing",value:function(e){var t=this;p()({method:"post",url:"/api/adminpricelistings/delete",headers:{Authorization:"Bearer ".concat(this.state.token)},data:{ingredientName:e.ingredientName,source:e.source,timeCreated:e.timeCreated}}).then((function(e){t.fetchListings()})).catch((function(e){401===e.status?t.setState({redirect:"/login"}):403===e.status||t.setState({error:e.data.error})}))}},{key:"updateListingLocally",value:function(e,t,n){console.log(e),this.setState({priceListings:this.state.priceListings.map((function(a){return a.ingredientName===e.ingredientName&&a.source===e.source&&a.timeCreated===e.timeCreated?{ingredientName:a.ingredientName,source:a.source,timeCreated:a.timeCreated,price:t,units:n}:a}))})}},{key:"render",value:function(){var e=this;if(this.state.redirect)return console.log("redirecting"),c.a.createElement(m.a,{to:{pathname:this.state.redirect,state:{token:this.state.token}}});var t=this.state.priceListings.map((function(t){return c.a.createElement("tr",{key:"".concat(t.ingredientName,":").concat(t.source,":").concat(t.timeCreated)},c.a.createElement("td",null,t.ingredientName),c.a.createElement("td",null,"$",c.a.createElement("input",{type:"number",min:"0",step:"0.01",value:t.price,onChange:function(n){return e.updateListingLocally(t,n.target.value,t.units)}})),c.a.createElement("td",null,c.a.createElement("input",{type:"text",value:t.units,onChange:function(n){return e.updateListingLocally(t,t.price,n.target.value)}})),c.a.createElement("td",null,t.source),c.a.createElement("td",null,t.timeCreated),c.a.createElement("td",null,c.a.createElement("button",{onClick:function(){return e.updateListing(t)}},"Update")),c.a.createElement("td",null,c.a.createElement("button",{onClick:function(){return e.deleteListing(t)}},"X")))}));return c.a.createElement("div",null,c.a.createElement(E,{token:this.state.token}),c.a.createElement("table",null,c.a.createElement("tr",null,c.a.createElement("th",null,"Ingredient Name"),c.a.createElement("th",null,"Price"),c.a.createElement("th",null,"Units"),c.a.createElement("th",null,"Source"),c.a.createElement("th",null,"Time Created"),c.a.createElement("th",null),c.a.createElement("th",null)),t),c.a.createElement("p",null,this.state.error))}}]),n}(c.a.Component);d.a.render(c.a.createElement(h.a,null,c.a.createElement("div",null,c.a.createElement(m.d,null,c.a.createElement(m.b,{exact:!0,path:"/login",component:f}),c.a.createElement(m.b,{exact:!0,path:"/newaccount",component:v}),c.a.createElement(m.b,{exact:!0,path:"/",component:b}),c.a.createElement(m.b,{exact:!0,path:"/listings",component:S}),c.a.createElement(m.b,{exact:!0,path:"/adminlistings",component:k})))),document.getElementById("root"))},37:function(e,t,n){}},[[31,1,2]]]);
//# sourceMappingURL=main.438f611b.chunk.js.map