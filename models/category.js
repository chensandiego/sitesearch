var mongoose=require('mongoose');

//category schema
var categorySchema=mongoose.Schema({
  title:{
    type:String,
    required:true
  },
  created_at:{
    type:Date,
    default:Date.now
  }
});


var Category=module.exports=mongoose.model('Category',categorySchema);


///get Categories
module.exports.getCategories=function(callback,limit){
  Category.find(callback).limit(limit).sort([['title','ascending']]);
}
