import image01 from "../images/content-master/01.jpeg";
import imageWebp01 from "../images/content-master/01.webp";

import image02 from "../images/content-master/02.jpeg";
import imageWebp02 from "../images/content-master/02.webp";

import image03 from "../images/content-master/03.jpeg";
import imageWebp03 from "../images/content-master/03.webp";

import image04 from "../images/content-master/04.jpeg";
import imageWebp04 from "../images/content-master/04.webp";

import blender from "../images/professional3d/Imagen 7.png"
import ZBrush from "../images/professional3d/Imagen 1.png"
import maya from "../images/professional3d/Imagen 4.png"
// import mayaSubstance from "../images/professional3d/Imagen 9.png"

const contentMaster = [
    {
        id: "01",
        title: "The Guardian",
        image: image01,
        imageWebp: imageWebp01,
        description:
            "Creemos juntos este grandioso personaje en ZBrush, asume el reto y demuestra que puedes lograrlo.",
        tech: ZBrush,
        video: "https://www.youtube.com/watch?v=1-AWvUlYT6c",
    },
    {
        id: "02",
        title: "Friendship",
        image: image02,
        imageWebp: imageWebp02,
        description:
            "Vive una experiencia con la última versión de Blender y libera el gran talento que hay en ti.",
        tech: blender,
        video: "",
    },
    {
        id: "03",
        title: "Warrior Bear",
        image: image03,
        imageWebp: imageWebp03,
        description:
            "Aprende a crear personajes en Maya desde cero renderízalo en Arnold, aplica texturas en substance y más.",
        tech: maya,
        video: "",
    },
    {
        id: "04",
        title: "Rig Warrior Bear",
        image: image04,
        imageWebp: imageWebp04,
        description:
            "Crea este fantástico Rig desde cero en Maya y llevémoslo juntos a Unreal.",
        tech: maya,
        video: "",
    },
];

export default contentMaster;