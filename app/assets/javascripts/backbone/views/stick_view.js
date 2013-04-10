$(function(){ 

  StickView = Backbone.View.extend({

    template: JST["backbone/templates/stick/stick"],
    
    events: {
      "dblclick .stick"   : "edit",
      "keypress .edit"  : "update",
      "click .close_stick"  : "delete",
      "blur .edit"      : "close_edit"
    },

    initialize: function() {
      this.model.bind('change', this.render, this);
    },

    
    // Switch this view into `"editing"` mode, displaying the input field.
    edit: function(el) {
       this.$el.addClass("editing");
       this.render();
       this.$el.find("input").focus(); 
       return false;
       
    },

    update: function(el) {
      if (el.keyCode != 13) return;
      this.model.set({name:this.$el.find(".edit").val()})
      this.model.save();
      this.$el.removeClass("editing");   
      this.render();
    },

    delete: function(el) {
      this.model.destroy();
      this.remove();
      return false;
    },

    close_edit: function() {
      this.$el.removeClass("editing");  
      return false
    },

    // Re-render the titles of the stick item.
    render: function() {
      var x = this.model.get("x"),
          y = this.model.get("y"); 
      this.$el.html(this.template(this.model.toJSON()));
      this.$el.find(".stick").css({left:x,top:y});
      return this;
    }

  });
});