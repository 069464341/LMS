Meteor.publish('users',function(){
	return users.find({});
});
Meteor.publish('images',function(){
	return images.find({});
});
Meteor.publish(null, function (){ 
  return Meteor.roles.find({})
});
