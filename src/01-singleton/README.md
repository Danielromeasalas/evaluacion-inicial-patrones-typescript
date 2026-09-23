¿Qué problema intenta resolver Singleton?

Hace que solo exista una única instancia de una clase, si esa instancia no existe todavía, la crea.


¿Por qué suele utilizarse un constructor private?

Para que no se pueda acceder a el desde otras clases, y las únicas veces que se haga, sea mediante el propio método getInstnace


¿Cómo se obtiene una instancia de la clase?

Se recurre al método de getInstance(), si esta instancia no existe, se crea inmediatamente, y la proxima vez que se vuelva a llamar al método, devolvera esta instancia que se ha creado anteriormente.


¿Qué ocurriría si pudiéramos utilizar new libremente?

Lo que ocurriría es que se podría crear mas de una instancia desde otras clases, quitándole el sentido al singleton.


Pon un ejemplo real donde utilizarías Singleton.

Si en un proyecto estoy haciendo uso de una clase Factory, implementaria un Singleton para tener solamente un Factory y evitar sobrecargar el programa con un exceso de estos.


¿Qué inconveniente puede tener abusar de Singleton?



