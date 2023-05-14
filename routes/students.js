import express from 'express'
const router = express.Router();

router.get('/',(req,res) => {
    res.send('GET student')
})
// get student by ID
router.get('/:id',(req,res) => {
    // debugger
    res.send('get student by ID:' + req?.params?.id ?? "")
})
// put or patch
router.patch('/',(req,res) => {
    res.send('patch(new user of not exit) insert student')
})
router.post('/',(req,res) => {
    res.send('post insert student')
})

export default router