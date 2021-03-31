import React from "react";

function Mascotas() {

    return ( <
        div className = "container" >
        <
        nav className = "navbar navbar-dark bg-dark navbar-expand-lg " >
        <
        a className = "navbar-brand"
        href = "/index.html" > VETERINARIA < /a>   <
        button className = "navbar-toggler"
        type = "button"
        data - toggle = "collapse"
        data - target = "#navbarColor03"
        aria - controls = "navbarColor03"
        aria - expanded = "false"
        aria - label = "Toggle navigation" >
        <
        span className = "navbar-toggler-icon" > < /span>   <
        /button>   <
        div className = "collapse navbar-collapse"
        id = "navbarColor03" >
        <
        ul className = "navbar-nav mr-auto" >
        <
        li className = "nav-item active" >
        <
        a className = "nav-link"
        href = "/index.html" >
        Mascotas < span class = "sr-only" > (current) < /span>  <
        /a>  <
        /li>   <
        li className = "nav-item" >
        <
        a className = "nav-link"
        href = "/veterinarios.html" > Veterinarios < /a>   <
        /li>   <
        li className = "nav-item" >
        <
        a className = "nav-link"
        href = "/consultas.html" > Consultas < /a>   <
        /li>  <
        li className = "nav-item" >
        <
        a className = "nav-link"
        href = "/duenos.html" > Dueños < /a>  <
        /li>   <
        /ul>  <
        form className = "form-inline" >
        <
        input className = "form-control mr-sm-2"
        type = "search"
        placeholder = "Search"
        aria - label = "Search" / >
        <
        button className = "btn btn-outline-primary my-2 my-sm-0"
        type = "submit" > Search < /button>  <
        /form>   <
        /div>  <
        /nav>  <
        div className = "actions-menu" >
        <
        h1 > Mascotas < /h1>  <
        div className = "actions-menu-content" >
        <
        button type = "button"
        className = "btn btn-primary"
        data - toggle = "modal"
        data - target = "#exampleModalCenter" >
        Nueva <
        /button>   <
        div className = "alert alert-danger alert-dismissible"
        role = "alert" >
        <
        strong > Oops! < /strong> Algo hicimos mal, por favor vuelve a intentarlo!.  <
        button type = "button"
        class = "close"
        data - dismiss = "alert"
        aria - label = "Close" >
        <
        span aria - hidden = "true" > & times; < /span>   <
        /button>   <
        /div>  <
        /div>   <
        /div>   <
        table className = "table table-stripped table-hover" >
        <
        thead className = "thead-dark" >
        <
        tr >
        <
        th scope = "col" > # < /th>  <
        th scope = "col" > Tipo < /th>  <
        th scope = "col" > Nombre < /th>   <
        th scope = "col" > Dueño < /th>   <
        th scope = "col" > < /th>   <
        /tr>   <
        /thead>   <
        tbody id = "lista-mascotas" >
        <
        /tbody>   <
        /table>   <
        /div>  <
        div class = "modal fade"
        id = "exampleModalCenter"
        tabindex = "-1"
        role = "dialog"
        aria - labelledby = "exampleModalCenterTitle"
        aria - hidden = "true" >
        <
        div class = "modal-dialog modal-dialog-centered"
        role = "document" >
        <
        div class = "modal-content" >
        <
        div class = "modal-header" >
        <
        h5 class = "modal-title"
        id = "exampleModalCenterTitle" > Nueva Mascota < /h5>   <
        button type = "button"
        class = "close"
        data - dismiss = "modal"
        aria - label = "Close" >
        <
        span aria - hidden = "true" > & times; < /span>  <
        /button>   <
        /div>  <
        div class = "modal-body" >
        <
        form id = "form" >
        <
        input type = "hidden"
        id = "indice" >
        <
        div class = "form-row" >
        <
        div class = "col" >
        <
        select id = "tipo"
        class = "form-control" >
        <
        option > Tipo animal < /option>   <
        option > Perro < /option>   <
        option > Gato < /option>   <
        option > Pájaro < /option>   <
        option > Otro < /option>   <
        /select>   <
        /div>   <
        /div>  <
        div class = "form-row" >
        <
        div class = "col" >
        <
        input type = "text"
        id = "nombre"
        name = "nombre"
        class = "form-control"
        placeholder = "Nombre" >
        <
        /div>   <
        div class = "col" >
        <
        select class = "form-control"
        id = "dueno" >
        <
        option > Dueño < /option>   <
        option > Esteban < /option>  <
        option > Julián < /option>   <
        option > Jhon < /option>   <
        option > Felix < /option>   <
        option > Camilo < /option>   <
        /select>   <
        /div>   <
        /div>   <
        /form>   <
        /div>   <
        div class = "modal-footer" >
        <
        button type = "button"
        class = "btn btn-secondary"
        data - dismiss = "modal" > Cerrar < /button>   <
        button type = "button"
        class = "btn btn-primary"
        data - dismiss = "modal"
        id = "btn-guardar" > Crear < /button>   <
        /div>   <
        /div>   <
        /div>   <
        /div>  <
        /div>)
    }