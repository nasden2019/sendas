// form
const form = document.querySelector('form');
const spanN = document.querySelector('.spanN');
const spanE = document.querySelector('.spanE');
const spanC = document.querySelector('.spanC');

form.addEventListener('submit', () => {
    // e.preventDefault(); lo quitamos para q lo envie

    // console.log(form.email.value)
    if (form.email.value.trim() == '') {
        form.email.style.border = "1px solid red";
        spanE.innerHTML = "Escriba su email";
        spanE.classList.add('error')
    } else {
        form.email.style.border = "2px solid green";
    }

    if (form.name.value.trim() == '') {
        form.name.style.border = "1px solid red";
        spanN.innerHTML = "Escriba su nombre";
        spanN.classList.add('error')
    } else {
        form.name.style.border = "2px solid green";
    }

    if (form.comment.value.trim() == '') {
        form.comment.style.border = "1px solid red";
        spanC.innerHTML = "No te olvides del asunto";
        spanC.classList.add('error')
    } else {
        form.comment.style.border = "2px solid green";
    }
})