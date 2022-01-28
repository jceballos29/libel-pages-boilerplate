import image1 from "../images/memberships/Enmascarar grupo 7.png";
import image2 from "../images/memberships/Enmascarar grupo 6.png";
import image3 from "../images/memberships/Enmascarar grupo 5.png";
import image4 from "../images/memberships/Enmascarar grupo 4.png";

import first from "../images/memberships/first.png";
import second from "../images/memberships/second.png";
import third from "../images/memberships/third.png";
import diamond from "../images/memberships/diamond.png";

const memberships = [
    {
        id: "0",
        image: image1,
        icon: first,
        title: "1 Opción",
        options: [
            {
                option: "Seleccionar 1",
                url: "",
            },
            {
                option: "ZBrush",
                url: "/#",
            },
            {
                option: "Blender",
                url: "/#",
            },
            {
                option: "Rigging",
                url: "/#",
            },
            {
                option: "Maya+Substance Painter",
                url: "/#",
            },
        ],
        price: "34.9",
        price_before: "100",
        items: [
            {
                item: "1 Entrenamiento",
                more: "Podrás acceder a uno de los entrenamientos del campamento (el que elijas). Recuerda que si eliges Maya, tendrás un módulo adicional de Substance Painter.",
            },
            {
                item: "Todas las actividades.",
                more: "Podrás participar en todas las actividades del campamento y participar por los premios.",
            },
            {
                item: "Acceso durante el campamento.",
                more: "Los accesos al contenido terminarán una vez finalizado el campamento, es decir, el 6 de mayo de 2022.",
            },
            { item: "Acceso a Discord", more: null },
        ],
    },
    {
        id: "1",
        image: image2,
        icon: second,
        title: "2 Opciones",
        options: [
            {
                option: "Seleccionar 2",
                url: "",
            },
            {
                option: "Blender & ZBrush",
                url: "/#",
            },
            {
                option: "Blender & Rigging",
                url: "/#",
            },
            {
                option: "Blender & Maya+Substance   ",
                url: "/#",
            },
            {
                option: "ZBrush & Rigging ",
                url: "/#",
            },
            {
                option: "ZBrush & Maya+Substance",
                url: "/#",
            },
            {
                option: "Rigging & Maya+Substance",
                url: "/#",
            },
        ],
        price: "49.9",
        price_before: "100",
        items: [
            {
                item: "2 Entrenamientos",
                more: "Podrás acceder a dos de los entrenamientos del campamento (los dos que elijas). Recuerda que si eliges Maya, tendrás un módulo adicional de Substance Painter.",
            },
            {
                item: "Todas las actividades.",
                more: "Podrás participar en todas las actividades del campamento y participar por los premios.",
            },
            {
                item: "Acceso durante el campamento.",
                more: "Los accesos al contenido terminarán una vez finalizado el campamento, es decir, el 6 de mayo de 2022.",
            },
            { item: "Acceso a Discord", more: null },
        ],
    },
    {
        id: "2",
        image: image3,
        icon: third,
        title: "3 Opciones",
        options: [
            {
                option: "Seleccionar 3",
                url: "",
            },
            {
                option: "Blender, ZBrush & Rigging",
                url: "/#",
            },
            {
                option: "Blender, ZBrush & Maya+Substance",
                url: "/#",
            },
            {
                option: "Blender, Rigging & Maya+Substance",
                url: "/#",
            },
            {
                option: "ZBrush & Rigging & Maya+Substance",
                url: "/#",
            },
        ],
        price: "59.9",
        price_before: "100",
        items: [
            {
                item: "3 Entrenamientos",
                more: "Podrás acceder a tres de los entrenamientos del campamento (los tres que elijas). Recuerda que si eliges Maya, tendrás un módulo adicional de Substance Painter.",
            },
            {
                item: "Todas las actividades.",
                more: "Podrás participar en todas las actividades del campamento y participar por los premios.",
            },
            {
                item: "Acceso durante el campamento.",
                more: "Los accesos al contenido terminarán una vez finalizado el campamento, es decir, el 6 de mayo de 2022.",
            },
            { item: "Acceso a Discord", more: null },
        ],
    },
    {
        id: "3",
        image: image4,
        icon: diamond,
        title: "Full Plan",
        options: [],
        price: "69.9",
        price_before: "100",
        items: [
            {
                item: "Todos los entrenamientos.",
                more: "Podrás acceder a todos los entrenamientos del campamento.",
            },
            {
                item: "Todas las actividades.",
                more: "Podrás participar en todas las actividades del campamento y participar por los premios.",
            },
            {
                item: "Acceso adicional al campamento.",
                more: "Tendrás un mes de acceso adicional al contenido del campamento. Los accesos al contenido terminarán un mes después de finalizado el campamento, es decir, el 6 de junio de 2022.",
            },
            { item: "Acceso a Discord", more: null },
        ],
    },
];

export default memberships;
