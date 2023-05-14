import express from 'express'
const router = express.Router();

router.get('/',(req,res) => {
    res.send('GET USER')
})
router.post('/login',(req,res) => {
    debugger
    res.send('POST LOGIN USER')
})
router.post('/register',(req,res) => {
    res.send('REGISTER USER')
})

export default router