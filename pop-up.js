function showPopup() {
    document.querySelector(".pop-up").style.opacity = "1";
    document.querySelector(".pop-up").style.visibility = "visible";
    document.body.style.overflow = "hidden";
}

function hidePopup() {
    document.querySelector(".pop-up").style.opacity = "0";
    document.querySelector(".pop-up").style.visibility = "hidden";
    document.body.style.overflow = "";
}

function autoShowPopup() {
    setTimeout(showPopup, 7000);
}

document.getElementById("close").addEventListener("click", hidePopup);

window.addEventListener("load", autoShowPopup);

window.onbeforeunload = () => {
    for (let e of document.getElementsByTagName("form")) e.reset();
};

document.getElementById("myForm").addEventListener("submit", function (e) {
    var t;
    e.preventDefault();
    let o = document.getElementById("name"),
        r = document.getElementById("Number");
    if (((t = r.value), !/^[6-9]\d{9}$/.test(t))) {
        r.value = "";
        r.placeholder = "Please enter valid number";
        r.classList.add("error-message");
        return;
    }
    fetch("https://api.jotform.com/form/233248955667471/submissions?apiKey=7d0a4252d0feba7675514b3081e96634")
        .then((e) => {
            if (e.ok) return e.json();
            throw Error("Failed to fetch data");
        })
        .then((e) => {
            let t = e.content.find((e) => {
                let t = e.answers["1"].answer,
                    l = e.answers["2"].answer;
                return t === o.value && l === r.value || l === r.value;
            });
            t
                ? ((r.value = ""), (r.placeholder = "This phone number is already registered."), r.classList.add("error-message"))
                : document.getElementById("myForm").submit();
        })
        .catch((e) => {
            console.error("Error:", e);
            alert("Failed to fetch data from JotForm.");
        });
});

