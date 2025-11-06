using System;
using System.Linq; // Necesario si quieres usar el método .Sum()

public class PromedioCalificaciones
{
    public static void Main(string[] args)
    {
        // NOTA: Si tu proyecto es .NET 6 o superior (moderno), puedes eliminar 
        // las líneas 'public class PromedioCalificaciones' y 'public static void Main(string[] args)'
        // y dejar solo el código de nivel superior. Pero esta estructura es universal.

        // 1. Declarar un arreglo para almacenar las calificaciones de 5 estudiantes.
        double[] calificaciones = new double[5];

        // Inicializamos la suma para acumular los valores.
        double sumaCalificaciones = 0;
        int numEstudiantes = calificaciones.Length;

        Console.WriteLine("--- EJERCICIO 1: Promedio de Calificaciones ---");

        // 2. Permitir ingresar los valores desde teclado.
        for (int i = 0; i < numEstudiantes; i++)
        {
            double calificacion;
            bool entradaValida = false;

            do
            {
                // Salida esperada: Pide la calificación del estudiante (1-5)
                Console.Write($"Ingrese la calificación del estudiante {i + 1}: ");

                // Intenta convertir la entrada a 'double' y valida el rango.
                if (double.TryParse(Console.ReadLine(), out calificacion))
                {
                    // Validación simple para asegurar que la calificación es razonable
                    if (calificacion >= 0 && calificacion <= 100)
                    {
                        calificaciones[i] = calificacion;
                        sumaCalificaciones += calificacion;
                        entradaValida = true;
                    }
                    else
                    {
                        Console.WriteLine("Error: La calificación debe estar entre 0 y 100. Intente de nuevo.");
                    }
                }
                else
                {
                    Console.WriteLine("Error: Entrada no válida. Por favor, ingrese un número.");
                }
            } while (!entradaValida);
        }

        // 3. Calcular y mostrar el promedio general.
        double promedio = sumaCalificaciones / numEstudiantes;

        Console.WriteLine("\n-------------------------------------------");
        Console.WriteLine($"Suma total de calificaciones: {sumaCalificaciones:F2}");
        // Muestra el promedio con dos decimales, como se sugiere en la salida esperada.
        Console.WriteLine($"Promedio general: {promedio:F2}");
        Console.WriteLine("-------------------------------------------");

        // Importante: Pausa la ejecución para que el usuario pueda ver el resultado.
        Console.WriteLine("\nPresione cualquier tecla para terminar el Ejercicio 1...");
        Console.ReadKey();
    }
}