let output = document.querySelector(".output");
let out_string = "";

const btn = document.querySelectorAll("button");
btn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        display(e.target.innerHTML);
    })
});


const display = (element) => {
    if (out_string.length >= 9 && element !== "AC" && element !== "DEL" && element !== "=") {
        return;
    }


    if (element === "=") {
        try {
            out_string = out_string.replace(/X/g, "*").replace(/÷/g, '/');
            out_string = eval(out_string);
            output.innerHTML = out_string;
        }
        catch {
            out_string = "";
            output.innerHTML = "Error";
        }
    }
    else if (element === "AC") {
        out_string = "";
        output.innerHTML = "0";
    }
    else if (element === "DEL") {
        out_string = out_string.slice(0, -1);

        if (out_string === "") {
            output.innerHTML = "0";
        } else {
            output.innerHTML = out_string;
        }
    }
    else {
        out_string += element;
        output.innerHTML = out_string;
    }


    if (9 > out_string.length) {
        output.style.overflow = "scroll";
    } else {
        output.style.overflow = "hidden";
    }

}