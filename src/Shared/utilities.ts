export const updateObject: (oldObject: any, updatedProperties: any) => {} = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};