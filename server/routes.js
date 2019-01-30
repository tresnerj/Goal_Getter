const controller = require('./controller');


module.exports = (app)=>{
    app.get('/api/login/:id', controller.login)

    app.get('/api/tasks/:id', controller.tasks)
    app.put('/api/tasks/:id/update', controller.updateTasks)

    app.get('/api/shopList/:id', controller.shopList)
    app.put('/api/shopList/:id/update', controller.updateShopList)

    app.get('/api/workOut/:id', controller.workouts)
    app.put('/api/workOut/:id/update', controller.updateWorkOuts)

    app.get('/api/recipes/:id', controller.recipes)
    app.put('/api/recipes/:id/update', controller.updateRecipes)
    
    app.get('/api/mealPlan/:id', controller.mealPlan)
    app.put('/api/mealPlan/:id/update', controller.updateMealPlan)

    app.delete('/api/user/:id', controller.destroyUser)
}