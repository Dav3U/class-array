//claud3b3ast
usernames=[]

usernames.push(prompt ('Kindly enter your name student 1: '))
name1= usernames[0]
usernames.push(Number((prompt ('Kindly enter your age student 1: '))))


usernames.push(prompt ('Kindly enter your name student 2: '))
name2= usernames[2]
usernames.push(Number((prompt ('Kindly enter your age student 2: '))))


usernames.push(prompt ('Kindly enter your name student 3: '))
name3= usernames[4]
usernames.push(Number((prompt ('Kindly enter your age student 3: '))))

// usernames.push(prompt ('Kindly enter your name: '))
// usernames.push(Number((prompt ('Kindly enter your age: '))))

// usernames.push(prompt ('Kindly enter your name: '))
// usernames.push(Number((prompt ('Kindly enter your age: '))))


var nums = usernames.filter(conv);

var ageTotal = nums.reduce(adder);

console.log(usernames)

console.log(nums)

console.log( 'The total sum of ages of ' +name1 +',' +name2 +',' +name3  +' is ' +ageTotal +' years')


function conv(value)
{
    value = Number(value)
        
    return value
}

function adder(ageTotal, value, index, array)
 {
    return ageTotal + value;
}





