(this.webpackJsonpboxofficelist=this.webpackJsonpboxofficelist||[]).push([[0],{21:function(e,t,n){e.exports=n(48)},26:function(e,t,n){},27:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(17),l=n.n(o),i=(n(26),n(2)),r=n(3),s=n(5),u=n(4),m=n(6),d=(n(27),n(7)),f=n.n(d),h=n(18),p=n(19),v=n.n(p),b=n(20),E=n.n(b),y="343e4f91240236454d41bcd82ac101cd";function O(e){var t=e.title,n=e.Open,a=e.rank,o=e.people,l=e.point;return c.a.createElement("div",{className:"movie"},c.a.createElement("div",{className:"data"},c.a.createElement("h3",null,"\uc21c \uc704 : ",a),c.a.createElement("h3",null,"\uc601\ud654\uc81c\ubaa9 : ",t),c.a.createElement("h3",null,"\uac1c\ubd09\uc77c\uc790 : ",n),c.a.createElement("h4",null,"\uc0c1\uc601\ud69f\uc218 : ",l),c.a.createElement("h4",null,"\ub204\uc801\uad00\uac1d : ",o,"\uba85")))}n(47);var g=E()().subtract(1,"d").format("YYYYMMDD");console.log(g);var k="http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/",w=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={daily:"",list:[],isLoading:!0},n.getDaily=Object(h.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(k,"searchDailyBoxOfficeList.json?key=").concat(y,"&targetDt=").concat(g),e.next=3,v.a.get(t).then((function(e){return e.data})).then((function(e){n.setState({daily:e.boxOfficeResult,list:e.boxOfficeResult.dailyBoxOfficeList,isLoading:!1}),console.log(n.state.daily),console.log(n.state.list)}));case 3:case"end":return e.stop()}}),e)}))),n}return Object(m.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.getDaily()}},{key:"render",value:function(){var e=this.state,t=e.daily,n=e.list,a=e.isLoading;return c.a.createElement("section",{className:"container"},a?c.a.createElement("div",{className:"loader"},c.a.createElement("span",{className:"loader_text"},c.a.createElement("h2",null,"Data Loading"))):c.a.createElement("div",null,c.a.createElement("div",{className:"type"},c.a.createElement("h3",null,t.boxofficeType)),c.a.createElement("div",{className:"movies"},n.map((function(e){return c.a.createElement(O,{key:e.index,title:e.movieNm,Open:e.openDt,rank:e.rank,people:e.audiAcc,point:e.showCnt})})))))}}]),t}(c.a.Component),x=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("header",null,c.a.createElement("h1",null,"Hello World")),c.a.createElement("section",null,c.a.createElement(w,null)))}}]),t}(c.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[21,1,2]]]);
//# sourceMappingURL=main.7272eafb.chunk.js.map