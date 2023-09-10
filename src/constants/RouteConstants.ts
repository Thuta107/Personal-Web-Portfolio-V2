export enum RouteConstants {
    HOME = '',
    MY_JOURNEY = 'my-journey',
    MY_PORTFOLIO = 'my-portfolio',
    MY_TOOLS = 'my-tools',
}

export type NavMenuProps = {
    text: string,
    route: string
}

export type MobileNavMenuProps = {
    opened: boolean
    handleOpened: () => void
}