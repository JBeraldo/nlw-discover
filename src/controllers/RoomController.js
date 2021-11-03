const { open } = require('sqlite')
const database = require('../db/config')
module.exports = {
    async create(req, res) {
        const db = await database()
        const pass = req.body.password
        let roomId
        let isRoom = true
        let roomsExistId
        // gera numero da sala

        while (isRoom) {
            for (let i = 0; i < 6; i++) {
                i === 0 ? roomId = (Math.floor(Math.random() * 10)).toString() : roomId += (Math.floor(Math.random() * 10)).toString()
            }
            // verifica se o numero já existe
            roomsExistId = await db.all(`SELECT id FROM rooms`)
            isRoom = roomsExistId.some(roomsExistId => roomsExistId === roomId)

            if (!isRoom) {
                // manda pro banco
                await db.run(`INSERT INTO rooms (id,pass) values (${parseInt(roomId)},${pass})`)
            }


        }
        await db.close()
        res.redirect(`/room/${roomId}`)
    },
    async Open(req, res) {
        const db = await database()
        const roomId = req.params.room
        let isQuestions = true
        const questions = await db.all(`SELECT * FROM questions WHERE sala = ${roomId} AND read=0`)
        const questionsRead = await db.all(`SELECT * FROM questions WHERE sala = ${roomId} AND read!=0`)
        if (questions.length === 0 && questionsRead.length === 0) {
            isQuestions = false
        }
        res.render('room', { roomId: roomId, questions: questions, questionsRead: questionsRead, isQuestions: isQuestions })
    },
    enter(req, res) {
        const roomId = req.body.roomId
        res.redirect(`/room/${roomId}`)
    }
}