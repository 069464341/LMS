
//========================= MANAGE USER ROLES ==========================//
Template.edituser.events({
   'click #edituser': function(e){
        e.preventDefault();
        var id = this._id;
        var username = $('#username').val();
        var email = $('#email').val();
        var password = $('#password').val();
        var mySelect = $('#mySelect').val();
        //Meteor.call('updateroles',mySelect);
        Meteor.call('edituser',id,username,email);
        Meteor.call('updateroles',id,mySelect);
        Router.go('/manageuser');
    }
});
Template.edituser.helpers({
    position: function(posit){
        return posit[0];
    },
    displayuser:function(){
        return Meteor.roles.find({});
    }
});
Template.manageuser.events({
    "click #remove":function(e){
        e.preventDefault();
        var id = this._id;
        //alert('Remove Project!!!'+id);
        if (confirm("Are you sure you want to delete this?")) {
            Meteor.call("deleteUser",id);
        }
    },
        'click #adduser': function(e){
        e.preventDefault();
        var username = $('#username').val();
        var email = $('#email').val();
        var password = $('#password').val();
        var mySelect = $('#mySelect').val();
       // alert(username+email+password+mySelect);
        Meteor.call('registerUser',username,email,password,mySelect);
        sAlert.success('One user was add!');
        //Router.go('project');
    }
});
Template.manageuser.helpers({
    getroles:function(){
        var roles= Meteor.roles.find({});
       // console.log("hello"+JSON.stringify(roles);
        return roles;
    },
    listuser:function(){
        return Meteor.users.find({});
    }
});
Meteor.startup(function () {
    sAlert.config({
        effect: 'scale',
        position: 'bottom',
        timeout: 5000,
        html: false,
        onRouteClose: true,
        stack: true,
        offset: 0, 
        beep: false,
        onClose: _.noop //
        
    });

});