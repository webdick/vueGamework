import{h as f,o as l,e as o,f as t,n as i,i as v,j as n,t as r,k as m,F as b}from"./vendor.51c88ca2.js";const d=t("p",null,"\u5BF9\u8BDD",-1),p={class:"chat-main flex flex-column justify-end",onselectstart:"return false"},j={class:"flex justify-between align-end"},_={class:"role"},y=["src"],x={key:1,class:"chat-box role-a-title"},A={class:"role"},k=["src"],N={key:1,class:"chat-box role-b-title"},w={class:"flex justify-end"},S={setup(C){const a=f(0),u={showLast:!1},e=[{avatar:"role/0.png",objAvatar:"",highlight:"a",name:"\u4F60",ojbName:"",msg:"\u8FD9\u662F\u4E2A\u4EC0\u4E48\u4E1C\u897F...",animate:"fadeIn",objAnimate:""},{avatar:"role/0.png",objAvatar:"role/2.png",highlight:"b",name:"\u4F60",ojbName:"\u8001\u677F\u5A18",msg:"\u554A\u5566...  \u8FD9\u4F4D\u5BA2\u4EBA,\u8FD9\u91CC\u662F\u5BF9\u8BDD\u7EC4\u4EF6\u8C03\u8BD5\u9875\u9762\u54E6",animate:"",objAnimate:"fadeIn"},{avatar:"role/0.png",objAvatar:"role/2.png",highlight:"b",name:"\u4F60",ojbName:"\u8001\u677F\u5A18",msg:"\u5728\u8FD9\u91CC\u5BA2\u4EBA\u60A8\u53EF\u4EE5\u968F\u610F\u8C03\u8BD5\u81EA\u5DF1\u559C\u6B22\u7684\u5267\u672C",animate:"",objAnimate:""},{avatar:"role/0.png",objAvatar:"role/2.png",highlight:"a",name:"\u4F60",ojbName:"\u8001\u677F\u5A18",msg:"\u5594\u5594!~\u539F\u6765\u5982\u6B64,\u6211\u53EF\u4EE5\u968F\u610F\u7F16\u8F91\u662F\u5417",animate:"",objAnimate:""},{avatar:"role/0.png",objAvatar:"role/2.png",highlight:"b",name:"",ojbName:"\u8001\u677F\u5A18",msg:"\u5F53\u7136~\u5BA2\u4EBA\u60A8\u968F\u610F",animate:"",objAnimate:""},{avatar:"role/0.png",objAvatar:"role/2.png",highlight:"all",name:"",ojbName:"",msg:"\u53EF\u4EE5\u5F00\u59CB\u7F16\u8F91\u5267\u672C\u4E86",animate:"fadeOutLeft",objAnimate:"fadeOutRight"}],h=()=>{a.value<e.length-1&&(a.value+=1)},c=()=>{a.value>0&&(a.value-=1)};return(L,s)=>(l(),o(b,null,[d,t("div",p,[t("div",j,[t("div",_,[e[a.value].avatar?(l(),o("img",{key:0,src:e[a.value].avatar,alt:"",style:i([{height:"200px"},e[a.value].highlight=="all"||e[a.value].highlight=="a"?"":"opacity:0.7"]),class:v(["animated",e[a.value].animate])},null,14,y)):n("",!0),e[a.value].name?(l(),o("div",x,[t("span",{style:i(e[a.value].highlight=="all"||e[a.value].highlight=="a"?"color:#fff":"color:#666")},r(e[a.value].name),5)])):n("",!0)]),t("div",A,[e[a.value].objAvatar?(l(),o("img",{key:0,src:e[a.value].objAvatar,alt:"",style:i([{height:"200px"},e[a.value].highlight=="all"||e[a.value].highlight=="b"?"":"opacity:0.7"]),class:v(["animated",e[a.value].objAnimate])},null,14,k)):n("",!0),e[a.value].ojbName?(l(),o("div",N,[t("span",{style:i(e[a.value].highlight=="all"||e[a.value].highlight=="b"?"color:#fff":"color:#666")},r(e[a.value].ojbName),5)])):n("",!0)])]),t("div",{class:"chat-box flex flex-column justify-between",onClick:s[2]||(s[2]=g=>h()),style:{cursor:"pointer",height:"80px",color:"#fff"}},[t("p",null,r(e[a.value].msg),1),t("div",w,[a.value!=0&&u.showLast?(l(),o("span",{key:0,onClick:s[0]||(s[0]=m(g=>c(),["stop"]))},"LAST\xA0")):n("",!0),a.value<e.length-1?(l(),o("span",{key:1,onClick:s[1]||(s[1]=m(g=>h(),["stop"]))},"NEXT\xA0>")):n("",!0)])])])],64))}};export{S as default};