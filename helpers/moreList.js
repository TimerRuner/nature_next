import { bridge, man, girl, man_more, girl_more } from "./imgSrc"
import { generateId } from "../utils/generateId"

export const moreList = [
    {
        id: generateId(),
        hash: "# Stories",
        title: "Travel In Japan: The True Experience",
        link: "#",
        img: girl_more,
        isVideo: false,
    },
    {
        id: generateId(),
        hash: "# VideoTutor",
        title: "Helping Wild Turtles",
        link: "#",
        img: man_more,
        isVideo: true,
    },
    {
        id: generateId(),
        hash: "# Photostory",
        title: "Threats of Indusrial World ",
        link: "#",
        img: bridge,
        isVideo: false,
    },
]
