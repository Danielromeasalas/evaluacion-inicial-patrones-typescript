¿Qué problema resuelve Factory?

    Factory soluciona el problema de que cuando se quiera crear un nuevo tipo de objeto, podemos añadir un nuevo elemento en el switch de la clase factory, lo que permitiria crear ese nuevo objeto desde cualquier otra clase llamando siempre al mismo método (el de la clase Factory).


¿Qué ventaja tiene respecto a utilizar new directamente por toda la aplicación?

    Es preferible utilizar factory antes que new ya que de esta forma cada vez que se quiera crear un objeto se llama todo el timepo a la mismo método, esto hace el código mucho mas limpio y no se sobrecarga.


¿Qué tendría que ocurrir si mañana añadimos WhatsAppNotification?
¿Quién tiene la responsabilidad de crear los objetos?

    Quien tiene la responsabildiad de crear objetos es el objeto de tipo factory que creamos desde el main, y que es al que llamaremos cada vez que queramos crear un nuevo objeto.


¿Qué ventaja proporciona Factory respecto al acoplamiento?
