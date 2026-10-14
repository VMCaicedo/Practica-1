def sumar(a, b):
    return a + b


def restar(a, b):
    return a - b


def multiplicar(a, b):
    return a * b


def dividir(a, b):
    return a / b


operacion = input("Ingresa la operación: ")

if "+" in operacion:
    numero1, numero2 = operacion.split("+")
    resultado = sumar(float(numero1), float(numero2))

elif "-" in operacion:
    numero1, numero2 = operacion.split("-")
    resultado = restar(float(numero1), float(numero2))

elif "*" in operacion:
    numero1, numero2 = operacion.split("*")
    resultado = multiplicar(float(numero1), float(numero2))

elif "/" in operacion:
    numero1, numero2 = operacion.split("/")
    resultado = dividir(float(numero1), float(numero2))

else:
    print("Operación no válida")
    resultado = None


if resultado is not None:
    print("Resultado:", resultado)