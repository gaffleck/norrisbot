webpackJsonp([1],{"/kz1":function(t,e){},0:function(t,e,i){t.exports=i("NHnr")},"4Utj":function(t,e){},"5z5/":function(t,e){},"6C9A":function(t,e){},"6QQJ":function(t,e){},"9ZLp":function(t,e){},BigR:function(t,e){},BpwO:function(t,e){},FYRW:function(t,e){},Hh7S:function(t,e){},Jv9N:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("/5sW"),o=(i("y9m4"),i("mtWM")),s=i.n(o),a=s.a.create({baseURL:"http://qa.feralcatlabs.com/api/"}),c={login:function(t,e){return new Promise(function(i,n){var o={clientId:"0",persistLogin:!0,emailAddress:t,password:e};a.post("login",o).then(function(t){localStorage.setItem("authToken",t.data.response.authenticationToken),a.defaults.headers.common["AuthenticationToken"]=t.data.response.authenticationToken,i(t.data.user)}).catch(function(t){return n(t)})})},checkToken:function(t,e){return new Promise(function(i,n){a.defaults.headers.common["AuthenticationToken"]=e,a.get(t).then(function(t){i(t.data)}).catch(function(t){return n(t)})})},getAll:function(t){return new Promise(function(e,i){a.get(t).then(function(t){e(t.data)}).catch(function(t){return i(t)})})},postOne:function(t,e){return new Promise(function(i,n){a.post(t,e).then(function(t){i(t.data)}).catch(function(t){return n(t)})})},updateOne:function(t,e){return new Promise(function(i,n){a.put(t,e).then(function(t){i(t.data)}).catch(function(t){return n(t)})})},deleteOne:function(t){return new Promise(function(e,i){a.delete(t).then(function(t){e(t.data)}).catch(function(t){return i(t)})})}},r={name:"Login",data:function(){return{email:null,password:null,loggingIn:!1,user:null,loginError:null,attemptLogin:!1}},props:["setLoggedIn"],created:function(){var t=this,e=localStorage.getItem("authToken")||null;null!==e&&(this.attemptLogin=!0,c.checkToken("login/user",e).then(function(e){t.user=e,t.attemptLogin=!1,t.$root.$emit("loggedIn",e)}).catch(function(e){console.error(e),t.attemptLogin=!1,t.loginError=e}))},methods:{tryLogin:function(){var t=this;this.loggingIn=!0,this.loginError=null,c.login(this.email,this.password).then(function(e){t.user=e,t.loggingIn=!1,t.$root.$emit("loggedIn",e)}).catch(function(e){console.error(e),t.loggingIn=!1,t.loginError=e})}}},l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"login"},[t.attemptLogin?i("div",[t._v("\n      Checking Credentials...\n    ")]):i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"email",placeholder:"email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",placeholder:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._v(" "),i("button",{attrs:{disabled:t.loggingIn},on:{click:function(e){t.tryLogin()}}},[t._v("Login Plz")]),t._v(" "),t.loginError?i("div",{staticClass:"login--error"},[t._v("\n        "+t._s(t.loginError)+"\n      ")]):t._e()])])},u=[],d=i("XyMi");function v(t){i("Jv9N")}var f=!1,h=v,m="data-v-4aca825c",p=null,k=Object(d["a"])(r,l,u,f,h,m,p),w=k.exports,g=(i("U6qc"),i("M4fF")),_=i.n(g),C=i("DAYN"),y=i.n(C),T={name:"ActivityTile",props:["activity","apiURL","loadActivity"],data:function(){return{}},methods:{deleteActivity:function(){var t=this;c.deleteOne(this.apiURL).then(function(e){t.$emit("activityDeleted",t.activity.id),console.log(e)}).catch(function(t){return console.log(t)})}}},A=function(){var t=this,e=this,i=e.$createElement,n=e._self._c||i;return n("div",{staticClass:"activity-tile",on:{click:function(){return t.$emit("selectedActivityUpdated",e.activity.id)}}},[n("h3",{staticClass:"activity-tile--title"},[e._v(e._s(e.activity.name))]),e._v(" "),n("div",{staticClass:"activity-tile--action"},[n("button",{on:{click:function(t){t.stopPropagation(),e.deleteActivity(t)}}},[e._v("Delete")])]),e._v(" "),n("div",{staticClass:"activity-tile--state"},[e._v("State: "+e._s(e.activity.state))]),e._v(" "),n("div",{staticClass:"activity-tile--meta"},[e._v("Created By: "+e._s(e.activity.metadata.userMetadata.modifiedBy.fullName))])])},b=[];function U(t){i("lNoE")}var W=!1,E=U,x=null,L=null,I=Object(d["a"])(T,A,b,W,E,x,L),$=I.exports,H={name:"Comment",props:["comment"],data:function(){return{}},methods:{}},D=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"activityContent--comment"},[i("div",{staticClass:"comment--body"},[t._v(t._s(t.comment.content))]),t._v(" "),i("label",{staticClass:"comment--label"},[t._v(t._s(t.comment.metadata.userMetadata.modifiedBy.fullName)+" - "+t._s(t.comment.metadata.dateMetadata.modifiedOn))])])},N=[];function O(t){i("Hh7S")}var R=!1,P=O,S="data-v-4760471f",M=null,j=Object(d["a"])(H,D,N,R,P,S,M),B=j.exports,Y={name:"Comments",props:["comments","apiURL"],components:{Comment:B},data:function(){return{creating:!1,newCommentContent:""}},mounted:function(){this.$root.$on("startCreateComment",this.startCreateComment)},beforeDestroy:function(){this.$root.$off("startCreateComment",this.startCreateComment)},methods:{createComment:function(){var t=this,e={content:this.newCommentContent};c.postOne(this.apiURL,e).then(function(e){console.log(e),t.$emit("commentsUpdated")}).catch(function(t){return console.log(t)})},startCreateComment:function(){this.creating=!0},cancelCreateComment:function(){this.creating=!1}}},F=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.comments.length>0?i("div",{staticClass:"activityContent--section"},[i("h5",[t._v("Comments")]),t._v(" "),t._l(t.comments,function(t){return i("Comment",{key:t.id,attrs:{comment:t}})})],2):t._e(),t._v(" "),t.creating?i("div",{},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.newCommentContent,expression:"newCommentContent"}],attrs:{type:"text"},domProps:{value:t.newCommentContent},on:{input:function(e){e.target.composing||(t.newCommentContent=e.target.value)}}}),t._v(" "),i("button",{on:{click:t.createComment}},[t._v("Send")]),t._v(" "),i("button",{on:{click:t.cancelCreateComment}},[t._v("Cancel")])]):t._e()])},X=[];function K(t){i("mHRj")}var Q=!1,z=K,q="data-v-b4b3515a",J=null,G=Object(d["a"])(Y,F,X,Q,z,q,J),V=G.exports,Z={name:"Hyperlinks",props:["hyperlinks","apiURL"],data:function(){return{creating:!1,newHyperlinkLink:"",newHyperlinkText:""}},mounted:function(){this.$root.$on("startCreateHyperlink",this.startCreateHyperlink)},beforeDestroy:function(){this.$root.$off("startCreateHyperlink",this.startCreateHyperlink)},methods:{deleteHyperlink:function(t){var e=this;c.deleteOne("".concat(this.apiURL,"/").concat(t)).then(function(t){e.$emit("hyperlinksUpdated"),console.log(t)}).catch(function(t){return console.log(t)})},createHyperlink:function(){var t=this,e={title:this.newHyperlinkText,address:this.newHyperlinkLink};c.postOne(this.apiURL,e).then(function(e){console.log(e),t.$emit("hyperlinksUpdated"),t.cancelCreateHyperlink()}).catch(function(t){return console.log(t)})},startCreateHyperlink:function(){this.creating=!0},cancelCreateHyperlink:function(){this.creating=!1}}},tt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.hyperlinks.length>0?i("div",{staticClass:"activityContent--section"},[i("h5",[t._v("Links")]),t._v(" "),t._l(t.hyperlinks,function(e){return i("div",{key:e.id,staticClass:"hyperlink"},[i("a",{attrs:{href:e.address}},[t._v(t._s(e.title))]),t._v(" "),i("button",{staticClass:"hyperlink--delete",on:{click:function(i){t.deleteHyperlink(e.id)}}},[t._v("Delete")]),t._v(" "),i("p",{staticClass:"hyperlink--label"},[t._v(t._s(e.metadata.userMetadata.modifiedBy.fullName)+" - "+t._s(e.metadata.dateMetadata.modifiedOn))])])})],2):t._e(),t._v(" "),t.creating?i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.newHyperlinkLink,expression:"newHyperlinkLink"}],attrs:{type:"text",placeholder:"URL"},domProps:{value:t.newHyperlinkLink},on:{input:function(e){e.target.composing||(t.newHyperlinkLink=e.target.value)}}}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.newHyperlinkText,expression:"newHyperlinkText"}],attrs:{type:"text",placeholder:"Description"},domProps:{value:t.newHyperlinkText},on:{input:function(e){e.target.composing||(t.newHyperlinkText=e.target.value)}}}),t._v(" "),i("button",{on:{click:t.createHyperlink}},[t._v("Save")]),t._v(" "),i("button",{on:{click:t.cancelCreateHyperlink}},[t._v("Cancel")])]):t._e()])},et=[];function it(t){i("9ZLp")}var nt=!1,ot=it,st="data-v-808cb16e",at=null,ct=Object(d["a"])(Z,tt,et,nt,ot,st,at),rt=ct.exports,lt={name:"Attachments",props:["attachments","apiURL"],data:function(){return{creating:!1,newHyperlinkLink:"",newHyperlinkText:""}},mounted:function(){this.$root.$on("startCreateAttachment",this.startCreateAttachment)},beforeDestroy:function(){this.$root.$off("startCreateAttachment",this.startCreateAttachment)},methods:{deleteAttachment:function(t){var e=this;c.deleteOne("".concat(this.apiURL,"/").concat(t)).then(function(t){e.$emit("attachmentsUpdated"),console.log(t)}).catch(function(t){return console.log(t)})},createAttachment:function(){console.log("TODO: CREATE ATTACHMENT")},startCreateAttachment:function(){this.creating=!0},cancelCreateAttachment:function(){this.creating=!1},getMimeType:function(t){switch(t){case"image/gif":case"image/jpgeg":case"image/png":case"image/svg+xml":return"IMAGE";case"application/vnd.ms-excel":case"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":case"text/csv":return"SPREADSHEET";case"application/vnd.openxmlformats-officedocument.presentationml.presentation":case"application/vnd.ms-powerpoint":return"PRESENTATION";case"application/msword":case"application/vnd.openxmlformats-officedocument.wordprocessingml.document":return"DOCUMENT";case"application/pdf":return"PDF";case"application/zip":case"application/x-rar-compressed":return"ARCHIVE"}}}},ut=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.attachments.length>0?i("div",{staticClass:"activityContent--section"},[i("h5",[t._v("Attachments")]),t._v(" "),t._l(t.attachments,function(e){return i("div",{key:e.id,staticClass:"attachment"},["IMAGE"===t.getMimeType(e.mimeType)?i("div",[i("img",{attrs:{src:"http://qa.feralcatlabs.com/download/attachment/"+e.location}}),t._v(" "),i("p",{staticClass:"attachment--label"},[t._v(t._s(e.fileName))])]):i("div",[i("a",{attrs:{href:"http://qa.feralcatlabs.com/download/attachment/"+e.location}},[t._v(t._s(e.fileName))])]),t._v(" "),i("button",{staticClass:"attachment--delete",on:{click:function(i){t.deleteAttachment(e.id)}}},[t._v("Delete")]),t._v(" "),i("p",{staticClass:"attachment--label"},[t._v(t._s(e.metadata.userMetadata.modifiedBy.fullName)+" - "+t._s(e.metadata.dateMetadata.modifiedOn))])])})],2):t._e(),t._v(" "),t.creating?i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.newHyperlinkLink,expression:"newHyperlinkLink"}],attrs:{type:"text",placeholder:"URL"},domProps:{value:t.newHyperlinkLink},on:{input:function(e){e.target.composing||(t.newHyperlinkLink=e.target.value)}}}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.newHyperlinkText,expression:"newHyperlinkText"}],attrs:{type:"text",placeholder:"Description"},domProps:{value:t.newHyperlinkText},on:{input:function(e){e.target.composing||(t.newHyperlinkText=e.target.value)}}}),t._v(" "),i("button",{on:{click:t.createAttachment}},[t._v("Save")]),t._v(" "),i("button",{on:{click:t.cancelCreateAttachment}},[t._v("Cancel")])]):t._e()])},dt=[];function vt(t){i("4Utj")}var ft=!1,ht=vt,mt="data-v-49f2c24a",pt=null,kt=Object(d["a"])(lt,ut,dt,ft,ht,mt,pt),wt=kt.exports,gt=(i("EuXz"),{name:"ChecklistItem",props:["todo","url"],data:function(){return{editing:!1}},methods:{toggleEditing:function(){this.editing=!0},saveChanges:function(){this.editing=!1;var t={name:this.todo.name};c.updateOne("".concat(this.url,"/").concat(this.todo.id),t).then(function(t){return console.log("success",t)}).catch(function(t){return console.log(t)})},toggleItemStatus:function(t){var e="INCOMPLETE"===t.state?"COMPLETE":"INCOMPLETE",i={state:e};c.updateOne("".concat(this.url,"/").concat(this.todo.id),i).then(function(t){return console.log("success",t)}).catch(function(t){return console.log(t)})}}}),_t=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"checklist--item"},[i("div",{staticClass:"checklist--check",class:["COMPLETE"===t.todo.state?"s-complete":"s-incomplete"]}),t._v(" "),t.editing?i("input",{directives:[{name:"model",rawName:"v-model",value:t.todo.name,expression:"todo.name"}],staticClass:"checklist--edit",attrs:{type:"text",placeholder:"Todo Title"},domProps:{value:t.todo.name},on:{input:function(e){e.target.composing||t.$set(t.todo,"name",e.target.value)}}}):t._e(),t._v(" "),t.editing?i("button",{staticClass:"checklist--save",on:{click:t.saveChanges}},[t._v("Save")]):t._e(),t._v(" "),t.editing?t._e():i("div",{staticClass:"checklist--value",on:{dblclick:t.toggleEditing}},[t._v(t._s(t.todo.name))]),t._v(" "),i("div",{staticClass:"drag-handle"},[t._v("⋮")])])},Ct=[];function yt(t){i("5z5/")}var Tt=!1,At=yt,bt="data-v-60aacd7c",Ut=null,Wt=Object(d["a"])(gt,_t,Ct,Tt,At,bt,Ut),Et=Wt.exports,xt={name:"Checklist",props:["checklist","apiURL","creating"],components:{draggable:y.a,ChecklistItem:Et},data:function(){return{todoURL:"".concat(this.apiURL,"/").concat(this.checklist.id,"/items/"),checkListItems:null,creatingNewTodo:!1,newTodoText:""}},created:function(){this.checkListItems=_.a.sortBy(this.checklist.items,function(t){return t.position}),this.creatingNewTodo=0===this.checkListItems.length},methods:{cancelCreateTodo:function(){this.creatingNewTodo=!1,this.newTodoText=""},createTodo:function(){var t=this,e=this.checkListItems.length>0?_.a.last(this.checkListItems).position+1e3:1e3,i={name:this.newTodoText,state:"INCOMPLETE",position:e};c.postOne(this.todoURL,i).then(function(e){t.cancelCreateTodo(),t.checkListItems.push(e),console.log("success",e)}).catch(function(t){return console.log(t)})},dragEnd:function(t){var e=t.newIndex,i=e>0?this.checkListItems[e-1].position:null,n=e<this.checkListItems.length-1?this.checkListItems[e+1].position:null,o=0;if(i&&n)o=i+Math.floor((n-i)/2);else if(i)o=i+100;else{if(!n)return;o=n-100}var s={position:o};c.updateOne("".concat(this.todoURL,"/").concat(this.checkListItems[e].id),s).then(function(t){return console.log("success",t)}).catch(function(t){return console.log(t)})}}},Lt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"activityContent--checklist"},[i("h5",{staticClass:"checklist--name"},[t._v(t._s(t.checklist.name))]),t._v(" "),i("div",{staticClass:"checklist--list"},[i("draggable",{attrs:{options:{delay:100,handle:".drag-handle",ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",forceFallback:!0}},on:{end:t.dragEnd},model:{value:t.checkListItems,callback:function(e){t.checkListItems=e},expression:"checkListItems"}},t._l(t.checkListItems,function(e){return i("ChecklistItem",{key:e.id,attrs:{todo:e,url:t.todoURL}})})),t._v(" "),t.creatingNewTodo?i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.newTodoText,expression:"newTodoText"}],attrs:{type:"text"},domProps:{value:t.newTodoText},on:{input:function(e){e.target.composing||(t.newTodoText=e.target.value)}}}),t._v(" "),i("button",{on:{click:t.createTodo}},[t._v("Create")]),t._v(" "),i("button",{on:{click:t.cancelCreateTodo}},[t._v("Cancel")])]):i("button",{staticClass:"add",on:{click:function(){return t.creatingNewTodo=!0}}},[t._v("+")])],1),t._v(" "),i("label",{staticClass:"checklist--label"},[t._v("Created by: "+t._s(t.checklist.metadata.userMetadata.modifiedBy.fullName)+" - "+t._s(t.checklist.metadata.dateMetadata.modifiedOn))])])},It=[];function $t(t){i("YblY")}var Ht=!1,Dt=$t,Nt="data-v-33ba8f04",Ot=null,Rt=Object(d["a"])(xt,Lt,It,Ht,Dt,Nt,Ot),Pt=Rt.exports,St={name:"Checklists",props:["checklists","apiURL"],components:{Checklist:Pt},mounted:function(){this.$root.$on("createChecklist",this.createChecklist)},beforeDestroy:function(){this.$root.$off("createChecklist",this.createChecklist)},methods:{createChecklist:function(){var t=this,e=this.checklists.length>0?_.a.last(this.checklists).position+1e3:1e3,i={name:"Checklist",position:e};c.postOne(this.apiURL,i).then(function(e){console.log(e),t.checklists.push(e)}).catch(function(t){return console.log(t)})}}},Mt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.checklists.length>0?i("div",{staticClass:"activityContent--section"},t._l(t.checklists,function(e){return i("Checklist",{key:e.id,attrs:{checklist:e,apiURL:t.apiURL}})})):t._e()},jt=[];function Bt(t){i("FYRW")}var Yt=!1,Ft=Bt,Xt="data-v-52b32b78",Kt=null,Qt=Object(d["a"])(St,Mt,jt,Yt,Ft,Xt,Kt),zt=Qt.exports,qt=(i("mJx5"),{name:"User",props:["view-mode","user"],methods:{userNameInitials:function(t){var e=t.split(" ");return e[0].charAt(0)+e[1].charAt(0)}}}),Jt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("h4",[t._v(t._s(t.user.user.fullName))]),t._v(" "),t.user.user.imageUrl?i("div",{staticClass:"user--avatar__photo"},[i("img",{attrs:{src:t.user.user.imageUrl}})]):i("div",{staticClass:"user--avatar__initials"},[t._v(t._s(t.userNameInitials(t.user.user.fullName)))]),t._v(" "),"DETAILED"===t.viewMode?i("div",{staticClass:"user--label"},[t._v(t._s(t.user.userAccess))]):t._e()])},Gt=[];function Vt(t){i("Q28W")}var Zt=!1,te=Vt,ee="data-v-1c75e86b",ie=null,ne=Object(d["a"])(qt,Jt,Gt,Zt,te,ee,ie),oe=ne.exports,se={name:"Users",props:["users"],components:{User:oe},data:function(){return{assignedUser:_.a.filter(this.users,function(t){return"EXECUTE"===t.assignedAction}).map(function(t){return t.assignedTo}),subscribedUsers:_.a.filter(this.users,function(t){return"SUBSCRIBE"===t.assignedAction}).map(function(t){return t.assignedTo})}},methods:{}},ae=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.users.length>0?i("div",{staticClass:"activityContent--section users"},[i("div",{staticClass:"users--assigned"},[i("h5",[t._v("Assigned User")]),t._v(" "),t._l(t.assignedUser,function(t){return i("div",{key:t.id,staticClass:"users--user"},[i("User",{attrs:{user:t,"view-mode":"DETAILED"}})],1)})],2),t._v(" "),i("div",{staticClass:"users--subscribed"},[i("h5",[t._v("Subscribed Users")]),t._v(" "),t._l(t.subscribedUsers,function(t){return i("div",{key:t.id,staticClass:"users--user"},[i("User",{attrs:{user:t}})],1)})],2)]):t._e()])},ce=[];function re(t){i("tyYU")}var le=!1,ue=re,de="data-v-187afd80",ve=null,fe=Object(d["a"])(se,ae,ce,le,ue,de,ve),he=fe.exports,me={name:"Editable",props:["content","placeholder","singleline"],data:function(){return{editing:!1}},methods:{startEditing:function(){var t=this;this.editing=!0,"undefined"!=typeof this.content&&(this.$refs.textinput.innerText=this.content),this.$nextTick(function(){t.$refs.textinput.focus()})},update:function(t){this.$emit("update",t.target.innerText)},enterTiggered:function(t){this.singleline&&(this.doneEditing(),t.preventDefault())},doneEditing:function(){this.$emit("doneEditing"),this.editing=!1}}},pe=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.editing?t._e():i("p",{staticClass:"editable--output",class:[t.content?"":"s-empty"],on:{click:t.startEditing}},[t._v("\n    "+t._s(t.content||t.placeholder)+"\n  ")]),t._v(" "),t.editing?i("div",{ref:"textinput",staticClass:"editable--input",attrs:{contenteditable:"true","data-placeholder":t.placeholder},on:{input:t.update,keydown:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.enterTiggered(e)},blur:t.doneEditing}}):t._e()])},ke=[];function we(t){i("SqXX")}var ge=!1,_e=we,Ce="data-v-39c40e59",ye=null,Te=Object(d["a"])(me,pe,ke,ge,_e,Ce,ye),Ae=Te.exports,be={name:"ActivityDetails",props:["workflowid","activityid","nextActivityId","prevActivityId"],components:{Comments:V,Hyperlinks:rt,Attachments:wt,Checklists:zt,ActivityUsers:he,Editable:Ae},created:function(){this.getActivityDetails(this.activityid)},watch:{activityid:function(t){this.activityDetails=null,this.getActivityDetails(t)}},data:function(){return{activityDetails:null,creatingComment:!1,creatingHyperlink:!1}},methods:{changeActivity:function(t){this.$emit("selectedActivityUpdated",t)},getActivityDetails:function(t){var e=this;c.getAll("workflows/".concat(this.workflowid,"/activities/").concat(t,"/details")).then(function(t){e.activityDetails=t}).catch(function(t){return console.log(t)})},updateDescription:function(){var t={description:this.activityDetails.description,type:"USER_TASK"};c.updateOne("workflows/".concat(this.workflowid,"/activities/").concat(this.activityid),t).then(function(t){console.log(t)}).catch(function(t){return console.log(t)})},commentsUpdated:function(){console.log("comments Updated")},hyperlinksUpdated:function(){var t=this;c.getAll("workflows/".concat(this.workflowid,"/activities/").concat(this.activityid,"/hyperlinks")).then(function(e){t.activityDetails.hyperlinks=e}).catch(function(t){return console.log(t)})},attachmentsUpdated:function(){var t=this;c.getAll("workflows/".concat(this.workflowid,"/activities/").concat(this.activityid,"/attachments")).then(function(e){t.activityDetails.attachments=e}).catch(function(t){return console.log(t)})}}},Ue=function(){var t=this,e=this,i=e.$createElement,n=e._self._c||i;return n("div",{staticClass:"activityDetails",on:{click:function(t){e.changeActivity(null)}}},[e.prevActivityId?n("button",{on:{click:function(t){t.stopPropagation(),e.changeActivity(e.prevActivityId)}}},[e._v("Previous Activity")]):e._e(),e._v(" "),n("div",{staticClass:"activityModal",on:{click:function(t){t.stopPropagation()}}},[e.activityDetails?n("div",{staticClass:"activityContent"},[n("h3",[e._v(e._s(e.activityDetails.name))]),e._v(" "),n("Editable",{attrs:{content:e.activityDetails.description,placeholder:"Description",singleline:!0},on:{update:function(t){e.activityDetails.description=t},doneEditing:e.updateDescription}}),e._v(" "),n("h4",[e._v("Status: "+e._s(e.activityDetails.state))]),e._v(" "),n("p",[e._v("Created By: "+e._s(e.activityDetails.metadata.userMetadata.modifiedBy.fullName))]),e._v(" "),n("ActivityUsers",{attrs:{users:e.activityDetails.assignments}}),e._v(" "),n("Checklists",{attrs:{checklists:e.activityDetails.checklists,apiURL:"workflows/"+e.workflowid+"/activities/"+e.activityid+"/checklists"}}),e._v(" "),n("Hyperlinks",{attrs:{hyperlinks:e.activityDetails.hyperlinks,apiURL:"workflows/"+e.workflowid+"/activities/"+e.activityid+"/hyperlinks"},on:{hyperlinksUpdated:e.hyperlinksUpdated}}),e._v(" "),n("Attachments",{attrs:{attachments:e.activityDetails.attachments,apiURL:"workflows/"+e.workflowid+"/activities/"+e.activityid+"/attachments"},on:{hyperlinksUpdated:e.attachmentsUpdated}}),e._v(" "),n("Comments",{attrs:{comments:e.activityDetails.comments,apiURL:"workflows/"+e.workflowid+"/activities/"+e.activityid+"/comments"},on:{commentsUpdated:e.commentsUpdated}}),e._v(" "),n("div",[n("button",{on:{click:function(){return t.$root.$emit("createChecklist")}}},[e._v("Add a Checklist")]),e._v(" "),n("button",{on:{click:function(){return t.$root.$emit("startCreateComment")}}},[e._v("Comment")]),e._v(" "),n("button",{on:{click:function(){return t.$root.$emit("startCreateHyperlink")}}},[e._v("Add a Link")])])],1):n("div",[n("h3",[e._v("Loading "+e._s(e.activityid))])])]),e._v(" "),e.nextActivityId?n("button",{on:{click:function(t){t.stopPropagation(),e.changeActivity(e.nextActivityId)}}},[e._v("Next Activity")]):e._e()])},We=[];function Ee(t){i("b0Q4")}var xe=!1,Le=Ee,Ie=null,$e=null,He=Object(d["a"])(be,Ue,We,xe,Le,Ie,$e),De=He.exports,Ne={name:"Users",props:["users","placeholders"],components:{User:oe},data:function(){return{}},methods:{}},Oe=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.users.length>0?i("div",{staticClass:"activityContent--section users"},[i("div",{staticClass:"users--subscribed"},[i("h5",[t._v("Participating Users")]),t._v(" "),t._l(t.users,function(t){return i("div",{key:t.id,staticClass:"users--user"},[i("User",{attrs:{user:t}})],1)})],2),t._v(" "),t.placeholders&&t.placeholders.length>0?i("div",{staticClass:"users--subscribed"},[i("h5",[t._v("Placeholders")]),t._v(" "),t._l(t.placeholders,function(e){return i("div",{key:e.id,staticClass:"users--user"},[t._v("\n        "+t._s(e.name)+"\n      ")])})],2):t._e()]):t._e()])},Re=[];function Pe(t){i("BigR")}var Se=!1,Me=Pe,je="data-v-6dfbb078",Be=null,Ye=Object(d["a"])(Ne,Oe,Re,Se,Me,je,Be),Fe=Ye.exports,Xe={name:"WorkflowDetails",props:["activeWorkflow"],components:{Comments:V,Hyperlinks:rt,Attachments:wt,WorkflowUsers:Fe},data:function(){return{activeTab:null,workflowComments:null,workflowHyperlinks:null,workflowAttachments:null,workflowUsers:null,workflowPlaceholders:null}},created:function(){this.loadWorkflowUsers()},computed:{allUsersCount:function(){return this.workflowPlaceholders&&this.workflowUsers?this.workflowPlaceholders.length+this.workflowUsers.length:this.workflowPlaceholders?this.workflowPlaceholders.length:this.workflowUsers?this.workflowUsers.length:0}},methods:{toggleWorkflowDetails:function(){this.activeTab="DETAILS"===this.activeTab?null:"DETAILS"},toggleWorkflowUsers:function(){this.activeTab="USERS"===this.activeTab?null:"USERS","USERS"===this.activeTab&&this.loadWorkflowUsers()},loadWorkflowUsers:function(){var t=this,e=c.getAll("workflows/".concat(this.activeWorkflow.id,"/users")),i=c.getAll("workflows/".concat(this.activeWorkflow.id,"/placeholders"));Promise.all([e,i]).then(function(e){t.workflowUsers=e[0],t.workflowPlaceholders=e[1]}).catch(function(t){return console.log(t)})},toggleWorkflowComments:function(){this.activeTab="COMMENTS"===this.activeTab?null:"COMMENTS","COMMENTS"===this.activeTab&&this.loadWorkflowUsers()},loadWorkflowComments:function(){var t=this;c.getAll("workflows/".concat(this.activeWorkflow.id,"/comments")).then(function(e){t.workflowComments=e}).catch(function(t){return console.log(t)})},toggleWorkflowHyperlinks:function(){this.activeTab="HYPERLINKS"===this.activeTab?null:"HYPERLINKS","HYPERLINKS"===this.activeTab&&this.loadWorkflowUsers()},loadWorkflowHyperlinks:function(){var t=this;c.getAll("workflows/".concat(this.activeWorkflow.id,"/hyperlinks")).then(function(e){t.workflowHyperlinks=e}).catch(function(t){return console.log(t)})},toggleWorkflowAttachments:function(){this.activeTab="ATTACHMENTS"===this.activeTab?null:"ATTACHMENTS","ATTACHMENTS"===this.activeTab&&this.loadWorkflowUsers()},loadWorkflowAttachments:function(){var t=this;c.getAll("workflows/".concat(this.activeWorkflow.id,"/attachments")).then(function(e){t.workflowAttachments=e}).catch(function(t){return console.log(t)})}}},Ke=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"workflow--details"},[i("h5",{staticClass:"workflow--title",on:{click:t.toggleWorkflowDetails}},[t._v("\n        "+t._s(t.activeWorkflow.process.name)+" - "+t._s(t.activeWorkflow.process.state)+" - "+t._s(t.activeWorkflow.stats.process.activities.count)+" Tasks \n    ")]),t._v(" "),i("div",{staticClass:"workflow--actions"},[this.workflowPlaceholders||this.workflowUsers?i("button",{on:{click:t.toggleWorkflowUsers}},[t._v(t._s(t.allUsersCount)+" Users")]):t._e(),t._v(" "),t.activeWorkflow.stats.comments.count>0?i("button",{on:{click:t.toggleWorkflowComments}},[t._v("- "+t._s(t.activeWorkflow.stats.comments.count)+" Comments")]):t._e(),t._v(" "),t.activeWorkflow.stats.process.hyperlinks.count>0?i("button",{on:{click:t.toggleWorkflowHyperlinks}},[t._v("- "+t._s(t.activeWorkflow.stats.process.hyperlinks.count)+" Links")]):t._e(),t._v(" "),t.activeWorkflow.stats.process.attachments.count>0?i("button",{on:{click:t.toggleWorkflowAttachments}},[t._v("- "+t._s(t.activeWorkflow.stats.process.attachments.count)+" Attachments")]):t._e()]),t._v(" "),"DETAILS"===t.activeTab?i("div",{staticClass:"workflow--details-contents"},[i("div",[t._v("\n        Created: "+t._s(t.activeWorkflow.metadata.dateMetadata.createdOn)+"\n        "),i("br"),t._v("Last Modified: "+t._s(t.activeWorkflow.metadata.dateMetadata.modifiedOn)+" by "+t._s(t.activeWorkflow.metadata.userMetadata.modifiedBy.fullName)+"\n    ")]),t._v(" "),t.activeWorkflow.process.description?i("div",[t._v("\n        Description: "+t._s(t.activeWorkflow.process.description)+"\n    ")]):t._e(),t._v(" "),i("div",[t._v("\n        "+t._s(t.activeWorkflow.stats.process.activities.count)+" Tasks\n        "),i("ul",t._l(t.activeWorkflow.stats.process.activities.states,function(e,n){return i("li",{key:n},[t._v(t._s(n)+":"+t._s(e))])}))])]):t._e(),t._v(" "),"USERS"===t.activeTab?i("div",{staticClass:"workflow--details-contents"},[t.workflowUsers?i("WorkflowUsers",{attrs:{placeholders:t.workflowPlaceholders,users:t.workflowUsers,apiURL:"workflows/"+t.activeWorkflow.id+"/comments"},on:{commentsUpdated:t.loadWorkflowComments}}):i("div",[t._v("Loading Users...")])],1):t._e(),t._v(" "),"COMMENTS"===t.activeTab?i("div",{staticClass:"workflow--details-contents"},[t.workflowComments?i("Comments",{attrs:{comments:t.workflowComments,apiURL:"workflows/"+t.activeWorkflow.id+"/comments"},on:{commentsUpdated:t.loadWorkflowComments}}):i("div",[t._v("Loading Comments...")])],1):t._e(),t._v(" "),"HYPERLINKS"===t.activeTab?i("div",{staticClass:"workflow--details-contents"},[t.workflowHyperlinks?i("Hyperlinks",{attrs:{hyperlinks:t.workflowHyperlinks,apiURL:"workflows/"+t.activeWorkflow.id+"/hyperlinks"},on:{hyperlinksUpdated:t.loadWorkflowHyperlinks}}):i("div",[t._v("Loading Links...")])],1):t._e(),t._v(" "),"ATTACHMENTS"===t.activeTab?i("div",{staticClass:"workflow--details-contents"},[t.workflowAttachments?i("Attachments",{attrs:{attachments:t.workflowAttachments,apiURL:"workflows/"+t.activeWorkflow.id+"/attachments"},on:{attachmentsUpdated:t.loadWorkflowAttachments}}):i("div",[t._v("Loading Attachments...")])],1):t._e()])},Qe=[];function ze(t){i("/kz1")}var qe=!1,Je=ze,Ge="data-v-7724d650",Ve=null,Ze=Object(d["a"])(Xe,Ke,Qe,qe,Je,Ge,Ve),ti=Ze.exports,ei={name:"ExpandingCreateControl",props:["toggleButtonText","inputPlaceholder","createButtonText"],data:function(){return{creatingTimeout:null,inputContent:"",showCreateControl:!1}},methods:{checkHideInput:function(t){0===t.target.value.length?this.countdownToHideInput():clearTimeout(this.creatingTimeout)},startCreate:function(){var t=this;this.showCreateControl=!0,this.$nextTick(function(){t.$refs.inputContent.focus()}),this.countdownToHideInput()},countdownToHideInput:function(){var t=this;this.creatingTimeout=window.setTimeout(function(){return t.showCreateControl=!1},1e4)},resetTaskCreate:function(){clearTimeout(this.creatingTimeout),this.inputContent="",this.countdownToHideInput(),this.$refs.inputContent.focus()},triggerCreate:function(){this.$emit("createTriggered",this.inputContent),this.resetTaskCreate()}}},ii=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.showCreateControl?t._e():i("button",{on:{click:t.startCreate}},[t._v(t._s(t.toggleButtonText))]),t._v(" "),t.showCreateControl?i("span",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.inputContent,expression:"inputContent"}],ref:"inputContent",attrs:{type:"text",placeholder:t.inputPlaceholder},domProps:{value:t.inputContent},on:{input:[function(e){e.target.composing||(t.inputContent=e.target.value)},t.checkHideInput],keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.triggerCreate(e)}}}),t._v(" "),i("button",{on:{click:t.triggerCreate}},[t._v(t._s(t.createButtonText))])]):t._e()])},ni=[];function oi(t){i("ukTx")}var si=!1,ai=oi,ci="data-v-9e794476",ri=null,li=Object(d["a"])(ei,ii,ni,si,ai,ci,ri),ui=li.exports,di={name:"Workflow",props:["apiURL"],components:{ActivityTile:$,ActivityDetails:De,WorkflowDetails:ti,ExpandingCreateControl:ui,draggable:y.a},data:function(){return{activeWorkflow:null,workflowActivities:null,activityid:null,nextActivity:null,prevActivity:null}},mounted:function(){this.$root.$on("selectedWorkflowUpdated",this.setActiveWorkflow)},beforeDestroy:function(){this.$root.$off("selectedWorkflowUpdated",this.setActiveWorkflow)},methods:{setActiveWorkflow:function(t){this.activeWorkflow=t,this.loadWorkflowActivities()},loadWorkflowActivities:function(){var t=this;this.activeWorkflow.id&&(this.workflowActivities=null,this.workflowComments=null,c.getAll("workflows/".concat(this.activeWorkflow.id,"/activities/diagram")).then(function(e){t.workflowActivities=_.a.sortBy(e,function(t){return t.diagramNode.position.positionY})}).catch(function(t){return console.log(t)}))},createActivity:function(t){var e=this;if(0!==t.length){var i=_.a.last(this.workflowActivities)?_.a.last(this.workflowActivities).diagramNode.position.positionY+100:5e3,n={type:"USER_TASK",positionX:0,positionY:i,name:t};c.postOne("workflows/".concat(this.activeWorkflow.id,"/activities/"),n).then(function(t){console.log("success",t),e.workflowActivities.push(t)}).catch(function(t){return console.log(t)})}},dragEnd:function(t){t.preventDefault();var e=t.newIndex,i=e>0?this.workflowActivities[e-1].diagramNode.position.positionY:null,n=e<this.workflowActivities.length-1?this.workflowActivities[e+1].diagramNode.position.positionY:null,o=0;if(i&&n)o=i+Math.floor((n-i)/2);else if(i)o=i+100;else{if(!n)return;o=n-100}var s={activityId:this.workflowActivities[e].id,positionX:0,positionY:o};c.postOne("workflows/".concat(this.activeWorkflow.id,"/activities/").concat(this.workflowActivities[e].id,"/position"),s).then(function(t){return console.log("success",t)}).catch(function(t){return console.log(t)})},loadActivity:function(t){this.activityid=t;var e=_.a.findIndex(this.workflowActivities,function(e){return e.id===t});this.nextActivity=this.workflowActivities[e+1]?this.workflowActivities[e+1].id:null,this.prevActivity=this.workflowActivities[e-1]?this.workflowActivities[e-1].id:null},removeActivity:function(t){console.log("removed"+t),_.a.remove(this.workflowActivities,{id:t})}}},vi=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{display:"contents"}},[i("div",{staticClass:"workflow"},[t.activeWorkflow?i("div",{staticClass:"workflow-details"},[i("WorkflowDetails",{attrs:{activeWorkflow:t.activeWorkflow}})],1):t._e(),t._v(" "),t.activeWorkflow&&!t.workflowActivities?i("div",[t._v("Loading Tasks...")]):t._e(),t._v(" "),i("div",{staticClass:"activities"},[t.workflowActivities&&t.workflowActivities.length>0?i("div",[i("draggable",{attrs:{options:{delay:100,ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",forceFallback:!0}},on:{end:t.dragEnd},model:{value:t.workflowActivities,callback:function(e){t.workflowActivities=e},expression:"workflowActivities"}},t._l(t.workflowActivities,function(e){return i("ActivityTile",{key:e.id,attrs:{apiURL:"/workflows/"+t.activeWorkflow.id+"/activities/"+e.id,activity:e},on:{selectedActivityUpdated:t.loadActivity,activityDeleted:t.removeActivity}})}))],1):t._e(),t._v(" "),i("ExpandingCreateControl",{attrs:{toggleButtonText:"Create Task",inputPlaceholder:"Task Title",createButtonText:"Add Task"},on:{createTriggered:t.createActivity}})],1)]),t._v(" "),t.activityid?i("div",{staticClass:"activity-overlay"},[i("ActivityDetails",{attrs:{activityid:t.activityid,workflowid:t.activeWorkflow.id,nextActivityId:t.nextActivity,prevActivityId:t.prevActivity},on:{selectedActivityUpdated:t.loadActivity}})],1):t._e()])},fi=[];function hi(t){i("RyKw")}var mi=!1,pi=hi,ki="data-v-02a18b9e",wi=null,gi=Object(d["a"])(di,vi,fi,mi,pi,ki,wi),_i=gi.exports,Ci={name:"WorkflowTile",props:["workflow","activeWorkflowID"],data:function(){return{}},methods:{}},yi=function(){var t=this,e=this,i=e.$createElement,n=e._self._c||i;return n("div",{staticClass:"workflow-tile",class:[e.activeWorkflowID===e.workflow.id?"s-active":""],on:{click:function(){return t.$root.$emit("selectedWorkflowUpdated",e.workflow)}}},[n("h3",[e._v(e._s(e.workflow.process.name))]),e._v(" "),n("div",[e._v("State: "+e._s(e.workflow.process.state))]),e._v(" "),"ACTIVE"===e.workflow.process.state?n("div",[e._v("Progress: "+e._s(e.workflow.stats.process.activities.states.COMPLETE||0)+" / "+e._s(e.workflow.stats.process.activities.count)+" Tasks Complete")]):e._e()])},Ti=[];function Ai(t){i("6QQJ")}var bi=!1,Ui=Ai,Wi="data-v-cbf5158e",Ei=null,xi=Object(d["a"])(Ci,yi,Ti,bi,Ui,Wi,Ei),Li=xi.exports,Ii={name:"Workflows",props:["apiURL"],components:{WorkflowTile:Li,ExpandingCreateControl:ui},data:function(){return{workflows:null,activeWorkflowId:null}},mounted:function(){this.$root.$on("selectedWorkflowUpdated",this.setWorkflowId),this.$root.$on("loggedIn",this.getFlows)},beforeDestroy:function(){this.$root.$off("selectedWorkflowUpdated",this.setWorkflowId),this.$root.$off("loggedIn",this.getFlows)},methods:{getFlows:function(){var t=this;c.getAll("workflows").then(function(e){t.workflows=e}).catch(function(t){return console.log(t)})},createWorkflow:function(t){var e=this,i={diagramType:"LISTCHART",executionOrder:"POSITION",name:t,state:"DESIGNING"};c.postOne("workflows",i).then(function(t){console.log(t),e.workflows.push(t),e.$emit("workflowsUpdated",t)}).catch(function(t){return console.log(t)})},setWorkflowId:function(t){this.activeWorkflowId=t.id}}},$i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"sidebar"},[t.workflows&&t.workflows.length>0?i("div",[i("h5",[t._v("Workflows")]),t._v(" "),i("hr"),t._v(" "),t._l(t.workflows,function(e){return i("WorkflowTile",{key:e.id,attrs:{workflow:e,activeWorkflowID:t.activeWorkflowId}})})],2):t._e(),t._v(" "),i("ExpandingCreateControl",{attrs:{toggleButtonText:"Create Workflow",inputPlaceholder:"Workflow Name",createButtonText:"Add Workflow"},on:{createTriggered:t.createWorkflow}})],1)},Hi=[];function Di(t){i("6C9A")}var Ni=!1,Oi=Di,Ri="data-v-a33cafe6",Pi=null,Si=Object(d["a"])(Ii,$i,Hi,Ni,Oi,Ri,Pi),Mi=Si.exports,ji={name:"HelloWorld",components:{Login:w,Workflow:_i,Workflows:Mi},data:function(){return{user:null,workflows:null,workflowid:null}},mounted:function(){this.$root.$on("loggedIn",this.setUser)},beforeDestroy:function(){this.$root.$off("loggedIn",this.setUser)},methods:{setUser:function(t){this.user=t}}},Bi=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("div",{staticClass:"logo"},[t._v("Day one yo")]),t._v(" "),t.user?i("div",{staticClass:"logged-in"},[t._v("\n    Welcome back "+t._s(t.user.firstName)+" "+t._s(t.user.lastName)+"!\n  ")]):i("div",{staticClass:"login"},[i("Login")],1),t._v(" "),i("Workflows"),t._v(" "),i("Workflow")],1)},Yi=[];function Fi(t){i("UELV")}var Xi=!1,Ki=Fi,Qi="data-v-ef4fb776",zi=null,qi=Object(d["a"])(ji,Bi,Yi,Xi,Ki,Qi,zi),Ji=qi.exports,Gi={name:"app",components:{HelloWorld:Ji}},Vi=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("HelloWorld")],1)},Zi=[];function tn(t){i("BpwO")}var en=!1,nn=tn,on=null,sn=null,an=Object(d["a"])(Gi,Vi,Zi,en,nn,on,sn),cn=an.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(cn)}}).$mount("#app")},Q28W:function(t,e){},RyKw:function(t,e){},SqXX:function(t,e){},UELV:function(t,e){},YblY:function(t,e){},b0Q4:function(t,e){},lNoE:function(t,e){},mHRj:function(t,e){},tyYU:function(t,e){},ukTx:function(t,e){}},[0]);
//# sourceMappingURL=app.05f0511c.js.map