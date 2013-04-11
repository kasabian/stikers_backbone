$(function(){
  
 DragView = Backbone.View.extend({
   events: {
     "mousedown ": "start_dad",
     "mouseup ": "end_dad"
  },
  
  initialize: function() {
      this.dad_flag  = false;
      this.correct_x = 10;
      this.correct_y = 10; 
      this.self = this;
      _.bindAll(this.self)
      $(document).on("mousemove",this.mov_dad)
    
  },
  
  start_dad: function(el) {
    this.correct_x = el.pageX - this.model.get("x");
    this.correct_y = el.pageY- this.model.get("y");
    this.dad_flag  = true;
    this.self = this
    $("body").addClass("noselect");
  },
  
  mov_dad: function(el) {
    
    if(this.dad_flag != false) {
      
        this.$el.find(".stick").css({
	   "left":(el.pageX-this.correct_x)+"px",
	   "top":(el.pageY-this.correct_y)+"px",	 
        });
       
       
       this.model.set({"x":el.pageX-this.correct_x,"y": el.pageY-this.correct_y})
       this.$el.focus();
    }  
    
    return false;
  },
  
  end_dad: function(el) {
     this.model.save();
     this.dad_flag  = false; 
     $("body").removeClass("noselect");    
  }
    
    
  });
  
});