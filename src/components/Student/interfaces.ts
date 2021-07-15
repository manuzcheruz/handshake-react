/**
 * using this to interface skills data recieved from the server later
 */
export interface StudentSkills {
    name: string;
    num: number;
}

/**
 * properties to be recieved by the student card to customise it.
 */
export interface PropsStudentCard {
    name: string;
    img: any;
    role: string;
    friends: number;
    posts: number;
    center: string;
}