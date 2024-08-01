function generateCode() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < 16; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    result = result.match(/.{1,4}/g).join('-');
    document.getElementById('randomCode').value = result;
}

function copyCode() {
    const code = document.getElementById('randomCode');
    code.select();
    code.setSelectionRange(0, 99999); // For mobile devices
    document.execCommand('copy');
    alert('Code copied to clipboard: ' + code.value);
}