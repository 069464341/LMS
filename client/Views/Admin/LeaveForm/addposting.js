Template.addposting.events({
	'click #btnSubmit': function(e){
		e.preventDefault();
		var datestr = new Date().toString("yyyy-MM-dd HH:mm:ss");
		var timestamp = (new Date(datestr.split(".").join("-")).getTime())/1000;
		var date = timestamp;
		var author = Meteor.userId();
		var name = Meteor.userId();
		var reason =$('#reason').val();
		var duration =$('#duration').val();
		var session =$('#session').val();
		var typeofleave =$('#typeofleave').val();
		var startDate =$('#startDate').val();
		var endDate =$('#endDate').val();
		var obj = {
			userid:author,
			reason:reason,
			duration:duration,
			session:session,
			typeofleave:typeofleave,
			startDate:startDate,
			endDate:endDate,
		}
		Meteor.call('addleave', obj);
		Router.go('manageposting');
	},
});
Template.updateposting.events({
	'click #btnupdate': function(e){
		e.preventDefault();
		var id = this._id;
		var datestr = new Date().toString("yyyy-MM-dd HH:mm:ss");
		var timestamp = (new Date(datestr.split(".").join("-")).getTime())/1000;
		var date = timestamp;
		var author = Meteor.userId();
		var name = Meteor.userId();
		var reason =$('#reason').val();
		var duration =$('#duration').val();
		var session =$('#session').val();
		var typeofleave =$('#typeofleave').val();
		var startDate =$('#startDate').val();
		var endDate =$('#endDate').val();
		var obj = {
			userid:author,
			reason:reason,
			duration:duration,
			session:session,
			typeofleave:typeofleave,
			startDate:startDate,
			endDate:endDate,
		}
		Meteor.call('updatepost',id,obj);
		Router.go('/manageposting');
	},
});
Template.manageposting.helpers({
	getpost: function(){
		return posting.find();
	},
	getLocatname: function(id){
		return area.findOne({_id:id}).location;
	}
});
Template.manageposting.events({
'click #remove':function(){
		var id = this._id;
		return posting.remove({_id:id});
	}
});
// upload image
Template.manageposting.helpers({
	getImage: function(id){
			var img = images.findOne({_id:id});
			if(img){
				console.log(img.copies.images.key);
				return img.copies.images.key;
			}else{
				return;
			}
	}
});
Template.addlocation.events({
	'click #btnAdd':function(e){
		e.preventDefault();
		var location = $('#location').val();
		Meteor.call('addLocation', location);
	}
});
Template.addlocation.helpers({
	getLocation: function(){
		return area.find();
	}
});
Template.addposting.helpers({
	getLocation: function(){
		return area.find();
	}
});