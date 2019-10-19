function escrever(str, el) {
  var char = str.split('').reverse();
  var typer = setInterval(function() {
    if (!char.length) return clearInterval(typer);
    var next = char.pop();
    el.innerHTML += next;
  }, 100);
}

escrever('PARABÉNS A TODOS PROFISSIONAIS DE T.I', document.getElementById('ti'));
escrever('PYTHON', document.getElementById('python'));
escrever('RUBY', document.getElementById('ruby'));
escrever('HTML', document.getElementById('html'));
escrever('JAVASCRIPT', document.getElementById('js'));
escrever('JAVA', document.getElementById('java'));