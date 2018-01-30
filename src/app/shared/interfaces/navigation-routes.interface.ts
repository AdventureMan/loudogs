export interface NavigationRoute {
    label?: string;
    route?: string;
    active?: boolean;
    hidden?: boolean;
    children?: NavigationRoute[]
}