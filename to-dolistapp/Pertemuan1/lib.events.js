import {EventEmitter} from 'events';

const emitter = new EventEmitter();
emitter.on('send_email', (email_address)=>{
    console.info("email telah dikirim ke", email_address)
})

function forgetPassword (){
    console.log("Start Forgot Password Proccess");
    emitter.emit("send_email","ayman@gmail.com");

}

forgetPassword();