//-----LOOP-----
//For (perulangan yang dapat dihitung(counted loop)misal perulangan sampai 10)
//Struktur dasar :
//for(initial(start), condition(stop), iteration(step)){}

// for(let i = 1; i<=10; i++){
//     if (i == 6){//menampilkan angka 6 dan ada tambahan kata yess
//         console.log(i, "yess")//setelah i koma berarti ada dua inputan, jika diberi + akan gabung dan menjadi string
//     }else{/*jika else dihilangkan maka angka 6 akan muncul 2 kali 
//         6 dengan kata yess dan hanya 6 saja*/
//     console.log(i)
// }
// }
// console.log("------------")
// while (Selama) perulangan bedasarkan kondisi terpenuhi
//syntax while mirip dengan if
//while akan diulang, if 1x dijalankan

// let i = 1
// let isKetemu = false

// while(!isKetemu){/*!isKetemu nilainya menjadi true karena 
//     ditambah tanda ! sehingga menjadi tidak false atau true,
//     maka if akan dijalankan*/
//     if(
//         i % 2 == 0 &&
//         i % 3 == 0 &&
//         i % 4 == 0 &&
//         i % 5 == 0 &&
//         i % 6 == 0
//         )
//         {
//             console.log(i)
//             isKetemu=true/*jika i sudah memenuhi maka isKetemu akan berubah
//             menjadi true dan dikembalikan ke atas dan menjadi tidak benar sehingga
//             if tidak dijalankan lagi */
//         }
//         i++
// }


//-----function-----
// syntax function
// 1. 
// function myFunction(kondisi){
//     statement
// }

// function cariAngka(x){
//     let isKetemu = false
//     for(let i = 1; i<=20; i++){
//         if(i == x){
//             console.log(i)
//                isKetemu = true 
//             }else{
//                 console.log("data tidak ditemukan")
//             }
//         }
//     }

// cariAngka(3)
// cariAngka(5)
// cariAngka(10)
// cariAngka(18)

//deklarasi function
function greeting(name) {
    console.log(`Haloo, apa kabar ${name}?`)
}

//calling function
greeting("rosy")
greeting("susi")
greeting("nir")

// function greeting(name) {
//     return "Haloo, apa kabar" + ${name}
// }

// //calling function
// console.log(greeting("rosy"))
// console.log("susi")
// console.log("nir")