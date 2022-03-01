export default interface IUser {
    color: string;
    email: string;
    login?: {
        uuid: string;
    }
    location: {
        city: string;
    }
    name:{
        first: string;
        last: string;
    }
    phone: string;
    picture: {
        large: string;
        medium: string;
        thumbnail: string;
    }
};