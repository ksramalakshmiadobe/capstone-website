export default async function decorate(block) {
    let data = await fetch("https://main--capstone-website--ksramalakshmiadobe.hlx.live/magazine/magazine-index.json");
    let response = await data.json()
    console.log(response);
  }