export interface IMenuList {
    key: string;
    subMenuKey?:string;
    title: string;
    image: string;
    children?: IMenuList[];
}