


async function getAllStudents(req, res) {
    // res.send('getAllStudents')
   
    res.status(200).json({
        message:'Get students successfully',
        data: [
            {
                name: 'Nguyen Van A',
                age: 19
            }
        ]
    })
    // res.status(500).json({
    //     message: 'Can not get students'
    // })
}

async function getStudentByID(req, res){
    res.send('get student by ID:' + req?.params?.id ?? "")
}

async function updateStudent(req, res){
    res.send('patch(new user of not exit) insert student')
}

async function insertStudent(req, res){
    res.send('insertStudent')
}

export default {
    getAllStudents,
    getStudentByID,
    updateStudent,
    insertStudent
}