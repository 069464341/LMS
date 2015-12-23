Router.configure({
    layoutTemplate: 'mainLayout'
});

/*Router.route('/',{
    //layoutTemplate: 'homeLayout',
    name:'home',
    waitOn : function () {
            return [Meteor.subscribe("products",-1)];
        },
});*/
Router.route('/manageuser', {
    name: 'manageuser'
});
Router.route('/edituser/:_id', {
    name: 'edituser',
    data:function(){
     return users.findOne({_id: this.params._id});
    }
});
Router.route('/calendar',{
    name: 'calendar',
});
Router.route('/index', {
    name: 'index'
});
Router.route('/bookingDetails/:_id', {
    name: 'bookingDetails',
    data:function(){
        var id=this.params._id;
        return posting.findOne({_id:id});
    }

});
//srey den
Router.route('/',{
    name:'home'
});
Router.route('/editParentCategory/:_id',{
    name:'editParentCategory',
    data:function(){
        var id=this.params._id;
        console.log(id);
        return parentCategory.findOne({_id:id});

    }
});
Router.route('/category',{
    name:'category'
})
Router.route('/editCategory/:_id',{
    name:'editCategory',
    data:function(){
        return category.findOne({_id:this.params._id});
        
    }
});
Router.route('/editProduct/:_id',{
    name:'editProduct',
    data:function(){
        var result= product.findOne({_id:this.params._id});
        return result;
        
    }
});
Router.route('/register',{
    name:'register'
});
Router.route('/addposting',{
    name:'addposting'
});
Router.route('/manageposting',{
    name:'manageposting'
});
Router.route('/updateposting/:_id',{
    name:'updateposting',
    data:function(){
        var result= posting.findOne({_id:this.params._id});
        return result;
        
    }
});

