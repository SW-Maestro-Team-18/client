import { url } from "./data.js";

let typeName = "";
let id = -1;

const share = document.querySelector("#result > .main-container > .share-button");
share.addEventListener("click", async () => {
    let data = {
        title: "쏨BTI",
        text: `내 소마 개발자 유형은 ${typeName}?!`,
        url: window.location.href
    };

    if (typeof navigator.share !== "undefined" && navigator.canShare)
    {
        navigator.share(data)
            .then(() => {
                let fetchData = {
                    method: "PUT",
                    body: JSON.stringify({
                        type_id: id
                    }),
                    headers: new Headers({
                        "Content-Type": "application/json"
                    })
                };
        
                fetch(`${url}/share`, fetchData)
                    .then(() => {
                        const shareCount = document.querySelector("#result > .main-container > .share-button > .count > span");

                        shareCount.innerHTML = parseInt(shareCount.innerHTML) + 1;
                    });
            });
    }
    else
    {
        await navigator.clipboard.writeText(`${data.title} - ${data.text} ${data.url}`);
        alert("URL이 복사됐습니다!");
    }
});

const submit = document.querySelector(".submit-button");
submit.addEventListener("click", () => {
    const input = document.querySelector("#result > .main-container > .comments > .input > .content > input");

    let data = {
        method: "POST",
        body: JSON.stringify({
            type_id: id,
            text: input.value,
            password: "1234"
        }),
        headers: new Headers({
            "Content-Type": "application/json"
        })
    };

    fetch(`${url}/comment/new`, data)
        .then(response => response.json())
        .then(result => {
            addComment("result", id, typeName, result.datetime, result.text);
        })

    input.value = "";
})

export async function setResult(ansList)
{
    let data = {
        method: "POST",
        body: JSON.stringify({ choices: ansList }),
        headers: new Headers({
            "Content-Type": "application/json"
        })
    };

    await fetch(`${url}/test/result`, data)
        .then(response => response.json())
        .then(result => {
            const name = document.querySelector(".type-name > h1");
            const description = document.querySelector(".description > span");
            const typeImage = document.querySelector(".type-image");
            const inputImage = document.querySelector("#result > .main-container > .comments > .input > .image > img");

            id = result.id;
            typeName = result.type;

            name.innerHTML = result.type;
            description.innerHTML = result.description;
            typeImage.setAttribute("src", `./images/_result_chr_${id}.png`);
            inputImage.setAttribute("src", `./images/_result_chr_${id}.png`);
        });

    await fetch(`${url}/share/${id}`)
        .then(response => response.json())
        .then(result => {
            const shareCount = document.querySelector("#result > .main-container > .share-button > .count > span");

            shareCount.innerHTML = result.sharecount;
        });

    await fetch(`${url}/comment/${id}`)
        .then(response => response.json())
        .then(result => result.forEach(x => addComment("result", id, typeName, x.datetime, x.text)));
}

export function addComment(position, id, typeName, dateTime, text)
{
    const comments = document.querySelector(`#${position} > .main-container > .comments > .comments-container`);
    let comment = document.createElement("div");
    comment.className = "comment";

    let imageContainer = document.createElement("div");
    imageContainer.className = "image";

    let content = document.createElement("div");
    content.className = "content";

    let image = document.createElement("img");
    image.setAttribute("alt", "유형 이미지");
    image.setAttribute("src", `./images/_result_chr_${id}.png`);
    imageContainer.appendChild(image);

    let name = document.createElement("strong");
    name.className = "small-font";
    name.innerHTML = typeName;
    content.appendChild(name);

    let date = document.createElement("span");
    date.className = "smaller-font";
    date.innerHTML = dateTime.split("T").join(" ");
    content.appendChild(date);

    let innerText = document.createElement("span");
    innerText.className = "small-font";
    innerText.innerHTML = text;
    content.appendChild(innerText);

    comment.appendChild(imageContainer);
    comment.appendChild(content);

    comments.appendChild(comment);

    let separator = document.createElement("div");
    separator.className = "separator";
    comments.appendChild(separator);
}