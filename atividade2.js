//Sistema de registro de eventos

//Datas
var hoje = new Date("2022/03/15")
var dataevento = new Date("2022/03/20")

//Participantes e idade
let idade = 18
let participantes = ["Alex", "Junior", "Paulo" , "Helena"]

console.log("Bem-vindo(a), informe a data para agendar o evento.")
console.log(dataevento)

//Comparação das datas
{if (hoje > dataevento)
	console.log("Data inválida")
	else if (hoje < dataevento)
	console.log("Data válida, informe o número de participantes e suas idades.")
}
//Comparação do número de participantes
console.log(participantes.length)

{if (participantes.length < 100)
	console.log ("Quantidade aceitável, informe a idade dos participantes.")
	else if (participantes.length > 100)
	console.log ("Quantidade máxima de participantes excedida. Não é possível o cadastro.")
}
//Verificação da idade dos participantes
console.log(idade)

{if (idade >= 18)
		console.log("Registro permitido, informe o nome dos participantes para concluir.")
	else if (idade < 18)
		console.log("Participantes menores de idade não são permitidos")
}

console.log(participantes)
console.log("Cadastro concluído")