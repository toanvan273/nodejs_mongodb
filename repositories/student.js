const getAllStudents = async ({
    page,
    size,
    searchString
}) => {
    console.log('Get all student + paging')
}

const insertStudent = async ({
    name, email, languages, gender, phoneNumber, address
}) => {
    console.log('Insert student')
}

export default {
    getAllStudents,
    insertStudent
}