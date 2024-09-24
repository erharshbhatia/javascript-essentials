// 'use strict'



// let y = (callback) => {
//     console.log('y');
//     setTimeout(() => {
//         console.log('y');
//     }, 3000);
//     callback();
// }

// function z (callback) {
//     console.log('z');
//     callback(function x () {
//         setTimeout(() => {
//             console.log('x');
//         }, 5000);
//         console.log('x');
    
//     });
// }

// z(y=> {
//     console.log('w');

//     y();

// });


// fetchRandomJoke((joke) => {
//     console.log(joke);

//     translateJoke(joke, (translatedJoke) => {
//         console.log(translatedJoke);

//         postJoke(translatedJoke, () => {
//             console.log("Joke posted successfully!");
//         });
//     });
// };

// let words = ['Hello', 'World', '!!!'];
 
// const animateAll = (animate) => {
//     setTimeout(() => {
//         animate(words[0]);
//         setTimeout(() => {
//             animate(words[1]);
//             setTimeout(() => {
//                 animate(words[2]);
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }

// const animate = (word) => {
//     console.log(word);
// }

// animateAll(animate);

// let value = 1;

// doSomething(() => {
//   value = 2;
// });

// console.log(value);


// function someThing(callback) {
// 	console.log("Do Something!");
//     someThingElse(callback)
// }

// function someThingElse (callback) {
//   console.log("Do Something Else!");
//   doThirdThing(callback)
// }

// function doThirdThing (cb) {
//   console.log("Do Third thing!");
//  cb()
// }

// someThing(
//     function(){
//   console.log("First anonymous callback!");
//   someThingElse(
//     function(){
//     console.log("Second anonymous callback!")
//     doThirdThing(
//         function() {
//       console.log("Third anonymous callback!");
//     })
//   })
// })

