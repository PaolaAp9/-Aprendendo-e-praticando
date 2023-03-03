const fetch = require('node-fetch');

async function checaStatus(arrayUrles){
    //promises async - è importante que venha como array,pois elas são ordenadas
    const arrayStatus = await Promise.all(arrayUrles.map(async url => {const res = await fetch(url)
            return res.status;
        }))
        return arrayStatus;
    }

function geraArrayDeUrls(arrayLinks){
    return arrayLinks
    .map(objetoLink => Object
        .values(objetoLink).join())
}

async function validaUrls(arrayLinks){
    //return arrayLinks
    //return geraArrayDeUrls(arrayLinks);
    const links = geraArrayDeUrls(arrayLinks);
    const statusLinks = await checaStatus(links);
    //console.log(arrayLinks,statusLinks);
    //return statusLinks;
    const resultado = arrayLinks.map((objeto,indice) =>({
        ...objeto,
        status: statusLinks[indice]
    }))
    return resultado;
}
module.exports = validaUrls;