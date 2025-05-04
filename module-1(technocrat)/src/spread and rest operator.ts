{


//spread operator

const bros1:string[] = ['emon','arju','tanvir']

const bros2: string[] = ['sourav', 'sifat', 'rafi']

bros1.push(...bros2)


const mentors1 = {
    typescript: 'mezba',
    redux: 'mir',
    dbms: 'mizan'
}

const mentors2 ={
    prisma: 'firoz',
    nest: 'tonmoy',
    cloud: 'nahid'
}


const mentorList = {
    ...mentors1,
    ...mentors2
}

//rest operator (cousin of spread opretor)

const greetFriends = (...friends : string[] ) =>{
  
    friends.forEach((friend:string) => console.log(`${friend}`))
    
}
greetFriends('emon','tanvir','hasib','habib','mamun');


}