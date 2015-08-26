import time


def decorador(funcao):
    def calcularTempo(*arg):
        tempo_inicial = time.time()
        r = funcao(*arg)
        tempo_final = time.time();
        print(tempo_final - tempo_inicial)
        return r

    return calcularTempo

@decorador
def somar(a, b):
    return a + b


# somar = decorador(somar)

print(somar(1, 2))
