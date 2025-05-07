{

    // funtion with generics


    //normal type
    const multiple = (a: number, b: number): number => {
        return a * b
    }
    multiple(2, 3)

    const createArray = (param: string): string[] => {

        return [param]
    }
    const res1 = createArray('bangledesh')
    // console.log(res1);


    const createArrayWithGenerics = <T>(param: T) => {

        return [param]
    }

    const resGeneric = createArrayWithGenerics(true)

    const resGenericObj = createArrayWithGenerics(['sdf', 'sdfsdf'])



    const createArrayWithTuple = <T, Q>(param1: T, param2: Q) => {
        return [param1, param2]
    }
    type User = {
        name: string,
        age: number
    }
    const resTuple = createArrayWithTuple<string, User>('rifat', { name: 'rifat', age: 23 })


    const addCourseToStudent = <T>(student: T) => {

        const course = 'next level webDevelopment'
        return {
            ...student,
            course

        }

    }

    const student1 = addCourseToStudent({ id: 1233, name: 'X', email: 'x.@gmail.com', devType: 'next level WebDev' })

    const student2 = addCourseToStudent({ id: 1223, name: 'Y', email: 'y@gmail.com', watch: true })

console.log(addCourseToStudent(student1));







}