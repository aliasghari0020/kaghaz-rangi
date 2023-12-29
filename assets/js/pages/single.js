



// function createTextFild(isSubComment) {
//     const textFild = document.createElement('div');
//     const classes = isSubComment ? "d-flex align-items-center comment-fild py-4" : "d-flex align-items-center comment-fild py-4 pe-14";
//     textFild.setAttribute('class', classes);
//     textFild.innerHTML = `
//         <div class="avatar ms-2"><img src="./assets/image/avatar.png" alt="avatar"></div>
//         <form action="" class="w-100 text-fild active " >
//         <input type="text" placeholder="نظر خود را بنویسید..." class="  text-caption w-100">
//         <div class=" justify-content-end mt-1">
//             <button class="colse border-0 bg-white text-caption  px-2  ">انصراف</button>
//             <button class="send-comment border-0 bg-white text-caption px-2  me-1 ">ارسال نظر</button>
//         </div>
//     </form>
//     `;
//     return textFild;
// }


function addTextFildToCommentCard(commentCard) {
    if (!commentCard.querySelector('.comment-fild')) {
        const isSubComment = commentCard.classList.contains('sub-comment');
        const textFild = createTextFild(isSubComment);
        commentCard.appendChild(textFild);
    }
}

function removeTextFildFromCommentCard(commentCard) {
    const textFild = commentCard.querySelector('.comment-fild');
    if (textFild) {
        commentCard.removeChild(textFild);
    }
}

document.querySelectorAll(".reply").forEach(btn => {
    btn.addEventListener("click", () => {
        const commentCard = btn.closest('.comment-card');
        addTextFildToCommentCard(commentCard);
        let colse =  commentCard.querySelector(".colse");

        colse.addEventListener("click",()=>{
            removeTextFildFromCommentCard(commentCard)
        })
        
        document.querySelectorAll('form').forEach(form => {
            form.addEventListener('submit', event => {
                event.preventDefault();
            });
        });
    });
});


const activeInput = document.querySelector("#comment-main-form input ");



activeInput.addEventListener("focus", ()=>{
    document.querySelector("#comment-main-form ").classList.add("active")
});

activeInput.addEventListener("blur", ()=>{
    document.querySelector("#comment-main-form ").classList.remove("active")
})



document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', event => {

        event.preventDefault();
    });
});




document.addEventListener('DOMContentLoaded', (event) => {
    const mainDivs = document.querySelectorAll('.main-comment');
    mainDivs.forEach(div => {
      if (div.querySelector('.sub-container').children.length === 0) {
        div.querySelector('.btn-show-sub').style.display = 'none';
      } else {
        div.querySelector('.btn-show-sub').style.display = 'block';
      }
      div.querySelector('.btn-show-sub').addEventListener('click', () => {

        const btnShowSub = div.querySelector('.btn-show-sub');
        console.log(btnShowSub)
        if (btnShowSub.classList.contains('collapsed')) {

          div.querySelector(".btn-show-sub .text").innerHTML = "مشاهده همه پاسخ‌ها";
    
        } else {
            div.querySelector(".btn-show-sub .text").innerHTML = "بستن پاسخ‌ها";
        
        }
      });
    });
  });
  