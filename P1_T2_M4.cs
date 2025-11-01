using System;

// El código se encapsula en la clase Program con el método Main, 
// el único punto de entrada que C# necesita.
public class Program
{
    public static void Main(string[] args)
    {
        // 1. Declarar la matriz de 3x4 (3 vendedores, 4 semanas).
        int filasVendedores = 3;
        int columnasSemanas = 4;
        double[,] ventas = new double[filasVendedores, columnasSemanas];
        double ventaTotalGeneral = 0;

        Console.WriteLine("=============================================");
        Console.WriteLine("    EJERCICIO 2: Matriz de Ventas (3x4)");
        Console.WriteLine("=============================================");

        // 2. Solicitar las ventas por teclado usando bucles anidados.
        for (int i = 0; i < filasVendedores; i++) // Recorre vendedores
        {
            Console.WriteLine($"\n--- Vendedor {i + 1} ---");
            for (int j = 0; j < columnasSemanas; j++) // Recorre semanas
            {
                double venta;
                bool entradaValida = false;

                do
                {
                    Console.Write($"  Ingrese venta de la Semana {j + 1}: ");
                    // Valida que la entrada sea un número positivo
                    if (double.TryParse(Console.ReadLine(), out venta) && venta >= 0)
                    {
                        ventas[i, j] = venta;
                        entradaValida = true;
                    }
                    else
                    {
                        Console.WriteLine("ERROR: Ingrese un valor numérico positivo.");
                    }
                } while (!entradaValida);
            }
        }

        Console.WriteLine("\n--- Resumen de Totales ---");

        // 3. Calcular y mostrar la venta total por vendedor.
        for (int i = 0; i < filasVendedores; i++)
        {
            double ventaTotalVendedor = 0;
            for (int j = 0; j < columnasSemanas; j++)
            {
                ventaTotalVendedor += ventas[i, j];
            }

            // Mostrar la venta total por vendedor (Salida esperada)
            Console.WriteLine($"Ventas del Vendedor {i + 1}: {ventaTotalVendedor:F0}");
            ventaTotalGeneral += ventaTotalVendedor; // Acumula el total general
        }

        // 4. Mostrar la venta total general (Salida esperada)
        Console.WriteLine($"Venta total general: {ventaTotalGeneral:F0}");
        Console.WriteLine("--------------------------------");

        // Pausa la Consola
        Console.WriteLine("\nPresione cualquier tecla para finalizar...");
        Console.ReadKey();
    }
}