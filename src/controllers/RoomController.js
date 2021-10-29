const database = require('../db/config')
module.exports ={
    async create(req,res){
        const db = await database()
        const pass = req.body.password
        let roomId 
        for(let i=0;i<6;i++){
            i === 0 ? roomId = (Math.floor(Math.random() * 10)).toString() : roomId += (Math.floor(Math.random() * 10)).toString()
        }
        await db.run(`INSERT INTO rooms (id,pass) values (${parseInt(roomId)},${pass})`)
        await db.close()
        res.redirect(`/room/${roomId}`)
    }
}