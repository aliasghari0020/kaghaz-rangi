

const label =  document.querySelector('.label-play').addEventListener('click',()=>{
    document.querySelector('video').setAttribute('controls','true');
    document.querySelector('video').play();
    document.querySelector('.label-play').classList.add('d-none');
  })




const activeInputComment = () => {
  const inputBox = document.querySelector('#main-input-comment');
  const input = inputBox.querySelector('input');

  let boxClicked = false;

  inputBox.addEventListener('mousedown', () => {
      boxClicked = true;
      input.focus()
      inputBox.classList.add('active');
  });

  document.addEventListener('mouseup', () => {
      if (!boxClicked) {
          inputBox.classList.remove('active');
          input.blur()
      }
      boxClicked = false;
  });
}




activeInputComment();


const changeTextCollapse = ()=>{
  const commentBox = document.querySelectorAll('.comment-box');
  commentBox.forEach((e)=>{
    const collapseText = e.querySelectorAll(".btn-show-sub");
    collapseText.forEach((item)=>{
      const text = item.querySelector('.text')
      item.addEventListener('click',()=>{
       if( item.classList.contains('collapsed')){
        text.innerHTML = "مشاهده همه پاسخ‌ها";
       }else{
        text.innerHTML = "بستن پاسخ‌ها";
       }
      })
    })
  })

}

changeTextCollapse()


