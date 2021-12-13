export const navbarData = [
    {
        "id":0,
        "role":"guest",
        "navs":[
            {
                "id":1,
                "name":"Productos",
                "route":"/products"
            },

        ],
    },
    {
        "id":1,
        "role":"user",
        "navs":[
            {
                "id":1,
                "name":"Carrito",
                "route":"/cart"
            },
            {
                "id":2,
                "name":"Ordenes",
                "route":"/orders"
            },
            {
                "id":3,
                "name":"Subir receta",
                "route":"/receipts"
            },
            {
                "id":4,
                "name":"Perfil",
                "route":"/profile"
            },

        ],
    },
    {
        "id":2,
        "role":"moderator",
        "navs":[
            {
                "id":1,
                "name":"Aprobar Recetas",
                "route":"/receiptslist"
            },
            {
                "id":2,
                "name":"Añadir Productos",
                "route":"/productslisting"
            },

        ],
    },
    {
        "id":3,
        "role":"admin",
        "navs":[
            {
                "id":3,
                "name":"Agregar Personal",
                "route":"/personnell"
            },
        ],
    },
]