const User = require('./models');

module.exports ={

    login: (req,res)=>{
        User.findById(req.params.id)
        .then((data)=>res.json(data))
        .catch((err)=>res.json(err))
    },

    
    tasks: (req,res)=>{
        User.tasks.find()
        .then((data)=>res.json(data))
        .catch((err)=>res.json(err))
    },
    updateTasks: (req,res)=>{
        User.findByIdAndUpdate(req.params.id, {$push: {'tasks':req.body}}, {new:true,upsert:true,runValidators:true})
        .then((data)=>res.json(data))
        .catch((err)=>res.json(err))
    },

    shopList: (req,res)=>{
        User.shopList.find()
        .then((data)=>res.json(data))
        .catch((err)=>res.json(err))
    },
    updateShopList: (req,res)=>{
        User.findByIdAndUpdate(req.params.id, {shopLists:req.body}, {runValidators:true})
        .then((data)=>res.json(data))
        .catch((err)=>res.json(err))
    },

    workOuts: (req,res)=>{
        User.workOut.find()
        .then((data)=>res.json(data))
        .catch((err)=>res.json(err))
    },
    updateWorkOuts: (req,res)=>{
        User.findByIdAndUpdate(req.params.id, {workOuts:req.body}, {runValidators:true})
        .then((data)=>res.json(data))
        .catch((err)=>res.json(err))
    },

    recipes: (req,res)=>{
        User.recipes.find()
        .then((data)=>res.json(data))
        .catch((err)=>res.json(err))
    },
    updateRecipes: (req,res)=>{
        User.findByIdAndUpdate(req.params.id, {recipes:req.body}, {runValidators:true})
        .then((data)=>res.json(data))
        .catch((err)=>res.json(err))
    },

    mealPlans: (req,res)=>{
        User.mealPlans.find()
        .then((data)=>res.json(data))
        .catch((err)=>res.json(err))
    },
    updateMealPlan: (req,res)=>{
        User.findByIdAndUpdate(req.params.id, {mealPlan:req.body}, {runValidators:true})
        .then((data)=>res.json(data))
        .catch((err)=>res.json(err))
    },



    destroyUser: (req,res)=>{
        User.findByIdAndDelete(req.params.id)
        .then((data)=>res.json(data))
        .catch((err)=>res.json(err))
    },

}