# READ ME: ENTREGA 2 --- EQUIPO 7 :ballot_box_with_check:
Tomando como referencia la los 10 puntos señalados en el enunciado
1. Mejoras relativo a front :ballot_box_with_check: 
2. Documentación clara y completa :ballot_box_with_check:
3. Comportamiento del servidor :ballot_box_with_check:
4. Uso HTTP :ballot_box_with_check:
5. Uso de request/response y json :ballot_box_with_check:
6. Respuesta del servidor (JSON) :ballot_box_with_check:
7. Modelo entidad relación :ballot_box_with_check:
8. Implementación de postgres :ballot_box_with_check:
9. Readme :ballot_box_with_check:
10. Comienzo de migración a react :ballot_box_with_check:
11. Index para el cliente :ballot_box_with_check:
12. Archivos mínimos para la entrega anterior :ballot_box_with_check:
13. Uso de Airbnb :ballot_box_with_check:
14. Uso de github como elemento de calidad 


# Instructivo detallado:
Para empezar hay que contextualizar nuestra aplicación, la cual está basada en el popular juego de la pandemia llamado "among us" (de ahí viene el nombre "Entre Nos"), el juego consiste en la historia de 4 reclusos que intentan excapar, sin embargo, entre ellos existe un traidor, el cual tiene como misión el impedir que escapen los restantes 3 prisioneros. Estos prisioneros deben cumplir todas sus diversas tareas que se basan en conseguir materiales para  poder lograr un escape fructífero. Mientras, el traidor puede tomar materiales, impedir el paso por las casillas e incluso marcar a los reos que intenten fugarse, una vez marcados los 3 jugadores, el juego finaliza y la victoria es del traidor.

Para poder jugar con amigos, es necesario que todos posean una cuenta en la aplicación. Tras esto, deben unirse a la vista de main, donde pueden escoger una sala (cabe destacar que el primero en entrar es el dueño de la sala), marcar todos listo, e inmediatamente empezaría el juego. Este empieza con todas las piezas en el centro del tablero, permitiendo mover las fichas por turnos, surgiendo evento y permitiendo la recolección de materiales, o las fechorías del traidor. Una vez logrado un objetivo, se finaliza el juego y se permite volver a jugar, o salir al menú.

La lógica del juego está planeada para usar un sistema de turnos que esté divididos en días, permitiendo ciertas funcionalidades con un tiempo de recarga en turnos o días, desplazamiento, recolección y/o participación de minijuegos por turnos. Siendo así, todos partirán en posiciones distintas del tablero, con un tiempo limitado para realizar las acciones ya comentadas en su turno, desplazándose a las casillas donde existan eventos o materiales, con fin de lograr el propósito del juego.

## Comentarios de la aplicación:
En esta entrega se intentó cumplir en lo mínimo que pedía el enunciado, pero fue bastante complejo y con muchos errores al empezar a trabajar con poco tiempo, debido a la gran carga académica que hemos tenido. Sin embargo, logramos migrar gran parte de la aplicación a react, exceptuando la parte del juego en su totalidad. Logramos una comunicación entre front y end parcial y sólo visible en el computador donde está creada la base de datos, aquí existe un uso de HTTP, y en parte de JSON para recibir la información. Mejoramos el modelo de las entidades y logramos armar una base de datos funcional, que recolecta la información de registro de los usuarios.
