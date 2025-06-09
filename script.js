let message=document.getElementById("message");
message.style.fontSize="40px";
message.style.color="#00FF00";
var mes,time;
async function printMess(mes,time){
    return new Promise(resolve=>{
        setTimeout(()=>{
        message.innerHTML= `${mes}<span class="blinking-dots">...</span>`;
        resolve();
    },time);
    })

}
async function main() {
    await printMess("Creating Connection",1000);
    await printMess("Reading your Files",4000);
    await printMess("Files Detected",7000);
    await printMess("Transferring Access",2000);
    await printMess("extraction Sucessfull",7000);
    await new Promise(resolve => setTimeout(resolve, 500));
    alert("You are Hacked");

}
main();