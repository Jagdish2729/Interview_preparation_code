//Accept alerts

page.on('dialog',async dialog=>{
    console.log(dialog.message());
    await dialog.accept();
});

//dismiss alerts

page.on('dialog',async dialog=>{
    await dialog.dismiss();
});

//get alerts type 

page.on('dialog',async dialog=>{
    console.log(dialog.type());   //alert, confirm , prompt
    await dialog.accept();
})