import {atom} from 'recoil';

export const modalState = atom({
    key: "modatState",
    default: false,
});


export const postIdState = atom({
    key: "postIdState",
    default: "",
});
