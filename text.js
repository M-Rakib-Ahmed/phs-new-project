// const isVeryfied = true
// if(isVeryfied ===true){
//     console.log('user is veryfied');
    
// }
// else{
//     console.log('user is not veryfied');
    
// }


// const isVeryfied = true;
// if(isVeryfied){
//     console.log('User is veryfied');
    
// }
// else{
//     console.log('User is not veryfied');
    
// }


// const isVeryfied = false;
// // if(isVeryfied){
// //     console.log('User is veryfied');
    
// // }
// // else{
// //     console.log('user is not veryfied');
    
// // }

// console.log(`${isVeryfied === true? 'User is veryfied': 'User is not veryfied'}`);





function getTimeString(time){
    const hour = parseInt(time / 3600)
    let remaingSecond = time % 3600
    let munute = parseInt(remaingSecond / 60)
    remaingSecond = remaingSecond % 60;
    return `${hour} hour ago ${munute} munute ${remaingSecond}second ago`
}

// console.log(getTimeString(5145545));



function height(){
    var height = 123.56;
    var type = (height >= 190) ? "taler" : "little short"
    return type
}

console.log(height());
