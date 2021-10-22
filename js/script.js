var xhttp = new XMLHttpRequest();

const loadData = () => {
    if (!xhttp) {
        alert("xhr object not created");
        return false;
    } 
    xhttp.onreadystatechange = reqListener;
    xhttp.open('GET', '../data.json');
    xhttp.send();
}

window.onload = loadData();

function reqListener() {
    if(xhttp.readyState === 4) {
        if(xhttp.status === 200) {
            Popular = JSON.parse(xhttp.responseText).Popular;
            // console.log(Popular);
            var fragment = document.createDocumentFragment();
            for(let i = 0; i < Popular.length; i++) {
                let item = Popular[i];
                let slides = document.createElement("div");
                slides.innerHTML = 
                '<img src=" '+item.src+'" alt="'+ item.alt +'">';
                fragment.appendChild(slides);
            }
            var target = document.getElementsByClassName('box')[0];
                target.appendChild(fragment);

            trending = JSON.parse(xhttp.responseText).trending;
            var fragment1 = document.createDocumentFragment();
            for(let i = 0; i < trending.length; i++) {
                let item1 = trending[i];
                let slides1 = document.createElement("div");
                slides1.innerHTML = 
                '<img src=" '+item1.src+'" alt="'+ item1.alt +'">';
                fragment1.appendChild(slides1);
            }
            var target1 = document.getElementsByClassName('box1')[0];
                target1.appendChild(fragment1);

            TV = JSON.parse(xhttp.responseText).TV;
            //  console.log(trending);
            var fragment2 = document.createDocumentFragment();
            for(let i = 0; i < TV.length; i++) {
                let item2 = TV[i];
                let slides2 = document.createElement("div");
                slides2.innerHTML = 
                '<img src=" '+item2.src+'" alt="'+ item2.alt +'">';
                fragment2.appendChild(slides2);
            }
            var target2 = document.getElementsByClassName('box2')[0];
                target2.appendChild(fragment2);
            
            Blockbuster = JSON.parse(xhttp.responseText).Blockbuster;
            //  console.log(trending);
            var fragment3 = document.createDocumentFragment();
            for(let i = 0; i < Blockbuster.length; i++) {
                let item3 = Blockbuster[i];
                let slides3 = document.createElement("div");
                slides3.innerHTML = 
                '<img src=" '+item3.src+'" alt="'+ item3.alt +'">';
                fragment3.appendChild(slides3);
            }
            var target3 = document.getElementsByClassName('box3')[0];
                target3.appendChild(fragment3);

            Originals = JSON.parse(xhttp.responseText).Originals;
            //  console.log(trending);
            var fragment4 = document.createDocumentFragment();
            for(let i = 0; i < Originals.length; i++) {
                let item4 = Originals[i];
                let slides4 = document.createElement("div");
                slides4.innerHTML = 
                '<img src=" '+item4.src+'" alt="'+ item4.alt +'">';
                fragment4.appendChild(slides4);
            }
            var target4 = document.getElementsByClassName('box4')[0];
                target4.appendChild(fragment4);
        }
    }
}

reqListener();