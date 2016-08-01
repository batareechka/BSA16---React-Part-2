var Projects = new Schema({
  Users: [{
    userId :  Schema.User.ObjectId,
    required: true
  }],

  Technologies: [{
    techology: Schema.Technology.ObjectId,
    required: true
  }],

  Name: {
    type: String,
    required: true
  },

  Description: {
    type: String
  },

  Screenshots - ????

  TimeBegin:{
    type: Date,
    required:true
  },
  TimeEnd:{
    type: Date,
    required:true
  },
  Tags:[{
   type: String
 }],

 Stage:{
  stage :  Schema.StagesScope.ObjectId,
}
});


var Technology = new Schema({
    Name:{
        type: String,
        required:true
    },
    Image:{ ?????
    }

    TechnologyScope: {      //Web, Mobile, Desktop, Backend как вынести справочником?
      type: Schema.TechnologiesScope.ObjectId,,
      required:true
    }
});


var TechnologiesScope = new Schema({
    Name:{
        type: String,
        required:true
    }
});


var StagesScope = new Schema({ //In progress, Estimated, Discussed
    Name:{
        type: String,
        required:true
    },
    Color:{
        type: String,
    },
    Image: {???

    }
});