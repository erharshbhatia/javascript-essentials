process.env.UV_THREADPOOL_SIZE=12
const os = require('os');
const crypto = require('crypto')

const cpuCores = os.cpus().length;

console.log(`Number of CPU cores: ${cpuCores}`);


const start = Date.now();

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log('1: ' , Date.now() - start)
})

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log('2: ' , Date.now() - start)
})
crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log('3: ' , Date.now() - start)
})
crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log('4: ' , Date.now() - start)
})
crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log('5: ' , Date.now() - start)
})
crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log('6: ' , Date.now() - start)
})
crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log('7: ' , Date.now() - start)
})
crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log('8: ' , Date.now() - start)
})

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log('9: ' , Date.now() - start)
})
crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log('10: ' , Date.now() - start)
})
crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log('11: ' , Date.now() - start)
})
crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log('12: ' , Date.now() - start)
})
// with threads we can be concurrent but not any speed optimization








