(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},17:function(e,t,a){},19:function(e,t,a){},21:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(8),l=a.n(r),i=(a(15),a(6)),o=a(1),s=a(2),u=a(4),d=a(3),h=a(5),m=(a(17),a(19),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(c)))).minDate=(new Date).toISOString().slice(0,10),a.state={text:"",checked:!1,date:a.minDate},a.handleText=function(e){a.setState({text:e.target.value})},a.handleCheckbox=function(e){a.setState({checked:e.target.checked})},a.handleDate=function(e){a.setState({date:e.target.value})},a.handleClick=function(){var e=a.state,t=e.text,n=e.checked,c=e.date;a.props.add(t,c,n)&&a.setState({text:"",chacked:!1,date:a.minDate})},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=1*this.minDate.slice(0,4)+1;return e+="-12-31",c.a.createElement("div",{className:"form"},c.a.createElement("input",{type:"text",placeholder:"dodaj zadanie",value:this.state.text,onChange:this.handleText}),c.a.createElement("input",{type:"checkbox",checked:this.state.checked,onChange:this.handleCheckbox}),c.a.createElement("label",{htmlFor:"important"}," Priorytet ")," ",c.a.createElement("br",null),c.a.createElement("label",{htmlFor:"date"}," Do kiedy zrobi\u0107 "),c.a.createElement("input",{type:"date",value:this.state.date,min:this.minDate,max:e,onChange:this.handleDate})," ",c.a.createElement("br",null),c.a.createElement("button",{onClick:this.handleClick},"Dodaj"))}}]),t}(n.Component)),f=function(e){var t=e.task,a=t.text,n=t.date,r=t.id,l=t.active,i=t.important,o=t.finishDate;if(l)return c.a.createElement("div",null,c.a.createElement("p",null,c.a.createElement("strong",{style:i?{color:"red"}:null},a)," - do"," ",c.a.createElement("span",null,n," "),c.a.createElement("button",{onClick:function(){return e.change(r)}},"Zosta\u0142o zrobione"),c.a.createElement("button",{button:!0,onClick:function(){return e.delete(r)}}," ","X")));var s=new Date(o).toLocaleString();return c.a.createElement("div",null,c.a.createElement("p",null,c.a.createElement("strong",null,a)," ",c.a.createElement("em",null,"(zrobi\u0107 do ",n,")"),c.a.createElement("br",null),"potwierdzenie wykonania ",c.a.createElement("span",null,s," "),c.a.createElement("button",{button:!0,onClick:function(){return e.delete(r)}}," ","X")))},k=function(e){var t=e.tasks.filter(function(e){return e.active}),a=e.tasks.filter(function(e){return!e.active});a.sort(function(e,t){return t.finishDate-e.finishDate}),t.sort(function(e,t){return t.id-e.id});var n=t.map(function(t){return c.a.createElement(f,{key:t.id,task:t,delete:e.delete,change:e.change})}),r=a.map(function(t){return c.a.createElement(f,{key:t.id,task:t,delete:e.delete,change:e.change})});return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"active"},c.a.createElement("h1",null,"Zadania do zrobienia"),n.length>0?n:c.a.createElement("p",null,"brak zada\u0144 do wykonania")),c.a.createElement("hr",null),c.a.createElement("div",{className:"done"},c.a.createElement("h3",null,"Zadania zrobione (",c.a.createElement("em",null,a.length),")"),a.length>5&&c.a.createElement("span",{style:{fontSize:10}},"wy\u015bwietlonych jest jedynie 5 ostatnich zada\u0144"," "),r.slice(0,5)))},E=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(c)))).counter=0,a.state={tasks:[]},a.deleteTask=function(e){var t=Object(i.a)(a.state.tasks),n=t.findIndex(function(t){return t.id===e});t.splice(n,1),a.setState({tasks:t})},a.changeTaskStatus=function(e){var t=Object(i.a)(a.state.tasks);t.forEach(function(t){t.id===e&&(t.active=!1,t.finishDate=(new Date).getTime())}),a.setState({tasks:t})},a.addTask=function(e,t,n){var c={id:a.counter,text:e,date:t,important:n,active:!0,finishDate:null};return a.counter++,a.setState(function(e){return{tasks:[].concat(Object(i.a)(e.tasks),[c])}}),!0},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement("h1",null,"TODO APP"),c.a.createElement(m,{add:this.addTask}),c.a.createElement(k,{tasks:this.state.tasks,delete:this.deleteTask,change:this.changeTaskStatus}))}}]),t}(n.Component);l.a.render(c.a.createElement(E,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(21)}},[[9,2,1]]]);
//# sourceMappingURL=main.2f53484a.chunk.js.map