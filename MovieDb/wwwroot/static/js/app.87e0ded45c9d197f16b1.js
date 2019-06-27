webpackJsonp([1],{"13mk":function(e,t){},Au4V:function(e,t){},"D1/H":function(e,t){},GX9z:function(e,t){},NHnr:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=o("7+uW"),s={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"container"},[t("router-view")],1)},staticRenderFns:[]};var n=o("VU/8")({name:"App"},s,!1,function(e){o("yjk7")},null,null).exports,c=o("/ocq"),r=o("Dd8w"),a=o.n(r),l=o("NYxO"),v={name:"DeleteActor",props:["Movie","Actor"],created:function(){this.AllMovies()},computed:a()({},Object(l.d)("movies",{movies:"movies"})),methods:a()({cancel:function(){this.$emit("cancel")}},Object(l.b)("movies",["AllMovies","EditMovie","ShowMovies"]),Object(l.b)("actors",["DeleteActor"]),{delActInMv:function(e,t){for(var o=void 0,i=0;i<this.movies.length;i++)e.movieId==this.movies[i].movieId&&(o=this.movies[i]);for(var s=0;s<e.actors.length;s++)t.id!=e.actors[s].id&&o.movieActors.push({actorId:e.actors[s].id,movieId:o.movieId});this.EditMovie(o),this.cancel()},delAct:function(e){this.DeleteActor(e.id),this.ShowMovies(),this.cancel()}})},d={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"d-flex"},[o("div",{staticClass:"btn btn-primary",on:{click:function(t){return e.delActInMv(e.Movie,e.Actor)}}},[e._v(" Delete "+e._s(e.Actor.name)+" from "+e._s(e.Movie.movieTitle)+" ")]),e._v(" "),o("div",{staticClass:"btn btn-primary",on:{click:function(t){return e.delAct(e.Actor)}}},[e._v("Delete "+e._s(e.Actor.name)+" from all movies ")]),e._v(" "),o("div",{staticClass:"btn btn-warning",on:{click:function(t){return e.cancel()}}},[e._v(" Cancel")])])},staticRenderFns:[]};var u=o("VU/8")(v,d,!1,function(e){o("i0GY")},"data-v-0f711bf0",null).exports,m={name:"DeleteMovie",props:["Movie"],methods:a()({cancel:function(){this.$emit("canceled")}},Object(l.b)("movies",["DeleteMovie"]),{deleteMv:function(e){this.DeleteMovie(e)}})},h={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("h2",[e._v("Do you really want to delete "+e._s(e.Movie.movieTitle)+"  ?")]),e._v(" "),o("div",[o("div",{staticClass:"btn btn-danger",on:{click:function(t){return e.deleteMv(e.Movie)}}},[e._v("Yes")]),e._v(" "),o("div",{staticClass:"btn btn-primary",on:{click:function(t){return e.cancel()}}},[e._v(" No")])])])},staticRenderFns:[]};var f={components:{deleteMovie:o("VU/8")(m,h,!1,function(e){o("GX9z")},"data-v-1bf8ea4a",null).exports,deleteActor:u},name:"MovieDb",data:function(){return{showDelMv:"",showDelAct:"",showDelActMv:""}},created:function(){this.ShowMovies(),this.ShowActors()},computed:a()({},Object(l.d)("movies",{allMovies:"showMovies"})),methods:a()({delAct:function(e,t){this.showDelAct=t,this.showDelActMv=e},cacelel:function(){this.showDelMv="",this.showDelAct="",this.showDelActMv="",this.ShowMovies()},delMv:function(e){this.showDelMv=e.movieId},navigation:function(e){this.$router.push({name:e})}},Object(l.b)("movies",["ShowMovies"]),Object(l.b)("actors",["ShowActors"]),{genre:function(e){switch(e){case 1:return this.Genre="Action";case 2:return this.Genre="Fantasy";case 3:return this.Genre="Drame";default:return this.Genre="None"}}})},p={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",{staticClass:"btn btn-success btn-group-long",on:{click:function(t){return e.navigation("AddMovie")}}},[e._v("Add new movie")]),e._v(" "),o("div",{staticClass:"btn btn-success btn-group-long",on:{click:function(t){return e.navigation("AddActor")}}},[e._v("Add new actor")]),e._v("\n    "+e._s(e.allMovies)+"\n   "),o("table",{staticClass:"table"},[e._m(0),e._v(" "),e._l(e.allMovies,function(t,i){return o("tbody",{key:i},[o("tr",[o("td",[e._v(e._s(t.movieTitle))]),e._v(" "),o("td",[e._v(e._s(t.movieReleas))]),e._v(" "),o("td",{staticClass:"row"},[o("div",{staticClass:"col"},[e._v(e._s(e.genre(t.movieGenre)))]),e._v(" "),o("div",{staticClass:"col"},[o("router-link",{staticClass:"btn btn-danger float-right  ",attrs:{to:{name:"EditMovie",params:{id:t.movieId}}}},[e._v("edit")]),e._v(" "),o("div",{staticClass:"btn btn-danger float-right",on:{click:function(o){return e.delMv(t)}}},[e._v("delete")])],1)]),e._v(" "),o("td",e._l(t.actors,function(i,s){return o("ul",{key:s},[o("div",{staticClass:"d-inline"},[e._v(" "+e._s(i.name))]),e._v(" "),o("router-link",{staticClass:"btn btn-danger float-right",attrs:{to:{name:"EditActor",params:{id:i.id}}}},[e._v("edit")]),e._v(" "),o("div",{staticClass:"btn btn-danger float-right",on:{click:function(o){return e.delAct(t.movieId,i.id)}}},[e._v(" delete")])],1)}),0)]),e._v(" "),t.movieId==e.showDelMv?o("tr",{attrs:{colspan:"4"}},[o("deleteMovie",{attrs:{Movie:t},on:{canceled:e.cacelel}})],1):e._e(),e._v(" "),e._l(t.actors,function(i,s){return o("tr",{key:s,attrs:{colspan:"4"}},[t.movieId==e.showDelActMv&&i.id==e.showDelAct?o("deleteActor",{attrs:{Movie:t,Actor:i},on:{cancel:function(t){return e.cacelel()}}}):e._e()],1)})],2)})],2)])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("thead",[t("tr",[t("th",[this._v("Title")]),this._v(" "),t("th",[this._v("Release Date")]),this._v(" "),t("th",[this._v("Genre")]),this._v(" "),t("th",[this._v("Actors")])])])}]};var _=o("VU/8")(f,p,!1,function(e){o("D1/H")},"data-v-6afc589f",null).exports,g={name:"AddMovie",computed:a()({},Object(l.d)("actors",{allActors:"actors"}),Object(l.c)("actors",{selectedActors:"selectedActros"}),Object(l.c)("movies",{lastId:"lastId"})),created:function(){0==this.AllActors.length&&this.AllActors(),this.AllMovies()},methods:a()({navigation:function(){this.$router.push({name:"MovieDb"})}},Object(l.b)("movies",["AddMovie","AllMovies"]),Object(l.b)("actors",["AllActors"]),{addMovie:function(e){console.log(e),0!=this.SelectedActors(this.selectedActors,this.allActors).length?this.AddMovie(this.select(e)):this.AddMovie(e),this.navigation()},SelectedActors:function(e,t){for(var o=[],i=0;i<e.length;i++)if(1==e[i].selected)for(var s=0;s<t.length;s++)e[i].id==t[s].actorId&&o.push(t[s]);return o},select:function(e){for(var t=this.SelectedActors(this.selectedActors,this.allActors),o=0;o<t.length;o++)e.movieActors.push({actorId:t[o].actorId,movieId:1+this.lastId});return e}}),data:function(){return{movie:{title:"",releasYear:"",genre:"",movieActors:[]}}}},A={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("h1",[e._v("Add Movie")]),e._v(" "),o("form",[o("div",{staticClass:"form-group"},[o("label",[e._v("Title")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.movie.title,expression:"movie.title"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.movie.title},on:{input:function(t){t.target.composing||e.$set(e.movie,"title",t.target.value)}}})]),e._v(" "),o("div",{staticClass:"form-group"},[o("label",[e._v("Releas Year")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.movie.releasYear,expression:"movie.releasYear"}],staticClass:"form-control",attrs:{type:"number"},domProps:{value:e.movie.releasYear},on:{input:function(t){t.target.composing||e.$set(e.movie,"releasYear",t.target.value)}}})]),e._v(" "),o("div",{staticClass:"form-group"},[o("div",{staticClass:"input-group mb-3"},[e._m(0),e._v(" "),o("select",{directives:[{name:"model",rawName:"v-model",value:e.movie.genre,expression:"movie.genre"}],staticClass:"custom-select",on:{change:function(t){var o=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.movie,"genre",t.target.multiple?o:o[0])}}},[o("option",{attrs:{value:"None"}},[e._v("None")]),e._v(" "),o("option",{attrs:{value:"Action"}},[e._v("Action")]),e._v(" "),o("option",{attrs:{value:"Fantasy"}},[e._v("Fantasy")]),e._v(" "),o("option",{attrs:{value:"Drama"}},[e._v("Drama")])])])]),e._v(" "),o("div",{staticClass:"form-group"},[o("h2",[e._v("Actors")]),e._v(" "),e._l(e.selectedActors,function(t,i){return o("div",{key:i},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.selected,expression:"actor.selected"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.selected)?e._i(t.selected,null)>-1:t.selected},on:{change:function(o){var i=t.selected,s=o.target,n=!!s.checked;if(Array.isArray(i)){var c=e._i(i,null);s.checked?c<0&&e.$set(t,"selected",i.concat([null])):c>-1&&e.$set(t,"selected",i.slice(0,c).concat(i.slice(c+1)))}else e.$set(t,"selected",n)}}}),e._v(" "),o("label",{attrs:{for:"checkbox"}},[e._v(e._s(t.name))])])})],2),e._v(" "),o("div",{staticClass:"btn btn-group-lg btn-danger",on:{click:function(t){return e.addMovie(e.movie)}}},[e._v("Add movie")]),e._v(" "),o("div",{staticClass:"btn btn-group-lg btn-primary",on:{click:function(t){return e.navigation()}}},[e._v("Cancel")])])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"input-group-prepend"},[t("label",{staticClass:"input-group-text"},[this._v("Genre")])])}]};var b=o("VU/8")(g,A,!1,function(e){o("13mk")},null,null).exports,M={name:"AddActor",created:function(){this.AllMovies(),this.AllActors()},computed:a()({},Object(l.d)("movies",{allMovies:"movies"}),Object(l.c)("movies",{selectedMovies:"selectedMovies"}),Object(l.c)("actors",{lastId:"lastId"})),data:function(){return{actor:{name:"",age:"",movieActors:[]}}},methods:a()({navigation:function(){this.$router.push({name:"MovieDb"})}},Object(l.b)("actors",["AddActor","AllActors"]),Object(l.b)("movies",["AllMovies","ShowMovies"]),{addActor:function(e){0!=this.SelectedMovies(this.selectedMovies,this.allMovies).length?this.AddActor(this.select(e)):(this.AddActor(e),this.ShowMovies()),this.navigation()},SelectedMovies:function(e,t){for(var o=[],i=0;i<e.length;i++)if(1==e[i].selected)for(var s=0;s<t.length;s++)e[i].id==t[s].movieId&&o.push(t[s]);return o},select:function(e){for(var t=this.SelectedMovies(this.selectedMovies,this.allMovies),o=0;o<t.length;o++)e.movieActors.push({actorId:this.lastId+1,movieId:t[o].movieId});return e}})},w={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("h1",[e._v("Add Actor")]),e._v(" "),o("form",[o("div",{staticClass:"form-group"},[o("label",[e._v("Name")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.actor.name,expression:"actor.name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.actor.name},on:{input:function(t){t.target.composing||e.$set(e.actor,"name",t.target.value)}}})]),e._v(" "),o("div",{staticClass:"form-group"},[o("label",[e._v("Age")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.actor.age,expression:"actor.age"}],staticClass:"form-control",attrs:{type:"number"},domProps:{value:e.actor.age},on:{input:function(t){t.target.composing||e.$set(e.actor,"age",t.target.value)}}})]),e._v(" "),o("div",{staticClass:"form-group"},[o("h2",[e._v("Movies")]),e._v(" "),e._l(e.selectedMovies,function(t,i){return o("div",{key:i},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.selected,expression:"movie.selected"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.selected)?e._i(t.selected,null)>-1:t.selected},on:{change:function(o){var i=t.selected,s=o.target,n=!!s.checked;if(Array.isArray(i)){var c=e._i(i,null);s.checked?c<0&&e.$set(t,"selected",i.concat([null])):c>-1&&e.$set(t,"selected",i.slice(0,c).concat(i.slice(c+1)))}else e.$set(t,"selected",n)}}}),e._v(" "),o("label",{attrs:{for:"checkbox"}},[e._v(e._s(t.title))])])})],2),e._v(" "),o("div",{staticClass:"btn btn-group-lg btn-danger",on:{click:function(t){return e.addActor(e.actor)}}},[e._v("\n      Add Actor\n    ")]),e._v(" "),o("div",{staticClass:"btn btn-group-lg btn-primary",on:{click:function(t){return e.navigation()}}},[e._v("\n      Cancel\n    ")])])])},staticRenderFns:[]};var C=o("VU/8")(M,w,!1,function(e){o("sdaU")},null,null).exports,y={name:"EditMovie",computed:a()({},Object(l.d)("movies",{ShowMovies:"showMovies"}),{mv:function(){var e=this;return this.ShowMovies.find(function(t){return t.movieId===e.$route.params.id})}},Object(l.c)("actors",{selectedActors:"selectedActros"})),created:function(){this.AllActors()},beforeUpdate:function(){this.selectedAct(),this.values()},methods:a()({navigation:function(){this.$router.push({name:"MovieDb"})},Edit:function(e){this.EditMovie(this.select(e)),this.navigation()},SelectedActors:function(e,t){for(var o=[],i=0;i<e.length;i++)if(1==e[i].selected)for(var s=0;s<t.length;s++)e[i].id==t[s].actorId&&o.push(t[s]);return o},select:function(e){for(var t=this.selectedActors,o=0;o<t.length;o++)1==t[o].selected&&e.movieActors.push({actorId:t[o].id,movieId:this.movie.movieId});return e},genre:function(e){switch(e){case 1:return this.Genre="Action";case 2:return this.Genre="Fantasy";case 3:return this.Genre="Drame";default:return this.Genre="None"}},values:function(){this.movie.movieId=this.mv.movieId,this.movie.title=this.mv.movieTitle,this.movie.releasYear=this.mv.movieReleas,this.movie.genre=this.genre(this.mv.movieGenre),this.movie.movieActors=[]}},Object(l.b)("actors",["AllActors"]),Object(l.b)("movies",["EditMovie"]),{selectedAct:function(){for(var e=this,t=function(t){e.selectedActors.forEach(function(o){e.mv.actors[t].id===o.id&&(o.selected=!0)})},o=0;o<this.mv.actors.length;o++)t(o)}}),data:function(){return{movie:{}}}},k={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("h1",[e._v("Edit Movie")]),e._v(" "),o("form",[o("div",{staticClass:"form-group"},[o("label",[e._v("Title")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.movie.title,expression:"movie.title"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.movie.title},on:{input:function(t){t.target.composing||e.$set(e.movie,"title",t.target.value)}}})]),e._v(" "),o("div",{staticClass:"form-group"},[o("label",[e._v("Release Year")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.movie.releasYear,expression:"movie.releasYear"}],staticClass:"form-control",attrs:{type:"number"},domProps:{value:e.movie.releasYear},on:{input:function(t){t.target.composing||e.$set(e.movie,"releasYear",t.target.value)}}})]),e._v(" "),o("div",{staticClass:"form-group"},[o("div",{staticClass:"input-group mb-3"},[e._m(0),e._v(" "),o("select",{directives:[{name:"model",rawName:"v-model",value:e.movie.genre,expression:"movie.genre"}],staticClass:"custom-select",on:{change:function(t){var o=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.movie,"genre",t.target.multiple?o:o[0])}}},[o("option",[e._v("None")]),e._v(" "),o("option",[e._v("Action")]),e._v(" "),o("option",[e._v("Fantasy")]),e._v(" "),o("option",[e._v("Drama")])])])]),e._v(" "),o("div",{staticClass:"form-group"},[o("h2",[e._v("Actors")]),e._v(" "),e._l(e.selectedActors,function(t,i){return o("div",{key:i},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.selected,expression:"actor.selected"}],attrs:{type:"checkbox"},domProps:{checked:t.selected,checked:Array.isArray(t.selected)?e._i(t.selected,null)>-1:t.selected},on:{change:function(o){var i=t.selected,s=o.target,n=!!s.checked;if(Array.isArray(i)){var c=e._i(i,null);s.checked?c<0&&e.$set(t,"selected",i.concat([null])):c>-1&&e.$set(t,"selected",i.slice(0,c).concat(i.slice(c+1)))}else e.$set(t,"selected",n)}}}),e._v(" "),o("label",[e._v(e._s(t.name))])])})],2),e._v(" "),o("div",[o("div",{staticClass:"btn btn-danger btn-group-long",on:{click:function(t){return e.Edit(e.movie)}}},[e._v("Edit")]),e._v(" "),o("div",{staticClass:"btn btn-warning btn-group-long",on:{click:function(t){return e.navigation()}}},[e._v("Cancel")])])])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"input-group-prepend"},[t("label",{staticClass:"input-group-text"},[this._v("Genre")])])}]};var I=o("VU/8")(y,k,!1,function(e){o("Au4V")},"data-v-ff8d87ae",null).exports,$={name:"EditActor",computed:a()({},Object(l.d)("actors",{Actors:"showActors"}),{act:function(){var e=this;console.log(this.Actors);var t=this.Actors.find(function(t){return t.actorId===e.$route.params.id});return t}},Object(l.c)("movies",{selectedMovies:"selectedMovies"})),created:function(){this.AllMovies()},beforeUpdate:function(){this.values(),this.selectedMv()},methods:a()({navigation:function(){this.$router.push({name:"MovieDb"})},editAct:function(e){this.EditActor(this.select(e)),this.navigation()},values:function(){console.log(this.act),this.actor.actorId=this.act.actorId,this.actor.name=this.act.name,this.actor.age=this.act.age,this.actor.movieActors=[]}},Object(l.b)("actors",["EditActor"]),Object(l.b)("movies",["AllMovies"]),{selectedMv:function(){for(var e=this,t=function(t){e.selectedMovies.forEach(function(o){e.act.movies[t].id===o.id&&(o.selected=!0)})},o=0;o<this.act.movies.length;o++)t(o)},SelectedMovies:function(e,t){for(var o=[],i=0;i<e.length;i++)if(1==e[i].selected)for(var s=0;s<t.length;s++)e[i].id==t[s].movieId&&o.push(t[s]);return o},select:function(e){for(var t=this.selectedMovies,o=0;o<t.length;o++)1==t[o].selected&&e.movieActors.push({actorId:e.actorId,movieId:t[o].id});return e}}),data:function(){return{actor:{}}}},D={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("h1",[e._v("Edit Actor")]),e._v(" "),o("form",[o("div",{staticClass:"form-group"},[o("label",[e._v("Name")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.actor.name,expression:"actor.name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.actor.name},on:{input:function(t){t.target.composing||e.$set(e.actor,"name",t.target.value)}}})]),e._v(" "),o("div",{staticClass:"form-group"},[o("label",[e._v("Age")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.actor.age,expression:"actor.age"}],staticClass:"form-control",attrs:{type:"number"},domProps:{value:e.actor.age},on:{input:function(t){t.target.composing||e.$set(e.actor,"age",t.target.value)}}})]),e._v(" "),o("div",{staticClass:"form-group"},[o("h2",[e._v("Movies")]),e._v(" "),e._l(e.selectedMovies,function(t,i){return o("div",{key:i},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.selected,expression:"movie.selected"}],attrs:{type:"checkbox"},domProps:{checked:t.selected,checked:Array.isArray(t.selected)?e._i(t.selected,null)>-1:t.selected},on:{change:function(o){var i=t.selected,s=o.target,n=!!s.checked;if(Array.isArray(i)){var c=e._i(i,null);s.checked?c<0&&e.$set(t,"selected",i.concat([null])):c>-1&&e.$set(t,"selected",i.slice(0,c).concat(i.slice(c+1)))}else e.$set(t,"selected",n)}}}),e._v(" "),o("label",[e._v(e._s(t.title))])])})],2),e._v(" "),o("div",{staticClass:"btn btn-group-lg btn-danger",on:{click:function(t){return e.editAct(e.actor)}}},[e._v("\n      Edit Actor\n    ")]),e._v(" "),o("div",{staticClass:"btn btn-group-lg btn-primary",on:{click:function(t){return e.navigation()}}},[e._v("\n      Cancel\n    ")])])])},staticRenderFns:[]};var x=o("VU/8")($,D,!1,function(e){o("O1fJ")},"data-v-1f57cc38",null).exports;i.a.use(c.a);var E=new c.a({mode:"history",routes:[{path:"/",name:"MovieDb",component:_},{path:"/addmovie",name:"AddMovie",component:b},{path:"/addactor",name:"AddActor",component:C},{path:"/editmovie/:id",name:"EditMovie",component:I},{path:"/editactor/:id",name:"EditActor",component:x}]}),O=o("mtWM"),j=o.n(O),S={namespaced:!0,state:{movies:[],showMovies:[]},actions:{AddMovie:function(e,t){var o=e.dispatch;j.a.post("https://localhost:5001/api/movies",t).then(function(){return o("ShowMovies")})},AllMovies:function(e){var t=e.commit;j.a.get("https://localhost:5001/api/movies").then(function(e){return t("allMovies",e.data)})},ShowMovies:function(e){var t=e.commit;console.log("pisam"),j.a.get("https://localhost:5001/api/movies/all").then(function(e){return t("yo",e.data)})},EditMovie:function(e,t){var o=e.dispatch,i="https://localhost:5001/api/movies/"+t.movieId;j.a.put(i,t).then(function(){return o("ShowMovies")})},DeleteMovie:function(e,t){var o=e.dispatch,i="https://localhost:5001/api/movies/"+t.movieId;j.a.delete(i).then(function(){return o("ShowMovies")})}},getters:{lastId:function(e){return 0===e.movies.length?0:e.movies[e.movies.length-1].movieId},selectedMovies:function(e){return e.movies.map(function(e){return{id:e.movieId,title:e.title,releasYear:e.releasYear,genre:e.genre,selected:!1}})}},mutations:{allMovies:function(e,t){e.movies=t},addMovie:function(e,t){e.movies.push(t)},yo:function(e,t){console.log(t),e.showMovies=t}}},N={namespaced:!0,state:{actors:[],showActors:[]},actions:{AddActor:function(e,t){var o=e.dispatch;j.a.post("https://localhost:5001/api/actors",t).then(function(){return o("AllActors")})},AllActors:function(e){var t=e.commit;j.a.get("https://localhost:5001/api/actors").then(function(e){return t("allActors",e.data)})},ShowActors:function(e){var t=e.commit;j.a.get("https://localhost:5001/api/actors/all").then(function(e){return t("showActors",e.data)})},DeleteActor:function(e,t){var o=e.dispatch,i="https://localhost:5001/api/actors/"+t;j.a.delete(i).then(function(){return o("AllActors")})},EditActor:function(e,t){var o=e.dispatch,i="https://localhost:5001/api/actors/"+t.actorId;j.a.put(i,t).then(function(){return o("ShowActors")})}},mutations:{allActors:function(e,t){e.actors=t},showActors:function(e,t){e.showActors=t}},getters:{selectedActros:function(e){return e.actors.map(function(e){return{id:e.actorId,name:e.name,age:e.age,selected:!1}})},lastId:function(e){return 0===e.actors.length?0:e.actors[e.actors.length-1].actorId}}};i.a.use(l.a);var Y=new l.a.Store({modules:{movies:S,actors:N}});i.a.config.productionTip=!1,new i.a({render:function(e){return e(n)},router:E,store:Y}).$mount("#app")},O1fJ:function(e,t){},i0GY:function(e,t){},sdaU:function(e,t){},yjk7:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.87e0ded45c9d197f16b1.js.map