// function addon(){

//     let a = 100

//     function addon2() {
//         let b = 200

//        return function addon3(){

//             console.log(a);
            
//         }
         

//     }

//     let add = addon2()
//     add()
// }

// addon()


function addon(){

    let a = 200

    return function addon2(){

        console.log(a);
        
    }

}
let a = addon()
a()

