

const label =  document.querySelector('.label-play').addEventListener('click',()=>{
    document.querySelector('video').setAttribute('controls','true');
    document.querySelector('video').play();
    document.querySelector('.label-play').classList.add('d-none');
  })