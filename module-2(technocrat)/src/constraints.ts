{

    //constraints

    type Student = {
        id:number;
        name:string;
        email:string;
    }
    
    const addCourseToStudent = <T extends Student>(student: T) => {

        const course = 'next level webDevelopment'
        return {
            ...student,
            course

        }

    }

    const student1 = addCourseToStudent({ id: 1233, name: 'X', email: 'x.@gmail.com', devType: 'next level WebDev' })

    const student2 = addCourseToStudent({ id: 1223, name: 'Y', email: 'y@gmail.com', watch: true })

const student3 = addCourseToStudent({id:2332, name:'Z', email:'z@gmail.com',kiKhobor:'Alhamdulillah, valo'})


console.log(student3);



}