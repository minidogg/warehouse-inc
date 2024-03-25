// This script should NEVER include any utils related to the game itself.
// Instead this should be used for general utils like the one below.
function colorLog(text,color="lime",fontSize="15px"){
    console.log("%c "+text, `
        color:${color};
        font-size:${fontSize};
    `);
}

document.body.scrollTop = document.body.scrollHeight;
