$(function(){

  StickAreaView = Backbone.View.extend({

   template: JST["backbone/templates/stickarea/stickarea"],  

    events: {
      "contextmenu" : "createStick"
    },

    initialize: function() {
       this.Sticks = new StickCollection();
       this.Sticks.on("reset",this.addAllStick,this)
       this.Sticks.fetch();  
    },      
  
    render: function() {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    },

    createStick: function(el) {
      var stick = new StickModel({x:el.pageX,y : el.pageY}),
          view = new StickView({model : stick}),
	  self = this; 	
	  
      this.Sticks.push(stick);
      
      stick.save(stick.attributes,{ 
	success: function() {
	  self.$el.append(view.render().el);	
        },
	error: function(m,response) {
	  alert("server error");
	}  
        
      });      
      
      return false;
    },
    
    updateStick: function(stick) {
       var view = new StickView({model : stick});
       this.$el.append(view.render().el);
    },  
    
    addAllStick: function() {
      this.Sticks.each(this.updateStick,this);
    }  

  });

}); 