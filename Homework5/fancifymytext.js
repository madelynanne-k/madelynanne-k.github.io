
const onPush = () => {
    alert("Hello, world!");
    const big = document.getElementById("writing").style.fontSize = "1.5em";
}

const fancy = () => {
    const isFancy = document.getElementById("FancyShmancy").checked;
    const isBoring = document.getElementById("BoringBetty").checked;
    const isMoo = document.getElementById("Moo").checked;
   

    if (isFancy) {
        alert("FancyShmancy");
        const bold = document.getElementById("writing").style.fontWeight = "bold";
        const color = document.getElementById("writing").style.color = "blue";
        const line = document.getElementById("writing").style.textDecoration = "underline";
    }

    if (isBoring) {
        const unbold = document.getElementById("writing").style.fontWeight = "normal";
        const uncolor = document.getElementById("writing").style.color = "black";
        const unline = document.getElementById("writing").style.textDecoration = "none";
        const unbig = document.getElementById("writing").style.fontSize = "1em";
        const unMoo = () => {
            const lower = document.getElementById("writing");
            lower.value = lower.value.toLowerCase();
            let str1 = lower.value;
            const first = str1.substring(0,1).toUpperCase();
            str1 = first + str1.substring(1);
            lower.value = str1;
            let str2 = lower.value;
            let seperate = str2.split("-moo");
            str2 = seperate.join("");
            lower.value = str2;
        }
        unMoo();
    }

    if (isMoo) {
        const upper = document.getElementById("writing");
        upper.value = upper.value.toUpperCase();
        let text = upper.value;
        if (text.includes(".")) {
            let parts = text.split(".");
            text = parts.join("-Moo.");
            upper.value = text;
        } else {
            upper.value = upper.value + "-Moo";
        }
    }
}
