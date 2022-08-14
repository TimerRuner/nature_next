import { generateId } from "../utils/generateId"
import { organic, water, forest, plastic, energy } from "./imgSrc"

export const enviromentList = [
    {
        id: generateId(),
        title: "Save watter",
        desc: "Taking on the issue of ensuring access to safe water requires worldwide effort.",
        cover: water,
    },
    {
        id: generateId(),
        title: "Choose organic",
        desc: "Taking on the issue of ensuring access to safe water requires worldwide effort.",
        cover: organic,
    },
    {
        id: generateId(),
        title: "Avoid plastic",
        desc: "Taking on the issue of ensuring access to safe water requires worldwide effort.",
        cover: plastic,
    },
    {
        id: generateId(),
        title: "Plant trees",
        desc: "Taking on the issue of ensuring access to safe water requires worldwide effort.",
        cover: forest,
    },
    {
        id: generateId(),
        title: "Save energy",
        desc: "Taking on the issue of ensuring access to safe water requires worldwide effort.",
        cover: energy,
    },
    {
        id: generateId(),
        title: "Save watter",
        desc: "Taking on the issue of ensuring access to safe water requires worldwide effort.",
        cover: organic,
    },
]
