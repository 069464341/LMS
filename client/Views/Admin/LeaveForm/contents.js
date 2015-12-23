Meteor.methods({
/*Start content*/
  //member add content post
  addContent: function(title, content, typeid, date, image, author,category,url) {
  //var userid = Meteor.user(this._id);
  var author = Meteor.userId();
    var attributes={
    title:title,
    content:content,
    typeid:typeid,
    date:date,
    image:image,
    author:author,
    category:category,
    url:url
    };
    contents.insert(attributes);
  },
  updateContent:function(id,obj){
    contents.update({_id:id},{$set:obj});
  },
/*End content*/
//Add Posting
addleave: function(obj) {
    posting.insert(obj);
  },
  updateposting:function(id,obj){
    posting.update({_id:id},{$set:obj});
  },
  updatepost: function(id,obj){
    posting.update({_id:id},{$set:obj});
  },
  addLocation: function(location){
  var attr={
    location:location,
  };
  area.insert(attr);
  },
  addbooking:function(attr){
    booking.insert(attr);
  },
  updateroom:function(id,after){
    return posting.update({_id:id},{$set:after});
  }
});
