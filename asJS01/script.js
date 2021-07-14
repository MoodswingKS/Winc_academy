const huiswerkMaken = (vak, callback) => {
    console.log(`ok ok, ik ga nu mijn ${vak} huiswerk maken`);
    callback();
}

const klaarMetHuiswerk = () => {
    console.log("KIJK KIJK, huiswerk is af.")

}



setTimeout(function(){ huiswerkMaken("wiskunde", klaarMetHuiswerk)  }, 3000);

