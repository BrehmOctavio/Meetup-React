Meetup-React

Las soluciones implementadas fueron las siguientes:
1-	Para la animación del Header se creó una función que controla el scroll, obteniendo el estado( scrollPos – Show ).  Mediante los componentes: componentDidMount y componentWillUnmount controlamos la escucha del evento Scroll. Por ultimo se realiza un condicional ternario en el componente <Header/>, añadiendo una clase u otra.

2-	 Para que la navegación se vea reflejada en la URL se utilizó REACT-ROUTER-DOM.  Además, se creó un componente que renderiza una página de ERROR 404 cuando la URL no coincide.


-	/ = deriva al componente <AllMeetups/>
-	/allmeetups = renderiza el componente <AllMeetups/>
-	/addnewmeetup = renderiza el componente <AddNewMeetup/>
-	/myfavorites = renderiza el componente <MyFavorite/>
-	/* = cualquier palabra que no coincida con los links predefinidos deriva a la página ERROR404.

3-	Para la implementación de la lógica de agregar y quitar de favoritos se utilizó el Hook Reducers, ya que me permite manejar más eficiente el estado. Además, es una buena alternativa para no utilizar librerías externas. 

4-	Para la creación de testeos se realizaron con Unit Test.

Ya que debía hacerle varios cambios y mejoras, decidí crear mis propios archivos y la implementación de SASS para una mejor legibilidad en los archivos de SCSS, se agregó un favicon nuevo e imágenes.
Además, el sitio posee Responsive Design.
