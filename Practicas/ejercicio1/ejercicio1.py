#Python es un lenguaje de alto nivel, orientado a objetos, lenguaje interpretado
#Variables : Son espacios de memoria en los que voy a almacenar distintos tipos de datos 
#Cuatro tipos de datos simples

#string : cadena de texto, se escribe con "", '', """""", '''''',
#Las comillas simples y dobles se utilizan en textos de una sola línea
#Las comillas triples se utilizan en textos multiples
 
nombre = "Fernanda"
ch = "CH73"
#Numero enteros 
34
#Numeros flotantes (punto decimal)
34.4
#Boleanos : Se dividen en True o False (se escribe con mayuscula)
True 
False

saludo = "Hola " + nombre + "Bienvenido " + ch
print(saludo)

#Ejercico Unput/almaceno datos/output
nombre = input("¿Como te llamas?:")
edad = input("¿Cuantos años tienes?:")
ch = input("¿Cual es tu ch?:")
dato_desconocido = input("Cuentame un dato secreto:")
dato_random = input("Cuentame un dato random:")

print(nombre + edad + ch + dato_desconocido + dato_random)