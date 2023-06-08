// JavaScript Sample

// body の背景色を変える
function MyFunction01() {
    const obj = document.body;
    obj.style.backgroundColor = 'violet';
}

// ID要素 の背景色を変える
function MyFunction02() {
    const obj = document.getElementById('id01');
    obj.style.backgroundColor = '#C9A2B6';
  }

  // CLASS要素 の背景色を変える
function   MyFunction03() {
    const lines = document.getElementsByClassName('class01');
    for( let i=0; i<lines.length; i++){
      lines[i].style.backgroundColor = '#B8CADC';
    }
  }

  // HTML要素 の背景色を変える
function MyFunction04() {
    const obj = document.getElementsByTagName('p');
    for( let i=0; i<obj.length; i++ ) {
      obj[i].style.backgroundColor = '#E1E6F0';
    }
  }
  