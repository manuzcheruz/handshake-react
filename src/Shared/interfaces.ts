/**
 * props to be recieved by the button
 */
export interface PropsButton {
    bgcolor?: string;
    width?: string;
    height?: string;
    border?: string;
    color?: string;
    radius?: string;
    size?: string;
    click?: () => void;
    type?: any;
    name?: string;
    icon?: any;
    iconMarginLeft?: string;
    iconMarginTop?: string;
    padding?: string;
}

/**
 * user categories interface
 */
export interface UserCats {
    name: string;
    value: string;
};

/**
 * determine whether the user is creating acc or loging in.
 */
export interface AuthType {
    signup: boolean;
}

/**
 * props to be recieved by the field
 */
export interface PropsField extends AuthType {
    elementName: string;
    elementType: string;
    name: string;
    placeholder?: string;
    label?: string;
    height?: string;
    width?: string;
    border?: string;
    value?: any;
    onChange?: any; //will fix all these 'any' later
    touched?: any;
    errors?: any;
    onPasswordChange?: any;
    handlePdfChange?: any;
    onFileChange?: any;
    handleEditorChange?: any;
}

/**
 * used for pagination
 */
export interface Pages {
    number: string;
    active: boolean;
}

/**
 * properties to customize the search bar
 */
export interface PropsSearchBar {
    job?: boolean;
    student?: boolean;
    center?: boolean;
}