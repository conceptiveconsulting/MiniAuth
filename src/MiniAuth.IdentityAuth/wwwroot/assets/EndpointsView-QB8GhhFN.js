import{s as c}from"./service-m5cBW5EV.js";import{u as p,r as a,o as _,a as s,c as n,b as t,t as e,F as h,d as m}from"./index-wtJzGEvf.js";const b={class:"scrollable-container"},f={class:"table table-hover"},g={class:"table-dark"},E={__name:"EndpointsView",setup(v){p(),a("EndPoints");const l=a([]),i=a([]),u=async()=>{l.value=await c.get("api/getAllEndpoints"),i.value=await c.get("api/getRoles")};return _(async()=>{await u()}),(o,y)=>(s(),n("div",b,[t("table",f,[t("thead",null,[t("tr",g,[t("th",null,e(o.$t("Name")),1),t("th",null,e(o.$t("Route")),1)])]),t("tbody",null,[(s(!0),n(h,null,m(l.value,(r,d)=>(s(),n("tr",{key:d},[t("td",null,e(r.Name),1),t("td",null,e(r.Route),1)]))),128))])])]))}};export{E as default};