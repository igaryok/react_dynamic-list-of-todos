(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,n){e.exports=n(20)},17:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(2),c=n.n(o),s=n(8),l=n(3),i=n(9),u=n(4),m=n(5),p=n(10),d=n(6),f=n(11),E=(n(17),n(7)),b=n.n(E),g=(n(18),n(19),function(e){var t=e.name,n=e.email;return a.a.createElement(a.a.Fragment,null,a.a.createElement("span",{className:"li-user"},"User")," : ".concat(t," (").concat(n,")"))});var h=function(e){var t=e.todo,n=t.completed,r=t.title,o=t.user,c=b()("list-group-item",{disabled:n});return a.a.createElement("li",{className:c},a.a.createElement("span",{className:"li-task"},"Task:\xa0"),r,"\xa0|\xa0",a.a.createElement(g,o))},y=function(e){return a.a.createElement("ul",{className:"list-group"},e.todos.map(function(e){return a.a.createElement(h,{todo:e,key:e.id})}))};function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function j(e){return fetch(e).then(function(e){return e.json()})}var v=function(e){function t(){var e,n;Object(u.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(a)))).state={todos:[],users:[],isLoading:!1,hasError:!1},n.loadTodos=function(){n.setState({isLoading:!0,hasError:!1});var e=j("https://jsonplaceholder.typicode.com/todos"),t=j("https://jsonplaceholder.typicode.com/users");Promise.all([e,t]).then(function(e){var t=Object(i.a)(e,2),r=t[0],a=t[1];n.setState({todos:r.map(function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(n,!0).forEach(function(t){Object(l.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},e,{user:a.find(function(t){return t.id===e.userId})})}),users:Object(s.a)(a),isLoading:!1})}).catch(function(){return n.setState({hasError:!0,isLoading:!1})})},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state,t=e.todos,n=e.users,r=e.isLoading,o=e.hasError;return a.a.createElement("div",{className:"App"},a.a.createElement("h1",null,"Static list of todos"),0===t.length?a.a.createElement(a.a.Fragment,null,a.a.createElement("p",null,a.a.createElement("strong",null,"No yet todos")),o?a.a.createElement("p",null,a.a.createElement("span",{className:"badge badge-warning"},"Error occurred!")):null,a.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:this.loadTodos},o?"Try again":"Load todos")):null,r?a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"spinner-border",role:"status"},a.a.createElement("span",{className:"sr-only"},"Loading..."))):null,a.a.createElement("p",null,a.a.createElement("span",null,"Todos: "),t.length),a.a.createElement(y,{todos:t}),a.a.createElement("p",null,a.a.createElement("span",null,"Users: "),n.length))}}]),t}(r.Component);c.a.render(a.a.createElement(v,null),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.cdcc888a.chunk.js.map