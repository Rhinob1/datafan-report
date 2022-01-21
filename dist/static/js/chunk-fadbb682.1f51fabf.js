/*! new version */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fadbb682"],{"460f":function(e,t,a){},"568b":function(e,t,a){"use strict";a("460f")},9594:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"calculate-event flex-box--column"},[a("PageBreadcrumb",{attrs:{"title-list":e.titleList}},[a("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:e.onCreate}},[e._v(" 新增测算事件 ")])],1),a("div",{staticClass:"calculate-event-search"},[a("a-input",{staticClass:"search__input",attrs:{"allow-clear":"",placeholder:"请输入事件名称"},model:{value:e.eventName,callback:function(t){e.eventName=t},expression:"eventName"}}),a("a-button",{attrs:{type:"primary"},on:{click:function(t){return e.onSearch(1)}}},[e._v("查询")])],1),a("div",{staticClass:"calculate-event-table"},[a("SenseTable",e._b({ref:"senseTable",on:{"page-change":e.changePage},scopedSlots:e._u([{key:"nameAction",fn:function(t){var n=t.row;return[a("a-button",{attrs:{type:"link"},on:{click:function(t){return e.onDetail(n)}}},[e._v(e._s(n.eventName))])]}},{key:"action",fn:function(t){var n=t.row;return[a("a-tooltip",{attrs:{title:"查看结果"}},[a("a-button",{attrs:{type:"link"},on:{click:function(t){return e.onResult(n)}}},[a("a-icon",{staticClass:"icon-btn",attrs:{type:"file-search"}})],1)],1),a("a-tooltip",{attrs:{title:"编辑"}},[a("a-button",{attrs:{type:"link"},on:{click:function(t){return e.onEdit(n)}}},[a("a-icon",{staticClass:"icon-btn",attrs:{type:"form"}})],1)],1),a("a-tooltip",{attrs:{title:"删除"}},[a("a-button",{attrs:{type:"link"},on:{click:function(t){return e.onDelete(n)}}},[a("a-icon",{staticClass:"icon-btn",attrs:{type:"delete"}})],1)],1)]}}])},"SenseTable",e.tableOptions,!1))],1),a("CreateCalculateEvent",{on:{updateListInfo:e.initSearch},model:{value:e.isCreateModalShow,callback:function(t){e.isCreateModalShow=t},expression:"isCreateModalShow"}}),a("DeleteCreateCalculateEvent",{attrs:{message:e.deleteMessage},model:{value:e.isDeleteModalShow,callback:function(t){e.isDeleteModalShow=t},expression:"isDeleteModalShow"}})],1)},i=[],l=(a("d3b7"),a("bc42")),o=a("7bb4"),s=a("8dc4"),c={name:"CalculateEvent",components:{PageBreadcrumb:l["a"],CreateCalculateEvent:o["b"],DeleteCreateCalculateEvent:o["c"]},data:function(){return{titleList:[{name:"测算管理"},{name:"测算事件管理"}],eventName:"",tableOptions:{height:"auto",emptyRender:{size:"small"},pagerConfig:{pageSizes:[10,20,50,100],total:0,currentPage:1,pageSize:10},loading:!1,columns:[{title:"事件名称",field:"eventName",slots:{default:"nameAction"}},{title:"事件编号",field:"eventCode"},{title:"描述",field:"eventDesc"},{title:"创建人",field:"submitUserName"},{title:"创建时间",field:"createTime"},{title:"操作",field:"operation",align:"center",fixed:"right",slots:{default:"action"}}],data:[]},isCreateModalShow:!1,isDeleteModalShow:!1,deleteMessage:""}},mounted:function(){this.initSearch()},methods:{getParams:function(){var e=this.tableOptions.pagerConfig,t=e.pageSize,a=e.currentPage,n={eventName:this.eventName,pageSize:t,page:a};return n},initSearch:function(){var e=this,t=this.getParams();this.tableOptions.loading=!0,s["a"].getCalculateEventList(t).then((function(t){e.tableOptions.data=t.data.content.list,e.tableOptions.pagerConfig.total=t.data.content.total})).catch((function(){e.$message.warn("查询测算事件列表失败")})).finally((function(){e.tableOptions.loading=!1}))},onSearch:function(e){this.tableOptions.pagerConfig.currentPage=e,this.initSearch()},changePage:function(e){this.tableOptions.pagerConfig.currentPage=e.currentPage,this.tableOptions.pagerConfig.pageSize=e.pageSize,this.initSearch()},onCreate:function(){this.isCreateModalShow=!0},onDetail:function(e){var t=e.eventCode;this.$router.push({path:"/calculate/calculateEventDetail",query:{eventCode:t}})},onResult:function(e){var t=e.eventCode;this.$router.push({path:"/calculate/calculateEventResult",query:{eventCode:t}})},onEdit:function(e){var t=e.eventCode;this.$router.push({path:"/calculate/addCalculateEvent",query:{eventCode:t}})},onDelete:function(e){this.deleteMessage="确定删除".concat(e.eventName,"吗？"),this.isDeleteModalShow=!0}}},r=c,u=(a("568b"),a("2877")),d=Object(u["a"])(r,n,i,!1,null,"fc6c3b72",null);t["default"]=d.exports}}]);