import { url, types } from "./data.js";
import { addComment } from "./result.js";
import { startQA } from "./test.js";

const start = document.querySelector(".start-button");
start.addEventListener("click", () => startQA());

const share = document.querySelector("#main > .main-container > .share-button");
share.addEventListener("click", async () => {
    let data = {
        title: "쏨BTI",
        text: "내 소마 개발자 유형은?",
        url: window.location.href
    };

    if (typeof navigator.share !== "undefined" && navigator.canShare)
        await navigator.share(data);
    else
    {
        await navigator.clipboard.writeText(`${data.title} - ${data.text} ${data.url}`);
        alert("URL이 복사됐습니다!");
    }
});

fetch(`${url}/test/rank`)
    .then(response => response.json())
    .then(result => {
        const targets = [document.querySelector("#first"), document.querySelector("#second")];

        targets.forEach((target, i) => {
            const name = target.querySelector("h1");
            const image = target.querySelector("img");

            name.innerHTML = result[i].type;
            image.setAttribute("src", `./images/_result_chr_${result[i].id}.png`);
        })
    })

fetch(`${url}/count`)
    .then(response => response.json())
    .then(result => {
        const count = document.querySelector(".users .count > h1");

        count.innerHTML = result.detail;
    });

fetch(`${url}/comment/all`)
    .then(response => response.json())
    .then(result => result.forEach(x => 
        addComment("main", x.type_id, types.find(({ id }) => id === x.type_id).type, x.datetime, x.text))
    );