let ICode = document.getElementById('ICode')
let btnencode = document.getElementById('btnencode')
let btnencrypt = document.getElementById('btnencrypt')
let btndecode = document.getElementById('btndecode')

let code1 = document.getElementById('code1')
let code2 = document.getElementById('code2')

btnencode.onclick = function () {
    let data = ICode.value
    data = btoa(data)
    code1.value = data
}

btndecode.onclick = function () {
    let data  = code1.value
    data = atob(data)
    code2.value = data

}

// eval == evil

btnencrypt.onclick = function () {
    let data = code1.value
    data = encryptData()
    code2.value = data

}

function encryptData (result) {
    /*
     * TODO: actually encrypt data
     * logic: turn lowercase chars to uppercase and viceversa
     */
 
}
