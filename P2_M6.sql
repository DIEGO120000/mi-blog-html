-- ####################################################################
-- ################## CONSULTAS DE SELECCIONES.SQL ##################
-- ####################################################################

USE almacen;
GO

-- --------------------------------------------------------------------
-- A. LISTA DE SELECCIÓN DE DATOS
-- --------------------------------------------------------------------

-- Tarea 1: Lista de productos con precio de venta y precio con I.V.A. (Resuelta en el chat)
-- Obtener una lista de todos los productos indicando para cada uno su idsuplidor, idproducto, descripción, precio y precio con I.V.A.
SELECT
    idsuplidor,
    idproducto,
    descripcion,
    (preciocompra * (1 + ganancia / 100.0)) AS precioVenta,
    (preciocompra * (1 + ganancia / 100.0) * (1 + itb / 100.0)) AS PrecioConItebis
FROM
    productos;
GO

-- Tarea 2: Detalles de cada pedido: importe, itebis, etc. (Resuelta en el chat)
-- De cada pedido queremos saber su número de detpedido, idproducto, descripcion, cantidad, precio unitario, el itebis e importe.
SELECT
    nopedido,
    idproducto,
    descripcion,
    cantidad,
    precio AS precioUnitario,
    (cantidad * precio * 0.18) AS itebis,
    (cantidad * precio * 1.18) AS importe
FROM
    detpedido;
GO

-- Tarea 3: Importe total de las ventas por condiciones (Contado/Crédito). (Resuelta en el chat)
-- NOTA: Se resuelve agrupando las tablas pedidos y detpedido.
SELECT
    p.condiciones,
    SUM(d.cantidad * d.precio * 1.18) AS ImporteTotalConItebis
FROM
    pedidos p
INNER JOIN
    detpedido d ON p.nopedido = d.nopedido
GROUP BY
    p.condiciones;
GO

-- Tarea 4: Importe total de las ventas por empleado. (Resuelta en el chat)
-- NOTA: Se resuelve agrupando las tablas empleados, pedidos y detpedido.
SELECT
    e.nombre AS NombreEmpleado,
    SUM(d.cantidad * d.precio * 1.18) AS ImporteVentas
FROM
    empleados e
INNER JOIN
    pedidos p ON e.idempleado = p.idempleado
INNER JOIN
    detpedido d ON p.nopedido = d.nopedido
GROUP BY
    e.nombre
ORDER BY
    ImporteVentas DESC;
GO

-- Tarea 5: Importe total de las ventas por cliente.
SELECT
    c.nombre AS NombreCliente,
    SUM(d.cantidad * d.precio * 1.18) AS ImporteCompras
FROM
    cliente c
INNER JOIN
    pedidos p ON c.idcliente = p.idcliente
INNER JOIN
    detpedido d ON p.nopedido = d.nopedido
GROUP BY
    c.nombre
ORDER BY
    ImporteCompras DESC;
GO

-- Tarea 6: Nombre, nº de días trabajando y año de nacimiento de cada empleado.
SELECT
    nombre,
    DATEDIFF(DAY, fechanac, GETDATE()) AS NumeroDiasTrabajando,
    YEAR(fechanac) AS AñoNacimiento,
    DATEDIFF(YEAR, fechanac, GETDATE()) -
    CASE WHEN MONTH(fechanac) > MONTH(GETDATE()) OR
              (MONTH(fechanac) = MONTH(GETDATE()) AND DAY(fechanac) > DAY(GETDATE()))
         THEN 1 ELSE 0 END AS EdadActual
FROM
    empleados;
GO

-- --------------------------------------------------------------------
-- B. ORDENACIÓN DE FILAS
-- --------------------------------------------------------------------

-- Tarea 7: Lista de clientes agrupados por código de representante asignado (idempleado).
SELECT
    c.*,
    p.idempleado
FROM
    cliente c
INNER JOIN
    pedidos p ON c.idcliente = p.idcliente
ORDER BY
    p.idempleado, c.nombre;
GO

-- Tarea 8: Oficinas ordenadas por región (ASC), ciudad (ASC) y número de oficina (DESC).
SELECT
    *
FROM
    oficina
ORDER BY
    region ASC,
    ciudad ASC,
    idoficina DESC;
GO

-- Tarea 9: Pedidos ordenados por fecha de pedido.
SELECT
    *
FROM
    pedidos
ORDER BY
    fecha ASC;
GO

-- --------------------------------------------------------------------
-- C. SELECCIÓN DE FILAS (FILTRADO)
-- --------------------------------------------------------------------

-- Tarea 10: Listar las cuatro líneas de pedido más caras (mayor importe).
SELECT TOP 4
    nopedido,
    idproducto,
    descripcion,
    (cantidad * precio * 1.18) AS ImporteTotal
FROM
    detpedido
ORDER BY
    ImporteTotal DESC;
GO

-- Tarea 11: 5 líneas de pedido de menor precio unitario.
SELECT TOP 5
    nopedido,
    idproducto,
    descripcion,
    cantidad,
    precio AS precioUnitario,
    (cantidad * precio * 0.18) AS itebis,
    (cantidad * precio * 1.18) AS importe
FROM
    detpedido
ORDER BY
    precioUnitario ASC;
GO

-- Tarea 12: Información de los pedidos de marzo.
SELECT
    *
FROM
    pedidos
WHERE
    MONTH(fecha) = 3;
GO

-- Tarea 13: Números de los empleados que tienen una oficina asignada.
SELECT
    idempleado
FROM
    empleados
WHERE
    idoficina IS NOT NULL;
GO

-- Tarea 14: Números de las oficinas que no tienen director (idsupervisor es NULL).
SELECT
    idoficina
FROM
    oficina
WHERE
    idsupervisor IS NULL;
GO

-- Tarea 15: Datos de las oficinas de las regiones del norte y del este (ordenadas por región).
SELECT
    *
FROM
    oficina
WHERE
    region IN ('Cibao', 'Este') -- Ajusté 'Norte' por 'Cibao', que es el valor usado en tu inserción.
ORDER BY
    CASE region
        WHEN 'Cibao' THEN 1
        WHEN 'Este' THEN 2
        ELSE 3
    END;
GO

-- Tarea 16: Empleados de nombre Julia.
SELECT
    *
FROM
    empleados
WHERE
    nombre = 'Julia';
GO

-- Tarea 17: Productos cuyo nombre acabe en 'o'.
SELECT
    *
FROM
    productos
WHERE
    descripcion LIKE '%o';
GO

-- Tarea 18: Total de todos los pedidos a Créditos.
SELECT
    SUM(p.importe) AS TotalPedidosACredito
FROM
    pedidos p
WHERE
    p.condiciones = 'Crédito';
GO