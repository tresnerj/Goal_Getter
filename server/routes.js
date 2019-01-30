const controller = require('./controller');


module.exports = (app)=>{
    app.get('/api/allPictures', controller.pictures)
    //add :type to the end
    app.get('/api/picture/:id', controller.viewPicture)
    app.post('/api/picture/new', controller.newPicture)
    app.put('/api/picture/:id', controller.updatePicture)
    app.delete('/api/picture/:id', controller.destroyPicture)
}