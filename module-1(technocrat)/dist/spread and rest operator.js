"use strict";
{
    //spread operator
    const bros1 = ['emon', 'arju', 'tanvir'];
    const bros2 = ['sourav', 'sifat', 'rafi'];
    bros1.push(...bros2);
    const mentors1 = {
        typescript: 'mezba',
        redux: 'mir',
        dbms: 'mizan'
    };
    const mentors2 = {
        prisma: 'firoz',
        nest: 'tonmoy',
        cloud: 'nahid'
    };
    const mentorList = Object.assign(Object.assign({}, mentors1), mentors2);
    //rest operator (cousin of spread opretor)
    const greetFriends = (...friends) => {
        friends.forEach((friend) => console.log(`${friend}`));
    };
    greetFriends('emon', 'tanvir', 'hasib', 'habib', 'mamun');
}
