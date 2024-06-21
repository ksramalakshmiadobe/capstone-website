export default async function decorate(block) {
    let data = await fetch("https://main--capstone-website--ksramalakshmiadobe.hlx.live/magazine/magazine-index.json");
    let response = await data.json()
    console.log(response);
    let articleList = document.createElement('ul');

    response.array.forEach(element => {
        let listItem = document.createElement('li');
        const innerDiv1 = document.createElement('div');
        innerDiv1.setAttribute("class", "articles-card-image");
        const innerDiv2 = document.createElement('div');
        innerDiv2.setAttribute("class", "articles-card-body");

        const picture = document.createElement('picture');

        const sourceWebp1 = document.createElement('source');
        sourceWebp1.setAttribute('type', 'image/webp');
        sourceWebp1.setAttribute('srcset', element["image"]);
        sourceWebp1.setAttribute('media', '(min-width: 600px)');
        picture.appendChild(sourceWebp1);

        const sourceWebp2 = document.createElement('source');
        sourceWebp2.setAttribute('type', 'image/webp');
        sourceWebp2.setAttribute('srcset', element["image"]);
        picture.appendChild(sourceWebp2);

        const sourcePng = document.createElement('source');
        sourcePng.setAttribute('type', 'image/png');
        sourcePng.setAttribute('srcset', element["image"]);
        sourcePng.setAttribute('media', '(min-width: 600px)');
        picture.appendChild(sourcePng);

        const img = document.createElement('img');
        img.setAttribute('loading', 'lazy');
        img.setAttribute('alt', '');
        img.setAttribute('src', element["image"]);
        img.setAttribute('width', '450');
        img.setAttribute('height', '300');
        picture.appendChild(img);

        innerDiv1.appendChild(picture);

        const p1 = document.createElement('p');
        p1.setAttribute("class", "button-container");
        const a = document.createElement('a');
        a.setAttribute('href', element["path"]);
        a.textContent = element["title"];
        p1.appendChild(a);
        innerDiv2.appendChild(p1);

        const p2 = document.createElement('p');
        p2.textContent = element["description"];
        innerDiv2.appendChild(p2);

        outerDiv.appendChild(innerDiv1);
        outerDiv.appendChild(innerDiv2);

        listItem.append(outerDiv);
        articleList.appendChild(listItem);
    });
    block.append(articleList);
  }