const idade = Number(prompt('Qual sua idade?'));

if (idade >= 25 && idade <= 65) {
  const renda = Number(prompt('Qual sua renda?'));

  if (renda >= 1500) {
    const valorEmprestimo = Number(prompt('Qual valor do empréstimo?'));

    if (valorEmprestimo >= 1000 && valorEmprestimo <= renda * 10) {
      alert('Parabéns! Seu empréstimo foi aprovado :)');

      let quantidadeDeParcelas = Number(prompt('Em quantas parcelas você gostaria de pagar seu empréstimo? Aceitamos acordos entre 5 e 24 parcelas.'));

      if (quantidadeDeParcelas < 5) {
        quantidadeDeParcelas = 5;
      }
      else if (quantidadeDeParcelas > 24) {
        quantidadeDeParcelas = 24;
      }

      let total = valorEmprestimo * (1 + 0.08) ** quantidadeDeParcelas;
      
      alert(`Seu empéstimo deverá ser pago em ${quantidadeDeParcelas} vezes de R$${(total/quantidadeDeParcelas).toFixed(2)}. O valor total que deverá ser pago é de R$${total.toFixed(2)}.`)
    }
    else {
      alert(`O valor requisitado de R$${valorEmprestimo} não pode ser emprestado. Por favor, entre em contato com um de nossos gerentes.`);
    }
  }
  else {
    alert(`Sua renda precisa ser igual ou maior que R$1500,00. A renda digitada foi R$${renda}!`);
  }
}
else {
  alert(`Sua idade precisa ser entre 25 e 65 anos! O valor digitado foi ${idade}`);
}