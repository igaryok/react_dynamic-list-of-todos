(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,n){e.exports=n(20)},17:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2),s=n.n(o),c=n(8),l=n(3),i=n(9),u=n(4),m=n(5),d=n(10),p=n(6),b=n(11),f=(n(17),n(7)),E=n.n(f),g=(n(18),n(19),function(e){var t=e.name,n=e.email;return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:"li-user"},"User")," : ".concat(t," (").concat(n,")"))});var h=function(e){var t=e.todo,n=t.completed,a=t.title,o=t.user,s=E()("list-group-item",{disabled:n});return r.a.createElement("li",{className:s},r.a.createElement("span",{className:"li-task"},"Task:\xa0"),a,"\xa0|\xa0",r.a.createElement(g,o))},y=function(e){return r.a.createElement("ul",{className:"list-group"},e.todos.map(function(e){return r.a.createElement(h,{todo:e,key:e.id})}))};function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function j(e){return fetch(e).then(function(e){return e.json()})}var v=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={todos:[],users:[],isLoading:!1,hasError:!1},n.loadTodos=function(){n.setState({isLoading:!0,hasError:!1});var e=j("https://jsonplaceholder.typicode.com/todos"),t=j("https://jsonplaceholder.typicode.com/users");Promise.all([e,t]).then(function(e){var t=Object(i.a)(e,2),a=t[0],r=t[1];n.setState({todos:a.map(function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(n,!0).forEach(function(t){Object(l.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},e,{user:r.find(function(t){return t.id===e.userId})})}),users:Object(c.a)(r),isLoading:!1})}).catch(function(){return n.setState({hasError:!0,isLoading:!1})})},n}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state,t=e.todos,n=e.users,a=e.isLoading,o=e.hasError;return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Static list of todos"),0===t.length?r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,r.a.createElement("strong",null,"No yet todos")),o?r.a.createElement("p",null,r.a.createElement("span",{className:"badge badge-warning"},"Error occurred!")):null,a?r.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:this.loadTodos,disabled:!0},"Loading..."):r.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:this.loadTodos},o?"Try again":"Load todos")):null,a?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"spinner-border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading..."))):null,r.a.createElement("p",null,r.a.createElement("span",null,"Todos: "),t.length),r.a.createElement(y,{todos:t}),r.a.createElement("p",null,r.a.createElement("span",null,"Users: "),n.length))}}]),t}(a.Component);s.a.render(r.a.createElement(v,null),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.532b14f2.chunk.js.map