function add(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

module.exports={
    add,
    sub,
};

//or
//using exports object
// exports.add=(a,b)=>a+b;
// exports.sub=(a,b)=>a-b;