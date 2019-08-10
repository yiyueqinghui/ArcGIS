define(['dojo/_base/declare'],function(declare){
	return declare('Person',null,{
		name:'xxx',
		constructor:function(name){
			this.name = name;
		},
		say:function(){
			return this.name;
		}
	})
})
